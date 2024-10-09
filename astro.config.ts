import { loadEnv } from "vite"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"
// import sitemap from "@astrojs/sitemap"
import type { ImportMetaEnv } from "~/env"

const { PORT }: ImportMetaEnv | Record<string, string> = loadEnv(import.meta.env.MODE, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  site: "https://yurikong.github.io", // TODO: change to vercel deploy url
  base: "/astro-theme-resume-minimalist", // TODO: change to / when setting for vercel
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
})
