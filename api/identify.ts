import Anthropic from "@anthropic-ai/sdk";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ROSTER_NAMES, findByName } from "../src/data/roster.js";
import type { IdentifyResult } from "../src/types";

const MODEL = process.env.IDENTIFY_MODEL || "claude-sonnet-5";

const LANG_NAME: Record<string, string> = {
  en: "English",
  pt: "Portuguese",
  es: "Spanish",
  fr: "French",
  de: "German",
};

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

const SYSTEM = `You are the brain of an origami Pokédex. The user photographs a folded paper (origami) model and you decide which Pokémon it most resembles.

Rules:
- Choose the single closest match STRICTLY from this allowed roster. Never name a Pokémon outside it:
${ROSTER_NAMES.join(", ")}
- Judge PRIMARILY BY SHAPE: the silhouette, body proportions, posture, and structural features — number and shape of ears, wings, tails, horns, limbs, spikes, and body segments. Shape is by far the most important signal.
- Treat COLOR as only a weak, secondary hint. Origami paper color is arbitrary and usually unrelated to the real Pokémon, so do NOT let color drive the match: a red fold is not Charizard just for being red, and a yellow fold is not Pikachu just for being yellow. Use color only to break a tie between two shapes that are otherwise equally plausible.
- Origami is abstract, so match on the overall form and proportions, not fine surface detail.
- "confidence" is 0-1, your honest certainty.
- "reasoning" is one or two short, playful Pokédex-style sentences a kid would enjoy. Reference the shapes you saw.
- "distractors" are exactly two OTHER Pokémon from the roster that are plausible-but-wrong guesses — ideally look-alikes of your top pick. They must differ from each other and from the main pick.
- If the image is clearly not an origami model (a face, a random object, empty paper), still pick the closest whimsical match and say so briefly in the reasoning.`;

const SCHEMA = {
  type: "object",
  properties: {
    pokemon: { type: "string", description: "The single best-match roster name." },
    confidence: { type: "number" },
    reasoning: { type: "string" },
    distractors: {
      type: "array",
      items: { type: "string" },
      description: "Exactly two other roster names.",
    },
  },
  required: ["pokemon", "confidence", "reasoning", "distractors"],
  additionalProperties: false,
} as const;

function parseDataUrl(dataUrl: string): { mediaType: string; data: string } | null {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/s.exec(dataUrl);
  if (!match) return null;
  return { mediaType: match[1], data: match[2] };
}

/** Pick N random roster names, excluding the given set. */
function randomNames(exclude: Set<string>, n: number): string[] {
  const pool = ROSTER_NAMES.filter((name) => !exclude.has(name));
  const out: string[] = [];
  while (out.length < n && pool.length > 0) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ code: "failed", error: "Method not allowed" });
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(500).json({ code: "failed", error: "Server is missing ANTHROPIC_API_KEY." });
    return;
  }

  const image = (req.body?.image as string | undefined) ?? "";
  const langCode = (req.body?.lang as string | undefined) ?? "en";
  const languageName = LANG_NAME[langCode] ?? "English";
  const parsed = parseDataUrl(image);
  if (!parsed) {
    res
      .status(400)
      .json({ code: "bad_image", error: "Expected a base64 image data URL (jpeg/png/webp)." });
    return;
  }

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      thinking: { type: "disabled" },
      system: SYSTEM,
      output_config: { format: { type: "json_schema", schema: SCHEMA } },
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: parsed.mediaType as "image/jpeg" | "image/png" | "image/webp",
                data: parsed.data,
              },
            },
            {
              type: "text",
              text: `Which Pokémon is this origami? Respond as JSON. Write the "reasoning" field in ${languageName}. Keep "pokemon" and "distractors" as their standard English Pokémon names.`,
            },
          ],
        },
      ],
    } as Anthropic.MessageCreateParamsNonStreaming);

    const textBlock = message.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text content in model response.");
    }
    const raw = JSON.parse(textBlock.text) as IdentifyResult;

    // Validate against the roster; repair anything the model got loose about.
    const main = findByName(raw.pokemon)?.name ?? ROSTER_NAMES[0];
    const used = new Set<string>([main]);
    const distractors: string[] = [];
    for (const d of raw.distractors ?? []) {
      const hit = findByName(d)?.name;
      if (hit && !used.has(hit)) {
        used.add(hit);
        distractors.push(hit);
      }
    }
    while (distractors.length < 2) {
      const [name] = randomNames(used, 1);
      if (!name) break;
      used.add(name);
      distractors.push(name);
    }

    const result: IdentifyResult = {
      pokemon: main,
      confidence: typeof raw.confidence === "number" ? raw.confidence : 0.5,
      reasoning: raw.reasoning || "The shapes give off a mysterious Pokémon energy.",
      distractors,
    };
    res.status(200).json(result);
  } catch (err) {
    console.error("identify failed:", err);
    const msg = err instanceof Error ? err.message : String(err);
    if (/credit balance is too low|insufficient|billing|quota/i.test(msg)) {
      res.status(402).json({
        code: "no_credits",
        error: "We're out of fuel — recharge the Pokédex to keep scanning!",
      });
      return;
    }
    if (/could not process image|image/i.test(msg)) {
      res.status(400).json({ code: "bad_image", error: "Could not read that image." });
      return;
    }
    res
      .status(502)
      .json({ code: "failed", error: "The Pokédex could not analyze that image. Try again." });
  }
}
