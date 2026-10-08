---
title: Carousel 轮播
description: 多张内容轮播展示
---

# Carousel 轮播

多张内容轮播展示，基于 embla，支持自动播放、循环、指示点与纵向轮播。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
import CarouselArrows from '@demos/vue/carousel-arrows.vue'
import carouselArrowsRaw from '@demos/vue/carousel-arrows.vue.code.txt?raw'
import CarouselDots from '@demos/vue/carousel-dots.vue'
import carouselDotsRaw from '@demos/vue/carousel-dots.vue.code.txt?raw'
import CarouselVertical from '@demos/vue/carousel-vertical.vue'
import carouselVerticalRaw from '@demos/vue/carousel-vertical.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="三张轮播与前后控制" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 箭头与指示点

arrows 控制左右切换按钮，dots 控制底部指示点。

<DemoBlock title="关闭箭头" description="arrows=false 隐藏按钮，dots 开启指示点并自动播放" :code="carouselDotsRaw">
  <CarouselDots />
</DemoBlock>

<DemoBlock title="关闭指示点" description="dots=false 隐藏指示点，仅保留左右箭头" :code="carouselArrowsRaw">
  <CarouselArrows />
</DemoBlock>

## 纵向轮播

orientation 设为 vertical 后轮播沿竖直方向滚动，箭头改为上下布局，指示点移到右侧。

<DemoBlock title="纵向轮播" description="orientation=vertical 竖直方向滚动" :code="carouselVerticalRaw">
  <CarouselVertical />
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
| arrows | boolean | true | 是否显示左右切换按钮 |
| dots | boolean | false | 是否显示指示点 |
| orientation | horizontal · vertical | horizontal | 轮播方向 |

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

## 动效

- 轮播切换：滑动过渡（embla）
- 指示点：选中色切换过渡（transition-colors）
