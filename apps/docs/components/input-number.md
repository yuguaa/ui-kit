---
title: InputNumber 数字输入
description: 带步进按钮的数字输入框
---

# InputNumber 数字输入

带加减步进按钮的数字输入框，支持横向 / 纵向两种步进方向。

<script setup>
import InputNumberBasic from '@demos/vue/input-number-basic.vue'
import inputNumberBasicRaw from '@demos/vue/input-number-basic.vue.code.txt?raw'
import InputNumberOrientation from '@demos/vue/input-number-orientation.vue'
import inputNumberOrientationRaw from '@demos/vue/input-number-orientation.vue.code.txt?raw'
import InputNumberSlots from '@demos/vue/input-number-slots.vue'
import inputNumberSlotsRaw from '@demos/vue/input-number-slots.vue.code.txt?raw'
import InputNumberUi from '@demos/vue/input-number-ui.vue'
import inputNumberUiRaw from '@demos/vue/input-number-ui.vue.code.txt?raw'
</script>

## 基础用法

min / max 限制取值范围（到达边界时对应步进按钮自动禁用），step 控制步长。

<DemoBlock title="范围与步长" description="modelValue / min / max / step / placeholder" :code="inputNumberBasicRaw">
  <InputNumberBasic />
</DemoBlock>

## 方向与尺寸

orientation 区分 horizontal（两侧步进）与 vertical（右侧堆叠步进）；size 支持 xs / sm / md / lg / xl 五档。

<DemoBlock title="方向与尺寸" description="orientation / size" :code="inputNumberOrientationRaw">
  <InputNumberOrientation />
</DemoBlock>

## 步进按钮

increment / decrement 插槽替换按钮内容；incrementDisabled / decrementDisabled 独立禁用；decrement=false 隐藏减号按钮。

<DemoBlock title="按钮插槽与禁用态" description="increment / decrement / incrementDisabled / decrementDisabled" :code="inputNumberSlotsRaw">
  <InputNumberSlots />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名与渲染元素" description="ui 的 base 键 / as" :code="inputNumberUiRaw">
  <InputNumberUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-number
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 绑定值（支持 v-model） |
| min / max | number | - | 最小值 / 最大值 |
| step | number | 1 | 步长 |
| disabled | boolean | false | 是否禁用 |
| orientation | horizontal · vertical | horizontal | 步进按钮方向：horizontal 两侧 / vertical 右侧堆叠 |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| placeholder | string | - | 占位提示文字 |
| increment | boolean | true | 是否显示加号按钮 |
| decrement | boolean | true | 是否显示减号按钮 |
| incrementDisabled | boolean | false | 禁用加号按钮 |
| decrementDisabled | boolean | false | 禁用减号按钮 |
| as | string · Component | span | 渲染为指定元素或组件 |
| ui | InputNumberUi | - | 主题插槽类名 |

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
