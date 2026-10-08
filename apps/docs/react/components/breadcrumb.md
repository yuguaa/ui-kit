---
title: Breadcrumb 面包屑
description: 显示当前页面在层级结构中的位置
---

# Breadcrumb 面包屑

显示当前页面在层级结构中的位置。

<script setup>
import NavigationBasic from '@demos/react/navigation-basic'
import navigationBasicRaw from '@demos/react/navigation-basic.tsx.code.txt?raw'
import BreadcrumbIcons from '@demos/react/breadcrumb-icons'
import breadcrumbIconsRaw from '@demos/react/breadcrumb-icons.tsx.code.txt?raw'
import BreadcrumbLabelKey from '@demos/react/breadcrumb-label-key'
import breadcrumbLabelKeyRaw from '@demos/react/breadcrumb-label-key.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="层级结构与分隔符（示例见顶部）" :code="navigationBasicRaw">
  <ReactDemo :component="NavigationBasic" />
</DemoBlock>

## 图标

面包屑项可通过 icon 携带前置图标；separatorIcon 可把文本分隔符替换为图标，设置后优先于 separator。

<DemoBlock title="图标分隔符与前置图标" description="separatorIcon 属性 + items.icon" :code="breadcrumbIconsRaw">
  <ReactDemo :component="BreadcrumbIcons" />
</DemoBlock>

## 自定义标题字段

labelKey 指定面包屑项承载标题的字段名，默认 title；items 允许携带任意自定义字段。

<DemoBlock title="自定义字段名" description="labelKey = name" :code="breadcrumbLabelKeyRaw">
  <ReactDemo :component="BreadcrumbLabelKey" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-breadcrumb
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { title?, href?, icon? }[] | - | 面包屑项数组（末项可省略 href；icon 为前置图标；允许自定义字段，泛型保留） |
| labelKey | string | title | 面包屑项标题字段名 |
| separator | string | / | 分隔符 |
| separatorIcon | ReactNode | - | 图标分隔符，设置后优先于 separator 文本 |
| disabled | boolean | false | 是否禁用 |

## 动效

- hover：链接文字颜色过渡
- 无位移动画
