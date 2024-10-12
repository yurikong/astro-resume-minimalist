import type { IEducation } from "~types/education"
import { mostRecentYearComparator } from "~utils/comparators"

/**
 * Get all education experiences sorted in most recent year order.
 * @returns {Promise<IEducation>}
 */
export async function getAllEducations(): Promise<IEducation[]> {
  const site: string = import.meta.env.DEV ? `http://localhost:${import.meta.env.PORT}` : import.meta.env.SITE
  const apiUrl: string = `${site}${import.meta.env.BASE_URL}/educations.json`
  const r: Response = await fetch(apiUrl)
  const data: IEducation[] = await r.json()
  return data.toSorted(mostRecentYearComparator)
}
