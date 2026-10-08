---
title: Carousel 轮播
description: 多张内容轮播展示
---

# Carousel 轮播

多张内容轮播展示，基于 embla，支持自动播放、循环、指示点与纵向轮播。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
import CarouselArrows from '@demos/react/carousel-arrows'
import carouselArrowsRaw from '@demos/react/carousel-arrows.tsx.code.txt?raw'
import CarouselDots from '@demos/react/carousel-dots'
import carouselDotsRaw from '@demos/react/carousel-dots.tsx.code.txt?raw'
import CarouselVertical from '@demos/react/carousel-vertical'
import carouselVerticalRaw from '@demos/react/carousel-vertical.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="三张轮播与前后控制" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 箭头与指示点

arrows 控制左右切换按钮，dots 控制底部指示点。

<DemoBlock title="关闭箭头" description="arrows=false 隐藏按钮，dots 开启指示点并自动播放" :code="carouselDotsRaw">
  <ReactDemo :component="CarouselDots" />
</DemoBlock>

<DemoBlock title="关闭指示点" description="dots=false 隐藏指示点，仅保留左右箭头" :code="carouselArrowsRaw">
  <ReactDemo :component="CarouselArrows" />
</DemoBlock>

## 纵向轮播

orientation 设为 vertical 后轮播沿竖直方向滚动，箭头改为上下布局，指示点移到右侧。

<DemoBlock title="纵向轮播" description="orientation=vertical 竖直方向滚动" :code="carouselVerticalRaw">
  <ReactDemo :component="CarouselVertical" />
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
| arrows | boolean | true | 是否显示左右切换按钮 |
| dots | boolean | false | 是否显示指示点 |
| orientation | horizontal · vertical | horizontal | 轮播方向 |

**ref 方法**：next() · prev()

## hook

```tsx
const [Carousel, carouselApi] = useXCarousel({ items: [...] })
carouselApi.next()   // next / prev
```

## 动效

- 轮播切换：滑动过渡（embla）
- 指示点：选中色切换过渡（transition-colors）
