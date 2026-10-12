---
title: Button 按钮
description: 二次封装按钮：内置六种样式 × 七种语义色 × 五档尺寸，hover/active 颜色过渡动效
---

# Button 按钮

按钮用于触发操作。支持六种样式、七种语义色、五档尺寸与加载、禁用状态，可通过插槽组合前置与后置图标。

<script setup>
import ButtonVariants from '@demos/vue/button-variants.vue'
import buttonVariantsRaw from '@demos/vue/button-variants.vue.code.txt?raw'
import ButtonColors from '@demos/vue/button-colors.vue'
import buttonColorsRaw from '@demos/vue/button-colors.vue.code.txt?raw'
import ButtonSizes from '@demos/vue/button-sizes.vue'
import buttonSizesRaw from '@demos/vue/button-sizes.vue.code.txt?raw'
import ButtonStates from '@demos/vue/button-states.vue'
import buttonStatesRaw from '@demos/vue/button-states.vue.code.txt?raw'
import ButtonIcons from '@demos/vue/button-icons.vue'
import buttonIconsRaw from '@demos/vue/button-icons.vue.code.txt?raw'
import ButtonBlockSquare from '@demos/vue/button-block-square.vue'
import buttonBlockSquareRaw from '@demos/vue/button-block-square.vue.code.txt?raw'
import ButtonUiCustom from '@demos/vue/button-ui-custom.vue'
import buttonUiCustomRaw from '@demos/vue/button-ui-custom.vue.code.txt?raw'
</script>

## 变体

solid 主操作、outline 次操作、soft 轻强调、ghost 低干扰、subtle 带描边底、link 行内链接。

<DemoBlock title="六种变体" description="variant 属性控制样式" :code="buttonVariantsRaw">
  <ButtonVariants />
</DemoBlock>

## 语义色

color 属性提供七种语义色，每种颜色都支持全部六种变体。

<DemoBlock title="七种语义色" description="solid 变体下的语义色" :code="buttonColorsRaw">
  <ButtonColors />
</DemoBlock>

## 尺寸

<DemoBlock title="五档尺寸" description="xs → xl" :code="buttonSizesRaw">
  <ButtonSizes />
</DemoBlock>

## 状态

<DemoBlock title="加载与禁用" description="loading 显示旋转图标，disabled 阻止交互" :code="buttonStatesRaw">
  <ButtonStates />
</DemoBlock>

## 图标与组合

<DemoBlock title="前置 / 后置图标与按钮组" description="leading / trailing 插槽，XButtonGroup 拼接按钮" :code="buttonIconsRaw">
  <ButtonIcons />
</DemoBlock>

## 宽度与方形

block 让按钮撑满父容器宽度；square 使用等边距的方形尺寸，适合只放图标的操作按钮。

<DemoBlock title="block 与 square" description="block 撑满宽度，square 等边距" :code="buttonBlockSquareRaw">
  <ButtonBlockSquare />
</DemoBlock>

## 文本、ui 插槽与激活态

`label` 直接给按钮文本；`ui` 按主题插槽（base / label / leadingIcon / trailingIcon）覆盖类名；`active` 配合 `activeColor` / `activeVariant` 表示选中态。

<DemoBlock title="label · ui · active" description="label 文本、ui 插槽类名、active 选中态" :code="buttonUiCustomRaw">
  <ButtonUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-button
```

自动带入依赖：`@ui-kit/utils`、`@ui-kit/button`。

## API

<!--@include: ./api/button.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 按钮根元素 |
| label | 文本容器 |
| leadingIcon | 前置图标（含加载图标） |
| trailingIcon | 后置图标 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| leading | 前置图标 |
| default | 按钮内容 |
| trailing | 后置图标 |

## 动效

- hover / active：背景色加深过渡（transition-colors），无位移与缩放
- loading：图标旋转

## 设计规格

### 主题 token

slots 公共类：`base` 含 `rounded-md font-medium inline-flex items-center` 与禁用态 `cursor-not-allowed opacity-75`；`label` 为 `truncate`；`leadingIcon` / `trailingIcon` / `leadingAvatar` 为 `shrink-0`。

**背景**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| bg-{color} | 语义色 500 级（primary #22c55e 等） | solid 变体默认背景 |
| bg-{color}/75 | 500 级 75% 透明度 | solid hover / active |
| bg-{color}/10 | 500 级 10% 透明度 | soft / subtle 背景，outline / ghost hover |
| bg-{color}/15 | 500 级 15% 透明度 | soft / subtle hover / active |
| bg-inverted | #171717 / #ffffff | neutral solid |
| bg-elevated | #f5f5f5 / #262626 | neutral soft / subtle 背景，neutral outline / ghost hover |
| bg-accented/75 | #e5e5e5 / #404040（75%） | neutral soft / subtle hover |

**文字**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| text-inverted | #ffffff / #171717 | solid 变体 |
| text-{color} | 语义色 500 级 | outline / soft / subtle / ghost / link 变体 |
| text-{color}/75 | 500 级 75% 透明度 | link hover / active |
| text-default | #404040 / #e5e5e5 | neutral 的 outline / soft / subtle / ghost |
| text-muted | #737373 / #a3a3a3 | neutral link（hover 切换 text-default） |

**描边**

| token | 取值 | 使用场景 |
| --- | --- | --- |
| ring-{color}/50 | 500 级 50% 透明度 | outline 内描边（ring-inset） |
| ring-{color}/25 | 500 级 25% 透明度 | subtle 内描边（ring-inset） |
| ring-{color} | 500 级 | outline / subtle 聚焦时描边加深 |
| ring-accented | #d4d4d4 / #404040 | neutral outline / subtle 内描边 |
| outline-{color}/25 | 500 级 25% 透明度 | focus-visible 焦点环（outline-3，3px） |
| outline-inverted/25 | #171717 / #ffffff（25%） | neutral 焦点环 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-md | --radius-md 6px |
| 阴影 | 不使用 |

**变体**

颜色枚举：primary / secondary / success / info / warning / error / neutral；尺寸 xs / sm / md / lg / xl；默认 `color=primary`、`variant=solid`、`size=md`。

| 变体 | token 组合 |
| --- | --- |
| solid | bg-{color} text-inverted；hover / active bg-{color}/75（neutral：bg-inverted text-inverted） |
| outline | bg-transparent text-{color} ring ring-inset ring-{color}/50；hover bg-{color}/10（neutral：bg-default text-default ring-accented，hover bg-elevated） |
| soft | bg-{color}/10 text-{color}；hover / active bg-{color}/15（neutral：bg-elevated text-default，hover bg-accented/75） |
| subtle | bg-{color}/10 text-{color} ring ring-inset ring-{color}/25；hover / active bg-{color}/15 |
| ghost | bg-transparent text-{color}；hover bg-{color}/10（neutral：text-default，hover bg-elevated） |
| link | text-{color} 没有背景与描边；hover / active text-{color}/75（neutral：text-muted，hover text-default） |

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| Enter / Space | 默认渲染原生 `<button type="button">`，Enter / Space 触发 click |
| 链接模式 | 传 `to` 时渲染 `<a href>`，Enter 触发导航；disabled 时移除 href 并加 tabindex="-1" |
| 禁用 | disabled 或 loading 时以原生 disabled 阻断交互，cursor-not-allowed |

**ARIA**

| 属性 | 场景 |
| --- | --- |
| disabled | button 模式使用原生 disabled 属性 |
| aria-disabled="true" | 链接模式禁用时输出，同时输出 role="link"、tabindex="-1" |
| 不输出 | 不输出 aria-pressed、aria-busy（React 端 loading 时输出 aria-busy，见 React 文档差异说明） |

**动效**

- transition-colors：hover / active 颜色过渡（theme.transitions 默认开启）
- loading：loadingIcon 应用 animate-spin；loadingAuto 时 click 返回 Promise 期间自动进入 loading 态
- 没有位移与缩放动画
