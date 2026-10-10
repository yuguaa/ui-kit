---
title: PinInput 验证码输入
description: 分段输入验证码或密码，支持分组分隔符
---

# PinInput 验证码输入

分段输入验证码或密码。支持五种变体、七种语义色、五档尺寸、分组分隔符与掩码。

<script setup>
import PinInputBasic from '@demos/react/pin-input-basic'
import pinInputBasicRaw from '@demos/react/pin-input-basic.tsx.code.txt?raw'
import PinInputVariants from '@demos/react/pin-input-variants'
import pinInputVariantsRaw from '@demos/react/pin-input-variants.tsx.code.txt?raw'
import PinInputSizes from '@demos/react/pin-input-sizes'
import pinInputSizesRaw from '@demos/react/pin-input-sizes.tsx.code.txt?raw'
import PinInputSeparator from '@demos/react/pin-input-separator'
import pinInputSeparatorRaw from '@demos/react/pin-input-separator.tsx.code.txt?raw'
import PinInputStates from '@demos/react/pin-input-states'
import pinInputStatesRaw from '@demos/react/pin-input-states.tsx.code.txt?raw'
import PinInputUiCustom from '@demos/react/pin-input-ui-custom'
import pinInputUiCustomRaw from '@demos/react/pin-input-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

默认 5 位输入，`value` / `onChange` 绑定当前值。

<DemoBlock title="基础用法" description="受控绑定，默认 5 位" :code="pinInputBasicRaw">
  <ReactDemo :component="PinInputBasic" />
</DemoBlock>

## 变体与语义色

<DemoBlock title="五种变体 × 七种语义色" description="variant 与 color 组合" :code="pinInputVariantsRaw">
  <ReactDemo :component="PinInputVariants" />
</DemoBlock>

## 尺寸

<DemoBlock title="五档尺寸" description="xs → xl" :code="pinInputSizesRaw">
  <ReactDemo :component="PinInputSizes" />
</DemoBlock>

## 分组分隔符

`separator` 传数字表示每隔 N 位插入，传数组表示在指定位置之后插入；`separatorSlot` 自定义分隔内容。

<DemoBlock title="separator 分组" description="数字、数组与 separatorSlot 自定义" :code="pinInputSeparatorRaw">
  <ReactDemo :component="PinInputSeparator" />
</DemoBlock>

## 状态

<DemoBlock title="掩码、高亮、字号与禁用" description="mask / highlight / fixed / disabled / otp" :code="pinInputStatesRaw">
  <ReactDemo :component="PinInputStates" />
</DemoBlock>

## ui 插槽

<DemoBlock title="ui 插槽自定义" description="root / base / separator 覆盖类名" :code="pinInputUiCustomRaw">
  <ReactDemo :component="PinInputUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-pin-input
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | - | 绑定值 |
| defaultValue | string | '' | 默认值 |
| onChange | (value) => void | - | 值变化回调 |
| onComplete | (value) => void | - | 输入完成回调 |
| length | number | 5 | 位数 |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| highlight | boolean | false | 始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| separator | number · number[] | - | 分组分隔：数字为每隔 N 位插入，数组为指定位置之后插入 |
| separatorSlot | ({ index }) => ReactNode | - | 分隔符内容自定义渲染 |
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
| render | ReactElement | div | 渲染为指定元素 |
| ui | XPinInputUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| base | 单个输入槽 |
| separator | 分组分隔符容器 |

## 动效

无进出场动效：光标闪烁为浏览器默认行为，聚焦描边由 transition-colors 过渡。
