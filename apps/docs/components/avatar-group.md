---
title: AvatarGroup 头像组
description: 将多个头像重叠排列展示
---

# AvatarGroup 头像组

将多个头像重叠排列展示，超出 max 折叠为 +N，支持自定义溢出标记。

<script setup>
import AvatarBasic from '@demos/vue/avatar-basic.vue'
import avatarBasicRaw from '@demos/vue/avatar-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="max=4 时第 5 个头像折叠为 +1" :code="avatarBasicRaw">
  <AvatarBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-avatar-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | number | 4 | 最多显示数量 |
| size | xs · sm · md · lg · xl | md | 头像尺寸 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 头像列表 |
| plus | 自定义溢出标记 |

## 动效

无动效：静态展示组件。
