---
title: Card 卡片
description: 通用卡片容器，用于承载标题、操作区和内容
---

# Card 卡片

通用卡片容器，用于承载标题、操作区、封面与底部操作，支持悬浮阴影与边框反馈。

<script setup>
import CardVariants from '@demos/react/card-variants'
import cardVariantsRaw from '@demos/react/card-variants.tsx.code.txt?raw'
import CardHoverable from '@demos/react/card-hoverable'
import cardHoverableRaw from '@demos/react/card-hoverable.tsx.code.txt?raw'
</script>

## 基础卡片

标题、说明、右上角操作区与封面。bordered 控制 ring 描边。

<DemoBlock title="有边框与无边框" description="title / description / extra / cover / bordered" :code="cardVariantsRaw">
  <ReactDemo :component="CardVariants" />
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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | ReactNode | - | 标题 |
| description | ReactNode | - | 辅助说明 |
| bordered | boolean | true | 是否显示边框 |
| hoverable | boolean | false | 悬浮时阴影加深 + 边框高亮 |
| size | default · small | default | 卡片尺寸 |
| cover | ReactNode | - | 封面 |
| actions | ReactNode | - | 底部操作按钮 |
| onClick | (event) => void | - | 点击卡片时触发 |

## 动效

- hoverable：阴影加深 + ring 边框色高亮（CSS 过渡 200ms）
- 无位移动画
