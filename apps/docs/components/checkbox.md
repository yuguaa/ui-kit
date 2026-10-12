---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态、说明文字、语义色与三档尺寸。


<DemoPreview file="demos/vue/checkbox-basic-demo.vue" title="选中 / 半选 / 禁用 / 必选" description="v-model / indeterminate / disabled / required" />

## 说明文字

description 插槽在选项文字下方展示辅助说明。

<DemoPreview file="demos/vue/checkbox-description.vue" title="label 下方辅助说明" description="description 插槽" />

## 语义色

color 属性控制选中与半选状态下指示块的颜色。

<DemoPreview file="demos/vue/checkbox-color.vue" title="七种语义色" description="color 属性，选中与半选状态" />

## 尺寸

<DemoPreview file="demos/vue/checkbox-size.vue" title="三档尺寸" description="sm / md / lg，图标同步缩放" />

## 变体与指示块位置

`variant="card"` 时整个卡片可点击；`indicator` 控制指示块位置，`hidden` 时指示块隐藏、图标显示在 label 上方。

<DemoPreview file="demos/vue/checkbox-variant.vue" title="variant 与 indicator" description="list / card × start / end / hidden" />

## 自定义图标与聚焦环

`icon` / `indeterminateIcon` 自定义选中与半选图标；`highlight` 常显聚焦环。

<DemoPreview file="demos/vue/checkbox-icon.vue" title="icon 与 highlight" description="icon / indeterminateIcon / highlight" />

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/vue/checkbox-ui-custom.vue" title="ui 插槽自定义" description="ui 键：root / container / base / indicator / icon / wrapper / label / description" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-checkbox
```

## API

<!--@include: ./api/checkbox.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| container | 控件包裹层 |
| base | 复选框控件 |
| indicator | 勾选指示块 |
| icon | 选中 / 半选图标 |
| wrapper | label 与 description 容器 |
| label | 选项文字 |
| description | 辅助说明 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 选项文字插槽，props 含 label |
| description | 选项文字下方的辅助说明插槽，props 含 description |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 选中状态变化 |
| change | 状态切换时触发，event.target.value 为当前值 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | 指示块 `indicator: bg-{color}`（选中 / 半选填充） | primary 为 #22c55e；neutral 为 `bg-inverted` #171717 / #ffffff |
| 背景 | card 选中：`bg-{color}/10` | 主色 10% 透明度浅色底 |
| 文字 | `label: text-default` | #404040 / #e5e5e5 |
| 文字 | `description: text-muted` | #737373 / #a3a3a3 |
| 文字 | 指示块内图标 `text-inverted` | #ffffff / #171717 |
| 描边 | `base: ring ring-inset ring-accented` | #d4d4d4 / #404040 |
| 描边 | 聚焦：`outline-{color}/25` + `focus-visible:outline-3` + `focus-visible:ring-{color}` | primary 25% 透明度 + 500 级 |
| 描边 | card：`border border-default`，选中 `border-{color}/50` | #e5e5e5 / #262626；选中为色板 50% |
| 圆角 | `base: rounded-sm`（4px）· card `rounded-lg`（8px） | --radius-sm / --radius-lg |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| list（默认） | 控件与文字并排，无容器描边 |
| card | `border border-default rounded-lg`，hover `bg-elevated/50`，选中 `border-{color}/50` + `bg-{color}/10`（neutral 为 `border-inverted/50` + `bg-elevated`） |

`indicator` 支持 start / end / hidden；hidden 时 base 为 `sr-only`，图标移到 label 上方。`highlight: true` 时 base 叠加 `ring-{color}`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | reka-ui CheckboxRoot 语义：Tab 聚焦，Space 切换选中 / 半选 |
| ARIA | `role=checkbox`，选中态 `aria-checked`（true / false / mixed）；disabled 映射 `aria-disabled` |
| 动效 | card 变体 `transition-colors`（hover 背景与描边过渡）；无位移动画 |

disabled 时 root `opacity-75`，控件与文字 `cursor-not-allowed`；尺寸 xs / sm / md / lg / xl 五档。
