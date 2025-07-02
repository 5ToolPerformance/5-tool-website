// @ts-check
import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "aio8xz78",
      dataset: "production",
      useCdn: true,
      studioBasePath: "/studio",
    }),
    react(),

  ],
  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});