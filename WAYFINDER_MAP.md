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

## Not yet specified

- Curated non-Gen-1 roster (exact picks) — I'll draft, user vetoes/adds later. Not a blocker.
- PWA installability polish (manifest, icons, offline shell).

## Out of scope

- Saved "dex" of caught mons, scan history, social sharing.
- Timers, lives, online leaderboards.
- Native / Flutter builds, app-store distribution.
