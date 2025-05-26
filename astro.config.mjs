import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://mbgarden.netlify.app/",
  // base: "/energy-template", // Comentamos o eliminamos esta línea
  build: {
    assets: "_assets",
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});