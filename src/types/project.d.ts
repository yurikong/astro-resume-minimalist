import type { IExperience } from "./experience"
import type { Repository } from "./repository"

export interface IProject extends IExperience {
  name: string
  description: string
  technologiesUsed: string[]
  preview?: string | undefined
  repository?: Repository | undefined
}

export interface IProjectHighlight {
  name: string
  iconClassName: string
  value: number
  hidden: boolean
}

export interface IProjectArchive extends IExperience {
  name: string
  madeAt?: string | undefined
  technologiesUsed: string[]
  link?: IProjectArchiveLink | undefined
}

export interface IProjectArchiveLink {
  url: string
  displayText: string
  iconClassName?: string | undefined
}
