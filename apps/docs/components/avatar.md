---
title: Avatar 头像
description: 头像用于展示用户形象，支持圆形、方形与五档尺寸
---

# Avatar 头像

头像用于展示用户形象，支持圆形/方形、五档尺寸、图片与图标。头像组支持重叠排列与溢出折叠。

<script setup>
import AvatarBasic from '@demos/vue/avatar-basic.vue'
import avatarBasicRaw from '@demos/vue/avatar-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="圆形/方形、五档尺寸、图标与头像组" :code="avatarBasicRaw">
  <AvatarBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-avatar
npx shadcn-vue@latest add @ui-kit/x-avatar-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| shape | circle · square | circle | 头像形状 |
| size | xs · sm · md · lg · xl | md | 头像尺寸 |
| src | string | - | 图片地址 |
| alt | string | - | 图片描述文本 |

### XAvatarGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | number | 4 | 最多显示数量 |
| size | xs · sm · md · lg · xl | md | 头像尺寸 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 头像文字 |
| icon | 头像图标 |
| plus | （头像组）自定义溢出标记 |

## 事件

| 名称 | 说明 |
| --- | --- |
| error | 图片加载失败回调 |

## 动效

无动效：静态展示组件。
