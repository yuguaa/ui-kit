---
title: ScrollArea 滚动区域
description: 内容溢出时可滚动的区域
---

# ScrollArea 滚动区域

内容溢出时可滚动的区域，支持三种滚动条显示时机。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="固定高度内容滚动" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
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

**ref 方法**：scrollTo(top)

## hook

```tsx
const [ScrollArea, scrollAreaApi] = useXScrollArea({ height: 200 })
scrollAreaApi.scrollTo(0)
```
