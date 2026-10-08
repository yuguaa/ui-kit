---
title: ScrollArea 滚动区域
description: 内容溢出时可滚动的区域
---

# ScrollArea 滚动区域

内容溢出时可滚动的区域，支持三种滚动条显示时机。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
import ScrollAreaHorizontal from '@demos/react/scroll-area-horizontal'
import scrollAreaHorizontalRaw from '@demos/react/scroll-area-horizontal.tsx.code.txt?raw'
import ScrollAreaBoth from '@demos/react/scroll-area-both'
import scrollAreaBothRaw from '@demos/react/scroll-area-both.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="固定高度内容滚动" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
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

## 安装

```bash
npx shadcn@latest add @ui-kit/x-scroll-area
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height | number · string | - | 区域高度 |
| type | auto · always · hover | auto | 滚动条显示时机 |
| orientation | vertical · horizontal · both | vertical | 滚动方向 |

**ref 方法**：scrollTo(top)

## hook

```tsx
const [ScrollArea, scrollAreaApi] = useXScrollArea({ height: 200 })
scrollAreaApi.scrollTo(0)
```

## 动效

无动效：原生滚动行为。
