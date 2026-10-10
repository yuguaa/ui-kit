---
title: ScrollArea 滚动区域
description: 内容溢出时可滚动的区域
---

# ScrollArea 滚动区域

内容溢出时可滚动的区域，支持 items 数组、虚拟滚动与滚动阴影。

<script setup>
import ScrollAreaBasic from '@demos/vue/scroll-area-basic.vue'
import scrollAreaBasicRaw from '@demos/vue/scroll-area-basic.vue.code.txt?raw'
import ScrollAreaHorizontal from '@demos/vue/scroll-area-horizontal.vue'
import scrollAreaHorizontalRaw from '@demos/vue/scroll-area-horizontal.vue.code.txt?raw'
import ScrollAreaBoth from '@demos/vue/scroll-area-both.vue'
import scrollAreaBothRaw from '@demos/vue/scroll-area-both.vue.code.txt?raw'
import ScrollAreaVirtual from '@demos/vue/scroll-area-virtual.vue'
import scrollAreaVirtualRaw from '@demos/vue/scroll-area-virtual.vue.code.txt?raw'
import ScrollAreaUi from '@demos/vue/scroll-area-ui.vue'
import scrollAreaUiRaw from '@demos/vue/scroll-area-ui.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="items 数组渲染，固定高度内容滚动" :code="scrollAreaBasicRaw">
  <ScrollAreaBasic />
</DemoBlock>

## 横向滚动

`orientation="horizontal"` 时内容横向排列，横向溢出后通过底部滚动条滚动。

<DemoBlock title="横向滚动" description="orientation: horizontal" :code="scrollAreaHorizontalRaw">
  <ScrollAreaHorizontal />
</DemoBlock>

## 双向滚动

`orientation="both"` 时同时提供纵向与横向滚动条，适合宽表格等双向溢出内容。

<DemoBlock title="双向滚动" description="orientation: both" :code="scrollAreaBothRaw">
  <ScrollAreaBoth />
</DemoBlock>

## 虚拟滚动与阴影

`virtualize` 只渲染可视窗口附近的项，适合超长列表；`shadow` 在滚动边缘显示渐隐阴影，可传 `{ size }` 配置阴影宽度。

<DemoBlock title="virtualize 与 shadow" description="1000 项虚拟滚动 + 边缘阴影" :code="scrollAreaVirtualRaw">
  <ScrollAreaVirtual />
</DemoBlock>

## ui 插槽自定义

`ui` 按主题插槽（root / viewport / item）覆盖类名。

<DemoBlock title="ui 插槽自定义" description="三个插槽键逐层注入类名" :code="scrollAreaUiRaw">
  <ScrollAreaUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-scroll-area
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as | string · Component | div | 渲染为指定元素或组件 |
| orientation | vertical · horizontal · both | vertical | 滚动方向 |
| items | any[] | - | 项数组 |
| virtualize | boolean · ScrollAreaVirtualizeOptions | false | 启用虚拟滚动 |
| shadow | boolean · { size } | false | 滚动边缘阴影 |
| height | number · string | - | 区域高度 |
| ui | ScrollAreaUi | - | 主题插槽类名 |

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
