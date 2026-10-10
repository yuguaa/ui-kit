---
title: Breadcrumb 面包屑
description: 显示当前页面在层级结构中的位置
---

# Breadcrumb 面包屑

显示当前页面在层级结构中的位置，末项默认激活，支持 color、separatorIcon 属性与 separator 插槽。

<script setup>
import BreadcrumbBasic from '@demos/vue/breadcrumb-basic.vue'
import breadcrumbBasicRaw from '@demos/vue/breadcrumb-basic.vue.code.txt?raw'
import BreadcrumbColor from '@demos/vue/breadcrumb-color.vue'
import breadcrumbColorRaw from '@demos/vue/breadcrumb-color.vue.code.txt?raw'
import BreadcrumbIcons from '@demos/vue/breadcrumb-icons.vue'
import breadcrumbIconsRaw from '@demos/vue/breadcrumb-icons.vue.code.txt?raw'
import BreadcrumbLabelKey from '@demos/vue/breadcrumb-label-key.vue'
import breadcrumbLabelKeyRaw from '@demos/vue/breadcrumb-label-key.vue.code.txt?raw'
import BreadcrumbUi from '@demos/vue/breadcrumb-ui.vue'
import breadcrumbUiRaw from '@demos/vue/breadcrumb-ui.vue.code.txt?raw'
</script>

## 基础用法

末项默认激活并标记 aria-current，中间项为链接。

<DemoBlock title="层级结构" description="items / 末项默认激活" :code="breadcrumbBasicRaw">
  <BreadcrumbBasic />
</DemoBlock>

## 颜色

color 控制激活项文字颜色，提供七种语义色。

<DemoBlock title="激活项颜色" description="color" :code="breadcrumbColorRaw">
  <BreadcrumbColor />
</DemoBlock>

## 图标

面包屑项可通过 icon 携带前置图标；separatorIcon 替换默认分隔符图标；separator 插槽自定义整个分隔符内容。

<DemoBlock title="前置图标与分隔符图标" description="items.icon / separatorIcon" :code="breadcrumbIconsRaw">
  <BreadcrumbIcons />
</DemoBlock>

## 自定义标题字段

labelKey 指定面包屑项承载标题的字段名，默认 title；items 允许携带任意自定义字段。

<DemoBlock title="自定义字段名" description="labelKey = name" :code="breadcrumbLabelKeyRaw">
  <BreadcrumbLabelKey />
</DemoBlock>

## ui 插槽

ui 按主题插槽（root / list / item / link / linkLeadingIcon / linkLabel / separator / separatorIcon）覆盖类名。

<DemoBlock title="ui 插槽自定义" description="ui 主题插槽类名" :code="breadcrumbUiRaw">
  <BreadcrumbUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-breadcrumb
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { title?, href?, icon?, active?, [key: string]: unknown }[] | - | 面包屑项数组（末项可省略 href；icon 为前置图标，可为组件或 VNode；active 强制激活项） |
| labelKey | string | title | 面包屑项标题字段名 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 激活项文字颜色 |
| separatorIcon | string · Component | chevron-right | 分隔符图标：图标名或组件 |
| disabled | boolean | false | 是否禁用 |
| as | string · Component | nav | 渲染为指定元素或组件 |
| ui | BreadcrumbUi | - | 主题插槽类名 |

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

## 插槽

| 名称 | 说明 |
| --- | --- |
| separator | 自定义整个分隔符内容，设置后替换默认图标 |

## 动效

- hover：中间项链接文字颜色过渡
- 无位移动画
