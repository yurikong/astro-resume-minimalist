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
 * Set `locale` to local storage and redirect to corresponding locale page.
 * @param {TLocale} locale
 */
export function setLocale(locale: TLocale): void {
  localStorage.setItem("locale", locale)
  let url: string = window.location.href
  if (!url.endsWith("/")) {
    url += "/"
  }
  url += locale
  window.location.href = url
}
