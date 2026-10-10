---
title: Carousel 轮播
description: 多张内容轮播展示
---

# Carousel 轮播

多张内容轮播展示，基于 embla，支持箭头、指示点、纵向轮播与多种插件能力。

<script setup>
import CarouselBasic from '@demos/react/carousel-basic'
import carouselBasicRaw from '@demos/react/carousel-basic.tsx.code.txt?raw'
import CarouselArrows from '@demos/react/carousel-arrows'
import carouselArrowsRaw from '@demos/react/carousel-arrows.tsx.code.txt?raw'
import CarouselDots from '@demos/react/carousel-dots'
import carouselDotsRaw from '@demos/react/carousel-dots.tsx.code.txt?raw'
import CarouselVertical from '@demos/react/carousel-vertical'
import carouselVerticalRaw from '@demos/react/carousel-vertical.tsx.code.txt?raw'
import CarouselPlugins from '@demos/react/carousel-plugins'
import carouselPluginsRaw from '@demos/react/carousel-plugins.tsx.code.txt?raw'
import CarouselUi from '@demos/react/carousel-ui'
import carouselUiRaw from '@demos/react/carousel-ui.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="四张轮播与前后控制" :code="carouselBasicRaw">
  <ReactDemo :component="CarouselBasic" />
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

## 插件能力

`fade` 淡入淡出切换；`autoHeight` 容器高度跟随当前项；`autoScroll` 连续滚动（speed / direction）；`classNames` 给视口与轮播项加状态类名；`wheelGestures` 滚轮切换（forceWheelAxis）。

<DemoBlock title="fade · autoHeight · autoScroll · classNames · wheelGestures" description="五种插件能力的组合展示" :code="carouselPluginsRaw">
  <ReactDemo :component="CarouselPlugins" />
</DemoBlock>

## prev / next 与 ui 插槽

`prev` / `next` 传入 XButton 属性配置按钮，`prevIcon` / `nextIcon` 替换图标；`ui` 按主题插槽覆盖类名。

<DemoBlock title="按钮配置与 ui 插槽" description="prev / next 配置与图标，ui 插槽类名" :code="carouselUiRaw">
  <ReactDemo :component="CarouselUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-carousel
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XCarouselItem[] | [] | 轮播项数组 |
| autoplay | boolean | false | 自动播放 |
| interval | number | 3000 | 自动播放间隔（ms） |
| loop | boolean | true | 循环播放 |
| disabled | boolean | false | 是否禁用键盘切换 |
| arrows | boolean | true | 是否显示左右切换按钮 |
| dots | boolean | false | 是否显示指示点 |
| orientation | horizontal · vertical | horizontal | 轮播方向 |
| fade | boolean | false | 淡入淡出切换，每次只显示当前项 |
| autoHeight | boolean | false | 容器高度跟随当前项 |
| autoScroll | boolean · { speed, direction, stopOnInteraction } | false | 连续滚动 |
| classNames | boolean · { loop, draggable, dragging, snapped, inView } | false | 类名钩子：loop / draggable 加在视口，dragging 拖拽期间加在视口，snapped / inView 加在轮播项 |
| wheelGestures | boolean · { forceWheelAxis } | false | 滚轮手势切换 |
| prev | XButtonProps | { variant: outline, color: neutral } | 上一页按钮配置 |
| prevIcon | XIconName · ComponentType | chevron-left | 上一页按钮图标 |
| next | XButtonProps | { variant: outline, color: neutral } | 下一页按钮配置 |
| nextIcon | XIconName · ComponentType | chevron-right | 下一页按钮图标 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XCarouselUi | - | 主题插槽类名 |
| children | ReactNode · (props) => ReactNode | - | 轮播项内容，函数形式接收 { item, index } |
| onSelect | (index: number) => void | - | 选中项变化回调 |

### XCarouselItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| key | string · number | 索引 | 轮播项 key |
| content | ReactNode | - | 轮播项内容 |
| className | string | - | 轮播项类名 |
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

**ref 方法**：next() · prev()

## hook

```tsx
const [Carousel, carouselApi] = useXCarousel({ items: [...] })
carouselApi.next()   // next / prev
```

## 动效

- 轮播切换：滑动过渡（embla）
- fade：当前项透明度过渡（transition-opacity）
- 指示点：选中色切换过渡（transition-colors）
