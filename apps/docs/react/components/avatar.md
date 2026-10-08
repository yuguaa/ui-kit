---
title: Avatar 头像
description: 头像用于展示用户形象，支持圆形、方形与五档尺寸
---

# Avatar 头像

头像用于展示用户形象，支持圆形/方形、五档尺寸、图片、图标与文字。头像组支持重叠排列与溢出折叠。

<script setup>
import AvatarBasic from '@demos/react/avatar-basic'
import avatarBasicRaw from '@demos/react/avatar-basic.tsx.code.txt?raw'
import AvatarColors from '@demos/react/avatar-colors'
import avatarColorsRaw from '@demos/react/avatar-colors.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="圆形/方形、五档尺寸、图标与头像组" :code="avatarBasicRaw">
  <ReactDemo :component="AvatarBasic" />
</DemoBlock>

## 文字与图标

没有图片时可通过 text 属性显示文字（如姓名首字），也可以使用 icon 属性显示图标。

<DemoBlock title="文字与图标" description="text 显示文字，icon 属性显示图标" :code="avatarColorsRaw">
  <ReactDemo :component="AvatarColors" />
</DemoBlock>

## 语义色

color 属性为文字/图标头像提供七种语义色背景（1 阶背景、7 阶文字色），默认 neutral。

<DemoBlock title="七种语义色" description="color 属性控制文字/图标头像的背景与文字色" :code="avatarColorsRaw">
  <ReactDemo :component="AvatarColors" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-avatar
npx shadcn@latest add @ui-kit/x-avatar-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| shape | circle · square | circle | 头像形状 |
| size | xs · sm · md · lg · xl | md | 头像尺寸 |
| src | string | - | 图片地址 |
| alt | string | - | 图片替代文本，缺省回退到 text |
| text | string | - | 无图片时显示的文字（如姓名首字） |
| icon | ReactNode | - | 图标 |
| color | primary · secondary · neutral · success · info · warning · error | neutral | 文字/图标头像的语义色 |

### XAvatarGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | number | 4 | 最多显示数量 |
| size | xs · sm · md · lg · xl | md | 头像尺寸 |
| plus | ReactNode | - | 自定义溢出标记 |
| color | primary · secondary · neutral · success · info · warning · error | - | 透传给子头像的语义色（子头像自身指定 color 时不覆盖） |

## 动效

无动效：静态展示组件。
