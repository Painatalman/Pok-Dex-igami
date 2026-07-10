// Regenerates docs/ROSTER.md from src/data/roster.ts.
// Run via `npm run roster:doc` after any edit to the roster.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SOURCE = "src/data/roster.ts";
const OUT = "docs/ROSTER.md";

const ENTRY =
  /\{ id: (\d+), name: "([^"]+)", gen: (\d), fold: "([^"]+)", color: "([^"]+)" \}/g;

const entries = [...readFileSync(SOURCE, "utf8").matchAll(ENTRY)].map((m) => ({
  id: Number(m[1]),
  name: m[2],
  gen: Number(m[3]),
  fold: m[4],
  color: m[5],
}));

if (!entries.length) {
  throw new Error(`No roster entries parsed from ${SOURCE} — did the entry shape change?`);
}

const collisions = new Map();
for (const e of entries) {
  const key = `${e.color}|${e.fold}`;
  if (collisions.has(key)) {
    throw new Error(
      `Duplicate fold/colour: ${e.name} collides with ${collisions.get(key)} on "${e.color} ${e.fold}"`,
    );
  }
  collisions.set(key, e.name);
}

const byGen = entries.reduce((acc, e) => ((acc[e.gen] = (acc[e.gen] ?? 0) + 1), acc), {});
const genLine = Object.keys(byGen)
  .sort((a, b) => a - b)
  .map((g) => `Gen ${g}: ${byGen[g]}`)
  .join(" · ");

const rows = entries
  .map((e) => `| ${e.id} | ${e.name} | ${e.gen} | ${e.fold} | ${e.color} |`)
  .join("\n");

const doc = `# Roster

<!-- GENERATED FILE — do not edit by hand. Run \`npm run roster:doc\`. -->

The ${entries.length} pokémon the app can identify. Source of truth is
[\`src/data/roster.ts\`](../src/data/roster.ts).

Two rules govern this list:

1. **At most one pokémon per evolution family.** An origami fold is abstract, so
   two stages of the same line are indistinguishable once folded.
2. **No two entries share the same (fold, colour) pair.** \`fold\` is the shape a
   folder would make; \`color\` is its dominant colour. \`roster.ts\` throws at
   import time if this is ever violated.

Every generation is represented — ${genLine}.

\`fold\` and \`color\` are fed to the Claude vision prompt as \`Name — colour fold\`
lines (see \`ROSTER_PROMPT_LINES\`), so they are load-bearing, not documentation.
Vivillon's colour is \`any\` because its wings ship in 20 patterns; it is matched
on shape alone.

| # | Pokémon | Gen | Fold | Colour |
|---|---------|-----|------|--------|
${rows}
`;

mkdirSync("docs", { recursive: true });
writeFileSync(OUT, doc);
console.log(`${OUT}: ${entries.length} entries, no fold/colour collisions`);
