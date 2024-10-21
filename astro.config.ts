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
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "static/assets/js/[name]-[hash].js",
          entryFileNames: "static/assets/js/[name]-[hash].js",
          assetFileNames: ({ name }): string => {
            if (name === undefined) {
              return "static/assets/[name]-[hash].[ext]"
            }
            if (/\.css$/i.test(name)) {
              return "static/assets/css/[name]-[hash].css"
            }
            if (/\.(jpe?g|png|gif|svg|webp)$/i.test(name)) {
              return "static/assets/img/[name]-[hash].[ext]"
            }
            if (/\.(ttf|woff|woff2|eot)$/i.test(name)) {
              return "static/assets/fonts/[name]-[hash].[ext]"
            }
            return "static/assets/[name]-[hash].[ext]"
          },
        },
      },
    },
  },
})
