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

## 插槽

| 名称 | 说明 |
| --- | --- |
| separator | 自定义整个分隔符内容，设置后替换默认图标 |

## 动效

- hover：中间项链接文字颜色过渡
- 无位移动画

## 设计规格

### 主题 token

- 背景：无
- 文字：激活项 `font-semibold text-{color}`（默认 `text-primary`，green 500；neutral → `text-highlighted`）；非激活项 `text-muted font-medium`；可导航非激活项 hover `text-default`；分隔图标 `text-muted`
- 描边：链接 `focus-visible:outline-3 outline-{color}/25`（neutral → `outline-inverted/25`）
- 圆角与阴影：链接 `rounded-md`（6px）
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| active | true / false | true：`font-semibold` + `text-{color}`；false：`text-muted font-medium` |
| disabled | true | `cursor-not-allowed opacity-75` |
| to | true | 输出导航链接，非激活态 hover `text-default` + `transition-colors` |
| color | 六色 + neutral | 激活文字色与焦点描边颜色 |

### 交互

- 键盘：链接原生 Tab 聚焦；disabled 项不可聚焦（XLink 内部移除 `href` 并输出 `tabindex=-1`）
- ARIA：根 `<nav aria-label="breadcrumb">` + `ol / li`；末项且激活时 `aria-current="page"`；分隔符 `li role="presentation" aria-hidden="true"`
- 动效：可导航非激活项 hover 文字过渡（`theme.transitions` 开启时）；无位移动画
