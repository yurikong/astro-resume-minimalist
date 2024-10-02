import type { IExperience } from "./experience"

export interface IWork extends IExperience {
  jobTitle: string
  company: string
  companyHomepage: string
  description: string
  products?: IProduct[] | undefined
  technologiesUsed: string[]
}

export interface IProduct {
  name: string
  url: string
}
