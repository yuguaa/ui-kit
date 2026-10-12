---
title: InputNumber 数字输入
description: 带步进按钮的数字输入框
---

# InputNumber 数字输入

带加减步进按钮的数字输入框，支持横向 / 纵向两种步进方向。


## 基础用法

min / max 限制取值范围（到达边界时对应步进按钮自动禁用），step 控制步长。

<DemoPreview file="demos/vue/input-number-basic.vue" title="范围与步长" description="modelValue / min / max / step / placeholder" />

## 方向与尺寸

orientation 区分 horizontal（两侧步进）与 vertical（右侧堆叠步进）；size 支持 xs / sm / md / lg / xl 五档。

<DemoPreview file="demos/vue/input-number-orientation.vue" title="方向与尺寸" description="orientation / size" />

## 步进按钮

increment / decrement 插槽替换按钮内容；incrementDisabled / decrementDisabled 独立禁用；decrement=false 隐藏减号按钮。

<DemoPreview file="demos/vue/input-number-slots.vue" title="按钮插槽与禁用态" description="increment / decrement / incrementDisabled / decrementDisabled" />

## ui 插槽自定义

<DemoPreview file="demos/vue/input-number-ui.vue" title="主题插槽类名与渲染元素" description="ui 的 base 键 / as" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-number
```

## API

<!--@include: ./api/input-number.md-->

## 插槽

| 名称 | 说明 |
| --- | --- |
| increment | 加号按钮内容 |
| decrement | 减号按钮内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| change | 值变化回调（update:modelValue 支持 v-model） |

## ui 插槽

| 键 | 说明 |
| --- | --- |
| base | 数字输入框 |

## 动效

- 步进按钮：hover 背景过渡

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | 继承 Input 变体：`bg-default`（outline）· `bg-elevated/50`（soft）· `bg-elevated`（subtle） | #ffffff / #171717；#f5f5f5 / #262626 |
| 文字 | `text-highlighted`，horizontal 时 `text-center` | #171717 / #ffffff |
| 描边 | `ring ring-inset ring-accented`（outline / subtle） | #d4d4d4 / #404040 |
| 描边 | 聚焦：`outline-{color}/25` + `focus-visible:ring-{color}` | primary 为 #22c55e（25% 透明度） |
| 圆角 | `rounded-md` | 6px（--radius-md） |
| 阴影 | 无 | - |

步进按钮使用 XButton `variant="link"`，颜色与尺寸继承组件自身；disabled 时按钮容器 `opacity-75` + `cursor-not-allowed`。

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `text-highlighted` + `bg-default` + `ring ring-inset ring-accented` |
| soft / subtle / ghost / none | 与 Input 相同组合（见 Input 设计规格） |

`orientation: vertical` 时步进按钮堆叠在右侧（`scale-80`，按钮 py-0），horizontal 时分别位于左右两侧。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | reka-ui NumberFieldRoot 语义：Up / Down 按 step 增减，PageUp / PageDown 按 step × 10 增减，Home / End 跳至 min / max；数字可直接输入 |
| 鼠标 | 滚轮默认改变值（`disableWheelChange` 关闭、`invertWheelChange` 反转） |
| ARIA | reka-ui NumberField 默认 `role=spinbutton`，暴露 `aria-valuemin` / `aria-valuemax` / `aria-valuenow`；步进按钮 aria-label 来自 locale 文案 |
| 动效 | base `transition-colors`；步进按钮 hover 背景过渡 |
