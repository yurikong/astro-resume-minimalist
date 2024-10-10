import type { IProject } from "~/types/project"
import { GithubRepository } from "~classes/repository"

/**
 * Get all projects.
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
  return data
}
