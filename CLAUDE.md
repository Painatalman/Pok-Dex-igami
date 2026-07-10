# Origami Pokédex — project instructions

An app that photographs a folded paper model and asks Claude which pokémon it is.
Vite + React + TypeScript, with a Vercel serverless proxy at `api/identify.ts`
holding the `ANTHROPIC_API_KEY`.

## The roster

`src/data/roster.ts` is the single source of truth for which pokémon the app can
identify. Every entry carries a `fold` (the shape a folder would make) and a
`color` (its dominant colour). Both are load-bearing: they are injected into the
Claude vision prompt as `Name — colour fold` lines via `ROSTER_PROMPT_LINES`.

Two invariants hold, and `roster.ts` throws at import time if the second breaks:

1. At most one pokémon per evolution family. Once folded, two stages of the same
   line are the same shape.
2. No two entries share the same `(fold, color)` pair. If they did, the model
   would face a guess it cannot win.

**Whenever `src/data/roster.ts` changes, check whether the generated list needs
updating and regenerate it:**

```
npm run roster:doc
```

That rewrites `docs/ROSTER.md` from the source and fails loudly on a duplicate
`(fold, color)` pair. Never edit `docs/ROSTER.md` by hand.

When adding a pokémon, pick a `fold`/`color` that no existing entry claims, and
prefer well-known pokémon — the roster is a curated ~50, not a full pokédex.

Artwork is fetched from the PokéAPI sprites CDN keyed by national dex `id`
(`src/lib/pokeapi.ts`), so a wrong `id` surfaces as a broken image rather than a
type error. Verify new ids resolve before committing.

## Deploying

Deployed to Vercel. `api/` runs as an ESM serverless function, so imports from
`src/` must carry an explicit `.js` extension (see the import in
`api/identify.ts`) even though the source is `.ts`.
