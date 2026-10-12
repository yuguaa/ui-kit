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

<!--@include: ./api/pin-input.md-->

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

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | `bg-default`（outline）· `bg-elevated/50`（soft）· `bg-elevated`（subtle） | #ffffff / #171717；#f5f5f5 / #262626 |
| 文字 | `text-highlighted`，输入格 `text-center` | #171717 / #ffffff |
| 文字 | `placeholder:text-dimmed`；分隔符 `text-dimmed` | #a3a3a3 / #a3a3a3 |
| 描边 | `ring ring-inset ring-accented`（outline / subtle） | #d4d4d4 / #404040 |
| 描边 | 聚焦：`outline-{color}/25` + `focus-visible:outline-3` + `focus-visible:ring-{color}` | primary 为 #22c55e（25% 透明度） |
| 圆角 | `rounded-md` | 6px（--radius-md） |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `text-highlighted` + `bg-default` + `ring ring-inset ring-accented` |
| soft / subtle / ghost / none | 与 Input 相同组合（见 Input 设计规格） |

尺寸 xs ~ xl 对应输入格 `size-6 ~ size-10`；`fixed` 未开启时 md 及以上断点字号缩小一档。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | reka-ui PinInput 语义：输入后焦点自动跳至下一格，Backspace 回删上一格，方向键移动焦点，支持粘贴 |
| ARIA | 每个输入格由 reka-ui 提供按 index 生成的 aria-label；`mask` 时输入类型切换为 password 隐藏字符 |
| 动效 | `transition-colors`；分隔符 `role="presentation"` + `aria-hidden="true"` |
