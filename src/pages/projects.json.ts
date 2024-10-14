import type { APIRoute } from "astro"
import type { IProject } from "~types/project"
import { GithubRepository } from "~classes/repository"

export const GET: APIRoute = () => {
  const projectList: IProject[] = [
    {
      id: "astro-theme-resume-minimalist",
      name: "Astro Theme Resume Minimalist",
      description: "An open-sourced minimal resume site template built with Astro.",
      technologiesUsed: ["Astro", "Typescript", "UnoCSS", "HTML & CSS", "Github Pages"],
      link: {
        url: "https://yurikong.github.io/astro-theme-resume-minimalist/",
        displayText: "Github",
      },
      repository: new GithubRepository("yurikong", "astro-theme-resume-minimalist"),
      startYear: 2024,
      endYear: 2024,
    },
    {
      id: "sacmi-nh-sdp-print",
      name: "SDP Print",
      description: "Desktop app for ceramic tiles production using Sacmi NH's single-pass inkjet printer (SDP).",
      technologiesUsed: [
        "Vue 3",
        "Pinia",
        "Vue Router",
        "Typescript",
        "Element Plus",
        "UnoCSS",
        "CSS",
        "Vite",
        "Wails v2",
        "Go",
        "Electron",
      ],
      startYear: 2023,
    },
    {
      id: "sacmi-nh-sdp-print-image-rotation",
      name: "SDP Print-Image Rotation",
      description:
        "Desktop app for ceramic tiles misalignment correction in overlay printing using Meteor's MetPrint DFE and Keyence's computer vision system.",
      technologiesUsed: ["React", "Typescript", "Material UI", "Vite", "Wails v2", "Go", "OPC-UA"],
      assetPath: "/src/assets/images/projects/sacmi-nh-sdp-print-image-rotation-1.webp",
      startYear: 2024,
      endYear: 2024,
    },
    {
      id: "aats-certificate-of-analysis-generator",
      name: "Certificate of Analysis Generator",
      description: "Desktop app for generating Certificate of Analysis for use in an analytical testing laboratory.",
      technologiesUsed: ["Flutter"],
      assetPath: "/src/assets/images/projects/aats-certificate-of-analysis-generator-1.webp",
      startYear: 2023,
      endYear: 2023,
    },
    {
      id: "sdebank-digifly",
      name: "Digifly",
      description: "Data visualization web app for a bank client.",
      technologiesUsed: [
        "Vue 2",
        "Vuex",
        "Vue Router",
        "Javascript",
        "SCSS",
        "Echarts",
        "G2",
        "G2Plot",
        "Swiper",
        "Webpack",
      ],
      assetPath: "/src/assets/images/projects/sdebank-digifly-1.webp",
      startYear: 2022,
      endYear: 2023,
    },
    {
      id: "sdebank-digifly-admin",
      name: "Digifly Admin",
      description: "Admin dashboard for data visualization web app (Digifly) for a bank client.",
      technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "SCSS", "Element UI", "Webpack"],
      startYear: 2022,
      endYear: 2023,
    },
    {
      id: "sdebank-management-cockpit",
      name: "Sdebank Management Cockpit",
      description: "Management Cockpit on the web for a bank client.",
      technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "SCSS", "ECharts", "G2", "G2Plot", "Webpack"],
      assetPath: "/src/assets/images/projects/sdebank-management-cockpit-1.webp",
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: "sdebank-groton-snakehead-monitor",
      name: "Snakehead Monitor",
      description: "Web app for monitoring snakehead prices.",
      technologiesUsed: ["Vue 2", "Javascript", "SCSS", "G2Plot", "Webpack"],
      assetPath: "/src/assets/images/projects/sdebank-groton-snakehead-monitor-1.webp",
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: "sdebank-big-data-marketing-platform",
      name: "Big Data Marketing Platform",
      description: "Web app for marketing for a bank client.",
      technologiesUsed: [
        "Vue 2",
        "Vuex",
        "Vue Router",
        "Javascript",
        "SCSS",
        "Element UI",
        "Echarts",
        "G2",
        "Swiper",
        "Webpack",
      ],
      assetPath: "/src/assets/images/projects/sdebank-big-data-management-platform-1.webp",
      startYear: 2021,
      endYear: 2023,
    },
  ]
  return new Response(JSON.stringify(projectList))
}
