import Anthropic from "@anthropic-ai/sdk";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  FOLD_SUGGESTIONS,
  ROSTER_NAMES,
  ROSTER_PROMPT_LINES,
  SENTINELS,
  findByName,
  isSentinel,
} from "../src/data/roster.js";
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

const sentinelNames = Object.keys(SENTINELS).join(" or ");

const SYSTEM = `You are the brain of an origami Pokédex. The user photographs a folded paper (origami) model and you decide which Pokémon it most resembles.

Rules:
- Choose the single closest match STRICTLY from this allowed roster. Never name a Pokémon outside it. Where an entry carries a short description after an em dash, that is how a folder would read the model — use it to tell look-alikes apart, and answer with the NAME ONLY:
${ROSTER_PROMPT_LINES.join("\n")}
- Work in this order: FIRST fill "observed" with a plain description of the silhouette you see; THEN pick the roster entry whose shape matches it. Decide before you let color influence you.
- Judge PRIMARILY BY SHAPE: the silhouette, body proportions, posture, and structural features — number and shape of ears, wings, tails, horns, limbs, spikes, and body segments. Shape is by far the most important signal.
- Treat COLOR as only a weak, secondary hint. Origami paper color is arbitrary and usually unrelated to the real Pokémon, so do NOT let color drive the match: a red fold is not Charizard just for being red, and a yellow fold is not Pikachu just for being yellow. Use color only to break a tie between two shapes that are otherwise equally plausible.
- Several roster entries share a color (many are blue; a few are each pink, orange, white). When more than one candidate shares the fold's color, that color tells you NOTHING — choose between them on silhouette alone. A blue blimp-shaped fold is Wailord, not Piplup, however blue it is.
- Origami is abstract, so match on the overall form and proportions, not fine surface detail.
- "confidence" is 0-1, your honest certainty.
- "reasoning" is one or two short, playful Pokédex-style sentences a kid would enjoy. Reference the shapes you saw.
- "distractors" are exactly two OTHER Pokémon from the roster that are plausible-but-wrong guesses — ideally look-alikes of your top pick. They must differ from each other and from the main pick. NEVER use ${sentinelNames} as a distractor.
- THREE ANSWERS ARE SPECIAL, for photos that are not folded models. Set "confidence" high when you are sure, and keep the playful Pokédex voice.
  - "Kartana" — the photo is flat, UNFOLDED paper: a pamphlet, flyer, receipt, printed page, blank sheet. Paper that could become origami but hasn't been folded. Cheerfully name what you see, then encourage the user to fold it into the origami suggested below.
  - "Sudowoodo" — the photo is a real, LIVING plant: a tree, bush, flower, houseplant, leaves, or grass. Say cheerfully that Sudowoodo was hiding among the real plants, imitating one to blend in.
  - "Ditto" — the photo is no kind of paper at all AND not a living plant: a face, a pet, an object, a screen, a drawing. Say cheerfully what you see, and that Ditto has transformed into it. (A living plant is Sudowoodo, not Ditto.)
- A rough, sloppy, or ambiguous FOLD is still origami. Match it to the closest real Pokémon — never to ${sentinelNames}. Those two are for "this is not a folded model", never for "this is a bad folded model". A creased, three-dimensional shape is a fold, however crude.`;

const SCHEMA = {
  type: "object",
  properties: {
    // First field, so the model describes the fold before it commits to a name —
    // shape reasoning happens before the colour channel can shortcut the answer.
    observed: {
      type: "string",
      description:
        "Describe the silhouette FIRST, before choosing: overall body shape, posture, and countable features (ears, wings, tails, horns, limbs, spikes, segments). Do not name a Pokémon here.",
    },
    pokemon: { type: "string", description: "The single best-match roster name." },
    confidence: { type: "number" },
    reasoning: { type: "string" },
    distractors: {
      type: "array",
      items: { type: "string" },
      description: "Exactly two other roster names.",
    },
  },
  required: ["observed", "pokemon", "confidence", "reasoning", "distractors"],
  additionalProperties: false,
} as const;

function parseDataUrl(dataUrl: string): { mediaType: string; data: string } | null {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/s.exec(dataUrl);
  if (!match) return null;
  return { mediaType: match[1], data: match[2] };
}

/** A random fold to suggest when the user photographs a blank sheet of paper. */
function suggestFold(): string {
  const fold = FOLD_SUGGESTIONS[Math.floor(Math.random() * FOLD_SUGGESTIONS.length)];
  return /^[aeiou]/i.test(fold) ? `an ${fold}` : `a ${fold}`;
}

/** Pick N random roster names, excluding sentinels and the given set. */
function randomNames(exclude: Set<string>, n: number): string[] {
  const pool = ROSTER_NAMES.filter((name) => !isSentinel(name) && !exclude.has(name));
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
      // Room for the model to reason about the fold before answering. Adaptive
      // thinking counts against max_tokens, so this is larger than the JSON needs.
      max_tokens: 4096,
      thinking: { type: "adaptive" },
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
              text: `Which Pokémon is this origami? Respond as JSON. Write the "reasoning" field in ${languageName}. Keep "pokemon" and "distractors" as their standard English Pokémon names. If — and only if — you answer Kartana, suggest in the reasoning that the user folds the paper into ${suggestFold()} origami.`,
            },
          ],
        },
      ],
      // `output_config` and adaptive thinking postdate the pinned SDK's types
      // but are forwarded to the API as-is; cast through unknown to satisfy TS.
    } as unknown as Anthropic.MessageCreateParamsNonStreaming);

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
      if (hit && !isSentinel(hit) && !used.has(hit)) {
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
