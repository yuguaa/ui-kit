---
title: RadioGroup 单选框组
description: 在一组可选项中进行单项选择
---

# RadioGroup 单选框组

在一组可选项中进行单项选择，支持组标题、横向 / 纵向排列、字段映射、语义色与五档尺寸。


<DemoPreview file="demos/vue/radio-group-basic.vue" title="基础用法" description="legend 组标题 / orientation 方向" />

## 字段映射与插槽

`valueKey` / `labelKey` / `descriptionKey` 映射选项对象字段；`label` / `description` 插槽自定义单项渲染。

<DemoPreview file="demos/vue/radio-group-field-mapping.vue" title="字段映射与插槽" description="valueKey / labelKey / descriptionKey 与 label / description 插槽" />

## 变体

`variant="button"` 将选项渲染为紧凑按钮，`buttonStyle` 控制选中填充。

<DemoPreview file="demos/vue/radio-group-variants.vue" title="radio 与 button 变体" description="variant / buttonStyle / orientation" />

## 语义色与尺寸

<DemoPreview file="demos/vue/radio-group-color-size.vue" title="七种语义色 × 五档尺寸" description="color / size / highlight" />

## 指示圆点位置

`indicator="hidden"` 时圆点隐藏，选项的 `icon` 显示在 label 上方。

<DemoPreview file="demos/vue/radio-group-indicator.vue" title="indicator 位置" description="start / end / hidden" />

## ui 插槽

`ui` 按主题插槽覆盖类名，选项内 `ui` 字段可单项覆盖。

<DemoPreview file="demos/vue/radio-group-ui-custom.vue" title="ui 插槽自定义" description="ui 键：root / fieldset / legend / item / container / base / indicator / wrapper / label / icon / description" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-radio-group
```

## API

<!--@include: ./api/radio-group.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| fieldset | 选项组容器 |
| legend | 组标题 |
| item | 单项容器 |
| container | 控件包裹层 |
| base | 单选框控件 |
| indicator | 选中圆点 |
| wrapper | label 与 description 容器 |
| label | 选项文字 |
| icon | indicator 为 hidden 时 label 上方的图标 |
| description | 辅助说明 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| legend | 组标题插槽 |
| label | 单项文字插槽，props 含 item 与 modelValue |
| description | 单项辅助说明插槽，props 含 item 与 modelValue |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 选中值变化 |
| change | 选中切换时触发，event.target.value 为当前值 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | 指示块 `indicator: bg-{color}` | primary 为 #22c55e；neutral 为 `bg-inverted` #171717 / #ffffff |
| 背景 | 选中圆点 `after:bg-default` | #ffffff / #171717 |
| 背景 | card / table 选中：`bg-{color}/10` | 主色 10% 透明度浅色底 |
| 文字 | `legend` / `label: text-default` | #404040 / #e5e5e5 |
| 文字 | `description: text-muted` | #737373 / #a3a3a3 |
| 描边 | `base: ring ring-inset ring-accented` | #d4d4d4 / #404040 |
| 描边 | 聚焦：`outline-{color}/25` + `focus-visible:outline-3` + `focus-visible:ring-{color}` | primary 25% 透明度 + 500 级 |
| 描边 | card / table：`border border-default`，选中 `border-{color}/50` | #e5e5e5 / #262626 |
| 圆角 | `base: rounded-full` · card / table `rounded-lg` | 圆形 / 8px（--radius-lg） |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| list（默认） | 无容器描边，`flex-wrap` 换行 |
| card | `border border-default rounded-lg`，hover `bg-elevated/50`，选中 `border-{color}/50` + `bg-{color}/10` |
| table | 相邻项边框相接（horizontal `-space-x-px` / vertical `-space-y-px`），选中 `border-{color}/50` + `bg-{color}/10` + `z-[1]` |

`indicator` 支持 start / end / hidden；hidden 时 base 为 `sr-only`，图标显示在 label 上方。`highlight: true` 时 base 叠加 `ring-{color}`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | reka-ui RadioGroupRoot 语义：Tab 进入组（焦点落在选中项），方向键在项间移动并选中，`loop` 开启时首尾循环 |
| ARIA | root `role=radiogroup`；单项 `role=radio` + `aria-checked`；方向键行为遵循 WAI-ARIA radio group 模式 |
| 动效 | card / table 变体 `transition-colors`（hover 与选中过渡）；无位移动画 |

disabled 时 item `opacity-75`，控件与文字 `cursor-not-allowed`；尺寸 xs / sm / md / lg / xl 五档。
