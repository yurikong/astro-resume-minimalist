import type { IWork } from "~types/work"

export const works: IWork[] = [
  {
    jobTitle: "Software Engineer",
    company: "Sacmi Machinery (Foshan Nanhai) Co., Ltd.",
    companyHomepage: "https://www.sacmi.cn/sacmi-china",
    description:
      "Developed and styled various desktop apps for single-pass inkjet printer in ceramic tiles production. Deployed and maintained self-hosted private git and npm repositories. Provided assistance in obtaining software copyrights. Provided leadership within R&D department through close collaboration and knowledge shares.",
    projects: [
      { name: "SDP Print", url: "#sacmi-nh-sdp-print" },
      { name: "SDP Print-Image Rotation", url: "#sacmi-nh-sdp-print-image-rotation" },
    ],
    technologiesUsed: [
      "Vue 3",
      "Pinia",
      "Vue Router",
      "React",
      "Typescript",
      "Element Plus",
      "Material UI",
      "UnoCSS",
      "CSS",
      "Vite",
      "Go",
      "Wails v2",
      "Electron",
      "Docker",
      "OPC-UA",
    ],
    startYear: 2023,
  },
  {
    jobTitle: "Frontend Engineer",
    company: "Stramo",
    companyHomepage: "http://www.stramo.cn/",
    description:
      "Developed and maintained interactive web apps for various clients. Worked closely with cross-functional teams, including developers, designers, and product managers, to ensure compliance and code quality.",
    projects: [
      { name: "Digifly", url: "#sdebank-digifly" },
      { name: "Digifly Admin", url: "#sdebank-digifly-admin" },
      { name: "Sdebank Management Cockpit", url: "#sdebank-management-cockpit" },
      { name: "Snakehead Monitor", url: "#sdebank-groton-snakehead-monitor" },
      { name: "Big Data Marketing Platform", url: "#big-data-marketing-platform" },
    ],
    technologiesUsed: [
      "Vue 2",
      "Vuex",
      "Vue Router",
      "Javascript",
      "Element UI",
      "SCSS",
      "ECharts",
      "G2",
      "G2Plot",
      "Swiper",
      "Webpack",
    ],
    startYear: 2021,
    endYear: 2023,
  },
]
