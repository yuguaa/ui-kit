---
title: PinInput 验证码输入
description: 分段输入验证码或密码，支持分组分隔符
---

# PinInput 验证码输入

分段输入验证码或密码。支持五种变体、七种语义色、五档尺寸、分组分隔符与掩码。

<script setup>
import PinInputBasic from '@demos/vue/pin-input-basic.vue'
import pinInputBasicRaw from '@demos/vue/pin-input-basic.vue.code.txt?raw'
import PinInputVariants from '@demos/vue/pin-input-variants.vue'
import pinInputVariantsRaw from '@demos/vue/pin-input-variants.vue.code.txt?raw'
import PinInputSizes from '@demos/vue/pin-input-sizes.vue'
import pinInputSizesRaw from '@demos/vue/pin-input-sizes.vue.code.txt?raw'
import PinInputSeparator from '@demos/vue/pin-input-separator.vue'
import pinInputSeparatorRaw from '@demos/vue/pin-input-separator.vue.code.txt?raw'
import PinInputStates from '@demos/vue/pin-input-states.vue'
import pinInputStatesRaw from '@demos/vue/pin-input-states.vue.code.txt?raw'
import PinInputUiCustom from '@demos/vue/pin-input-ui-custom.vue'
import pinInputUiCustomRaw from '@demos/vue/pin-input-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

默认 5 位输入，`v-model` 绑定当前值。

<DemoBlock title="基础用法" description="v-model 绑定，默认 5 位" :code="pinInputBasicRaw">
  <PinInputBasic />
</DemoBlock>

## 变体与语义色

<DemoBlock title="五种变体 × 七种语义色" description="variant 与 color 组合" :code="pinInputVariantsRaw">
  <PinInputVariants />
</DemoBlock>

## 尺寸

<DemoBlock title="五档尺寸" description="xs → xl" :code="pinInputSizesRaw">
  <PinInputSizes />
</DemoBlock>

## 分组分隔符

`separator` 传数字表示每隔 N 位插入，传数组表示在指定位置之后插入；`separator` 插槽可自定义分隔内容。

<DemoBlock title="separator 分组" description="数字、数组与插槽自定义" :code="pinInputSeparatorRaw">
  <PinInputSeparator />
</DemoBlock>

## 状态

<DemoBlock title="掩码、高亮、字号与禁用" description="mask / highlight / fixed / disabled / otp" :code="pinInputStatesRaw">
  <PinInputStates />
</DemoBlock>

## ui 插槽

<DemoBlock title="ui 插槽自定义" description="root / base / separator 覆盖类名" :code="pinInputUiCustomRaw">
  <PinInputUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-pin-input
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | '' | 绑定值（v-model） |
| defaultValue | string | '' | 默认值 |
| length | number | 5 | 位数 |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| highlight | boolean | false | 始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| separator | number · number[] | - | 分组分隔：数字为每隔 N 位插入，数组为指定位置之后插入 |
| mask | boolean | false | 掩码（视觉隐藏已输入字符） |
| disabled | boolean | false | 禁用 |
| autofocus | boolean | false | 自动聚焦第一个输入槽 |
| autofocusDelay | number | 0 | 自动聚焦延迟（ms） |
| otp | boolean | false | 一次性验证码提示（autocomplete=one-time-code） |
| type | string | text | 输入框类型（如 number） |
| placeholder | string | - | 占位提示文字 |
| required | boolean | false | 必填 |
| id | string | - | 与表单关联的 id |
| name | string | - | 表单提交字段名 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | PinInputUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| base | 单个输入槽 |
| separator | 分组分隔符容器 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| separator | 分隔符内容（{ index }），默认显示 • |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 值变化（v-model） |
| complete | 输入完成回调（value） |
| change | 输入完成时触发（Event，target.value 为当前值） |
| focus | 焦点进入组件时触发 |
| blur | 焦点离开组件时触发 |

## 动效

无进出场动效：光标闪烁为浏览器默认行为，聚焦描边由 transition-colors 过渡。
