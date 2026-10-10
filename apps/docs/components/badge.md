---
title: Badge 徽标
description: 展示数量或状态提示，支持数字、圆点、包裹角标与图标头像
---

# Badge 徽标

徽标用于展示数量或状态提示。label 直接给定徽标文本；有默认插槽且带 count / dot 时作为右上角角标包裹内容。

<script setup>
import BadgeBasic from '@demos/vue/badge-basic.vue'
import badgeBasicRaw from '@demos/vue/badge-basic.vue.code.txt?raw'
import BadgeVariants from '@demos/vue/badge-variants.vue'
import badgeVariantsRaw from '@demos/vue/badge-variants.vue.code.txt?raw'
import BadgeColor from '@demos/vue/badge-color.vue'
import badgeColorRaw from '@demos/vue/badge-color.vue.code.txt?raw'
import BadgeSquare from '@demos/vue/badge-square.vue'
import badgeSquareRaw from '@demos/vue/badge-square.vue.code.txt?raw'
import BadgeIcons from '@demos/vue/badge-icons.vue'
import badgeIconsRaw from '@demos/vue/badge-icons.vue.code.txt?raw'
import BadgeUiCustom from '@demos/vue/badge-ui-custom.vue'
import badgeUiCustomRaw from '@demos/vue/badge-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

label 给定徽标文本；count 显示数字，超出 overflowCount 显示 99+；dot 开启圆点模式。

<DemoBlock title="label、数字与圆点" description="label / count / overflowCount / dot" :code="badgeBasicRaw">
  <BadgeBasic />
</DemoBlock>

## 变体

<DemoBlock title="四种变体" description="solid / outline / soft / subtle" :code="badgeVariantsRaw">
  <BadgeVariants />
</DemoBlock>

## 语义色与尺寸

<DemoBlock title="七种语义色与五档尺寸" description="color / size" :code="badgeColorRaw">
  <BadgeColor />
</DemoBlock>

## 等边距与前后内容

square 让宽度等于高度，适合只放图标或单字符，空徽标自动等边距；leading / trailing 在徽标内容前后放置附加内容。

<DemoBlock title="square 与前后内容" description="square / leading / trailing" :code="badgeSquareRaw">
  <BadgeSquare />
</DemoBlock>

## 图标与头像

<DemoBlock title="icon / leadingIcon / trailingIcon / avatar" description="图标与头像配置" :code="badgeIconsRaw">
  <BadgeIcons />
</DemoBlock>

## ui 插槽与渲染

<DemoBlock title="ui 插槽自定义与 as" description="ui 键覆盖主题插槽类名，as 更换渲染元素" :code="badgeUiCustomRaw">
  <BadgeUiCustom />
</DemoBlock>

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
