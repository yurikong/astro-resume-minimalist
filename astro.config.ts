import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://yurikong.github.io",
  base: "astro-theme-resume",
  server: {
    host: true,
    open: true,
  },
  integrations: [tailwind()],
})
