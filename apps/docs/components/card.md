---
title: Card 卡片
description: 通用卡片容器，支持三种变体、标题区与底部区插槽
---

# Card 卡片

通用卡片容器，用于承载标题、操作区、封面与底部操作。内置 outline / solid / soft 三种变体，支持 header 与 footer 插槽整体替换头部与底部区域。

## 变体

outline 描边卡片（默认）、solid 反色卡片、soft 轻底卡片。bordered=false 可去掉描边。

<DemoPreview file="demos/vue/card-variants.vue" title="三种变体" description="variant：outline / solid / soft" />

## 插槽

header / footer 整体替换头部与底部区域；title / description 单独替换标题与描述。

<DemoPreview file="demos/vue/card-slots.vue" title="header / footer / title / description" description="同名插槽覆盖对应分区" />

## ui 插槽

按主题插槽键注入类名，覆盖根、头部、标题、描述、主体与底部六个分区。

<DemoPreview file="demos/vue/card-ui.vue" title="ui 插槽自定义" description="ui：root / header / title / description / body / footer" />

## 悬浮反馈

hoverable 开启后，悬浮时阴影加深、ring 边框色高亮。

<DemoPreview file="demos/vue/card-hoverable.vue" title="可悬浮与底部操作区" description="hoverable / actions / click" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-card
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

## 设计规格

### 主题 token

slots 公共类：`root` 为 `rounded-lg overflow-hidden`；`header` 为 `p-4 sm:px-6`；`title` 为 `text-highlighted font-semibold`；`description` 为 `mt-1 text-muted text-sm`；`body` 为 `p-4 sm:p-6`；`footer` 为 `p-4 sm:px-6`。

**背景**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| bg-inverted | #171717 / #ffffff | solid 变体 |
| bg-default | #ffffff / #171717 | outline 变体 |
| bg-elevated/50 | #f5f5f5 / #262626（50%） | soft / subtle 变体 |

**文字**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| text-highlighted | #171717 / #ffffff | 标题 |
| text-muted | #737373 / #a3a3a3 | 描述 |
| text-inverted | #ffffff / #171717 | solid 变体标题 |
| text-dimmed | #a3a3a3 / #a3a3a3 | solid 变体描述 |

**描边**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| ring ring-default | #e5e5e5 / #262626 | outline / subtle 外描边 |
| divide-y divide-default | #e5e5e5 / #262626 | 各分区之间的分割线 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-lg | --radius-lg 8px |
| 阴影 | 不使用 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | bg-default ring ring-default divide-y divide-default |
| solid | bg-inverted text-inverted；title text-inverted；description text-dimmed |
| soft | bg-elevated/50 divide-y divide-default |
| subtle | bg-elevated/50 ring ring-default divide-y divide-default |

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 默认渲染 `<div>`，没有可聚焦行为；click / mouseenter 经原生 attrs 透传 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 没有内置角色与状态属性 |

**动效**

没有动效：Vue 端没有 hoverable 能力（hoverable 阴影与 ring 高亮为 React 端扩展）。
