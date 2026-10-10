---
title: Progress 进度条
description: 展示操作进度，支持不确定进度动画、步骤条与纵向布局
---

# Progress 进度条

展示操作的当前进度。modelValue 为 null 时进入不确定进度，按 animation 播放指示器动画；max 传数组时渲染步骤条。

<script setup>
import ProgressBasic from '@demos/vue/progress-basic.vue'
import progressBasicRaw from '@demos/vue/progress-basic.vue.code.txt?raw'
import ProgressIndeterminate from '@demos/vue/progress-indeterminate.vue'
import progressIndeterminateRaw from '@demos/vue/progress-indeterminate.vue.code.txt?raw'
import ProgressSteps from '@demos/vue/progress-steps.vue'
import progressStepsRaw from '@demos/vue/progress-steps.vue.code.txt?raw'
import ProgressVertical from '@demos/vue/progress-vertical.vue'
import progressVerticalRaw from '@demos/vue/progress-vertical.vue.code.txt?raw'
</script>

## 确定进度

status 开启后显示百分比文本，status 插槽可自定义内容。

<DemoBlock title="确定进度与百分比" description="modelValue / status / ui" :code="progressBasicRaw">
  <ProgressBasic />
</DemoBlock>

## 不确定进度

modelValue 为 null 时指示器播放不确定动画，animation 提供 carousel / carousel-inverse / swing / elastic 四种。

<DemoBlock title="不确定进度动画" description="animation" :code="progressIndeterminateRaw">
  <ProgressIndeterminate />
</DemoBlock>

## 步骤条

max 传数组时渲染步骤条，当前步骤高亮显示，step-{index} 插槽可自定义每步文案。

<DemoBlock title="步骤条" description="max 数组 / step 插槽" :code="progressStepsRaw">
  <ProgressSteps />
</DemoBlock>

## 纵向与反转

orientation 设为 vertical 后进度条纵向排布，inverted 反转进度方向。

<DemoBlock title="纵向与反转" description="orientation / inverted" :code="progressVerticalRaw">
  <ProgressVertical />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-progress
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

## 插槽

| 名称 | 说明 |
| --- | --- |
| status | 自定义百分比内容，接收 percent |
| step-{index} | 自定义第 index 步文案，接收 step |

## 动效

- 值变化：指示器位移过渡（200ms）
- 不确定进度：按 animation 播放指示器动画
