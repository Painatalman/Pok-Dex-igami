# PWA — installable Origami Dex

**Date:** 2026-07-11
**Status:** Approved, implementing

## Goal

Make the app installable to a phone home screen as a standalone PWA, with an
in-app "new version" reload prompt and offline support for the shell + seen art.

## Decisions (from brainstorm)

- **Icon:** generated white origami-crane silhouette on Pokédex-red (#c0392b).
- **Updates:** `registerType: 'prompt'` — in-app "New version → Reload" toast.
- **Offline:** precache shell + bundled diagrams; runtime-cache PokéAPI images.

## Build

1. **`vite-plugin-pwa`** (dev dep). Config in `vite.config.ts`:
   - `registerType: 'prompt'`, `cleanupOutdatedCaches: true`.
   - `manifest`: `name: "Origami Pokédex"`, `short_name: "Origami Dex"`,
     `display: standalone`, `orientation: portrait`, `theme_color: #c0392b`,
     `background_color: #a4271f`, `start_url: "/"`, icons (192, 512, 512-maskable).
   - `workbox.globPatterns`: `**/*.{js,css,html,ico,png,svg,webmanifest,jpg}`
     (precaches shell + `public/origami-diagrams/*.jpg`).
   - `workbox.runtimeCaching`: CacheFirst for `raw.githubusercontent.com/PokeAPI/
     sprites/**` (sprites + official-artwork), 60-day expiry, ~200 entries.
   - `/api/**` never cached.
2. **Icon generation** — hand-authored SVG (crane on red rounded tile). Rasterize
   with the installed Playwright to `public/`: `pwa-192x192.png`,
   `pwa-512x512.png`, `pwa-maskable-512x512.png` (safe-area padding),
   `apple-touch-icon-180x180.png`, `favicon.ico`/`favicon.svg`.
3. **Update toast** — `src/components/UpdatePrompt.tsx` via `virtual:pwa-register/
   react` (`useRegisterSW`); shows a banner when `needRefresh`, button calls
   `updateServiceWorker(true)`. Rendered in `App`. Styled to match the device.
4. **index.html** — add `apple-mobile-web-app-capable`, status-bar-style, and the
   apple-touch-icon link (plugin injects the manifest link).
5. **TS types** — `/// <reference types="vite-plugin-pwa/react" />` in a d.ts.
6. **Cachebusting / Vercel headers** — new `vercel.json`:
   - `sw.js`, `manifest.webmanifest`, `index.html` → `Cache-Control: no-cache`.
   - `/assets/(.*)` → `public, max-age=31536000, immutable`.

## Out of scope

- Push notifications (Web Push) — the reload toast is the update mechanism.
- Offline scanning (needs the Claude API; always network).

## Verification

- `vite build` emits `dist/manifest.webmanifest` + `dist/sw.js` + icons.
- `vite preview`; qa-by-costa: manifest valid + installable criteria, icons
  resolve, SW registers, no console errors, update banner component renders.
- Manual: install to phone home screen (can't automate cross-device).
