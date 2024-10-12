import type { ISocial } from "~types/social"

/**
 * Get all social links.
 * @returns {Promise<ISocial[]>}
 */
export async function getAllSocials(): Promise<ISocial[]> {
  const site: string = import.meta.env.DEV ? `http://localhost:${import.meta.env.PORT}` : import.meta.env.SITE
  const apiUrl: string = `${site}${import.meta.env.BASE_URL}/socials.json`
  const r: Response = await fetch(apiUrl)
  const data: ISocial[] = await r.json()
  return data
}
