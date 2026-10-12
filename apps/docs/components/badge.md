---
title: Badge 徽标
description: 展示数量或状态提示，支持数字、圆点、包裹角标与图标头像
---

# Badge 徽标

徽标用于展示数量或状态提示。label 直接给定徽标文本；有默认插槽且带 count / dot 时作为右上角角标包裹内容。

## 基础用法

label 给定徽标文本；count 显示数字，超出 overflowCount 显示 99+；dot 开启圆点模式。

<DemoPreview file="demos/vue/badge-basic.vue" title="label、数字与圆点" description="label / count / overflowCount / dot" />

## 变体

<DemoPreview file="demos/vue/badge-variants.vue" title="四种变体" description="solid / outline / soft / subtle" />

## 语义色与尺寸

<DemoPreview file="demos/vue/badge-color.vue" title="七种语义色与五档尺寸" description="color / size" />

## 等边距与前后内容

square 让宽度等于高度，适合只放图标或单字符，空徽标自动等边距；leading / trailing 在徽标内容前后放置附加内容。

<DemoPreview file="demos/vue/badge-square.vue" title="square 与前后内容" description="square / leading / trailing" />

## 图标与头像

<DemoPreview file="demos/vue/badge-icons.vue" title="icon / leadingIcon / trailingIcon / avatar" description="图标与头像配置" />

## ui 插槽与渲染

<DemoPreview file="demos/vue/badge-ui-custom.vue" title="ui 插槽自定义与 as" description="ui 键覆盖主题插槽类名，as 更换渲染元素" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-badge
```

## API

<!--@include: ./api/badge.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 徽标本体（含圆点） |
| label | 文本容器 |
| leadingIcon | 左侧图标 |
| leadingAvatar | 左侧头像 |
| leadingAvatarSize | 头像尺寸（xs · sm · md · lg · xl） |
| trailingIcon | 右侧图标 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 徽标内容；带 count / dot 时为被包裹内容 |
| leading | 左侧内容，优先于 leadingIcon 与 avatar |
| trailing | 右侧内容，优先于 trailingIcon |

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

slots 公共类：`base` 为 `font-medium inline-flex items-center`；`label` 为 `truncate`；`leadingIcon` / `trailingIcon` / `leadingAvatar` 为 `shrink-0`。

**背景**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| bg-{color} | 语义色 500 级 | solid 变体 |
| bg-{color}/10 | 500 级 10% 透明度 | soft / subtle 变体 |
| bg-inverted | #171717 / #ffffff | neutral solid |
| bg-elevated | #f5f5f5 / #262626 | neutral soft / subtle |
| bg-default | #ffffff / #171717 | neutral outline |

**文字**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| text-inverted | #ffffff / #171717 | solid 变体 |
| text-{color} | 语义色 500 级 | outline / soft / subtle 变体 |
| text-default | #404040 / #e5e5e5 | neutral 非 solid 变体 |

**描边**

| token | 取值 | 使用场景 |
| --- | --- | --- |
| ring-{color}/50 | 500 级 50% 透明度 | outline 内描边（ring-inset） |
| ring-{color}/25 | 500 级 25% 透明度 | subtle 内描边（ring-inset） |
| ring-accented | #d4d4d4 / #404040 | neutral outline / subtle 内描边 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-sm（xs / sm） | --radius-sm 4px |
| rounded-md（md / lg / xl） | --radius-md 6px |
| 阴影 | 不使用 |

**变体**

颜色枚举：primary / secondary / success / info / warning / error / neutral；尺寸 xs / sm / md / lg / xl；默认 `color=primary`、`variant=solid`、`size=md`。

| 变体 | token 组合 |
| --- | --- |
| solid | bg-{color} text-inverted（neutral：bg-inverted text-inverted） |
| outline | bg-transparent text-{color} ring ring-inset ring-{color}/50（neutral：bg-default text-default ring-accented） |
| soft | bg-{color}/10 text-{color}（neutral：bg-elevated text-default） |
| subtle | bg-{color}/10 text-{color} ring ring-inset ring-{color}/25（neutral：bg-elevated text-default ring-accented） |

尺寸：xs `text-[8px]/3 px-1 py-0.5`；sm `text-[10px]/3 px-1.5 py-1`；md `text-xs px-2 py-1`；lg `text-sm px-2 py-1`；xl `text-base px-2.5 py-1`。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，默认渲染 `<span>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 没有内置角色与状态属性，语义由 `as` 指定元素承担 |

**动效**

没有动效：静态展示组件。
