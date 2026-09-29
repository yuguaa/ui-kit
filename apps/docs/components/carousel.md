---
title: Carousel 轮播
description: 多张内容横向轮播展示
---

# Carousel 轮播

多张内容横向轮播展示，基于 embla，支持自动播放与循环。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="三张轮播与前后控制" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-carousel
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key }[] | - | 轮播项数组 |
| autoplay | boolean | false | 自动播放 |
| interval | number | 3000 | 自动播放间隔（ms） |
| loop | boolean | true | 循环播放 |
| disabled | boolean | false | 是否禁用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| item | 自定义轮播项（{ item }） |
| prev / next | 上一页 / 下一页按钮 |

## 事件

| 名称 | 说明 |
| --- | --- |
| next / prev | 下一张 / 上一张回调 |

## hook

```ts
const [Carousel, carouselApi] = useXCarousel({ items: [...] })
carouselApi.next()   // next / prev
```
