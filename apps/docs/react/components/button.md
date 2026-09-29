---
title: Button 按钮
description: 二次封装按钮：内置六种样式 × 七种语义色 × 五档尺寸，hover/active 颜色过渡动效
---

# Button 按钮

按钮用于触发操作。支持六种样式、七种语义色、五档尺寸与加载、禁用状态，可通过 leading / trailing 组合前置与后置图标。

<script setup>
import ButtonVariants from '@demos/react/button-variants'
import buttonVariantsRaw from '@demos/react/button-variants.tsx.code.txt?raw'
import ButtonColors from '@demos/react/button-colors'
import buttonColorsRaw from '@demos/react/button-colors.tsx.code.txt?raw'
import ButtonSizes from '@demos/react/button-sizes'
import buttonSizesRaw from '@demos/react/button-sizes.tsx.code.txt?raw'
import ButtonStates from '@demos/react/button-states'
import buttonStatesRaw from '@demos/react/button-states.tsx.code.txt?raw'
import ButtonIcons from '@demos/react/button-icons'
import buttonIconsRaw from '@demos/react/button-icons.tsx.code.txt?raw'
</script>

## 变体

solid 主操作、outline 次操作、soft 轻强调、ghost 低干扰、subtle 带描边底、link 行内链接。

<DemoBlock title="六种变体" description="variant 属性控制样式" :code="buttonVariantsRaw">
  <ReactDemo :component="ButtonVariants" />
</DemoBlock>

## 语义色

color 属性提供七种语义色，每种颜色都支持全部六种变体。

<DemoBlock title="七种语义色" description="solid 变体下的语义色" :code="buttonColorsRaw">
  <ReactDemo :component="ButtonColors" />
</DemoBlock>

## 尺寸

<DemoBlock title="五档尺寸" description="xs → xl" :code="buttonSizesRaw">
  <ReactDemo :component="ButtonSizes" />
</DemoBlock>

## 状态

<DemoBlock title="加载与禁用" description="loading 显示旋转图标，disabled 阻止交互" :code="buttonStatesRaw">
  <ReactDemo :component="ButtonStates" />
</DemoBlock>

## 图标与组合

<DemoBlock title="前置 / 后置图标与按钮组" description="leading / trailing 属性，XButtonGroup 拼接按钮" :code="buttonIconsRaw">
  <ReactDemo :component="ButtonIcons" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-button
```

自动带入依赖：`@ui-kit/utils`、`@ui-kit/bound-store`、`@ui-kit/button`。

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| variant | solid · outline · soft · ghost · subtle · link | solid | 预设样式 |
| size | xs · sm · md · lg · xl | md | 尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色 |
| loading | boolean | false | 加载态 |
| disabled | boolean | false | 禁用状态 |
| leading / trailing | ReactNode | - | 前置 / 后置图标 |

## 动效

- hover / active：背景色加深过渡（transition-colors），无位移与缩放
- loading：图标旋转
