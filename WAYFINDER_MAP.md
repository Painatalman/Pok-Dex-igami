# Wayfinder Map — Origami Pokédex

`wayfinder:map`

## Destination

A **deployed, phone-reachable web app** (built today) that scans a real origami model through the camera, sends it to Claude, and identifies which pokémon it is — with two modes: **Scan** (answer shown immediately) and **Quiz** (3 options, pick one, score + streak). This effort **carries execution** — the destination is the working app, not a spec.

## Notes

- Domain: consumer mobile web app, camera + Claude vision, playful game layer.
- Skills every session should consult: `claude-api` (before writing any Claude call — model id, vision request shape, structured output), `prose-by-costa` (my replies).
- Standing preference: TypeScript everywhere; keep MVP tight, push extras to fog.
- Model is env-configurable; **default `claude-sonnet-5`**.

## Decisions so far

- **Platform** — Web PWA, Vite + React + **TypeScript**. User comfortable with web; camera + Claude both work; ships today.
- **Backend** — Single serverless `/api` proxy holding `ANTHROPIC_API_KEY`, deployed to **Vercel** (free HTTPS, required for camera). One repo, one language.
- **AI mechanic** — One Claude vision call returns structured JSON: `{ pokemon, confidence, reasoning, distractors[2] }`. Serves both modes; distractors are Claude-picked look-alikes for the quiz. Claude constrained to the app's roster.
- **Roster** — All 151 Gen 1 + curated crowd-favorites from later gens (~200–220 total). Static data file owned by app. Art = **official artwork** via PokéAPI, keyed by dex number.
- **Scoring** — Quiz round = one scan; +10 correct with escalating **streak multiplier**; wrong = 0, streak resets. Session score shown; **best score + best streak persisted in localStorage**. Reveal after each answer.
- **Camera** — **Live viewfinder** (getUserMedia) + shutter, with **upload fallback** if permission denied. Shared by both modes.
- **Look & feel** — **Pokédex device styling** (red shell, blue lens around the feed, LED dots, screen area). Modern skeuomorphism.
- **Model** — Default **Claude Sonnet 5**, swappable via env var.
- **Navigation** — One SPA, **Scan ↔ Quiz** toggle on the device; shared flow: viewfinder → capture → analyzing → reveal.

## Updated decisions

These supersede entries above. The originals are left as written, for history.

- **Roster** (supersedes *Roster*) — Not ~200–220. A curated **50**, at most one per evolution family, every generation represented. Two invariants: one pokémon per family, and **no two entries share the same `(fold, colour)` pair** — `roster.ts` throws at import if that is ever violated. Cut in passes, by look-alike cluster: all Ultra Beasts and Paradox mons, the palette-swap legendary sets (Regis, Tapus, lake trio, Swords of Justice), 15 of 19 starters, 18 of 21 birds, 25 of 30 aquatic mons. Art is still official artwork keyed by dex number.
- **Roster shape/colour data** (new) — Each entry carries a `fold` (the shape a folder makes) and a `color`. Both are injected into the vision prompt as `Name — colour fold` lines, so they are load-bearing, not documentation. The generated table lives at `docs/ROSTER.md`; regenerate with `npm run roster:doc`.
- **Ditto** (new) — The app's "this is not origami" sentinel. Claude answers **Ditto** if and only if the photo is not a folded model — a face, a pet, an object, blank paper. A *bad* fold is still a fold, and never resolves to Ditto. Ditto is barred from quiz distractors, in the prompt and again server-side.
- **Default mode** (refines *Navigation*) — The app opens in **Quiz**, not Scan. The Scan ↔ Quiz toggle is unchanged.

### Open tension

The system prompt tells Claude colour is "a weak, secondary hint" because origami paper colour is arbitrary — while the roster's uniqueness rule assumes colour *can* separate two entries sharing a fold (pink Jigglypuff vs. red-and-white Voltorb; black Snorlax vs. pink Mew). Both hold only so long as colour stays a tiebreak applied after shape. If same-fold pairs start getting mismatched in practice, this is the first place to look.

## Not yet specified

- ~~Curated non-Gen-1 roster (exact picks)~~ — **Resolved.** See *Updated decisions* and `docs/ROSTER.md`.
- PWA installability polish (manifest, icons, offline shell).

## Out of scope

- Saved "dex" of caught mons, scan history, social sharing.
- Timers, lives, online leaderboards.
- Native / Flutter builds, app-store distribution.
