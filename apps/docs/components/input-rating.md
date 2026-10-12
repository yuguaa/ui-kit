---
title: InputRating 评分
description: 以星标形式进行评分输入
---

# InputRating 评分

以星标形式进行评分输入，支持半星、自定义图标、五档尺寸、七种语义色与横竖方向。


## 基础用法

`modelValue` 绑定评分值，支持 `v-model`。

<DemoPreview file="demos/vue/input-rating-basic.vue" title="基础用法" description="v-model 绑定评分值" />

## 语义色与方向

`color` 提供七种语义色，`orientation` 支持横向与纵向排列。

<DemoPreview file="demos/vue/input-rating-colors.vue" title="语义色与方向" description="color 控制填充星颜色，orientation 控制排列方向" />

## 尺寸与状态

`size` 控制星星大小，共 xs → xl 五档；`readonly` 仅作展示，`disabled` 禁用交互。

<DemoPreview file="demos/vue/input-rating-sizes.vue" title="五档尺寸与状态" description="size 五档对比，readonly / disabled 状态" />

## 图标、插槽与 ui

`icon` / `emptyIcon` 接受 XIcon 名称或自定义组件；`item` 插槽自定义每一项；`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/vue/input-rating-custom.vue" title="自定义图标与 ui" description="icon / emptyIcon / item 插槽 / ui 主题插槽" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-rating
```

## API

<!--@include: ./api/input-rating.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 评分根容器 |
| item | 单个评分项（可交互区域） |
| indicator | 高亮层容器（半星时裁剪） |
| icon | 高亮星图标 |
| emptyIcon | 空星图标 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| item | 自定义单项内容（{ index, filled, half }） |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 评分值变化 |
| change | 评分变化回调，载荷为 change 事件（target.value 为评分值） |

## 动效

- 星标：hover 放大（scale 110%）与聚焦描边过渡
- 无位移动画

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | 无（透明，星形图标承载颜色） | - |
| 文字 | 高亮星 `indicator: data-[state=active]:text-{color}` | primary 为 #22c55e；neutral 为 `text-highlighted` #171717 / #ffffff |
| 文字 | 空星 `emptyIcon: text-muted` | #737373 / #a3a3a3 |
| 描边 | 聚焦：`item: outline-{color}/25` + `focus-visible:outline-3` | primary 25% 透明度 |
| 圆角 | `item: rounded-sm` | 4px（--radius-sm） |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| readonly | `cursor-default`，不可交互（组件内部同时将控件置为禁用语义） |
| disabled | root `opacity-75` + `cursor-not-allowed`，item `pointer-events-none` |

可交互时（readonly 与 disabled 均关闭）item `hover:scale-110`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | reka-ui RatingRoot 遵循 Slider 模式：焦点落在当前评分的 item 上，方向键调整分值，Enter / Space 确认 |
| ARIA | reka-ui Rating 默认 `role=slider`，管理 `aria-valuemin` / `aria-valuemax` / `aria-valuenow`；readonly 映射 `aria-readonly`；每个 indicator 附带 `Rate {step} out of {length}` 的 aria-label |
| 动效 | item `transition`；hover 放大 `scale-110` |
