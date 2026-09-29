---
title: Chip 芯片
description: 芯片用于标记属性，支持多种颜色与可选关闭按钮
---

# Chip 芯片

芯片用于标记属性，支持多种语义色。

<script setup>
import ChipBasic from '@demos/vue/chip-basic.vue'
import chipBasicRaw from '@demos/vue/chip-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="七种语义色、可关闭、图标与尺寸" :code="chipBasicRaw">
  <ChipBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-chip
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | primary · secondary · neutral · success · info · warning · error | primary | 标签颜色 |
| size | xs · sm · md · lg · xl | md | 标签尺寸 |
| closable | boolean | false | 是否可关闭 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| icon | 标签图标 |
| default | 标签内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| close | 关闭时回调 |

## 动效

无动效：关闭按钮的 hover 颜色过渡由按钮原子承担。
