---
title: Icon 图标
description: 名称驱动的矢量图标，内置常用图标集合与五档尺寸
---

# Icon 图标

名称驱动的矢量图标（lucide），内置常用图标集合与五档尺寸，颜色可自定义。`mode` 切换 svg 渲染（默认）与 Iconify CSS 类名输出，`customize` 在 svg 渲染后修改图标元素。需要内置集合之外的图标时，直接引入 lucide-react 图标组件即可。

<script setup>
import IconBasic from '@demos/react/icon-basic'
import iconBasicRaw from '@demos/react/icon-basic.tsx.code.txt?raw'
import IconModes from '@demos/react/icon-modes'
import iconModesRaw from '@demos/react/icon-modes.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="图标集合、尺寸与颜色" description="name 选择图标，size 选择尺寸，color 自定义颜色" :code="iconBasicRaw">
  <ReactDemo :component="IconBasic" />
</DemoBlock>

## 渲染模式与定制

svg 模式渲染 lucide SVG，css 模式输出 `i-lucide-*` Iconify CSS 类名（配合 UnoCSS / Iconify 环境使用）；customize 在 svg 渲染后修改图标元素；ui 插槽注入根元素类名。

<DemoBlock title="mode · customize · ui" description="svg/css 渲染模式、customize 修改 svg、ui.root 类名" :code="iconModesRaw">
  <ReactDemo :component="IconModes" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-icon
```

## API

<!--@include: ./api/icon.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 图标根元素（svg 模式的 svg 元素 / css 模式的 span 元素） |

## 相关组件

- 键盘按键：[Kbd](/react/components/kbd)
- 分割线：[Separator](/react/components/separator)
- 骨架屏：[Skeleton](/react/components/skeleton)

## 动效

无动效：静态展示组件。
