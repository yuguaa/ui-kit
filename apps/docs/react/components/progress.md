---
title: Progress 进度条
description: 展示操作进度，支持不确定进度动画、步骤条与纵向布局
---

# Progress 进度条

展示操作的当前进度。value 为 null 时进入不确定进度，按 animation 播放指示器动画；max 传数组时渲染步骤条。

## 确定进度

status 开启后显示百分比文本，statusContent 可自定义内容。

<DemoPreview file="demos/react/progress-basic.tsx" react title="确定进度与百分比" description="value / status / ui" />

## 不确定进度

value 为 null 时指示器播放不确定动画，animation 提供 carousel / carousel-inverse / swing / elastic 四种。

<DemoPreview file="demos/react/progress-indeterminate.tsx" react title="不确定进度动画" description="animation" />

## 步骤条

max 传数组时渲染步骤条，当前步骤高亮显示。

<DemoPreview file="demos/react/progress-steps.tsx" react title="步骤条" description="max 数组" />

## 纵向与反转

orientation 设为 vertical 后进度条纵向排布，inverted 反转进度方向。

<DemoPreview file="demos/react/progress-vertical.tsx" react title="纵向与反转" description="orientation / inverted" />

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

## 设计规格

### 主题 token

**背景与文字**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| base | bg-muted | shadcn 变量（Vue 端为 bg-accented） |
| status | text-muted-foreground | 对应 Vue text-dimmed |
| step（first 变体） | text-muted-foreground | 对应 Vue text-muted |

**颜色与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| indicator（color=`<color>`） | bg-`<color>` | 语义色底（如 primary） |
| steps（color=`<color>`） | text-`<color>` | 步骤文字同语义色；secondary → text-secondary-foreground |
| indicator / steps（neutral） | bg-foreground / text-foreground | 对应 Vue bg-inverted / text-highlighted |
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
| step=active / first / other | opacity-100 / opacity-100 + 弱化文字 / opacity-0 |
| animation（不确定态） | carousel / carousel-inverse 2s linear infinite；swing / elastic 2s ease-in-out infinite；各有 vertical 变体（无 rtl 变体） |

默认 animation carousel、color primary、size md。

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无（只读展示组件） |
| ARIA | Base UI Progress 渲染 role="progressbar"；确定态带 aria-valuemin / aria-valuemax / aria-valuenow；不确定态（value=null）无当前值；getValueLabel → 根元素 aria-label；getValueText → aria-valuetext |
| 动效 | indicator 按百分比 translateX / translateY（transition-transform duration-200 ease-out，motion-reduce 关闭）；status 宽高过渡；不确定态按 animation 播放 keyframes（motion-reduce 降级为 animate-pulse） |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| base 底色 | bg-accented（#e5e5e5 / #404040） | bg-muted（#fafafa / #262626） |
| secondary 步骤文字 | text-secondary | text-secondary-foreground |
| 不确定态动画 rtl | carousel 等含 rtl 变体 | 无 rtl 变体 |
| 结构 | indicator 直接置于 base | 多一层 Track 包裹 indicator |
