import type { APIRoute } from "astro"
import type { IProject } from "~types/project"
import { GithubRepository } from "~classes/repository"

export const GET: APIRoute = () => {
  const projectList: IProject[] = [
    {
      name: "Astro Theme Resume Minimalist",
      description: "An open-sourced minimal resume site template built with Astro.",
      technologiesUsed: ["Astro", "Typescript", "UnoCSS", "HTML & CSS", "Github Pages"],
      // preview: "", // TODO
      link: {
        url: "https://yurikong.github.io/astro-theme-resume-minimalist/",
        displayText: "Github",
        iconClassName: "i-ri:github-fill",
      },
      repository: new GithubRepository("yurikong", "astro-theme-resume-minimalist"),
      startYear: 2024,
      endYear: 2024,
    },
    {
      name: "SDP Print",
      description: "Desktop app for ceramic tiles production using Sacmi NH's single-pass inkjet printer (SDP).",
      technologiesUsed: [
        "Vue 3",
        "Pinia",
        "Vue Router",
        "Typescript",
        "Element Plus",
        "UnoCSS",
        "Vite",
        "Wails v2",
        "Go",
        "Electron",
      ],
      // preview: "", // TODO
      startYear: 2023,
    },
    {
      name: "SDP Print — Image Rotation",
      description:
        "Desktop app for ceramic tiles misalignment correction in overlay printing using Meteor's MetPrint DFE and Keyence's computer vision system.",
      technologiesUsed: ["React", "Typescript", "Material UI", "Vite", "Wails v2", "Go", "OPC-UA"],
      // preview: "", // TODO
      startYear: 2024,
      endYear: 2024,
    },
    {
      name: "Certificate of Analysis Generator",
      description: "Desktop app for generating Certificate of Analysis for use in an analytical testing laboratory.",
      technologiesUsed: ["Flutter"],
      // preview: "", // TODO
      startYear: 2023,
      endYear: 2023,
    },
    {
      name: "Digifly",
      description: "Data visualization web app for a bank client.",
      technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "Echarts", "G2", "G2Plot", "Swiper"],
      // preview: "", // TODO
      startYear: 2022,
      endYear: 2023,
    },
    {
      name: "Digifly Admin",
      description: "Admin dashboard for data visualization web app (Digifly) for a bank client.",
      technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "Element UI"],
      startYear: 2022,
      endYear: 2023,
    },
    {
      name: "Big Data Marketing Platform",
      description: "Web app for marketing for a bank client.",
      technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "Element UI", "Echarts", "G2", "Swiper"],
      // preview: "", // TODO
      startYear: 2021,
      endYear: 2023,
    },
  ]
  return new Response(JSON.stringify(projectList))
}
