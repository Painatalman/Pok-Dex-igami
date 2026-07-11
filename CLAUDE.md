# Origami Pokédex — project instructions

An app that photographs a folded paper model and asks Claude which pokémon it is.
Vite + React + TypeScript, with a Vercel serverless proxy at `api/identify.ts`
holding the `ANTHROPIC_API_KEY`.

## The roster

`src/data/roster.ts` is the single source of truth for which pokémon the app can
identify. Every entry carries a `fold` (the shape a folder would make) and a
`color` (its dominant colour). Both are load-bearing: they are injected into the
Claude vision prompt as `Name — colour fold` lines via `ROSTER_PROMPT_LINES`.

Two invariants hold:

1. No two entries from the same evolution family that are alike in **both** fold
   and colour. Folded, look-alike stages collapse to one shape — but stages as
   distinct as Magikarp (orange fish) and Gyarados (blue serpent) differ enough
   in both to earn separate slots. This one is a judgement call, not enforced in
   code.
2. No two entries share the same `(fold, color)` pair. If they did, the model
   would face a guess it cannot win. `roster.ts` throws at import time if this
   breaks.

### Sentinels

Three roster entries are **sentinels** — they mean "the photo is not a folded
model", not "the fold looks like this". They are declared in the `SENTINELS` map
in `roster.ts`:

- **Kartana** — flat, unfolded paper (a pamphlet, receipt, blank sheet). Its
  reasoning invites the user to fold it into a random real fold from the roster.
- **Sudowoodo** — a real, living plant (a tree, bush, flower, houseplant). The
  tree-mimic "hides among" real plants. Takes precedence over Ditto for plants.
- **Ditto** — no paper at all (a face, a pet, an object, a screen) — but not a
  living plant, which is Sudowoodo.

The identify prompt (`api/identify.ts`) also hard-lists these special answers, so
adding or changing a sentinel means updating that prompt too, not just the map.

Sentinels get a bespoke prompt line instead of `colour fold`, are excluded from
quiz distractors, and skip the quiz question entirely in the UI (`isSentinel`).
A sloppy fold is still a fold and must never resolve to a sentinel. Adding a new
one means adding it to `SENTINELS`; everything else keys off that map.

**Whenever `src/data/roster.ts` changes, check whether the generated list needs
updating and regenerate it:**

```sh
npm run roster:doc
```

That rewrites `docs/ROSTER.md` from the source and fails loudly on a duplicate
`(fold, color)` pair. Never edit `docs/ROSTER.md` by hand.

**When you add or remove a roster entry, also regenerate the Dex detail data** —
the types and fun facts shown in the encyclopedia popup are bundled, not fetched
at runtime:

```sh
npm run pokedex:data
```

That hits PokéAPI for each roster `id` (types + two fun-fact blurbs per language)
and rewrites `src/data/pokedex.generated.ts`. Never edit that file by hand. Note
PokéAPI has no Portuguese flavor text, so `pt` facts fall back to English. Type
badge colours and localised type names are hand-authored in `src/data/types.ts`.

When adding a pokémon, pick a `fold`/`color` that no existing entry claims, and
prefer well-known pokémon — the roster is a curated ~50, not a full pokédex.

## Origami models (diagrams)

`src/data/models.ts` maps each `fold` to a folding **diagram**, shown in the Dex
detail popup. The link belongs to the *fold*, not the pokémon — a crane folded
from blue vs yellow paper is the same model — so same-fold pokémon share one
`MODELS` entry. `MODEL_OVERRIDES` (keyed by pokémon name) is the escape hatch for
a mon with its own bespoke diagram; `modelFor(entry)` resolves override-then-fold.
Folds absent from `MODELS` simply have no diagram yet; sentinel folds never get one.

Diagram images are served from `public/origami-diagrams/` (referenced as
`/origami-diagrams/<name>.jpg`). The raw, full-size originals are dropped into a
gitignored `origami-diagrams/` folder at the repo root; optimise them into
`public/` before use (resize to ~1400px long edge, JPEG q70 — e.g. via `sips`).
Only the optimised `public/` copies are committed.

Artwork is fetched from the PokéAPI sprites CDN keyed by national dex `id`
(`src/lib/pokeapi.ts`), so a wrong `id` surfaces as a broken image rather than a
type error. Verify new ids resolve before committing.

## Deploying

Deployed to Vercel. `api/` runs as an ESM serverless function, so imports from
`src/` must carry an explicit `.js` extension (see the import in
`api/identify.ts`) even though the source is `.ts`.
