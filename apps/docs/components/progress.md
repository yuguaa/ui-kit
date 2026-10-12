---
title: Progress 进度条
description: 展示操作进度，支持不确定进度动画、步骤条与纵向布局
---

# Progress 进度条

展示操作的当前进度。modelValue 为 null 时进入不确定进度，按 animation 播放指示器动画；max 传数组时渲染步骤条。

## 确定进度

status 开启后显示百分比文本，status 插槽可自定义内容。

<DemoPreview file="demos/vue/progress-basic.vue" title="确定进度与百分比" description="modelValue / status / ui" />

## 不确定进度

modelValue 为 null 时指示器播放不确定动画，animation 提供 carousel / carousel-inverse / swing / elastic 四种。

<DemoPreview file="demos/vue/progress-indeterminate.vue" title="不确定进度动画" description="animation" />

## 步骤条

max 传数组时渲染步骤条，当前步骤高亮显示，step-{index} 插槽可自定义每步文案。

<DemoPreview file="demos/vue/progress-steps.vue" title="步骤条" description="max 数组 / step 插槽" />

## 纵向与反转

orientation 设为 vertical 后进度条纵向排布，inverted 反转进度方向。

<DemoPreview file="demos/vue/progress-vertical.vue" title="纵向与反转" description="orientation / inverted" />

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

## 设计规格

### 主题 token

**背景与文字**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| base | bg-accented | #e5e5e5（亮）/ #404040（暗） |
| status | text-dimmed | #a3a3a3（亮）/ #a3a3a3（暗） |
| step（first 变体） | text-muted | #737373（亮）/ #a3a3a3（暗） |

**颜色与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| indicator（color=`<color>`） | bg-`<color>` | 语义色 500 级（如 primary #22c55e） |
| steps（color=`<color>`） | text-`<color>` | 步骤文字同语义色 |
| indicator / steps（neutral） | bg-inverted / text-highlighted | #171717（亮）/ #ffffff（暗）与反色 |
| 非主题色 | 内联 backgroundColor / color | 任意 CSS 颜色值 |

**圆角**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| base / indicator | rounded-full | 胶囊形 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| size | 指示条粗细 2xs h-px → 2xl h-5（水平），w-px → w-5（垂直）；文字 2xs/xs text-xs、sm/md/lg text-sm、xl/2xl text-base |
| orientation=horizontal | root w-full flex flex-col；status flex-row + w-(--percent) min-w-fit transition-[width] |
| orientation=vertical | root h-full flex flex-row-reverse；status flex-col + h-(--percent) min-h-fit transition-[height] |
| inverted=true | status self-end；水平时步骤文字 text-start、垂直时 steps items-start |
| step=active | opacity-100 |
| step=first | opacity-100 + text-muted |
| step=other | opacity-0 |
| animation（不确定态） | carousel / carousel-inverse 2s linear infinite；swing / elastic 2s var(--ease-in-out) infinite；各有 vertical 与 rtl 变体 |

默认 animation carousel、color primary、size md。

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无（只读展示组件） |
| ARIA | ProgressRoot role="progressbar"（reka-ui 语义）；确定态 aria-valuemin / aria-valuemax / aria-valuenow；不确定态（modelValue=null）无 aria-valuenow；getValueText → aria-valuetext |
| 动效 | indicator 按百分比 translateX / translateY（transition-transform duration-200 ease-out，motion-reduce 关闭）；status 宽高过渡；不确定态按 animation 播放 keyframes（motion-reduce 降级为 animate-pulse） |
