export class Repository {
  readonly type = "git"
  readonly vendor = "github"
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
}

export interface IGithubRepository {
  private: boolean
  stargazers_count: number
  forks_count: number
}
