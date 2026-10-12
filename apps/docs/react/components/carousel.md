---
title: Carousel 轮播
description: 多张内容轮播展示
---

# Carousel 轮播

多张内容轮播展示，基于 embla，支持箭头、指示点、纵向轮播与多种插件能力。

<DemoPreview file="demos/react/carousel-basic.tsx" react title="基础用法" description="四张轮播与前后控制" />

## 箭头与指示点

arrows 控制左右切换按钮，dots 控制底部指示点。

<DemoPreview file="demos/react/carousel-dots.tsx" react title="关闭箭头" description="arrows=false 隐藏按钮，dots 开启指示点并自动播放" />

<DemoPreview file="demos/react/carousel-arrows.tsx" react title="关闭指示点" description="dots=false 隐藏指示点，仅保留左右箭头" />

## 纵向轮播

orientation 设为 vertical 后轮播沿竖直方向滚动，箭头改为上下布局，指示点移到右侧。

<DemoPreview file="demos/react/carousel-vertical.tsx" react title="纵向轮播" description="orientation=vertical 竖直方向滚动" />

## 插件能力

`fade` 淡入淡出切换；`autoHeight` 容器高度跟随当前项；`autoScroll` 连续滚动（speed / direction）；`classNames` 给视口与轮播项加状态类名；`wheelGestures` 滚轮切换（forceWheelAxis）。

<DemoPreview file="demos/react/carousel-plugins.tsx" react title="fade · autoHeight · autoScroll · classNames · wheelGestures" description="五种插件能力的组合展示" />

## prev / next 与 ui 插槽

`prev` / `next` 传入 XButton 属性配置按钮，`prevIcon` / `nextIcon` 替换图标；`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/react/carousel-ui.tsx" react title="按钮配置与 ui 插槽" description="prev / next 配置与图标，ui 插槽类名" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-carousel
```

## API

<!--@include: ./api/carousel.md-->
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

## 设计规格

### 主题 token

**背景与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| dot | bg-accent | shadcn 变量，对应 Vue bg-accented |
| dot（选中） | data-[state=active]:bg-foreground | 对应 Vue data-[state=active]:bg-inverted |
| dot | outline-foreground/25 focus-visible:outline-3 | 对应 Vue outline-inverted/25 |
| prev / next | XButton color=neutral variant=outline | 按钮主题由 XButton 承担 |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| prev / next / dot | rounded-full | 胶囊形 |
| 无 shadow | - | 轮播无阴影 token |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| orientation=horizontal | container flex-row -ms-4；item ps-4；prev top-1/2 start-4 sm:-start-12 -translate-y-1/2；next end-4 sm:-end-12 |
| orientation=vertical | container flex-col -mt-4；item pt-4；prev top-4 sm:-top-12 left-1/2 rotate-90；next bottom-4 sm:-bottom-12 同旋转 |
| fade | 当前项 opacity-100、其余 opacity-0 + transition-opacity duration-300 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 根节点 tabIndex=0 可聚焦；方向键切换 slide（水平 ←/→；垂直 ↑/↓），disabled 时不响应；触发时 preventDefault |
| ARIA | 根 role="region" + aria-roledescription="carousel"；item 始终 role="group" + aria-roledescription="slide"；dots 容器 role="tablist" + aria-label；指示点 button role="tab" + aria-selected + aria-label + data-state；prev / next 按钮 aria-label 固定文案，不可滚动方向 disabled |
| 动效 | 轮播切换为 embla 原生滑动；fade 插件开启时当前项透明度过渡（300ms）；autoplay / autoScroll 由插件驱动连续滚动；wheelGestures 滚轮手势切换（250ms 节流） |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| arrows 默认值 | false | true |
| dots 开启时 item 角色 | role="tabpanel" | 保持 role="group" |
| 指示点颜色 | bg-accented / bg-inverted | bg-accent / bg-foreground（shadcn 变量等价） |
| 默认图标 | appConfig.ui.icons.arrowLeft / arrowRight（RTL 自适应） | ChevronLeft / ChevronRight |
| vertical 按钮 RTL 旋转 | rtl:-rotate-90 | 无 rtl 处理 |
