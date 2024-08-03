import eslintPluginAstro, { rules } from "eslint-plugin-astro"
import unocss from "@unocss/eslint-config/flat"
import jsxA11y from "eslint-plugin-jsx-a11y"

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  unocss,
  jsxA11y.flatConfigs.strict,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
