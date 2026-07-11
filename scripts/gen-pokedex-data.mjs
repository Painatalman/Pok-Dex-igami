// Regenerates src/data/pokedex.generated.ts from the roster + PokéAPI.
// Run via `npm run pokedex:data` after adding/removing roster entries.
//
// For each roster id it fetches:
//   - /pokemon/{id}          → type keys (["water","flying"])
//   - /pokemon-species/{id}  → 2 cleaned fun-fact blurbs per app language
//
// PokéAPI ships flavor text in en/es/fr/de/it but NOT pt, so pt falls back to
// English. Type NAMES are localised separately in src/data/types.ts (hand-authored).
import { readFileSync, writeFileSync } from "node:fs";

const SOURCE = "src/data/roster.ts";
const OUT = "src/data/pokedex.generated.ts";
const API = "https://pokeapi.co/api/v2";

// App language → PokéAPI language code. pt has no PokéAPI flavor text → null (→ en).
const LANG_MAP = { en: "en", pt: null, es: "es", fr: "fr", de: "de" };
const APP_LANGS = Object.keys(LANG_MAP);

const ENTRY =
  /\{ id: (\d+), name: "([^"]+)", gen: (\d), fold: "([^"]+)", color: "([^"]+)" \}/g;

const entries = [...readFileSync(SOURCE, "utf8").matchAll(ENTRY)].map((m) => ({
  id: Number(m[1]),
  name: m[2],
}));

if (!entries.length) {
  throw new Error(`No roster entries parsed from ${SOURCE} — did the entry shape change?`);
}

/** Strip PokéAPI's line-break / form-feed / soft-hyphen artifacts. */
function clean(text) {
  return text
    .replace(/­/g, "") // soft hyphen
    .replace(/[\n\f\r]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** First `n` distinct cleaned blurbs for a PokéAPI language, in dex-order. */
function factsFor(flavorEntries, apiLang, n) {
  const seen = new Set();
  const out = [];
  for (const e of flavorEntries) {
    if (e.language.name !== apiLang) continue;
    const text = clean(e.flavor_text);
    const key = text.toLowerCase();
    if (!text || seen.has(key)) continue;
    seen.add(key);
    out.push(text);
    if (out.length === n) break;
  }
  return out;
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

const FACTS_PER_LANG = 2;
const data = {};

for (const { id, name } of entries) {
  const [mon, species] = await Promise.all([
    fetchJson(`${API}/pokemon/${id}`),
    fetchJson(`${API}/pokemon-species/${id}`),
  ]);

  const types = mon.types.map((t) => t.type.name);

  // English is the fallback pool for every language that comes up short.
  const en = factsFor(species.flavor_text_entries, "en", FACTS_PER_LANG);
  if (en.length < FACTS_PER_LANG) {
    throw new Error(`${name} (#${id}): only ${en.length} English fact(s) — need ${FACTS_PER_LANG}`);
  }

  const facts = {};
  for (const appLang of APP_LANGS) {
    const apiLang = LANG_MAP[appLang];
    const own = apiLang ? factsFor(species.flavor_text_entries, apiLang, FACTS_PER_LANG) : [];
    // Top up from English so every language always has exactly FACTS_PER_LANG.
    const filled = [...own];
    for (let i = 0; filled.length < FACTS_PER_LANG; i++) filled.push(en[i]);
    facts[appLang] = filled.slice(0, FACTS_PER_LANG);
  }

  data[id] = { types, facts };
  console.log(`  #${String(id).padStart(3, "0")} ${name} — ${types.join("/")}`);
}

const body = entries
  .map(({ id }) => {
    const { types, facts } = data[id];
    const typeStr = JSON.stringify(types);
    const factStr = APP_LANGS.map(
      (l) => `      ${l}: [${facts[l].map((f) => JSON.stringify(f)).join(", ")}],`,
    ).join("\n");
    return `  ${id}: {\n    types: ${typeStr},\n    facts: {\n${factStr}\n    },\n  },`;
  })
  .join("\n");

const out = `// GENERATED FILE — do not edit by hand. Run \`npm run pokedex:data\`.
// Types + two localised fun facts per roster pokémon, bundled from PokéAPI.
// pt has no PokéAPI flavor text, so its facts fall back to English.
import type { Lang } from "../lib/i18n";

export interface DexEntryData {
  /** Type keys, e.g. ["water", "flying"]. Localised names live in ./types. */
  types: string[];
  /** Exactly two fun-fact blurbs per app language. */
  facts: Record<Lang, [string, string]>;
}

export const POKEDEX_DATA: Record<number, DexEntryData> = {
${body}
};
`;

writeFileSync(OUT, out);
console.log(`\n${OUT}: ${entries.length} entries`);
