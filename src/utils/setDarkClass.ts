/**
 * Set dark class to root node of the document based on user preference.
 * @param {string | undefined} [themeKey=theme] - Key for theme stored in LocalStorage.
 * @param {string | undefined} [darkClass=dark] - Class name for Dark theme.
 */
export function setDarkClass(themeKey: string = "theme", darkClass: string = "dark"): void {
  const docEl: HTMLElement = document.documentElement
  const matchMediaListDark: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")

  if (
    localStorage.getItem(themeKey) === darkClass ||
    (localStorage.getItem(themeKey) === null && matchMediaListDark.matches)
  ) {
    docEl.classList.add(darkClass)
  } else {
    docEl.classList.remove(darkClass)
  }
}
