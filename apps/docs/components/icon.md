---
title: Icon 图标
description: 名称驱动的矢量图标，内置常用图标集合与五档尺寸
---

# Icon 图标

名称驱动的矢量图标（lucide），内置常用图标集合与五档尺寸，颜色可自定义。`mode` 切换 svg 渲染（默认）与 Iconify CSS 类名输出，`customize` 在 svg 渲染后修改图标元素。需要内置集合之外的图标时，直接引入 lucide 图标组件即可。

## 基础用法

<DemoPreview file="demos/vue/icon-basic.vue" title="图标集合、尺寸与颜色" description="name 选择图标，size 选择尺寸，color 自定义颜色" />

## 渲染模式与定制

svg 模式渲染 lucide SVG，css 模式输出 `i-lucide-*` Iconify CSS 类名（配合 UnoCSS / Iconify 环境使用）；customize 在 svg 渲染后修改图标元素；ui 插槽注入根元素类名。

<DemoPreview file="demos/vue/icon-modes.vue" title="mode · customize · ui" description="svg/css 渲染模式、customize 修改 svg、ui.root 类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-icon
```

## API

<!--@include: ./api/icon.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 图标根元素（svg 模式的 svg 元素 / css 模式的 span 元素） |

## 相关组件

- 键盘按键：[Kbd](/components/kbd)
- 分割线：[Separator](/components/separator)
- 骨架屏：[Skeleton](/components/skeleton)

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

| 项目 | 类名 | 说明 |
| --- | --- | --- |
| 背景 | 不使用 | 没有背景 token |
| 文字 | 继承 currentColor | 没有内置颜色 token |
| 描边 | 不使用 | 没有描边 token |
| 圆角 | 不使用 | 没有圆角 |
| 阴影 | 不使用 | 没有阴影 |

**尺寸**

| 类 / 属性 | 值 | 说明 |
| --- | --- | --- |
| size prop | 数字转 px（如 20 → 20px）或字符串 | 通过内联 style 设置 width / height |
| 默认 | 没有 | 没有默认尺寸类，由父容器类名控制 |

**图标命名**

`icons.ts` 定义 38 个预设名映射（arrowDown → `i-lucide-arrow-down` 等）。XIcon 支持 `check` 与 `i-lucide-check` 两种写法，统一转换为 `@lucide/vue` 的 PascalCase 组件（如 `Check`）渲染；name 也支持直接传组件。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态 SVG，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 未输出 aria-hidden，装饰性图标需由使用方设置 |

**动效**

没有动效：静态展示组件。

**与 React 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| 图标集合 | @lucide/vue 全量映射 | 固定 iconMap（40 余个） |
| 默认尺寸 | 没有 | size 五档（size-3 ~ size-7，默认 md size-5） |
| mode="css" | 声明但未参与渲染 | 输出 i-lucide-* CSS 类名 span |
| customize | 声明但未参与渲染 | 渲染后回调修改 svg |
