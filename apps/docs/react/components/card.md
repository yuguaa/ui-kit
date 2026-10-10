---
title: Card 卡片
description: 通用卡片容器，支持三种变体、标题区与底部区插槽
---

# Card 卡片

通用卡片容器，用于承载标题、操作区、封面与底部操作。内置 outline / solid / soft 三种变体，支持 header 与 footer 整体替换头部与底部区域。

<script setup>
import CardVariants from '@demos/react/card-variants'
import cardVariantsRaw from '@demos/react/card-variants.tsx.code.txt?raw'
import CardHoverable from '@demos/react/card-hoverable'
import cardHoverableRaw from '@demos/react/card-hoverable.tsx.code.txt?raw'
import CardSlots from '@demos/react/card-slots'
import cardSlotsRaw from '@demos/react/card-slots.tsx.code.txt?raw'
import CardUi from '@demos/react/card-ui'
import cardUiRaw from '@demos/react/card-ui.tsx.code.txt?raw'
</script>

## 变体

outline 描边卡片（默认）、solid 反色卡片、soft 轻底卡片。bordered=false 可去掉描边。

<DemoBlock title="三种变体" description="variant：outline / solid / soft" :code="cardVariantsRaw">
  <ReactDemo :component="CardVariants" />
</DemoBlock>

## 插槽

header / footer 整体替换头部与底部区域；title / description 单独替换标题与描述。

<DemoBlock title="header / footer / title / description" description="同名属性覆盖对应分区" :code="cardSlotsRaw">
  <ReactDemo :component="CardSlots" />
</DemoBlock>

## ui 插槽

按主题插槽键注入类名，覆盖根、头部、标题、描述、主体与底部六个分区。

<DemoBlock title="ui 插槽自定义" description="ui：root / header / title / description / body / footer" :code="cardUiRaw">
  <ReactDemo :component="CardUi" />
</DemoBlock>

## 悬浮反馈

hoverable 开启后，悬浮时阴影加深、ring 边框色高亮。

<DemoBlock title="可悬浮与底部操作区" description="hoverable / actions / onClick" :code="cardHoverableRaw">
  <ReactDemo :component="CardHoverable" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-card
```

## API

<!--@include: ./api/card.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 卡片根元素 |
| header | 头部区域 |
| title | 标题元素 |
| description | 描述元素 |
| body | 主体内容区 |
| footer | 底部区域 |

## 动效

- hoverable：阴影加深 + ring 边框色高亮（CSS 过渡 200ms）
- 无位移动画
