import type { IGithubRepositoryInfo } from "~types/repository"

export class GithubRepository {
  readonly owner: string
  readonly name: string

  constructor(owner: string, name: string) {
    this.owner = owner
    this.name = name
  }

  get url(): string {
    return `https://github.com/${this.owner}/${this.name}`
  }

  get apiUrl(): string {
    return `https://api.github.com/repos/${this.owner}/${this.name}`
  }

  /**
   * Gets repository information through github api.
   * @returns {Promise<IGithubRepositoryInfo>}
   */
  async getInfo(): Promise<IGithubRepositoryInfo> {
    const r: Response = await fetch(this.apiUrl)
    const data: IGithubRepositoryInfo = await r.json()
    return data
  }
}
