---
title: Progress 进度条
description: 展示操作进度，支持不确定进度动画、步骤条与纵向布局
---

# Progress 进度条

展示操作的当前进度。value 为 null 时进入不确定进度，按 animation 播放指示器动画；max 传数组时渲染步骤条。

<script setup>
import ProgressBasic from '@demos/react/progress-basic'
import progressBasicRaw from '@demos/react/progress-basic.tsx.code.txt?raw'
import ProgressIndeterminate from '@demos/react/progress-indeterminate'
import progressIndeterminateRaw from '@demos/react/progress-indeterminate.tsx.code.txt?raw'
import ProgressSteps from '@demos/react/progress-steps'
import progressStepsRaw from '@demos/react/progress-steps.tsx.code.txt?raw'
import ProgressVertical from '@demos/react/progress-vertical'
import progressVerticalRaw from '@demos/react/progress-vertical.tsx.code.txt?raw'
</script>

## 确定进度

status 开启后显示百分比文本，statusContent 可自定义内容。

<DemoBlock title="确定进度与百分比" description="value / status / ui" :code="progressBasicRaw">
  <ReactDemo :component="ProgressBasic" />
</DemoBlock>

## 不确定进度

value 为 null 时指示器播放不确定动画，animation 提供 carousel / carousel-inverse / swing / elastic 四种。

<DemoBlock title="不确定进度动画" description="animation" :code="progressIndeterminateRaw">
  <ReactDemo :component="ProgressIndeterminate" />
</DemoBlock>

## 步骤条

max 传数组时渲染步骤条，当前步骤高亮显示。

<DemoBlock title="步骤条" description="max 数组" :code="progressStepsRaw">
  <ReactDemo :component="ProgressSteps" />
</DemoBlock>

## 纵向与反转

orientation 设为 vertical 后进度条纵向排布，inverted 反转进度方向。

<DemoBlock title="纵向与反转" description="orientation / inverted" :code="progressVerticalRaw">
  <ReactDemo :component="ProgressVertical" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-progress
```

## API

<!--@include: ./api/progress.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| base | 进度轨道 |
| indicator | 进度指示器 |
| status | 百分比文本容器 |
| steps | 步骤条容器 |
| step | 步骤项 |

## 动效

- 值变化：指示器位移过渡（200ms）
- 不确定进度：按 animation 播放指示器动画
