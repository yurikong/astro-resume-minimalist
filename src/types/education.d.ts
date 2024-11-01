import type { IExperience } from "./experience"

export interface IEducation extends IExperience {
  university: string
  universityHomepage: string
  degreeAndMajor: string
  GPA: string
}
