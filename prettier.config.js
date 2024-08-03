/** @type {import("prettier").Config} */

export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  printWidth: 120,
  trailingComma: "es5",
}
