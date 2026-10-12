---
title: InputNumber 数字输入
description: 带步进按钮的数字输入框
---

# InputNumber 数字输入

带加减步进按钮的数字输入框，支持横向 / 纵向两种步进方向。

<script setup>
import InputNumberBasic from "@demos/react/input-number-basic"
import inputNumberBasicRaw from '@demos/react/input-number-basic.tsx.code.txt?raw'
import InputNumberOrientation from "@demos/react/input-number-orientation"
import inputNumberOrientationRaw from '@demos/react/input-number-orientation.tsx.code.txt?raw'
import InputNumberSlots from "@demos/react/input-number-slots"
import inputNumberSlotsRaw from '@demos/react/input-number-slots.tsx.code.txt?raw'
import InputNumberUi from "@demos/react/input-number-ui"
import inputNumberUiRaw from '@demos/react/input-number-ui.tsx.code.txt?raw'
</script>

## 基础用法

min / max 限制取值范围（到达边界时对应步进按钮自动禁用），step 控制步长。

<DemoBlock title="范围与步长" description="value / min / max / step / placeholder" :code="inputNumberBasicRaw">
  <ReactDemo :component="InputNumberBasic" />
</DemoBlock>

## 方向与尺寸

orientation 区分 horizontal（两侧步进）与 vertical（右侧堆叠步进）；size 支持 xs / sm / md / lg / xl 五档。

<DemoBlock title="方向与尺寸" description="orientation / size" :code="inputNumberOrientationRaw">
  <ReactDemo :component="InputNumberOrientation" />
</DemoBlock>

## 步进按钮

increment / decrement 传入节点替换按钮内容；incrementDisabled / decrementDisabled 独立禁用；decrement=false 隐藏减号按钮。

<DemoBlock title="按钮内容与禁用态" description="increment / decrement / incrementDisabled / decrementDisabled" :code="inputNumberSlotsRaw">
  <ReactDemo :component="InputNumberSlots" />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名与渲染元素" description="ui 的 base 键 / render" :code="inputNumberUiRaw">
  <ReactDemo :component="InputNumberUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-number
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | number | 0 | 绑定值 |
| min / max | number | - | 最小值 / 最大值 |
| step | number | 1 | 步长 |
| disabled | boolean | false | 是否禁用 |
| orientation | horizontal · vertical | horizontal | 步进按钮方向：horizontal 两侧 / vertical 右侧堆叠 |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| placeholder | string | - | 占位提示文字 |
| increment | boolean · ReactNode | true | 是否显示加号按钮，或加号按钮的自定义内容 |
| decrement | boolean · ReactNode | true | 是否显示减号按钮，或减号按钮的自定义内容 |
| incrementDisabled | boolean | false | 禁用加号按钮 |
| decrementDisabled | boolean | false | 禁用减号按钮 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XInputNumberUi | - | 主题插槽类名 |
| onChange | (value) => void | - | 值变化回调 |

## ui 插槽

| 键 | 说明 |
| --- | --- |
| base | 数字输入框 |

## 动效

- 步进按钮：hover 背景过渡

## 设计规格

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | `bg-background` + `border border-input` | Vue 端 variant 体系（`bg-default` + `ring-accented`） |
| 文字 | 正文 `text-foreground`；`placeholder:text-muted-foreground` | `text-highlighted` / `text-dimmed` |
| 描边 | `border border-input`；步进按钮聚焦 `focus-visible:ring-3` + `focus-visible:ring-ring/50` | `ring-accented` + 色板 outline |
| 圆角 | `rounded-md`（6px） | 相同 |
| 阴影 | 无 | - |

React 端无 variant / color 属性：容器固定为 `bg-background` + `border-input`，聚焦环使用本地 `ring-ring/50`（与 Vue 端的色板聚焦环不同）。

### 变体

| 变体 | token 组合 |
| --- | --- |
| orientation horizontal（默认） | 步进按钮位于输入框左右两侧，输入框 `text-center` |
| orientation vertical | 步进按钮堆叠于右侧上下，输入框保留左对齐 |

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | 原生 `input type=number`：Up / Down 按 step 增减（浏览器行为），步进按钮可 Tab 聚焦并以 Enter / Space 触发 |
| 鼠标 | 滚轮改变值由浏览器原生 number input 提供 |
| ARIA | 原生 number input 隐式 `role=spinbutton`；步进按钮 `aria-label="increment" / "decrement"` |
| 动效 | 步进按钮 `transition-colors` + hover `bg-muted` |

**与 Vue 端差异**：React 端基于原生 number input + 按钮（Vue 端基于 reka-ui NumberField）；无 PageUp / PageDown / Home / End 语义、无 `stepSnapping` / `formatOptions` 等 NumberField 能力；到 min / max 边界时对应按钮自动禁用。
