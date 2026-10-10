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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string · number | - | 芯片文本 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 标签颜色 |
| size | xs · sm · md · lg · xl | md | 标签尺寸 |
| position | top-right · bottom-right · top-left · bottom-left | top-right | 角标位置 |
| inset | boolean | false | 位于圆角元素内部时保持位置，不加外移 |
| standalone | boolean | false | 相对父容器渲染，不做绝对定位 |
| show | boolean | true | 控制芯片本体显隐 |
| closable | boolean | false | 是否可关闭 |
| icon | ReactNode | - | 标签图标 |
| content | ReactNode | - | 芯片内容，优先于 children 与 text |
| onClose | (event) => void | - | 关闭时回调 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XChipUi | - | 主题插槽类名 |
| children | ReactNode | - | 芯片内容 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素（定位壳） |
| base | 芯片本体 |

## 动效

无动效：关闭按钮的 hover 颜色过渡由按钮原子承担。
