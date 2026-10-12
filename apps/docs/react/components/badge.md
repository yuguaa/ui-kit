---
title: Badge 徽标
description: 展示数量或状态提示，支持数字、圆点、包裹角标与图标头像
---

# Badge 徽标

徽标用于展示数量或状态提示。label 直接给定徽标文本；有 children 且带 count / dot 时作为右上角角标包裹内容。

<script setup>
import BadgeBasic from '@demos/react/badge-basic'
import badgeBasicRaw from '@demos/react/badge-basic.tsx.code.txt?raw'
import BadgeVariants from '@demos/react/badge-variants'
import badgeVariantsRaw from '@demos/react/badge-variants.tsx.code.txt?raw'
import BadgeColor from '@demos/react/badge-color'
import badgeColorRaw from '@demos/react/badge-color.tsx.code.txt?raw'
import BadgeSquare from '@demos/react/badge-square'
import badgeSquareRaw from '@demos/react/badge-square.tsx.code.txt?raw'
import BadgeIcons from '@demos/react/badge-icons'
import badgeIconsRaw from '@demos/react/badge-icons.tsx.code.txt?raw'
import BadgeUiCustom from '@demos/react/badge-ui-custom'
import badgeUiCustomRaw from '@demos/react/badge-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

label 给定徽标文本；count 显示数字，超出 overflowCount 显示 99+；dot 开启圆点模式。

<DemoBlock title="label、数字与圆点" description="label / count / overflowCount / dot" :code="badgeBasicRaw">
  <ReactDemo :component="BadgeBasic" />
</DemoBlock>

## 变体

<DemoBlock title="四种变体" description="solid / outline / soft / subtle" :code="badgeVariantsRaw">
  <ReactDemo :component="BadgeVariants" />
</DemoBlock>

## 语义色与尺寸

<DemoBlock title="七种语义色与五档尺寸" description="color / size" :code="badgeColorRaw">
  <ReactDemo :component="BadgeColor" />
</DemoBlock>

## 等边距与前后内容

square 让宽度等于高度，适合只放图标或单字符，空徽标自动等边距；leading / trailing 在徽标内容前后放置附加内容。

<DemoBlock title="square 与前后内容" description="square / leading / trailing" :code="badgeSquareRaw">
  <ReactDemo :component="BadgeSquare" />
</DemoBlock>

## 图标与头像

<DemoBlock title="icon / leadingIcon / trailingIcon / avatar" description="图标与头像配置" :code="badgeIconsRaw">
  <ReactDemo :component="BadgeIcons" />
</DemoBlock>

## ui 插槽与渲染

<DemoBlock title="ui 插槽自定义与 render" description="ui 键覆盖主题插槽类名，render 更换渲染元素" :code="badgeUiCustomRaw">
  <ReactDemo :component="BadgeUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-badge
```

## API

<!--@include: ./api/badge.md-->
| children | ReactNode | - | 徽标内容；带 count / dot 时为被包裹内容 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 徽标本体（含圆点） |
| label | 文本容器 |
| leadingIcon | 左侧图标 |
| leadingAvatar | 左侧头像 |
| leadingAvatarSize | 头像尺寸（xs · sm · md · lg · xl） |
| trailingIcon | 右侧图标 |

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

在 shadcn badge 原子上注入变体语义（`badgeColorClasses` 全字面量映射）。token 与 Vue 端的对应关系：`bg-foreground` ≈ `bg-inverted`，`text-background` ≈ `text-inverted`，`bg-muted` ≈ `bg-elevated`，`ring-border` ≈ `ring-accented`。

**背景**

| token | 使用场景 |
| --- | --- |
| bg-{color} | solid 变体 |
| bg-{color}/10 | soft / subtle 变体 |
| bg-foreground | neutral solid（≈ Vue bg-inverted） |
| bg-muted | neutral / secondary 的 soft / subtle |
| bg-secondary | secondary solid / soft |

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
| focus-visible:ring-[3px] ring-ring/50 | shadcn 原子焦点环（Vue 端没有） |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-sm | shadcn 原子圆角（与 Vue --radius-sm 4px 一致） |
| 阴影 | 不使用 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| solid | bg-{color} text-background（neutral：bg-foreground text-background） |
| outline | bg-transparent text-{color} ring-1 ring-inset ring-{color}/50（neutral / secondary：text-foreground ring-border） |
| soft | bg-{color}/10 text-{color}（neutral / secondary：bg-muted） |
| subtle | bg-{color}/10 text-{color} ring-1 ring-inset ring-{color}/25 |

尺寸（固定高度体系）：xs `h-4 min-w-4 gap-0.5 px-1 text-[10px]`；sm `h-5 min-w-5 gap-1 px-1.5 text-xs`；md `h-6 min-w-6 gap-1 px-2 text-sm`；lg `h-7 min-w-7 gap-1.5 px-2.5 text-sm`；xl `h-8 min-w-8 gap-1.5 px-3 text-base`。square 模式去掉水平内边距（w-4 ~ w-8）。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，默认渲染 `<span>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 没有内置角色；dot / count 包裹模式为普通 span 绝对定位 |

**动效**

- shadcn 原子 transition-colors（Vue 端没有）
- 其余没有动效：静态展示组件

**与 Vue 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| 尺寸体系 | xs 8px 字 / sm 10px 字 / md text-xs px-2，没有固定高度 | xs ~ xl 固定高度 h-4 ~ h-8，字阶 text-[10px] ~ text-base |
| dot / count / overflowCount | 不支持 | React 独有（dot 圆点为 bg-error size-2） |
| 焦点环 | 没有 | shadcn 原子 focus-visible ring-3 |
| neutral solid | bg-inverted text-inverted | bg-foreground text-background（语义等价） |
