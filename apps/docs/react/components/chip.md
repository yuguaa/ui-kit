---
title: Chip 芯片
description: 标记属性或数值的角标，支持定位与可选关闭按钮
---

# Chip 芯片

芯片用于标记属性或数值。text 直接给定内容，position / inset / standalone 控制角标定位，show 控制芯片本体显隐。

<script setup>
import ChipBasic from '@demos/react/chip-basic'
import chipBasicRaw from '@demos/react/chip-basic.tsx.code.txt?raw'
import ChipPosition from '@demos/react/chip-position'
import chipPositionRaw from '@demos/react/chip-position.tsx.code.txt?raw'
import ChipUiCustom from '@demos/react/chip-ui-custom'
import chipUiCustomRaw from '@demos/react/chip-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="七种语义色、尺寸与可关闭" description="text / color / size / closable / standalone / show" :code="chipBasicRaw">
  <ReactDemo :component="ChipBasic" />
</DemoBlock>

## 角标定位

默认绝对定位在父容器右上角；position 指定位置，inset 位于圆角元素内部时保持位置，standalone 相对父容器渲染。

<DemoBlock title="position / inset / standalone" description="chip 定位在头像各角" :code="chipPositionRaw">
  <ReactDemo :component="ChipPosition" />
</DemoBlock>

## ui 插槽与渲染

<DemoBlock title="ui 插槽自定义与 render" description="content 自定义内容，ui 键覆盖主题插槽类名，render 更换渲染元素" :code="chipUiCustomRaw">
  <ReactDemo :component="ChipUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-chip
```

## API

<!--@include: ./api/chip.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素（定位壳） |
| base | 芯片本体 |

## 动效

无动效：关闭按钮的 hover 颜色过渡由按钮原子承担。
