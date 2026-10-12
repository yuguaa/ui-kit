---
title: Carousel 轮播
description: 多张内容轮播展示
---

# Carousel 轮播

多张内容轮播展示，基于 embla，支持箭头、指示点、纵向轮播与多种插件能力。

<script setup>
import CarouselBasic from '@demos/vue/carousel-basic.vue'
import carouselBasicRaw from '@demos/vue/carousel-basic.vue.code.txt?raw'
import CarouselArrows from '@demos/vue/carousel-arrows.vue'
import carouselArrowsRaw from '@demos/vue/carousel-arrows.vue.code.txt?raw'
import CarouselDots from '@demos/vue/carousel-dots.vue'
import carouselDotsRaw from '@demos/vue/carousel-dots.vue.code.txt?raw'
import CarouselVertical from '@demos/vue/carousel-vertical.vue'
import carouselVerticalRaw from '@demos/vue/carousel-vertical.vue.code.txt?raw'
import CarouselPlugins from '@demos/vue/carousel-plugins.vue'
import carouselPluginsRaw from '@demos/vue/carousel-plugins.vue.code.txt?raw'
import CarouselUi from '@demos/vue/carousel-ui.vue'
import carouselUiRaw from '@demos/vue/carousel-ui.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="四张轮播与前后控制" :code="carouselBasicRaw">
  <CarouselBasic />
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

## 插件能力

`fade` 淡入淡出切换；`autoHeight` 容器高度跟随当前项；`autoScroll` 连续滚动（speed / direction）；`classNames` 给视口与轮播项加状态类名；`wheelGestures` 滚轮切换（forceWheelAxis）。

<DemoBlock title="fade · autoHeight · autoScroll · classNames · wheelGestures" description="五种插件能力的组合展示" :code="carouselPluginsRaw">
  <CarouselPlugins />
</DemoBlock>

## prev / next 与 ui 插槽

`prev` / `next` 传入 XButton 属性配置按钮，`prevIcon` / `nextIcon` 替换图标；`ui` 按主题插槽覆盖类名。

<DemoBlock title="按钮配置与 ui 插槽" description="prev / next 配置与图标，ui 插槽类名" :code="carouselUiRaw">
  <CarouselUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-carousel
```

## API

<!--@include: ./api/carousel.md-->

### CarouselItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| key | string · number | 索引 | 轮播项 key |
| class | string | - | 轮播项类名 |
| ui | { item: string } | - | 轮播项 item 插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| viewport | 视口 |
| container | 轮播容器 |
| item | 轮播项 |
| controls | 控制区 |
| arrows | 箭头按钮组 |
| prev | 上一页按钮 |
| next | 下一页按钮 |
| dots | 指示点容器 |
| dot | 指示点 |

## 插槽

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| default | { item, index } | 轮播项内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| select | 选中项变化（index） |
| next | 切到下一张 |
| prev | 切到上一张 |

**ref 方法**：next() · prev()

## hook

```ts
const [Carousel, carouselApi] = useXCarousel({ items: [...] })
carouselApi.next()   // next / prev
```

## 动效

- 轮播切换：滑动过渡（embla）
- fade：当前项透明度过渡（transition-opacity）
- 指示点：选中色切换过渡（transition-colors）

## 设计规格

### 主题 token

**背景与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| dot | bg-accented | #e5e5e5（亮）/ #404040（暗） |
| dot（active=true） | data-[state=active]:bg-inverted | #171717（亮）/ #ffffff（暗） |
| dot | outline-inverted/25 focus-visible:outline-3 | 聚焦轮廓用 inverted 25% |
| prev / next | XButton color=neutral variant=outline | 按钮主题由 XButton 承担 |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| prev / next / dot | rounded-full | 胶囊形 |
| 无 shadow | - | 轮播无阴影 token |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| orientation=horizontal | container flex-row -ms-4；item ps-4；prev start-4 sm:-start-12 top-1/2 -translate-y-1/2；next end-4 sm:-end-12 |
| orientation=vertical | container flex-col -mt-4；item pt-4；prev top-4 sm:-top-12 left-1/2 rotate-90（rtl -rotate-90）；next bottom-4 sm:-bottom-12 同旋转 |
| active=true | 选中指示点 data-[state=active]:bg-inverted |
| theme.transitions 开启 | dot 附加 transition（选中色切换过渡） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 根节点 tabindex="0" 可聚焦；方向键切换 slide（水平 ←/→，RTL 反转；垂直 ↑/↓），触发时 preventDefault |
| ARIA | 根 role="region" + aria-roledescription="carousel"；item：dots 关闭时 role="group" + aria-roledescription="slide"，dots 开启时 role="tabpanel"；dots 容器 role="tablist"（aria-label 来自 t('carousel.dots')）；指示点 button role="tab" + aria-selected + aria-label（t('carousel.goto')）+ data-state；prev / next 按钮 aria-label 来自 t('carousel.prev') / t('carousel.next')，不可滚动方向 disabled |
| 动效 | 轮播切换为 embla 原生滑动（无 CSS 动画类）；fade 插件开启时当前项透明度过渡；指示点 transition（theme.transitions 开启时）；autoplay / autoScroll 由插件驱动连续滚动 |
