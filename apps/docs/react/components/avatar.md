---
title: Avatar 头像
description: 头像用于展示用户形象，支持圆形、方形与五档尺寸
---

# Avatar 头像

头像用于展示用户形象，支持圆形/方形、五档尺寸、图片与图标。头像组支持重叠排列与溢出折叠。

<script setup>
import AvatarBasic from '@demos/react/avatar-basic'
import avatarBasicRaw from '@demos/react/avatar-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="圆形/方形、五档尺寸、图标与头像组" :code="avatarBasicRaw">
  <ReactDemo :component="AvatarBasic" />
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
| icon | ReactNode | - | 图标 |

### XAvatarGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | number | 4 | 最多显示数量 |
| size | xs · sm · md · lg · xl | md | 头像尺寸 |
| plus | ReactNode | - | 自定义溢出标记 |

## 动效

无动效：静态展示组件。
