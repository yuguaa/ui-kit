---
title: Skeleton 骨架屏
description: 内容加载时的占位骨架，支持文本 / 圆形 / 矩形三种形状与宽高覆盖
---

# Skeleton 骨架屏

内容加载时的占位骨架。loading 为 false 时渲染子元素中的真实内容，适合包裹异步数据区域。

<script setup>
import SkeletonBasic from '@demos/react/skeleton-basic'
import skeletonBasicRaw from '@demos/react/skeleton-basic.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="形状与 loading 切换" description="variant 控制形状，width / height 覆盖尺寸，loading 切换骨架与真实内容" :code="skeletonBasicRaw">
  <ReactDemo :component="SkeletonBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-skeleton
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| loading | boolean | true | 是否显示骨架，为 false 时渲染子元素 |
| variant | text · circle · rect | rect | 形状 |
| width / height | number · string | - | 宽度 / 高度，覆盖形状默认尺寸 |

## 动效

- 骨架：脉冲动画（animate-pulse）
