---
title: Skeleton 骨架屏
description: 内容加载时的占位骨架，支持文本 / 圆形 / 矩形三种形状与宽高覆盖
---

# Skeleton 骨架屏

内容加载时的占位骨架。loading 为 false 时渲染子元素中的真实内容，适合包裹异步数据区域。骨架元素带 aria-busy / aria-label / aria-live / role 无障碍标记。

<script setup>
import SkeletonBasic from '@demos/react/skeleton-basic'
import skeletonBasicRaw from '@demos/react/skeleton-basic.tsx.code.txt?raw'
import SkeletonUi from '@demos/react/skeleton-ui'
import skeletonUiRaw from '@demos/react/skeleton-ui.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="形状与 loading 切换" description="variant 控制形状，width / height 覆盖尺寸，loading 切换骨架与真实内容" :code="skeletonBasicRaw">
  <ReactDemo :component="SkeletonBasic" />
</DemoBlock>

## ui 插槽与 render

ui.base 注入自定义类名；render 指定渲染元素。

<DemoBlock title="ui · render" description="ui：base，render 渲染元素" :code="skeletonUiRaw">
  <ReactDemo :component="SkeletonUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-skeleton
```

## API

<!--@include: ./api/skeleton.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 骨架根元素 |

## 动效

- 骨架：脉冲动画（animate-pulse）
