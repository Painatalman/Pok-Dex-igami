import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During `vite dev`, proxy /api to a locally running `vercel dev` (port 3000)
// so the camera front-end and the Claude proxy can be developed together.
// In production on Vercel, /api is served by the serverless function directly.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
