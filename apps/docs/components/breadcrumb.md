---
title: Breadcrumb 面包屑
description: 显示当前页面在层级结构中的位置
---

# Breadcrumb 面包屑

显示当前页面在层级结构中的位置。

<script setup>
import NavigationBasic from '@demos/vue/navigation-basic.vue'
import navigationBasicRaw from '@demos/vue/navigation-basic.vue.code.txt?raw'
import BreadcrumbIcons from '@demos/vue/breadcrumb-icons.vue'
import breadcrumbIconsRaw from '@demos/vue/breadcrumb-icons.vue.code.txt?raw'
import BreadcrumbLabelKey from '@demos/vue/breadcrumb-label-key.vue'
import breadcrumbLabelKeyRaw from '@demos/vue/breadcrumb-label-key.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="层级结构与分隔符（示例见顶部）" :code="navigationBasicRaw">
  <NavigationBasic />
</DemoBlock>

## 图标

面包屑项可通过 icon 携带前置图标；separator-icon 插槽可把文本分隔符替换为图标，设置后优先于 separator。

<DemoBlock title="图标分隔符与前置图标" description="separator-icon 插槽 + items.icon" :code="breadcrumbIconsRaw">
  <BreadcrumbIcons />
</DemoBlock>

## 自定义标题字段

labelKey 指定面包屑项承载标题的字段名，默认 title；items 允许携带任意自定义字段。

<DemoBlock title="自定义字段名" description="labelKey = name" :code="breadcrumbLabelKeyRaw">
  <BreadcrumbLabelKey />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-breadcrumb
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { title?, href?, icon?, [key: string]: unknown }[] | - | 面包屑项数组（末项可省略 href；icon 为前置图标，可为组件或 VNode；允许自定义字段） |
| labelKey | string | title | 面包屑项标题字段名 |
| separator | string | / | 分隔符 |
| separator-icon | slot | - | 图标分隔符插槽，设置后优先于 separator 文本 |
| disabled | boolean | false | 是否禁用 |

## 动效

- hover：链接文字颜色过渡
- 无位移动画
