import type { IExperience } from "./experience"

export interface IWork extends IExperience {
  jobTitle: string
  company: string
  companyHomepage: string
  description: string
  projects?: IWorkProject[] | undefined
  technologiesUsed: string[]
}

export interface IWorkProject {
  name: string
  url: string
}
