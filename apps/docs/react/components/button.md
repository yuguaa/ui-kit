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
import ButtonBlockSquare from '@demos/react/button-block-square'
import buttonBlockSquareRaw from '@demos/react/button-block-square.tsx.code.txt?raw'
import ButtonUiCustom from '@demos/react/button-ui-custom'
import buttonUiCustomRaw from '@demos/react/button-ui-custom.tsx.code.txt?raw'
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

## 宽度与方形

block 让按钮撑满父容器宽度；square 使用等边距的方形尺寸，适合只放图标的操作按钮。

<DemoBlock title="block 与 square" description="block 撑满宽度，square 等边距" :code="buttonBlockSquareRaw">
  <ReactDemo :component="ButtonBlockSquare" />
</DemoBlock>

## 文本、ui 插槽与激活态

`label` 直接给按钮文本；`ui` 按主题插槽（base / label / leadingIcon / trailingIcon）覆盖类名；`active` 配合 `activeColor` / `activeVariant` 表示选中态。

<DemoBlock title="label · ui · active" description="label 文本、ui 插槽类名、active 选中态" :code="buttonUiCustomRaw">
  <ReactDemo :component="ButtonUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-button
```

自动带入依赖：`@ui-kit/utils`、`@ui-kit/bound-store`、`@ui-kit/button`。

## API

<!--@include: ./api/button.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 按钮根元素 |
| label | 文本容器 |
| leadingIcon | 前置图标（含加载图标） |
| trailingIcon | 后置图标 |
| leading / trailing | ReactNode | - | 前置 / 后置图标 |

## 动效

- hover / active：背景色加深过渡（transition-colors），无位移与缩放
- loading：图标旋转

## 设计规格

### 主题 token

在 shadcn button 原子上注入变体语义（`buttonColorStyles` 全字面量映射）。token 采用 shadcn 语义命名，与 Vue 端 Nuxt token 的对应关系：`text-background` ≈ `text-inverted`，`bg-foreground` ≈ `bg-inverted`，`bg-muted` ≈ `bg-elevated`，`border-border` ≈ `border-default`。

**背景**

| token | 使用场景 |
| --- | --- |
| bg-{color} | solid 变体默认背景 |
| bg-{color}/75 | solid hover / active（secondary 为 bg-secondary/80） |
| bg-{color}/10 | soft / subtle 背景，outline / ghost hover |
| bg-{color}/15 | soft / subtle hover / active |
| bg-foreground | neutral solid（≈ Vue bg-inverted） |
| bg-muted | neutral soft / subtle 背景，neutral outline / ghost hover |

**文字**

| token | 使用场景 |
| --- | --- |
| text-background | solid 变体（≈ Vue text-inverted） |
| text-{color} | outline / soft / subtle / ghost / link 变体 |
| text-{color}/75 | link hover / active |
| text-foreground | neutral 全部变体（≈ Vue text-default） |
| text-secondary-foreground | secondary 的 soft / ghost / subtle / link |

**描边**

| token | 使用场景 |
| --- | --- |
| ring-{color}/50 | outline 内描边（ring-1 ring-inset） |
| ring-{color}/25 | subtle 内描边 |
| ring-border | neutral / secondary 的 outline / subtle 内描边 |
| focus-visible:ring-3 ring-ring/50 | shadcn 原子焦点环（Vue 端为 outline-3 + outline-{color}/25） |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-md | shadcn 原子圆角（与 Vue --radius-md 6px 一致） |
| 阴影 | 不使用 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| solid | bg-{color} text-background；hover / active bg-{color}/75 |
| outline | bg-transparent text-{color} ring-1 ring-inset ring-{color}/50；hover / active bg-{color}/10 |
| soft | bg-{color}/10 text-{color}；hover / active bg-{color}/15 |
| subtle | bg-{color}/10 text-{color} ring-1 ring-inset ring-{color}/25；hover / active bg-{color}/15 |
| ghost | text-{color}；hover / active bg-{color}/10 |
| link | text-{color} underline-offset-4；hover text-{color}/75 |

尺寸映射：xs / sm / md / lg 对应 shadcn 原子尺寸，xl 在 lg 原子上以 class 补足（h-10 gap-2 px-4 text-base）；square 模式映射 icon-xs ~ icon-lg。默认 `color=primary`、`variant=solid`、`size=md`。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| Enter / Space | 渲染 shadcn 原生 `<button>`，Enter / Space 触发 click |
| 链接模式 | 传 `to` 时渲染 `<a href>`；禁用时点击事件 preventDefault 并输出 aria-disabled |
| 禁用 | disabled 或 loading 时原生 disabled 阻断交互 |

**ARIA**

| 属性 | 场景 |
| --- | --- |
| aria-busy | loading 时输出（Vue 端不输出，双端差异） |
| aria-disabled | 链接模式禁用时输出 |
| data-variant / data-size | 输出当前映射的 shadcn 原子变体与尺寸 |

**动效**

- shadcn 原子 transition-colors：hover / active 颜色过渡
- loading：默认 LoaderCircle 图标 animate-spin；loadingAuto 时 click 返回 Promise 期间自动进入 loading 态（opacity-60，Vue 端为 opacity-75）
- 没有位移与缩放动画
