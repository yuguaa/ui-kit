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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { title?, href?, icon?, active? }[] | - | 面包屑项数组（末项可省略 href；icon 为前置图标；active 强制激活项；允许自定义字段，泛型保留） |
| labelKey | string | title | 面包屑项标题字段名 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 激活项文字颜色 |
| separatorIcon | ReactNode | chevron-right | 图标分隔符，设置后替换默认图标 |
| separator | ReactNode | - | 分隔符插槽，设置后替换整个分隔符内容 |
| disabled | boolean | false | 是否禁用 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XBreadcrumbUi | - | 主题插槽类名 |

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
