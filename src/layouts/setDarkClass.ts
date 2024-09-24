const themeKey: string = "theme"
const darkClass: string = "dark"
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
