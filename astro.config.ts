import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"
// import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://yurikong.github.io", // TODO: change to vercel deploy url
  base: "/astro-theme-resume", // TODO: change to / when setting for vercel
  server: {
    host: true,
    open: true,
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    // sitemap({
    //   changefreq: "monthly",
    //   priority: 1,
    //   lastmod: new Date(),
    //   i18n: {
    //     defaultLocale: "en",
    //     locales: {
    //       en: "en-US",
    //     },
    //   },
    // }),
  ],
})
