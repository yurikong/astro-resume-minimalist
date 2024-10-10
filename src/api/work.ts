import type { IWork } from "~types/work"
import { mostRecentYearComparator } from "~utils/comparators"

/**
 * Get all work experiences sorted in most recent year order.
 * @returns {Promise<IWork>}
 */
export async function getAllWorks(): Promise<IWork[]> {
  const site: string = import.meta.env.DEV ? `http://localhost:${import.meta.env.PORT}` : import.meta.env.SITE
  const apiUrl: string = `${site}${import.meta.env.BASE_URL}/works.json`
  const r: Response = await fetch(apiUrl)
  const data: IWork[] = await r.json()
  return data.toSorted(mostRecentYearComparator)
}
