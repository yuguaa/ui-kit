---
title: Separator 分割线
description: 水平或垂直分隔内容，支持标签、图标、头像、语义色、五档粗细与实线 / 虚线 / 点线
---

# Separator 分割线

在内容之间插入水平或垂直分隔。支持标签文字、图标与头像内容，通过 position 控制内容位置，通过 size / type / color 控制线条粗细、样式与语义色。

## 基础用法

<DemoPreview file="demos/react/separator-basic.tsx" react title="类型 · 粗细 · 语义色 · 方向" description="type 切换线条样式，size 控制粗细，color 使用语义色，orientation 切换方向" />

## 标签、图标与头像

label 显示文字，icon 显示图标，avatar 显示头像，三者优先级依次为 label → icon → avatar；position 控制内容位置。

<DemoPreview file="demos/react/separator-content.tsx" react title="标签 · 图标 · 头像" description="label / icon / avatar 内容与 position 位置" />

## ui 插槽自定义

ui 按主题插槽（root / border / container / icon / avatar / avatarSize / label）覆盖类名；avatarSize 控制分割线内头像的尺寸。

<DemoPreview file="demos/react/separator-ui.tsx" react title="ui 插槽类名" description="border / container / label / avatarSize 等插槽键" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-separator
```

## API

<!--@include: ./api/separator.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 分割线根元素 |
| border | 线条元素 |
| container | 内容容器 |
| icon | 图标元素 |
| avatar | 头像元素 |
| avatarSize | 头像尺寸（值语义，xs · sm · md · lg · xl） |
| label | 标签文字元素 |

## 动效

无动效：静态分割组件。

## 设计规格

### 主题 token

类名与 Vue 端一致：`root` 为 `flex items-center text-center`；容器为 `flex items-center font-medium text-sm text-muted-foreground`；线条颜色 token 为 `border-border`（≈ Vue border-default）。

| 项目 | 类名 | 说明 |
| --- | --- | --- |
| 背景 | 不使用 | 没有背景 token |
| 文字 | text-muted-foreground | 容器文字（≈ Vue text-default） |
| 描边 | border-{color} / border-border | 线条颜色 |
| 圆角 | 不使用 | 没有圆角 |
| 阴影 | 不使用 | 没有阴影 |

**变体**

| 变体 | 取值 | 说明 |
| --- | --- | --- |
| color | primary / secondary / neutral（默认）/ success / info / warning / error | 线条颜色 |
| orientation | horizontal（默认）/ vertical | root 与线条方向：horizontal 为 `w-full flex-row` + `border-t`；vertical 为 `h-full flex-col` + `border-s` |
| size | xs（默认）/ sm / md / lg / xl | 线条粗细 1px ~ 5px（border-t-[2px] ~ border-t-[5px]） |
| type | solid（默认）/ dashed / dotted | 线条样式（border-dashed / border-dotted） |
| position | start / center（默认）/ end | 内容与线条的间距，与 Vue 端一致（me-3 / mx-3 / ms-3，vertical 为 mb-2 / my-2 / mt-2） |

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态分割，没有可聚焦行为 |

**ARIA**（基于 @base-ui Separator 语义）

| 属性 | 场景 |
| --- | --- |
| role="separator" | decorative 为 false（默认）时输出 |
| aria-orientation="vertical" | decorative 为 false 且 orientation 为 vertical 时输出 |
| role="none" | decorative 为 true 时显式输出并移除 aria-orientation |
| data-orientation | 始终输出 horizontal / vertical |

**动效**

没有动效：静态分割组件。

**与 Vue 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| 容器文字 | text-default text-sm | text-muted-foreground text-sm（语义等价） |
| avatarSize 默认 | 2xs | xs |
| decorative 处理 | reka-ui 输出 role="none" | 显式输出 role="none" 并移除 aria-orientation（语义一致） |
