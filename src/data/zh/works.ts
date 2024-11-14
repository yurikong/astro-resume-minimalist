import type { IWork } from "~types/work"

export const works: IWork[] = [
  {
    jobTitle: "软件工程师",
    company: "萨克米机械（佛山南海）有限公司",
    companyHomepage: "https://www.sacmi.cn/sacmi-china",
    description:
      "主要负责开发用于瓷砖产线的单程喷墨打印机打印控制软件的前端，负责部署并维护公司的私有git和npm仓库，负责编写申请软著所需材料并跟进申请流程，通过与团队的密切合作与技术分享在公司研发部提供领导才能",
    projects: [
      { name: "SDP瓷砖打印软件", url: "#sacmi-sdp-print" },
      { name: "SDP瓷砖对位软件", url: "#sacmi-sdp-print-image-rotation" },
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
    jobTitle: "前端开发工程师",
    company: "顺谋管理咨询（上海）有限公司",
    description:
      "主要负责为公司的目标客户开发并维护多个交互式网页应用，通过与包括开发工程师、UI设计师、产品经理、测试工程师的跨职能团队的紧密合作，最大限度的确保代码质量和应用服务合规性",
    companyHomepage: "http://www.stramo.cn/",
    projects: [
      { name: "顺农数字大屏", url: "#sdebank-digifly" },
      { name: "顺农数字大屏后台", url: "#sdebank-digifly-admin" },
      { name: "顺农总营智能驾驶舱", url: "#sdebank-management-cockpit" },
      { name: "顺农国通黑鱼监控", url: "#sdebank-groton-snakehead-monitor" },
      { name: "顺农大数据营销平台", url: "#sdebank-big-data-marketing-platform" },
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
