import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives,
  transformerCompileClass,
} from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "block",
        "vertical-align": "middle",
      },
      warn: import.meta.env.DEV,
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives(), transformerCompileClass()],
})
