export type TLocale = "en" | "zh"

export const defaultLocale: TLocale = "en"
export const supportedLocales: TLocale[] = ["en", "zh"]

/**
 * Whether an input locale string is supportted.
 * @param {string}locale
 * @returns {boolean}
 */
export function isLocaleSupported(locale: string): boolean {
  return supportedLocales.some((it) => locale.startsWith(it))
}

/**
 * Parse locale from input string, fallbacks to `defaultLocale` if not supported.
 * @param {string} s
 * @returns {TLocale}
 */
export function parseLocale(s: string): TLocale {
  const parsedLocaleString: string | undefined = s.split("-", 1).at(0)
  if (!parsedLocaleString) {
    return defaultLocale
  }
  return isLocaleSupported(parsedLocaleString) ? <TLocale>parsedLocaleString : defaultLocale
}

/**
 * Get locale from local storage or browser, fallbacks to `defaultLocale`.
 * @returns {TLocale}
 */
export function getLocale(): TLocale {
  const locale: string = localStorage.getItem("locale") || navigator.language
  return parseLocale(locale)
}

/**
 * Set `locale` to local storage.
 * Client side only.
 * @param {TLocale} locale
 */
export function setLocale(locale: TLocale): void {
  localStorage.setItem("locale", locale)
}

/**
 * Get next supported locale of input locale.
 * @param {TLocale} locale
 * @returns {TLocale | undefined}
 */
export function nextLocaleOf(locale: TLocale): TLocale | undefined {
  const currentLocaleIndex: number = supportedLocales.findIndex((it) => it === locale)
  if (currentLocaleIndex >= 0) {
    const nextLocaleIndex: number = (currentLocaleIndex + 1) % supportedLocales.length
    return supportedLocales.at(nextLocaleIndex)
  }
  return undefined
}
