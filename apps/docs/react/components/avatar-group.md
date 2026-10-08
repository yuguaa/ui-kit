---
title: AvatarGroup 头像组
description: 将多个头像重叠排列展示
---

# AvatarGroup 头像组

将多个头像重叠排列展示，超出 max 折叠为 +N，支持自定义溢出标记。

<script setup>
import AvatarBasic from '@demos/react/avatar-basic'
import avatarBasicRaw from '@demos/react/avatar-basic.tsx.code.txt?raw'
import AvatarGroupColors from '@demos/react/avatar-group-colors'
import avatarGroupColorsRaw from '@demos/react/avatar-group-colors.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="max=4 时第 5 个头像折叠为 +1" :code="avatarBasicRaw">
  <ReactDemo :component="AvatarBasic" />
</DemoBlock>

## 语义色透传

color 属性透传给子头像，子头像自身指定 color 时不被覆盖。

<DemoBlock title="color 透传" description="头像组的 color 透传给未指定 color 的子头像" :code="avatarGroupColorsRaw">
  <ReactDemo :component="AvatarGroupColors" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-avatar-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | number | 4 | 最多显示数量 |
| size | xs · sm · md · lg · xl | md | 头像尺寸 |
| plus | ReactNode | - | 自定义溢出标记 |
| color | primary · secondary · neutral · success · info · warning · error | - | 透传给子头像的语义色（子头像自身指定 color 时不覆盖） |

## 动效

无动效：静态展示组件。
