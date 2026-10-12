---
title: ScrollArea 滚动区域
description: 内容溢出时可滚动的区域
---

# ScrollArea 滚动区域

内容溢出时可滚动的区域，支持 items 数组、虚拟滚动与滚动阴影。

<DemoPreview file="demos/vue/scroll-area-basic.vue" title="基础用法" description="items 数组渲染，固定高度内容滚动" />

## 横向滚动

`orientation="horizontal"` 时内容横向排列，横向溢出后通过底部滚动条滚动。

<DemoPreview file="demos/vue/scroll-area-horizontal.vue" title="横向滚动" description="orientation: horizontal" />

## 双向滚动

`orientation="both"` 时同时提供纵向与横向滚动条，适合宽表格等双向溢出内容。

<DemoPreview file="demos/vue/scroll-area-both.vue" title="双向滚动" description="orientation: both" />

## 虚拟滚动与阴影

`virtualize` 只渲染可视窗口附近的项，适合超长列表；`shadow` 在滚动边缘显示渐隐阴影，可传 `{ size }` 配置阴影宽度。

<DemoPreview file="demos/vue/scroll-area-virtual.vue" title="virtualize 与 shadow" description="1000 项虚拟滚动 + 边缘阴影" />

## ui 插槽自定义

`ui` 按主题插槽（root / viewport / item）覆盖类名。

<DemoPreview file="demos/vue/scroll-area-ui.vue" title="ui 插槽自定义" description="三个插槽键逐层注入类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-scroll-area
```

## API

<!--@include: ./api/scroll-area.md-->

### ScrollAreaVirtualizeOptions

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| estimateSize | number · (index) => number | 100 | 每项沿滚动方向的估计尺寸（px） |
| overscan | number | 12 | 可视区外预渲染的项数 |
| getItemKey | (index) => string · number | - | 返回项 key |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素（自身滚动） |
| viewport | 视口容器 |
| item | 单项容器 |

## 插槽

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| default | { item, index } | 项内容；无 items 时参数为 { item: {}, index: 0 } |

## 事件

| 名称 | 说明 |
| --- | --- |
| scroll | 滚动状态变化（isScrolling） |

**ref 方法**：scrollTo(position)

## hook

```ts
const [ScrollArea, scrollAreaApi] = useXScrollArea({ height: 200 })
scrollAreaApi.scrollTo(0)
```

## 动效

无动效：原生滚动行为。

## 设计规格

### 主题 token

**背景与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | outline-primary/25 focus-visible:outline-3 | 聚焦轮廓用 primary（#22c55e）25% |
| root / viewport / item | 无背景 token | 主题未内建背景色 |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| 无圆角 token | - | 主题未内建 |
| shadow=true | maskImage 线性渐变 | 由 useScrollShadow 生成，默认 24px 渐隐边缘 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| orientation=vertical | root overflow-y-auto overflow-x-hidden；viewport flex-col |
| orientation=horizontal | root overflow-x-auto overflow-y-hidden；viewport flex-row |
| externalScroll=true | root overflow-visible（外部滚动元素接管，配合 virtualize.getScrollElement） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无自定义键盘处理；root 为原生滚动容器（方向键 / PageUp / PageDown 原生行为），focus-visible 显示 primary 聚焦环 |
| ARIA | 无角色标注（Primitive div + data-orientation） |
| 动效 | 无（原生滚动）；虚拟滚动按滚动位置渲染窗口（@tanstack/vue-virtual，支持元素测量与多 lane）；scroll 事件上报 isScrolling |
