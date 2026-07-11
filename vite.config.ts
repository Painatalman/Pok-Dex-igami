import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// During `vite dev`, proxy /api to a locally running `vercel dev` (port 3000)
// so the camera front-end and the Claude proxy can be developed together.
// In production on Vercel, /api is served by the serverless function directly.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // "prompt" → the app shows a "new version, reload" toast instead of
      // silently swapping the service worker out from under the user.
      registerType: "prompt",
      includeAssets: ["favicon.svg", "apple-touch-icon-180x180.png"],
      manifest: {
        name: "Origami Pokédex",
        short_name: "Origami Dex",
        description: "Photograph a paper fold and let Claude name the pokémon.",
        theme_color: "#c0392b",
        background_color: "#a4271f",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          {
            src: "pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        // Precache the shell + bundled fold diagrams (jpg) + icons.
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest,jpg}"],
        runtimeCaching: [
          {
            // PokéAPI sprites + official artwork (both under /PokeAPI/sprites/).
            urlPattern: ({ url }) =>
              url.hostname === "raw.githubusercontent.com" &&
              url.pathname.includes("/PokeAPI/sprites/"),
            handler: "CacheFirst",
            options: {
              cacheName: "pokeapi-images",
              expiration: { maxEntries: 250, maxAgeSeconds: 60 * 60 * 24 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
