import type { IProject } from "~types/project"
import { GithubRepository } from "~classes/repository"
import { mostRecentYearComparator } from "~utils/comparators"

/**
 * Get all projects sorted in most recent year order.
 * @returns {Promise<IProject[]>}
 */
export async function getAllProjects(): Promise<IProject[]> {
  const site: string = import.meta.env.DEV ? `http://localhost:${import.meta.env.PORT}` : import.meta.env.SITE
  const apiUrl: string = `${site}${import.meta.env.BASE_URL}/projects.json`
  const response: Response = await fetch(apiUrl)
  const data: IProject[] = await response.json()
  data.forEach((it) => {
    if (!!it.repository) {
      const { owner, name } = it.repository
      it.repository = new GithubRepository(owner, name)
    }
  })
  return data.toSorted(mostRecentYearComparator)
}

/**
 * Get `n` most recent projects for display
 * @param {number} n display count
 * @returns {Promise<IProject[]>}
 */
export async function getDisplayProjects(n: number = 5): Promise<IProject[]> {
  const projects: IProject[] = await getAllProjects()
  return projects.slice(0, n)
}
