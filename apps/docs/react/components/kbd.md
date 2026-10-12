---
title: Kbd 键盘按键
description: 展示快捷键或按键组合，四种变体 × 七种语义色 × 五档尺寸
---

# Kbd 键盘按键

展示快捷键或按键组合。支持 solid / outline / soft / subtle 四种变体、七种语义色与五档尺寸，`render` 渲染为指定元素，`ui` 定制根元素类名。

<script setup>
import KbdVariants from '@demos/react/kbd-variants'
import kbdVariantsRaw from '@demos/react/kbd-variants.tsx.code.txt?raw'
import KbdAsUi from '@demos/react/kbd-as-ui'
import kbdAsUiRaw from '@demos/react/kbd-as-ui.tsx.code.txt?raw'
</script>

## 变体与组合

<DemoBlock title="四种变体与按键组合" description="variant / color / value" :code="kbdVariantsRaw">
  <ReactDemo :component="KbdVariants" />
</DemoBlock>

## 尺寸、render 与 ui

五档尺寸；`render` 指定渲染元素；`ui.base` 注入自定义类名。

<DemoBlock title="尺寸 · render · ui" description="size：xs → xl，render 渲染元素，ui.base 类名" :code="kbdAsUiRaw">
  <ReactDemo :component="KbdAsUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-kbd
```

## API

<!--@include: ./api/kbd.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 按键根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| children | 按键内容（value 的替代） |

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

公共类：`inline-flex items-center justify-center rounded-sm font-sans font-medium uppercase shadow-xs`。token 与 Vue 端的对应关系：`bg-foreground` ≈ `bg-inverted`，`text-background` ≈ `text-inverted`，`bg-muted` ≈ `bg-elevated`，`ring-border` ≈ `ring-accented`。

**背景**

| token | 使用场景 |
| --- | --- |
| bg-{color} | solid 变体 |
| bg-{color}/10 | soft / subtle 变体 |
| bg-foreground | neutral solid（≈ Vue bg-inverted） |
| bg-muted | neutral / secondary 的 soft / subtle |

**文字**

| token | 使用场景 |
| --- | --- |
| text-background | solid 变体（≈ Vue text-inverted） |
| text-{color} | outline / soft / subtle 变体 |
| text-foreground | neutral / secondary 的非 solid 变体 |
| text-secondary-foreground | secondary 变体 |

**描边**

| token | 使用场景 |
| --- | --- |
| ring-{color}/50 | outline 内描边（ring-1 ring-inset） |
| ring-{color}/25 | subtle 内描边 |
| ring-border | neutral / secondary 的 outline / subtle 内描边 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-sm | 与 Vue --radius-sm 4px 一致 |
| shadow-xs | React 独有（Vue 端不使用阴影） |

**变体**

| 变体 | token 组合 |
| --- | --- |
| solid | bg-{color} text-background（neutral：bg-foreground text-background） |
| outline（默认） | bg-transparent text-{color} ring-1 ring-inset ring-{color}/50（neutral / secondary：text-foreground ring-border） |
| soft | bg-{color}/10 text-{color}（neutral / secondary：bg-muted） |
| subtle | bg-{color}/10 text-{color} ring-1 ring-inset ring-{color}/25 |

尺寸：xs `h-4 min-w-4 px-1 text-[10px]`；sm `h-5 min-w-5 text-xs`；md（默认）`h-6 min-w-6 px-1.5 text-sm`；lg `h-7 min-w-7 px-2`；xl `h-8 min-w-8 px-2.5 text-base`。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，默认渲染 `<kbd>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| kbd 元素 | 使用原生 `<kbd>` 语义，不输出附加角色与状态属性 |

**动效**

没有动效：静态展示组件。

**与 Vue 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| 尺寸档位 | sm / md / lg 三档（h-4 ~ h-6，10px ~ 12px 字） | xs ~ xl 五档（h-4 ~ h-8，10px ~ 16px 字） |
| 按键名转换 | 按平台转换（macOS ⌘ / ⌃ / ⌥，⇧ / ↵ / Esc / ↑ 等） | 不转换，value 原样渲染 |
| 阴影 | 不使用 | shadow-xs |
