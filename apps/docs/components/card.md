---
title: Card 卡片
description: 通用卡片容器，支持三种变体、标题区与底部区插槽
---

# Card 卡片

通用卡片容器，用于承载标题、操作区、封面与底部操作。内置 outline / solid / soft 三种变体，支持 header 与 footer 插槽整体替换头部与底部区域。

<script setup>
import CardVariants from '@demos/vue/card-variants.vue'
import cardVariantsRaw from '@demos/vue/card-variants.vue.code.txt?raw'
import CardHoverable from '@demos/vue/card-hoverable.vue'
import cardHoverableRaw from '@demos/vue/card-hoverable.vue.code.txt?raw'
import CardSlots from '@demos/vue/card-slots.vue'
import cardSlotsRaw from '@demos/vue/card-slots.vue.code.txt?raw'
import CardUi from '@demos/vue/card-ui.vue'
import cardUiRaw from '@demos/vue/card-ui.vue.code.txt?raw'
</script>

## 变体

outline 描边卡片（默认）、solid 反色卡片、soft 轻底卡片。bordered=false 可去掉描边。

<DemoBlock title="三种变体" description="variant：outline / solid / soft" :code="cardVariantsRaw">
  <CardVariants />
</DemoBlock>

## 插槽

header / footer 整体替换头部与底部区域；title / description 单独替换标题与描述。

<DemoBlock title="header / footer / title / description" description="同名插槽覆盖对应分区" :code="cardSlotsRaw">
  <CardSlots />
</DemoBlock>

## ui 插槽

按主题插槽键注入类名，覆盖根、头部、标题、描述、主体与底部六个分区。

<DemoBlock title="ui 插槽自定义" description="ui：root / header / title / description / body / footer" :code="cardUiRaw">
  <CardUi />
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
| variant | outline · solid · soft | outline | 预设样式 |
| bordered | boolean | true | 是否显示边框 |
| hoverable | boolean | false | 悬浮时阴影加深 + 边框高亮 |
| size | default · small | default | 卡片尺寸 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | CardUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 卡片根元素 |
| header | 头部区域 |
| title | 标题元素 |
| description | 描述元素 |
| body | 主体内容区 |
| footer | 底部区域 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| header | 头部整体内容（覆盖默认 title / description / extra） |
| title | 自定义标题 |
| description | 自定义说明 |
| extra | 右上角操作区 |
| cover | 封面 |
| default | 主体内容 |
| footer | 底部整体内容（优先于 actions） |
| actions | 底部操作区 |

## 事件

| 名称 | 说明 |
| --- | --- |
| click | 原生点击事件透传 |
| mouseenter | 原生悬浮事件透传 |

## 动效

- hoverable：阴影加深 + ring 边框色高亮（CSS 过渡 200ms）
- 无位移动画
