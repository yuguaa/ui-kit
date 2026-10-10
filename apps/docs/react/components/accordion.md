---
title: Accordion 手风琴
description: 可展开与折叠的内容分组
---

# Accordion 手风琴

可展开与折叠的内容分组，支持多开、字段映射与禁用项。

<script setup>
import AccordionBasic from '@demos/react/accordion-basic'
import accordionBasicRaw from '@demos/react/accordion-basic.tsx.code.txt?raw'
import AccordionSlots from '@demos/react/accordion-slots'
import accordionSlotsRaw from '@demos/react/accordion-slots.tsx.code.txt?raw'
import AccordionUi from '@demos/react/accordion-ui'
import accordionUiRaw from '@demos/react/accordion-ui.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="items 数组渲染标题与内容，defaultValue 指定默认展开项" :code="accordionBasicRaw">
  <ReactDemo :component="AccordionBasic" />
</DemoBlock>

## 字段映射与插槽

`labelKey` / `valueKey` 指定标题与唯一值来源字段；`leading` / `trailing` / `body` 为函数插槽，接收 `{ item, index, open }`。

<DemoBlock title="字段映射与插槽" description="labelKey / valueKey 映射，leading / body 函数插槽" :code="accordionSlotsRaw">
  <ReactDemo :component="AccordionSlots" />
</DemoBlock>

## ui 插槽自定义

`ui` 按主题插槽（root / item / header / trigger / leadingIcon / label / trailingIcon / content / body）覆盖每一层元素的类名。

<DemoBlock title="ui 插槽自定义" description="九个插槽键逐层注入类名" :code="accordionUiRaw">
  <ReactDemo :component="AccordionUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-accordion
```

## API

<!--@include: ./api/accordion.md-->

**插槽**：leading / trailing 前置与后置 · content 整个内容区 · body 内容容器内部 · children 标题内容

插槽 props：`{ item, index, open }`

### XAccordionItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | string | - | 标题文本（字段名由 labelKey 决定） |
| icon | XIconName · ComponentType | - | 前置图标 |
| trailingIcon | XIconName · ComponentType | - | 后置图标，优先于组件级 trailingIcon |
| content | ReactNode | - | 内容 |
| value | string | - | 唯一值（字段名由 valueKey 决定），默认取索引 |
| disabled | boolean | false | 该项是否禁用 |
| className | string | - | 该项根元素类名 |
| ui | XAccordionItemUi | - | 该项主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| item | 单项容器 |
| header | 标题行 |
| trigger | 触发按钮 |
| leadingIcon | 前置图标 |
| label | 标题文本 |
| trailingIcon | 后置图标 |
| content | 内容区 |
| body | 内容容器 |

## hook

```tsx
const [Accordion, accordionApi] = useXAccordion({ items: [...] })
accordionApi.open(0)    // open(index) / close(index) / toggle(index)，value 可读
```

## 动效

- expand / collapse：内容区高度展开与收起动画（animate-accordion-down / up）
- trailingIcon：展开时旋转 180°（transition-transform）
- 无位移动画
