import { defineConfig, presetUno, presetIcons, transformerVariantGroup, transformerDirectives } from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      warn: import.meta.env.DEV,
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
