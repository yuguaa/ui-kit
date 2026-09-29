---
title: Carousel 轮播
description: 多张内容横向轮播展示
---

# Carousel 轮播

多张内容横向轮播展示，基于 embla，支持自动播放与循环。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="三张轮播与前后控制" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-carousel
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, content? }[] | - | 轮播项数组 |
| autoplay | boolean | false | 自动播放 |
| interval | number | 3000 | 自动播放间隔（ms） |
| loop | boolean | true | 循环播放 |
| disabled | boolean | false | 是否禁用 |

**ref 方法**：next() · prev()

## hook

```tsx
const [Carousel, carouselApi] = useXCarousel({ items: [...] })
carouselApi.next()   // next / prev
```
