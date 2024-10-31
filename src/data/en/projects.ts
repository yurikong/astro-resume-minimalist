import type { IProject } from "~types/project"
import { GithubRepository } from "~classes/repository"

export const projects: IProject[] = [
  {
    id: "astro-resume-minimalist",
    name: "Astro Resume Minimalist",
    description: "An open-sourced minimal resume site template built with Astro.",
    technologiesUsed: ["Astro", "Typescript", "UnoCSS", "HTML", "CSS", "Github Pages"],
    link: {
      url: "https://github.com/yurikong/astro-resume-minimalist",
      displayText: "Github",
      iconClassName: "i-ri:github-fill",
    },
    assets: [
      {
        src: "/src/assets/images/projects/astro-resume-minimalist.webp",
        alt: "Screenshot of Astro Resume Minimalist.",
      },
    ],
    repository: new GithubRepository("yurikong", "astro-resume-minimalist"),
    startYear: 2024,
    endYear: 2024,
  },
  {
    id: "sacmi-sdp-print",
    name: "SDP Print",
    description: "Desktop app for ceramic tiles production using Sacmi NH's single-pass inkjet printer (SDP).",
    madeAt: "Sacmi NH",
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
      "OPC-UA",
    ],
    startYear: 2023,
  },
  {
    id: "sacmi-sdp-print-image-rotation",
    name: "SDP Print - Image Rotation",
    description:
      "Desktop app for ceramic tiles misalignment correction in overlay printing using Meteor's MetPrint DFE and Keyence's computer vision system.",
    madeAt: "Sacmi NH",
    technologiesUsed: ["React", "Typescript", "Material UI", "Vite", "Wails v2", "Go", "OPC-UA"],
    assets: [
      {
        src: "/src/assets/images/projects/sacmi-nh-sdp-print-image-rotation-1.webp",
        alt: "Screenshot 1 of SDP Print - Image Rotation.",
      },
      {
        src: "/src/assets/images/projects/sacmi-nh-sdp-print-image-rotation-2.webp",
        alt: "Screenshot 2 of SDP Print - Image Rotation.",
      },
    ],
    startYear: 2024,
    endYear: 2024,
  },
  {
    id: "certificate-of-analysis-generator",
    name: "Certificate of Analysis Generator",
    description: "Desktop app for generating Certificate of Analysis for use in an analytical testing laboratory.",
    technologiesUsed: ["Flutter"],
    assets: [
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-1.webp",
        alt: "Screenshot 1 of Certificate of Analysis Generator.",
      },
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-2.webp",
        alt: "Screenshot 2 of Certificate of Analysis Generator.",
      },
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-3.webp",
        alt: "Screenshot 3 of Certificate of Analysis Generator.",
      },
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-4.webp",
        alt: "Screenshot 4 of Certificate of Analysis Generator.",
      },
    ],
    startYear: 2023,
    endYear: 2023,
  },
  {
    id: "sdebank-digifly",
    name: "Digifly",
    description: "Data visualization web app for a bank client.",
    madeAt: "Stramo",
    technologiesUsed: [
      "Vue 2",
      "Vuex",
      "Vue Router",
      "Javascript",
      "SCSS",
      "ECharts",
      "G2",
      "G2Plot",
      "Swiper",
      "Webpack",
    ],
    assets: [
      { src: "/src/assets/images/projects/sdebank-digifly-1.webp", alt: "Screenshot 1 of Digifly." },
      { src: "/src/assets/images/projects/sdebank-digifly-2.webp", alt: "Screenshot 2 of Digifly." },
      { src: "/src/assets/images/projects/sdebank-digifly-3.webp", alt: "Screenshot 3 of Digifly." },
      { src: "/src/assets/images/projects/sdebank-digifly-4.webp", alt: "Screenshot 4 of Digifly." },
      { src: "/src/assets/images/projects/sdebank-digifly-5.webp", alt: "Screenshot 5 of Digifly." },
      { src: "/src/assets/images/projects/sdebank-digifly-6.webp", alt: "Screenshot 6 of Digifly." },
      { src: "/src/assets/images/projects/sdebank-digifly-7.webp", alt: "Screenshot 7 of Digifly." },
    ],
    startYear: 2022,
    endYear: 2023,
  },
  {
    id: "sdebank-digifly-admin",
    name: "Digifly Admin",
    description: "Admin dashboard for data visualization web app (Digifly) for a bank client.",
    madeAt: "Stramo",
    technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "SCSS", "Element UI", "Webpack"],
    startYear: 2022,
    endYear: 2023,
  },
  {
    id: "sdebank-management-cockpit",
    name: "Sdebank Management Cockpit",
    description: "Management Cockpit on the web for a bank client.",
    madeAt: "Stramo",
    technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "SCSS", "ECharts", "G2", "G2Plot", "Webpack"],
    assets: [
      {
        src: "/src/assets/images/projects/sdebank-management-cockpit-1.webp",
        alt: "Screenshot 1 of Sdebank Management Cockpit.",
      },
      {
        src: "/src/assets/images/projects/sdebank-management-cockpit-2.webp",
        alt: "Screenshot 2 of Sdebank Management Cockpit.",
      },
      {
        src: "/src/assets/images/projects/sdebank-management-cockpit-3.webp",
        alt: "Screenshot 3 of Sdebank Management Cockpit.",
      },
    ],
    startYear: 2022,
    endYear: 2022,
  },
  {
    id: "sdebank-groton-snakehead-monitor",
    name: "Snakehead Monitor",
    description: "Web app for monitoring snakehead prices.",
    madeAt: "Stramo",
    technologiesUsed: ["Vue 2", "Javascript", "SCSS", "G2Plot", "Webpack"],
    assets: [
      {
        src: "/src/assets/images/projects/sdebank-groton-snakehead-monitor.webp",
        alt: "Screenshot of Snakehead Monitor.",
      },
    ],
    startYear: 2022,
    endYear: 2022,
  },
  {
    id: "sdebank-big-data-marketing-platform",
    name: "Big Data Marketing Platform",
    description: "Web app for marketing for a bank client.",
    madeAt: "Stramo",
    technologiesUsed: [
      "Vue 2",
      "Vuex",
      "Vue Router",
      "Javascript",
      "SCSS",
      "Element UI",
      "ECharts",
      "G2",
      "Swiper",
      "Webpack",
    ],
    assets: [
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-1.webp",
        alt: "Screenshot 1 of Big Data Management Platform.",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-2.webp",
        alt: "Screenshot 2 of Big Data Management Platform.",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-3.webp",
        alt: "Screenshot 3 of Big Data Management Platform.",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-4.webp",
        alt: "Screenshot 4 of Big Data Management Platform.",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-5.webp",
        alt: "Screenshot 5 of Big Data Management Platform.",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-6.webp",
        alt: "Screenshot 6 of Big Data Management Platform.",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-7.webp",
        alt: "Screenshot 7 of Big Data Management Platform.",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-8.webp",
        alt: "Screenshot 8 of Big Data Management Platform.",
      },
    ],
    startYear: 2021,
    endYear: 2023,
  },
]
