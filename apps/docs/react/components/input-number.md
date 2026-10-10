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
