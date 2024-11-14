import type { IProject } from "~types/project"
import { GithubRepository } from "~classes/repository"

export const projects: IProject[] = [
  {
    id: "astro-resume-minimalist",
    name: "Astro极简简历",
    description: "使用Astro框架构建的一个开源的极简主义风格的简历模板网站",
    technologiesUsed: ["Astro", "Typescript", "UnoCSS", "HTML", "CSS", "Github Pages"],
    link: {
      url: "https://github.com/yurikong/astro-resume-minimalist",
      displayText: "Github",
      iconClassName: "i-ri:github-fill",
    },
    assets: [
      {
        src: "/src/assets/images/projects/astro-resume-minimalist.webp",
        alt: "Astro极简简历项目截图",
      },
    ],
    repository: new GithubRepository("yurikong", "astro-resume-minimalist"),
    startYear: 2024,
    endYear: 2024,
  },
  {
    id: "sacmi-sdp-print",
    name: "SDP瓷砖打印软件",
    description: "桌面应用，适用于使用萨克米南海研发的单程喷墨陶瓷打印机的瓷砖产线",
    madeAt: "南海萨克米",
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
    name: "SDP瓷砖对位软件",
    description: "桌面应用，通过视觉系统识别的砖片位置偏差对砖片位置进行校准，适用于一线多机的瓷砖产线",
    madeAt: "南海萨克米",
    technologiesUsed: ["React", "Typescript", "Material UI", "Vite", "Wails v2", "Go", "OPC-UA"],
    assets: [
      {
        src: "/src/assets/images/projects/sacmi-nh-sdp-print-image-rotation-1.webp",
        alt: "第一张SDP瓷砖对位软件项目截图",
      },
      {
        src: "/src/assets/images/projects/sacmi-nh-sdp-print-image-rotation-2.webp",
        alt: "第二张SDP瓷砖对位软件项目截图",
      },
    ],
    startYear: 2024,
    endYear: 2024,
  },
  {
    id: "certificate-of-analysis-generator",
    name: "分析报告生成器",
    description: "桌面应用，用于化验实验室生成分析报告",
    technologiesUsed: ["Flutter"],
    assets: [
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-1.webp",
        alt: "第一张分析报告生成器项目截图",
      },
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-2.webp",
        alt: "第二张分析报告生成器项目截图",
      },
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-3.webp",
        alt: "第三张分析报告生成器项目截图",
      },
      {
        src: "/src/assets/images/projects/aats-certificate-of-analysis-generator-4.webp",
        alt: "第四张分析报告生成器项目截图",
      },
    ],
    startYear: 2023,
    endYear: 2023,
  },
  {
    id: "sdebank-digifly",
    name: "顺农数字大屏",
    description: "网页应用，用于顺德农商银行的数据展示",
    madeAt: "顺谋",
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
      { src: "/src/assets/images/projects/sdebank-digifly-1.webp", alt: "第一张顺农数字大屏项目截图" },
      { src: "/src/assets/images/projects/sdebank-digifly-2.webp", alt: "第二张顺农数字大屏项目截图" },
      { src: "/src/assets/images/projects/sdebank-digifly-3.webp", alt: "第三张顺农数字大屏项目截图" },
      { src: "/src/assets/images/projects/sdebank-digifly-4.webp", alt: "第四张顺农数字大屏项目截图" },
      { src: "/src/assets/images/projects/sdebank-digifly-5.webp", alt: "第五张顺农数字大屏项目截图" },
      { src: "/src/assets/images/projects/sdebank-digifly-6.webp", alt: "第六张顺农数字大屏项目截图" },
      { src: "/src/assets/images/projects/sdebank-digifly-7.webp", alt: "第七张顺农数字大屏项目截图" },
    ],
    startYear: 2022,
    endYear: 2023,
  },
  {
    id: "sdebank-digifly-admin",
    name: "顺农数字大屏后台",
    description: "顺农数字大屏的数据管理后台",
    madeAt: "顺谋",
    technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "SCSS", "Element UI", "Webpack"],
    startYear: 2022,
    endYear: 2023,
  },
  {
    id: "sdebank-management-cockpit",
    name: "顺农总营智能驾驶舱",
    description: "网页应用，用于顺德农商银行管理层决策分析",
    madeAt: "顺谋",
    technologiesUsed: ["Vue 2", "Vuex", "Vue Router", "Javascript", "SCSS", "ECharts", "G2", "G2Plot", "Webpack"],
    assets: [
      {
        src: "/src/assets/images/projects/sdebank-management-cockpit-1.webp",
        alt: "第一张顺顺农总营智能驾驶舱项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-management-cockpit-2.webp",
        alt: "第二张顺农总营智能驾驶舱项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-management-cockpit-3.webp",
        alt: "第三张顺农总营智能驾驶舱项目截图",
      },
    ],
    startYear: 2022,
    endYear: 2022,
  },
  {
    id: "sdebank-groton-snakehead-monitor",
    name: "顺农国通黑鱼监控",
    description: "网页应用，用于监控黑鱼价格",
    madeAt: "顺谋",
    technologiesUsed: ["Vue 2", "Javascript", "SCSS", "G2Plot", "Webpack"],
    assets: [
      {
        src: "/src/assets/images/projects/sdebank-groton-snakehead-monitor.webp",
        alt: "顺农国通黑鱼监控项目截图",
      },
    ],
    startYear: 2022,
    endYear: 2022,
  },
  {
    id: "sdebank-big-data-marketing-platform",
    name: "顺农大数据营销平台",
    description: "网页应用，用于顺德农商银行制定、分配、审核、执行、分析市场营销",
    madeAt: "顺谋",
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
        alt: "第一张顺农大数据营销平台项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-2.webp",
        alt: "第二张顺农大数据营销平台项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-3.webp",
        alt: "第三张顺农大数据营销平台项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-4.webp",
        alt: "第四张顺农大数据营销平台项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-5.webp",
        alt: "第五张顺农大数据营销平台项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-6.webp",
        alt: "第六张顺农大数据营销平台项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-7.webp",
        alt: "第七张顺农大数据营销平台项目截图",
      },
      {
        src: "/src/assets/images/projects/sdebank-big-data-management-platform-8.webp",
        alt: "第八张顺农大数据营销平台项目截图",
      },
    ],
    startYear: 2021,
    endYear: 2023,
  },
]
