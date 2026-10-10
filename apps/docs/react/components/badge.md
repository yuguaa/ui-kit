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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | string · number | - | 徽标文本 |
| count | number | - | 显示数字 |
| dot | boolean | false | 圆点模式，不显示数字 |
| overflowCount | number | 99 | 超出后显示 99+ |
| variant | solid · outline · soft · subtle | solid | 预设样式 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 徽标颜色 |
| size | xs · sm · md · lg · xl | md | 徽标尺寸 |
| square | boolean | false | 等边距模式，空徽标自动生效 |
| icon | XIconName | - | 图标名，显示在左侧 |
| leadingIcon | XIconName | - | 左侧图标名 |
| trailingIcon | XIconName | - | 右侧图标名 |
| avatar | XAvatarProps | - | 左侧头像配置 |
| leading | ReactNode | - | 左侧内容，优先于 leadingIcon 与 avatar |
| trailing | ReactNode | - | 右侧内容，优先于 trailingIcon |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XBadgeUi | - | 主题插槽类名 |
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
