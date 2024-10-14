import type { IExperience } from "./experience"
import type { GithubRepository } from "~classes/repository"

export interface IProject extends IExperience {
  id: string
  name: string
  description: string
  madeAt?: string | undefined
  technologiesUsed: string[]
  assetPath?: string | undefined
  link?: IProjectLink | undefined
  repository?: GithubRepository | undefined
}

export interface IProjectLink {
  url: string
  displayText: string
}

export interface IProjectHighlight {
  name: string
  iconClassName: string
  value: number
}
