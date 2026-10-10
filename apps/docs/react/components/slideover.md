---
title: Slideover 侧滑
description: 从侧边滑入的浮层，常用于移动端导航
---

# Slideover 侧滑

从侧边滑入的浮层，常用于移动端导航。支持四个滑入方向与内嵌模式，可通过 header / actions / body / footer / close 插槽自由组合。

<script setup>
import SlideoverBasicDemo from '@demos/react/slideover-basic-demo'
import slideoverBasicDemoRaw from '@demos/react/slideover-basic-demo.tsx.code.txt?raw'
import SlideoverVariants from '@demos/react/slideover-variants'
import slideoverVariantsRaw from '@demos/react/slideover-variants.tsx.code.txt?raw'
import SlideoverSlots from '@demos/react/slideover-slots'
import slideoverSlotsRaw from '@demos/react/slideover-slots.tsx.code.txt?raw'
import SlideoverUiCustom from '@demos/react/slideover-ui-custom'
import slideoverUiCustomRaw from '@demos/react/slideover-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="侧滑面板与导航链接" description="open / title / body" :code="slideoverBasicDemoRaw">
  <ReactDemo :component="SlideoverBasicDemo" />
</DemoBlock>

## 方向与变体

`side` 控制四个滑入方向；`inset` 让面板与屏幕边缘保留间距；`overlay` 为 false 时隐藏遮罩；`close` 为 false 时隐藏关闭按钮。

<DemoBlock title="side · inset · overlay · close" description="四个方向与内嵌模式" :code="slideoverVariantsRaw">
  <ReactDemo :component="SlideoverVariants" />
</DemoBlock>

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管整个面板内容（标题转为隐藏标题保证可访问性）。

<DemoBlock title="header / actions / body / footer / content" description="插槽自由组合" :code="slideoverSlotsRaw">
  <ReactDemo :component="SlideoverSlots" />
</DemoBlock>

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）覆盖类名。

<DemoBlock title="ui 主题插槽" description="按键覆盖 overlay / content / header / title 等类名" :code="slideoverUiCustomRaw">
  <ReactDemo :component="SlideoverUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-slideover
```

## API

<!--@include: ./api/slideover.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| overlay | 遮罩元素 |
| content | 内容面板 |
| header | 头部区域 |
| wrapper | 标题与说明容器 |
| body | 正文区域 |
| footer | 底部区域 |
| title | 标题 |
| description | 辅助说明 |
| close | 关闭按钮 |

## 插槽（props）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| children | ReactNode | 触发元素（default 插槽） |
| content | ReactNode | 面板内容，替换默认 header / body / footer |
| header | ReactNode | 自定义头部 |
| title | ReactNode | 自定义标题 |
| description | ReactNode | 自定义辅助说明 |
| actions | ReactNode | 头部操作区 |
| close | ReactNode | 自定义关闭按钮 |
| body | ReactNode | 正文 |
| footer | ReactNode | 底部区域 |

## hook

```tsx
const [Slideover, slideoverApi] = useXSlideover({ title: "侧滑面板" })
slideoverApi.open()   // open / close / toggle / setState / setData / getData
```

## 动效

- 面板：侧向滑入滑出（200ms）
- 遮罩：淡入淡出（200ms）
