---
title: Card 卡片
description: 通用卡片容器，用于承载标题、操作区和内容
---

# Card 卡片

通用卡片容器，用于承载标题、操作区、封面与底部操作，支持悬浮阴影与边框反馈。

<script setup>
import CardVariants from '@demos/vue/card-variants.vue'
import cardVariantsRaw from '@demos/vue/card-variants.vue.code.txt?raw'
import CardHoverable from '@demos/vue/card-hoverable.vue'
import cardHoverableRaw from '@demos/vue/card-hoverable.vue.code.txt?raw'
</script>

## 基础卡片

标题、说明、右上角操作区与封面。bordered 控制 ring 描边。

<DemoBlock title="有边框与无边框" description="title / description / extra / cover / bordered" :code="cardVariantsRaw">
  <CardVariants />
</DemoBlock>

## 悬浮反馈

hoverable 开启后，悬浮时阴影加深、ring 边框色高亮。

<DemoBlock title="可悬浮与底部操作区" description="hoverable / actions / click" :code="cardHoverableRaw">
  <CardHoverable />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-card
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | - | 标题 |
| description | string | - | 辅助说明 |
| bordered | boolean | true | 是否显示边框 |
| hoverable | boolean | false | 悬浮时阴影加深 + 边框高亮 |
| size | default · small | default | 卡片尺寸 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| title | 自定义标题 |
| description | 自定义说明 |
| extra | 右上角操作区 |
| cover | 封面 |
| default | 主体内容 |
| actions | 底部操作区 |

## 事件

| 名称 | 说明 |
| --- | --- |
| click | 点击卡片时触发 |
| hover | 悬浮卡片时触发 |

## 动效

- hoverable：阴影加深 + ring 边框色高亮（CSS 过渡 200ms）
- 无位移动画
