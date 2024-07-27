import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://yurikong.github.io",
  base: "astro-theme-resume",
  server: {
    host: true,
    open: true,
  },
})
