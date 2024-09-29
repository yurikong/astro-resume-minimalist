import type { ILink } from "./link"
import type { IExperience } from "./experience"

export interface IEducation extends IExperience, ILink {
  university: string
  degree?: string
  major: string
  GPA: string
}
