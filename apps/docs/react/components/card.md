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

## 设计规格

### 主题 token

在 shadcn card 原子上注入变体语义（`cardVariantStyles`）。token 与 Vue 端的对应关系：`bg-card` ≈ `bg-default`，`bg-foreground` ≈ `bg-inverted`，`bg-muted/50` ≈ `bg-elevated/50`，`ring-border` ≈ `ring-default`。

**背景**

| token | 使用场景 |
| --- | --- |
| bg-card | shadcn 原子默认背景（≈ Vue bg-default） |
| bg-foreground | solid 变体（≈ Vue bg-inverted） |
| bg-muted/50 | soft 变体 |

**文字**

| token | 使用场景 |
| --- | --- |
| text-card-foreground | 默认文字（≈ Vue text-default） |
| text-background | solid 变体文字（≈ Vue text-inverted） |
| text-background/70 | solid 变体描述（Vue 端为 text-dimmed） |
| text-muted-foreground | 描述文字（shadcn 原子，≈ Vue text-muted） |

**描边**

| token | 使用场景 |
| --- | --- |
| ring-1 ring-inset ring-border | bordered 为 true 时外描边 |
| divide-y divide-border | outline / soft 分区线；solid 为 divide-border/50 |
| hover:ring-primary/25 | hoverable 悬浮时边框高亮 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-lg | shadcn 原子圆角（与 Vue --radius-lg 8px 一致） |
| hover:shadow-md | hoverable 悬浮时阴影 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | bg-card text-card-foreground divide-y divide-border |
| solid | bg-foreground text-background divide-y divide-border/50；description text-background/70 |
| soft | bg-muted/50 divide-y divide-border |

size：default `gap-4 p-5` / small `gap-3 p-3`。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 默认渲染 `<div>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 没有内置角色 |

**动效**

- hoverable：`transition-shadow duration-200 hover:shadow-md hover:ring-primary/25`，阴影与边框色过渡 200ms
- 没有位移动画

**与 Vue 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| subtle 变体 | 支持 | 不支持 |
| hoverable / bordered / size / extra / cover / actions | 不支持 | React 独有 |
| solid 描述颜色 | text-dimmed | text-background/70 |
| outline 描边 | 变体内置 ring-default | bordered 属性控制（默认开启） |
