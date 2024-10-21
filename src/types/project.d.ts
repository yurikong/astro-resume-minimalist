import type { IExperience } from "./experience"
import type { GithubRepository } from "~classes/repository"

export interface IProject extends IExperience {
  id: string
  name: string
  description: string
  madeAt?: string | undefined
  technologiesUsed: string[]
  assets?: IProjectAsset[] | undefined
  link?: IProjectLink | undefined
  repository?: GithubRepository | undefined
}

export interface IProjectAsset {
  src: string
  alt: string
}

export interface IProjectLink {
  url: string
  displayText: string
  iconClassName?: string | undefined
}

export interface IProjectHighlight {
  name: string
  iconClassName: string
  value: number
}
