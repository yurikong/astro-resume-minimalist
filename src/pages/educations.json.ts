import type { APIRoute } from "astro"
import type { IEducation } from "~types/education"

export const GET: APIRoute = () => {
  const educations: IEducation[] = [
    {
      university: "California State University, Long Beach",
      universityHomepage: "https://www.csulb.edu/",
      degree: "B.S.",
      major: "Computer Science",
      GPA: "3.65",
      startYear: 2018,
      endYear: 2020,
    },
    {
      university: "Mt. San Antonio College",
      universityHomepage: "https://www.mtsac.edu/",
      major: "Computer Science",
      GPA: "3.48",
      startYear: 2015,
      endYear: 2018,
    },
  ]
  return new Response(JSON.stringify(educations))
}
