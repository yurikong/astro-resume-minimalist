import type { IExperience } from "./experience"

export interface IEducation extends IExperience {
  university: string
  universityHomepage: string
  degree?: string | undefined
  major: string
  GPA: string
}
