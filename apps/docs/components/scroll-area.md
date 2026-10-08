---
title: ScrollArea 滚动区域
description: 内容溢出时可滚动的区域
---

# ScrollArea 滚动区域

内容溢出时可滚动的区域，支持三种滚动条显示时机。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
import ScrollAreaHorizontal from '@demos/vue/scroll-area-horizontal.vue'
import scrollAreaHorizontalRaw from '@demos/vue/scroll-area-horizontal.vue.code.txt?raw'
import ScrollAreaBoth from '@demos/vue/scroll-area-both.vue'
import scrollAreaBothRaw from '@demos/vue/scroll-area-both.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="固定高度内容滚动" :code="contentBasicRaw">
  <ContentBasic />
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

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-scroll-area
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height | number · string | - | 区域高度 |
| type | auto · always · hover | auto | 滚动条显示时机 |
| orientation | vertical · horizontal · both | vertical | 滚动方向 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 滚动内容 |

**方法**（ref 调用）：scrollTo(top)

## hook

```ts
const [ScrollArea, scrollAreaApi] = useXScrollArea({ height: 200 })
scrollAreaApi.scrollTo(0)
```

## 动效

无动效：原生滚动行为。
