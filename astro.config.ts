import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://yurikong.github.io",
  base: "/astro-theme-resume",
  trailingSlash: "always",
  server: {
    host: true,
    open: true,
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "monthly",
      priority: 1,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
  ],
})
