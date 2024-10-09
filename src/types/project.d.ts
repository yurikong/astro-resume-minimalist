import type { IExperience } from "./experience"
import type { Repository } from "./repository"

export interface IProject extends IExperience {
  name: string
  description: string
  madeAt?: string | undefined
  technologiesUsed: string[]
  preview?: string | undefined
  link?: IProjectLink | undefined
  repository?: Repository | undefined
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
  hidden: boolean
}
