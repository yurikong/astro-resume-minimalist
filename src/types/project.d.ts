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
