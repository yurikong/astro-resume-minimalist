export type TLocale = "en" | "zh"

export const defaultLocale: TLocale = "en"
// export const supportedLocales: TLocale[] = ["en", "zh"]

// /**
//  * Whether a locale is supported.
//  * @param {string} locale
//  * @returns {boolean}
//  */
// export function isLocaleSupported(locale: string): boolean {
//   return supportedLocales.some((it) => locale.startsWith(it))
// }

// // function parseLocale(locale: string): TLocale {
// //   const  = locale.split("-", 1).at(0) ?? defaultLocale
// // }

// /**
//  * Get locale from local storage or browser, fallbacks to `en`.
//  * @returns {string}
//  */
// export function getLocale(): string {
//   const localLocale: string | null = localStorage.getItem("locale")
//   if (localLocale) {
//     return isLocaleSupported(localLocale) ? localLocale : defaultLocale
//   }
//   const browserLocale: string = navigator.language
//   return isLocaleSupported(browserLocale) ? browserLocale : defaultLocale
// }

// /**
//  * Set `locale` to local storage.
//  * @param {string} locale
//  */
// export function setLocale(locale: string): void {
//   localStorage.setItem("locale", locale)
// }
