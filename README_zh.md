<p align="center">
 <img width=200 src="./public/android-chrome-512x512.png" alt="Project logo">
</p>

<h3 align="center">Astro极简简历</h3>

<div align="center">

![Status](https://img.shields.io/badge/status-active-success.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

<div align="center">
<a href="./README.md">英文</a>
| <a href="./README_zh.md">中文</a>
</div>
---

<p align="center">使用Astro构建的一个极简风格简历模板网站</p>

## 📝 Table of Contents

- [关于](#关于)
- [功能](#功能)
- [安装](#安装)
- [用法](#用法)
- [发布](#发布)
- [使用技术](#使用技术)
- [作者](#作者)
- [鸣谢](#鸣谢)
- [打赏](#打赏)

## 🧐 关于 <a id="关于"></a>

开发这个项目的目的是想做一个简历或作品集网站来记录和展示我职业生涯中的工作和项目经历。在断断续续找了好几年的简历和作品集网站后，以及被我自己的一些事情耽搁了不少时间后，这个项目终于面世了。一直到最近，我觉得我已经积攒了足够的经历内容来写这个网站了。

在看过很多案例后，我认为在一个内容为核心的简历或作品集网站中使用任何炫酷的东西是杀鸡用牛刀的。我想用最大的努力达到刚刚好的效果，一分都不会多，但是一分也不会少。换句话说，就是极简风格。

我相信这个项目是适合所有人的，无论你是刚进职场的小白，还是很有经验的老手。我自己的个人网站也是基于这个模板搭建的。希望大家可以踊跃尝试！

## ✨ 功能 <a id="功能"></a>

- 支持 `系统` / `明亮` / `暗黑` 颜色主题
- 支持国际化 (`英文` / `中文`)
- 响应式设计 (在 Chrome 和 Safari 浏览器仿真测试, 在我自己的 iPhone 13 Safari 浏览器验证)

## 🏁 安装 <a id="安装"></a>

以下步骤会告诉你如何搭建本地开发环境。需要查看如何发布，请移步到[发布](#发布)。

### 前提条件

- Node

### 安装

```bash
yarn
```

### 开发

```bash
yarn dev
```

## 🎈 用法 <a id="用法"></a>

- 到 `/src/data` 目录添加教育/工作/项目经历
- 到 `/src/assets/images` 添加图片
- 到 `/src/pages` 目录添加更多路由（页面）
- 请知悉目前的代码已经满足我自己的需求了，你可以随时修改、删除、重写任何代码。

## 🚀 发布 <a id="发布"></a>

- Github Pages

  - 请确保在 (`astro.config.ts`) 中修改 `site` 和 `base` 的值，且项目中所有的链接指向正确的地址。

  - 跑构建脚本

    ```bash
    yarn build
    ```

  - 验证生产包

    ```bash
    yarn preview
    ```

  - 当你构建并验证生产包，确保没有错误后，你就可以发布了。Github工作流会在你合代码到 `main` 分支后自动发布到 `Github Pages`

    ```bash
    git checkout main # from dev
    git merge dev
    git push
    ```

## ⛏️ 使用技术 <a id="使用技术"></a>

- [Astro](https://astro.build/)

## ✍️ 作者 <a id="作者"></a>

- [@Jianqiang Du](https://github.com/yurikong)

## 🎉 鸣谢 <a id="鸣谢"></a>

- [@Brittany Chiang](https://brittanychiang.com)

## 💸 打赏 <a id="打赏"></a>

- 微信

  <img width=200 src="./src/assets/images/wechat-donation-qr.webp" alt="Wechat Donation QR">

<br/>

- 买杯咖啡

  <img width=200 src="./src/assets/images/buy-me-a-coffee-donation-qr.webp" alt="Buy me a coffee QR">
