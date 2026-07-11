# Origami Dex — detail popup

**Date:** 2026-07-11
**Status:** Approved, implementing

## Goal

Clicking a pokémon in the Dex encyclopedia (the `📚` modal grid) opens a detail
popup. What it shows depends on whether the pokémon has been caught:

- **Uncaught** — only the origami model. Black silhouette (matching the grid) +
  `#NNN` + the `fold` shown as a single "Origami" type-style badge. No colour, no
  real types, no fun facts. A "Fold one to catch it!" hint sits below (skipped for
  sentinels — you can't fold a Ditto).
- **Caught** — full artwork + name + the real pokémon **types** as colored,
  localized badges + **2 fun facts**, localized to the app language.

## Data source (bundled, generated)

Types and fun facts are **not** in the app today (it only fetches sprite images).
They are bundled at author time, not fetched at runtime.

New script `scripts/gen-pokedex-data.mjs` (sibling of `gen-roster-doc.mjs`), run
via `npm run pokedex:data`. For each roster `id` it calls PokéAPI once for types
(`/pokemon/{id}`) and once for fun facts (`/pokemon-species/{id}`), then writes
`src/data/pokedex.generated.ts`:

```ts
export const POKEDEX_DATA: Record<number, {
  types: string[];                         // type keys, e.g. ["water","flying"]
  facts: Record<Lang, [string, string]>;   // 2 cleaned blurbs per language
}>;
```

**Flavor-text language gap:** PokéAPI ships flavor text in en/es/fr/de/it but
**not pt**. Since the app supports pt, **pt facts fall back to English**, baked in
at generation time (the pt slot is filled with the en pair). Documented so a
future pass can Claude-translate them if desired.

**Fact cleaning:** PokéAPI flavor text carries `\f`, `\n`, and soft-hyphen
artifacts. Collapse whitespace, dedup by normalized text, take the first 2
distinct entries per language. If a language has fewer than 2 distinct entries,
fall back to English for the shortfall.

## Type badges

Hand-authored `src/data/types.ts` (not fetched — pt type names are also missing
from PokéAPI, and 18 words is trivial):

```ts
export const TYPE_COLOR: Record<string, string>;              // standard 18 type colors
export const TYPE_NAME: Record<Lang, Record<string, string>>; // localized names, all 5 langs
```

Rendered as small colored pills.

## Component

`src/components/DexDetail.tsx` — a card overlaid on the Dex, opened by clicking a
cell. Props: `entry: RosterEntry`, `caught: boolean`, `lang: Lang`, `onClose`.
Reads `POKEDEX_DATA[entry.id]` for types/facts, `entry.fold` for the origami
model. Closes on backdrop click / ✕ / Escape.

## Wiring

- `App.tsx`: Dex cells become buttons; new `selected: RosterEntry | null` state
  renders `DexDetail`.
- New i18n strings (× 5 langs): `dexOrigamiLabel`, `dexFoldHint`, `dexFunFacts`,
  `dexTypes`.
- New styles for the popup card, type pills, silhouette, fact list.

## Addendum (2026-07-11) — folding diagrams

The popup also shows the origami **diagram** for the entry's fold, under a "How
to fold" heading, in **both** caught and uncaught states (it's the model→pokémon
association, useful before and after catching).

- `src/data/models.ts`: `MODELS` maps `fold → { image?, link? }`; `MODEL_OVERRIDES`
  maps `pokémonName → { image?, link? }` for the bespoke-diagram exception;
  `modelFor(entry)` resolves override-then-fold.
- Diagrams live in `public/origami-diagrams/*.jpg`, optimised from a gitignored
  raw drop folder (`origami-diagrams/`). 10 folds diagrammed so far (bird=crane,
  fish=kissing-fish, snake, turtle, penguin, butterfly, star, crescent-moon=moon,
  ray, rabbit); ~24 folds still undiagrammed and simply render no diagram section.
- New i18n: `dexHowToFold`, `dexViewDiagram` (× 5 langs).

## Out of scope

- PWA / installability / update notifications (separate future work).
- Claude-translated pt fun facts (English fallback for now).
- Colour reveal for uncaught (fold only, per request).

## Verification

- Run `npm run pokedex:data`, confirm the generated file typechecks.
- `tsc` build passes.
- Run the app, open the Dex, click a caught cell (art + types + facts) and an
  uncaught cell (silhouette + fold badge); check the console.
- qa-by-costa in verification mode (genuinely user-facing).
