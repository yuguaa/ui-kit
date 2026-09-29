---
title: Badge 徽标
description: 展示数量或状态提示，支持数字、溢出与圆点模式
---

# Badge 徽标

徽标用于展示数量或状态提示。有默认插槽时作为右上角角标包裹内容，无插槽时独立展示。

<script setup>
import BadgeDot from '@demos/vue/badge-dot.vue'
import badgeDotRaw from '@demos/vue/badge-dot.vue.code.txt?raw'
import BadgeColor from '@demos/vue/badge-color.vue'
import badgeColorRaw from '@demos/vue/badge-color.vue.code.txt?raw'
</script>

## 数字与圆点

count 显示数字，超出 overflowCount 显示 99+，dot 开启圆点模式。

<DemoBlock title="数字、溢出与圆点" description="count / overflowCount / dot" :code="badgeDotRaw">
  <BadgeDot />
</DemoBlock>

## 语义色与尺寸

<DemoBlock title="七种语义色与五档尺寸" description="color / size" :code="badgeColorRaw">
  <BadgeColor />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-badge
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| count | number | - | 显示数字 |
| dot | boolean | false | 圆点模式，不显示数字 |
| overflowCount | number | 99 | 超出后显示 99+ |
| color | primary · secondary · neutral · success · info · warning · error | primary | 徽标颜色 |
| size | xs · sm · md · lg · xl | md | 徽标尺寸 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 被包裹内容，有内容时徽标作为角标展示 |

## 动效

无动效：静态展示组件。
