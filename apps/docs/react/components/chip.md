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

## 设计规格

### 主题 token

slots 公共类：`root` 为 `relative inline-flex shrink-0 items-center justify-center`；`base` 为 `inline-flex items-center justify-center rounded-full border font-medium whitespace-nowrap`。

**背景**

| token | 使用场景 |
| --- | --- |
| bg-{color}/10 | 芯片本体浅色背景 |
| bg-secondary | secondary 本体背景 |
| bg-muted | neutral 本体背景 |

**文字**

| token | 使用场景 |
| --- | --- |
| text-{color} | 本体文字 |
| text-secondary-foreground | secondary 本体文字 |
| text-muted-foreground | neutral 本体文字 |

**描边**

| token | 使用场景 |
| --- | --- |
| border-{color}/20 | 本体描边 |
| border-border | neutral / secondary 本体描边 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-full | 全圆角 |
| 阴影 | 不使用 |

**变体**

| 变体 | 取值 | 说明 |
| --- | --- | --- |
| color | primary / secondary / neutral / success / info / warning / error | 本体浅色背景 + 描边，默认 primary |
| size | xs / sm / md / lg / xl | 固定高度 h-4.5 ~ h-9 |
| position | top-right（默认）/ bottom-right / top-left / bottom-left | 角标位置 |
| inset | false（默认）/ true | false 时 translate 外移半个身位 |
| standalone | false（默认）/ true | false 时 absolute 定位 |
| show | true（默认）/ false | 控制本体显隐 |
| closable | false（默认）/ true | 显示关闭按钮 |

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 本体静态展示；closable 时关闭按钮为 shadcn Button（ghost / icon-xs），可 Tab 聚焦 |
| Enter / Space | 关闭按钮原生 button 语义触发 onClose |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| aria-label="close" | 关闭按钮输出（button 本体） |
| 不输出 | 本体 span 没有角色 |

**动效**

没有动效：关闭按钮的 hover 颜色过渡由 shadcn 按钮原子承担。

**与 Vue 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| 本体样式 | 实心角标：bg-{color} 500 级 + text-inverted + ring-bg 外环 | 浅色描边标签：bg-{color}/10 + text-{color} + border-{color}/20 |
| 尺寸档位 | 3xs ~ 3xl，4px ~ 12px 高（极小角标） | xs ~ xl，h-4.5 ~ h-9（标签尺寸） |
| closable / onClose | 不支持 | React 独有 |
| content / icon | 不支持（content 为具名插槽） | React 独有（content 优先于 children 与 text） |
| show | v-model:show 模型 | show 属性 |
