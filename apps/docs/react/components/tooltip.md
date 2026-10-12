---
title: Tooltip 文字提示
description: 简单的文字提示气泡，悬浮时显示
---

# Tooltip 文字提示

简单的文字提示气泡，悬浮时显示。支持 kbds 快捷键组合、content 插槽与 portal 渲染。

## 基础用法

`text` 直接给提示文本；`delayDuration` 控制打开延迟；`arrow` 显示指向触发元素的箭头。

<DemoPreview file="demos/react/tooltip-basic.tsx" react title="text · delayDuration · arrow" description="提示文本与延迟" />

## 快捷键提示

`kbds` 传入按键列表，元素可以是文本，也可以是带样式配置的对象（透传给 XKbd）。

<DemoPreview file="demos/react/tooltip-kbds.tsx" react title="kbds 快捷键" description="文本与对象两种按键项" />

## content 插槽与 ui 插槽

`content` 插槽替换 text / kbds 默认内容；`ui` 属性按主题插槽键（content / arrow / text / kbds / kbdsSize）覆盖类名。

<DemoPreview file="demos/react/tooltip-ui-custom.tsx" react title="content · ui" description="自定义内容与主题定制" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-tooltip
```

## API

<!--@include: ./api/tooltip.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| content | 气泡内容面板 |
| arrow | 指向箭头 |
| text | 提示文本 |
| kbds | 快捷键容器 |
| kbdsSize | 按键尺寸（xs · sm · md · lg · xl，默认 sm） |

## 插槽（props）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| children | ReactNode | 触发元素（default 插槽） |
| content | ReactNode | 自定义内容，替换 text / kbds 默认内容 |

## hook

```tsx
const [Tooltip, tooltipApi] = useXTooltip({ text: "提示文字" })
tooltipApi.show()   // show / hide / toggle / setState
```

## 动效

- 弹出：淡入 + 缩放（100ms）

## 设计规格

React 端基于 Base UI Tooltip，主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | bg-background | 对应 bg-default（shadcn --background：亮 oklch(1 0 0)，暗 oklch(0.145 0 0)） |
| arrow | fill-background | 对应 fill-bg |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | text-foreground | 对应 text-highlighted |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | ring-1 ring-border | 对应 ring ring-default |
| arrow | stroke-border | 对应 stroke-default |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | rounded-sm | 4px，与 Vue 端同值 |
| content | shadow-sm | 与 Vue 端同值 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| kbds | kbds 容器始终显示（inline-flex，无 hidden lg: 断点控制），按键尺寸默认 sm；与 Vue 端 hidden lg:inline-flex 存在差异 |
| disabled（无内容或 disabled=true） | 不渲染提示，与 Vue 端一致 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Base UI Tooltip 语义，与 Vue 端 reka Tooltip 一致：hover 或键盘焦点移入触发元素时打开；Esc 关闭；Provider delay 默认 700ms 与 Vue 端一致；disableHoverableContent 开启时内容可悬停保持 |
| ARIA | 与 Vue 端一致：content 为 role=tooltip；trigger 元素关联 aria-describedby |
| 动效 | content 进出场为 tailwindcss-animate 风格 animate-in / fade-in-0 / zoom-in-95（Vue 端为 scale-in / scale-out 100ms，实现方式不同，差异注明） |
