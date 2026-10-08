---
title: Icon 图标
description: 名称驱动的矢量图标，内置常用图标集合与五档尺寸
---

# Icon 图标

名称驱动的矢量图标（lucide），内置常用图标集合与五档尺寸，颜色可自定义。需要内置集合之外的图标时，直接引入 lucide 图标组件即可。

<script setup>
import IconBasic from '@demos/vue/icon-basic.vue'
import iconBasicRaw from '@demos/vue/icon-basic.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="图标集合、尺寸与颜色" description="name 选择图标，size 选择尺寸，color 自定义颜色" :code="iconBasicRaw">
  <IconBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-icon
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | bell · check · chevron-down · chevron-right · circle-alert · circle-check · copy · dashboard · external-link · info · loader-circle · menu · plus · search · settings · star · trash · user · x | - | 图标名 |
| size | xs · sm · md · lg · xl | md | 尺寸 |
| color | string | - | 颜色 |

## 相关组件

- 键盘按键：[Kbd](/components/kbd)
- 分割线：[Separator](/components/separator)
- 骨架屏：[Skeleton](/components/skeleton)

## 动效

无动效：静态展示组件。
