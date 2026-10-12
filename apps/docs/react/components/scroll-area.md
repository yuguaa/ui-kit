---
title: ScrollArea 滚动区域
description: 内容溢出时可滚动的区域
---

# ScrollArea 滚动区域

内容溢出时可滚动的区域，支持 items 数组、虚拟滚动与滚动阴影。

<script setup>
import ScrollAreaBasic from '@demos/react/scroll-area-basic'
import scrollAreaBasicRaw from '@demos/react/scroll-area-basic.tsx.code.txt?raw'
import ScrollAreaHorizontal from '@demos/react/scroll-area-horizontal'
import scrollAreaHorizontalRaw from '@demos/react/scroll-area-horizontal.tsx.code.txt?raw'
import ScrollAreaBoth from '@demos/react/scroll-area-both'
import scrollAreaBothRaw from '@demos/react/scroll-area-both.tsx.code.txt?raw'
import ScrollAreaVirtual from '@demos/react/scroll-area-virtual'
import scrollAreaVirtualRaw from '@demos/react/scroll-area-virtual.tsx.code.txt?raw'
import ScrollAreaUi from '@demos/react/scroll-area-ui'
import scrollAreaUiRaw from '@demos/react/scroll-area-ui.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="items 数组渲染，固定高度内容滚动" :code="scrollAreaBasicRaw">
  <ReactDemo :component="ScrollAreaBasic" />
</DemoBlock>

## 横向滚动

`orientation="horizontal"` 时内容横向排列，横向溢出后通过底部滚动条滚动。

<DemoBlock title="横向滚动" description="orientation: horizontal" :code="scrollAreaHorizontalRaw">
  <ReactDemo :component="ScrollAreaHorizontal" />
</DemoBlock>

## 双向滚动

`orientation="both"` 时同时提供纵向与横向滚动条，适合宽表格等双向溢出内容。

<DemoBlock title="双向滚动" description="orientation: both" :code="scrollAreaBothRaw">
  <ReactDemo :component="ScrollAreaBoth" />
</DemoBlock>

## 虚拟滚动与阴影

`virtualize` 只渲染可视窗口附近的项，适合超长列表；`shadow` 在滚动边缘显示渐隐阴影，可传 `{ size }` 配置阴影宽度。

<DemoBlock title="virtualize 与 shadow" description="1000 项虚拟滚动 + 边缘阴影" :code="scrollAreaVirtualRaw">
  <ReactDemo :component="ScrollAreaVirtual" />
</DemoBlock>

## ui 插槽自定义

`ui` 按主题插槽（root / viewport / item）覆盖类名。

<DemoBlock title="ui 插槽自定义" description="三个插槽键逐层注入类名" :code="scrollAreaUiRaw">
  <ReactDemo :component="ScrollAreaUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-scroll-area
```

## API

<!--@include: ./api/scroll-area.md-->

### XScrollAreaVirtualizeOptions

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

**ref 方法**：scrollTo(position)

## hook

```tsx
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
| root | outline-primary/25 focus-visible:outline-3 | 聚焦轮廓用 primary 25%（与 Vue 端一致） |
| root / viewport / item | 无背景 token | 主题未内建背景色 |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| 无圆角 token | - | 主题未内建 |
| shadow=true | maskImage 线性渐变 | 默认 24px 渐隐边缘（与 Vue 端实现一致） |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| orientation=vertical | root overflow-y-auto overflow-x-hidden；viewport flex-col |
| orientation=horizontal | root overflow-x-auto overflow-y-hidden；viewport flex-row |
| orientation=both | root overflow-auto（React 独有） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无自定义键盘处理；root 为原生滚动容器（方向键 / PageUp / PageDown 原生行为），focus-visible 显示 primary 聚焦环 |
| ARIA | 无角色标注（div + data-orientation） |
| 动效 | 无（原生滚动）；虚拟滚动为固定 estimateSize + 二分查找渲染窗口；onScrollChange 防抖 150ms |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| orientation 枚举 | vertical / horizontal | 额外支持 both（overflow-auto） |
| 外部滚动元素 | virtualize.getScrollElement 支持 | 不支持 |
| 虚拟滚动能力 | @tanstack/vue-virtual（元素测量、多 lane、gap、scrollMargin） | 固定 estimateSize + overscan + getItemKey |
| 滚动回调 | scroll 事件上报 isScrolling | onScrollChange 防抖 150ms |
| 高度控制 | 无内建 | height 属性 |
