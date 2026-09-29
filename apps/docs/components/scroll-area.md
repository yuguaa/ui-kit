---
title: ScrollArea 滚动区域
description: 内容溢出时可滚动的区域
---

# ScrollArea 滚动区域

内容溢出时可滚动的区域，支持三种滚动条显示时机。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="固定高度内容滚动" :code="contentBasicRaw">
  <ContentBasic />
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
