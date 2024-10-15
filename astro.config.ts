/// <reference path="./src/env.d.ts" />

import { loadEnv } from "vite"
import { defineConfig, squooshImageService } from "astro/config"
import UnoCSS from "unocss/astro"
// import sitemap from "@astrojs/sitemap"

const { PORT }: ImportMetaEnv | Record<string, string> = loadEnv(import.meta.env.MODE, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  site: "https://yurikong.github.io",
  base: "astro-theme-resume-minimalist",
  server: {
    port: Number(PORT),
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
  image: {
    service: squooshImageService(),
  },
})
