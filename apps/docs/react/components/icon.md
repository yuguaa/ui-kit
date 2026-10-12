---
title: Icon 图标
description: 名称驱动的矢量图标，内置常用图标集合与五档尺寸
---

# Icon 图标

名称驱动的矢量图标（lucide），内置常用图标集合与五档尺寸，颜色可自定义。`mode` 切换 svg 渲染（默认）与 Iconify CSS 类名输出，`customize` 在 svg 渲染后修改图标元素。需要内置集合之外的图标时，直接引入 lucide-react 图标组件即可。

## 基础用法

<DemoPreview file="demos/react/icon-basic.tsx" react title="图标集合、尺寸与颜色" description="name 选择图标，size 选择尺寸，color 自定义颜色" />

## 渲染模式与定制

svg 模式渲染 lucide SVG，css 模式输出 `i-lucide-*` Iconify CSS 类名（配合 UnoCSS / Iconify 环境使用）；customize 在 svg 渲染后修改图标元素；ui 插槽注入根元素类名。

<DemoPreview file="demos/react/icon-modes.tsx" react title="mode · customize · ui" description="svg/css 渲染模式、customize 修改 svg、ui.root 类名" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-icon
```

## API

<!--@include: ./api/icon.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 图标根元素（svg 模式的 svg 元素 / css 模式的 span 元素） |

## 相关组件

- 键盘按键：[Kbd](/react/components/kbd)
- 分割线：[Separator](/react/components/separator)
- 骨架屏：[Skeleton](/react/components/skeleton)

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

| 项目 | 类名 | 说明 |
| --- | --- | --- |
| 背景 | 不使用 | 没有背景 token |
| 文字 | 继承 currentColor | color prop 输出内联 style |
| 描边 | 不使用 | 没有描边 token |
| 圆角 | 不使用 | 没有圆角 |
| 阴影 | 不使用 | 没有阴影 |

**尺寸**

| 类 | 值 | 说明 |
| --- | --- | --- |
| size | xs / sm / md / lg / xl | size-3 / size-4 / size-5 / size-6 / size-7；默认 md |

**图标命名**

固定 `iconMap` 集合（40 余个 kebab-case 名，如 `circle-alert` → lucide `CircleAlert`）；未收录的名字返回 null 不渲染。`mode="css"` 输出 `i-lucide-{name}` CSS 类名 span。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态 SVG，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| aria-hidden="true" | css 模式输出；svg 模式未输出，装饰性图标需由使用方设置 |

**动效**

没有动效：静态展示组件。

**与 Vue 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| 图标集合 | @lucide/vue 全量映射 | 固定 iconMap |
| 默认尺寸 | 没有 | size 五档 |
| mode="css" | 声明但未参与渲染 | 输出 CSS 类名 span |
| customize | 声明但未参与渲染 | 渲染后回调修改 svg |
