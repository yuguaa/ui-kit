---
title: Breadcrumb 面包屑
description: 显示当前页面在层级结构中的位置
---

# Breadcrumb 面包屑

显示当前页面在层级结构中的位置，末项默认激活，支持 color、separatorIcon 属性与 separator 插槽。

<script setup>
import BreadcrumbBasic from '@demos/react/breadcrumb-basic'
import breadcrumbBasicRaw from '@demos/react/breadcrumb-basic.tsx.code.txt?raw'
import BreadcrumbColor from '@demos/react/breadcrumb-color'
import breadcrumbColorRaw from '@demos/react/breadcrumb-color.tsx.code.txt?raw'
import BreadcrumbIcons from '@demos/react/breadcrumb-icons'
import breadcrumbIconsRaw from '@demos/react/breadcrumb-icons.tsx.code.txt?raw'
import BreadcrumbLabelKey from '@demos/react/breadcrumb-label-key'
import breadcrumbLabelKeyRaw from '@demos/react/breadcrumb-label-key.tsx.code.txt?raw'
import BreadcrumbUi from '@demos/react/breadcrumb-ui'
import breadcrumbUiRaw from '@demos/react/breadcrumb-ui.tsx.code.txt?raw'
</script>

## 基础用法

末项默认激活并标记 aria-current，中间项为链接。

<DemoBlock title="层级结构" description="items / 末项默认激活" :code="breadcrumbBasicRaw">
  <ReactDemo :component="BreadcrumbBasic" />
</DemoBlock>

## 颜色

color 控制激活项文字颜色，提供七种语义色。

<DemoBlock title="激活项颜色" description="color" :code="breadcrumbColorRaw">
  <ReactDemo :component="BreadcrumbColor" />
</DemoBlock>

## 图标

面包屑项可通过 icon 携带前置图标；separatorIcon 替换默认分隔符图标；separator 插槽自定义整个分隔符内容。

<DemoBlock title="前置图标与分隔符图标" description="items.icon / separatorIcon" :code="breadcrumbIconsRaw">
  <ReactDemo :component="BreadcrumbIcons" />
</DemoBlock>

## 自定义标题字段

labelKey 指定面包屑项承载标题的字段名，默认 title；items 允许携带任意自定义字段。

<DemoBlock title="自定义字段名" description="labelKey = name" :code="breadcrumbLabelKeyRaw">
  <ReactDemo :component="BreadcrumbLabelKey" />
</DemoBlock>

## ui 插槽

ui 按主题插槽（root / list / item / link / linkLeadingIcon / linkLabel / separator / separatorIcon）覆盖类名。

<DemoBlock title="ui 插槽自定义" description="ui 主题插槽类名" :code="breadcrumbUiRaw">
  <ReactDemo :component="BreadcrumbUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-breadcrumb
```

## API

<!--@include: ./api/breadcrumb.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器（nav） |
| list | 面包屑列表（ol） |
| item | 面包屑项（li） |
| link | 链接元素（a / span） |
| linkLeadingIcon | 项前置图标 |
| linkLabel | 标题文本容器 |
| separator | 分隔符容器 |
| separatorIcon | 默认分隔符图标 |

## 动效

- hover：中间项链接文字颜色过渡
- 无位移动画

## 设计规格

### 主题 token

- 背景：无
- 文字：激活项 `font-semibold text-{color}`（primary → `text-primary`；neutral → `text-foreground`；secondary → `text-secondary-foreground`）；非激活项 `text-muted-foreground font-medium`；可导航非激活项 hover `text-foreground`；分隔图标 `text-muted-foreground`
- 描边：无焦点描边类（链接无 `focus-visible:outline` 输出）
- 圆角与阴影：链接 `rounded-md`（6px）
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| active | true / false | true：`font-semibold` + `text-{color}`；false：`text-muted-foreground font-medium` |
| disabled | true（单项） | `cursor-not-allowed opacity-75`，渲染 `<span>` 无链接 |
| disabled | true（整体） | `pointer-events-none opacity-50` |
| color | 六色 + neutral | 激活文字色 |

### 交互

- 键盘：链接原生 Tab 聚焦；禁用项渲染 `<span>` 不可聚焦；整体禁用时容器 `pointer-events-none`
- ARIA：根 `<nav aria-label="breadcrumb">` + `ol / li`；末项且激活时 `aria-current="page"`；禁用项 `aria-disabled`；分隔符 `li role="presentation" aria-hidden="true"`
- 动效：可导航非激活项 hover 文字过渡；无位移动画

**双端差异**：

- Vue 端链接输出 `focus-visible:outline-3 outline-{color}/25`；React 端无焦点描边类
- Vue 端无整体 `disabled` prop（仅单项 disabled）；React 端支持整体 `disabled`（`pointer-events-none opacity-50`）
- React 端激活文字映射表（primary / secondary / neutral 各自映射）与 Vue 端主题（`text-{color}` / neutral `text-highlighted`）不完全相同
