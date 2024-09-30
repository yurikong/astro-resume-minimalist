import type { IExperience } from "./experience"
import type { ILink } from "./link"

export interface IProject extends IExperience, ILink {
  name: string
  description: string
  technologiesUsed?: string[]
  preview: string
  highlights?: IProjectHighlight[]
}

export interface IProjectHighlight {
  name: string
  value: number
  iconClassName: string
}
