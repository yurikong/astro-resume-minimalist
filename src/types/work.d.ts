import type { IExperience } from "./experience"
import type { ILink } from "./link"

export interface IWork extends IExperience, ILink {
  jobTitle: string
  company: string
  description: string
  products?: IProduct[]
  technologiesUsed: string[]
}

export interface IProduct extends ILink {
  name: string
}
