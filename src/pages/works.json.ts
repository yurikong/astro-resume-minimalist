import type { APIRoute } from "astro"
import type { IWork } from "~types/work"

export const GET: APIRoute = () => {
  const workList: IWork[] = [
    {
      jobTitle: "Software Engineer",
      company: "Sacmi Machinery (Foshan Nanhai) Co., Ltd.",
      companyHomepage: "https://www.sacmi.cn/sacmi-china",
      description:
        "Developed and styled various desktop apps for single-pass inkjet printer in ceramic tiles production. Deployed and maintained self-hosted private git and npm repositories. Obtained software copyright for the company. Provide leadership within R&D department through close collaboration and knowledge shares.",
      projects: [
        { name: "SDP Print", url: "#sdp-print" },
        { name: "SDP Print - Image Rotation", url: "#sdp-print-image-rotation" },
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
        "Vite",
        "Go",
        "Wails v2",
        "Electron",
        "Docker",
      ],
      startYear: 2023,
    },
    {
      jobTitle: "Frontend Engineer",
      company: "Stramo",
      companyHomepage: "http://www.stramo.cn/",
      description:
        "Developed and maintained various interactive web apps for a bank client. Worked closely with cross-functional teams, including developers, designers, and product managers, to ensure compliance and code quality.",
      projects: [
        { name: "Digifly", url: "#digifly" },
        { name: "Digifly Admin", url: "#digifly-admin" },
        { name: "Big Data Marketing Platform", url: "#big-data-marketing-platform" },
      ],
      technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "Element UI", "SCSS", "Webpack"],
      startYear: 2021,
      endYear: 2023,
    },
  ]
  return new Response(JSON.stringify(workList))
}
