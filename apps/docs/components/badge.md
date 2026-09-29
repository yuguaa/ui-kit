---
title: Badge 徽标
description: 展示数量或状态提示，支持数字、溢出与圆点模式
---

# Badge 徽标

徽标用于展示数量或状态提示。有默认插槽时作为右上角角标包裹内容，无插槽时独立展示。

<script setup>
import BadgeBasic from '@demos/vue/badge-basic.vue'
import badgeBasicRaw from '@demos/vue/badge-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="数字、溢出 99+、圆点与语义色" :code="badgeBasicRaw">
  <BadgeBasic />
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
