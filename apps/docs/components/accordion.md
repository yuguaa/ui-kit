---
title: Accordion 手风琴
description: 可展开与折叠的内容分组
---

# Accordion 手风琴

可展开与折叠的内容分组，支持多开、字段映射与禁用项。

<script setup>
import AccordionBasic from '@demos/vue/accordion-basic.vue'
import accordionBasicRaw from '@demos/vue/accordion-basic.vue.code.txt?raw'
import AccordionSlots from '@demos/vue/accordion-slots.vue'
import accordionSlotsRaw from '@demos/vue/accordion-slots.vue.code.txt?raw'
import AccordionUi from '@demos/vue/accordion-ui.vue'
import accordionUiRaw from '@demos/vue/accordion-ui.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="items 数组渲染标题与内容，defaultValue 指定默认展开项" :code="accordionBasicRaw">
  <AccordionBasic />
</DemoBlock>

## 字段映射与插槽

`labelKey` / `valueKey` 指定标题与唯一值来源字段；`leading` / `trailing` 插槽替换两侧图标，`body` 插槽接收 `{ item, index, open }` 自定义内容。

<DemoBlock title="字段映射与插槽" description="labelKey / valueKey 映射，leading / trailing / body 插槽" :code="accordionSlotsRaw">
  <AccordionSlots />
</DemoBlock>

## ui 插槽自定义

`ui` 按主题插槽（root / item / header / trigger / leadingIcon / label / trailingIcon / content / body）覆盖每一层元素的类名。

<DemoBlock title="ui 插槽自定义" description="九个插槽键逐层注入类名" :code="accordionUiRaw">
  <AccordionUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-accordion
```

## API

<!--@include: ./api/accordion.md-->

### AccordionItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | string | - | 标题文本（字段名由 labelKey 决定） |
| icon | string · Component | - | 前置图标 |
| trailingIcon | string · Component | - | 后置图标，优先于组件级 trailingIcon |
| content | string | - | 内容文本 |
| value | string | - | 唯一值（字段名由 valueKey 决定），默认取索引 |
| disabled | boolean | false | 该项是否禁用 |
| class | string | - | 该项根元素类名 |
| ui | AccordionItemUi | - | 该项主题插槽类名 |

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

## 插槽

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| leading | { item, index, open } | 前置图标 |
| default | { item, index, open } | 标题内容 |
| trailing | { item, index, open } | 后置图标 |
| content | { item, index, open } | 整个内容区 |
| body | { item, index, open } | 内容容器内部 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 展开项变化（v-model） |

## hook

```ts
const [Accordion, accordionApi] = useXAccordion({ items: [...] })
accordionApi.open(0)    // open(index) / close(index) / toggle(index)，value 可读
```

## 动效

- expand / collapse：内容区高度展开与收起动画（animate-accordion-down / up）
- trailingIcon：展开时旋转 180°（transition-transform）
- 无位移动画

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root · trigger · content | 无背景 token（透明） | — |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| trigger | font-medium text-sm（无颜色 token，继承上下文） | — |
| body | text-sm（继承上下文颜色） | — |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| item | border-b border-default（最后一项无下边框） | #e5e5e5 / #262626 |
| trigger（focus-visible） | outline-primary/25 · focus-visible:outline-3 | #22c55e |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| trigger | rounded-md | 6px（--radius-md） |

**变体**

| 变体 | token 组合 |
| --- | --- |
| disabled | trigger 为 cursor-not-allowed + opacity-75 |
| type=single（默认） | 仅一项展开；collapsible=true（默认）时允许全部收起 |
| type=multiple | 多项同时展开 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | reka Accordion 语义：Enter / Space 切换展开状态；ArrowDown / ArrowUp 在 trigger 间移动焦点；Home / End 跳转首尾 |
| ARIA | trigger 为 role=button + aria-expanded；content 为 role=region + aria-labelledby 指向 trigger；禁用项不可聚焦 |
| 动效 | content 展开收起 accordion-down / accordion-up 200ms（默认 unmountOnHide=true，关闭后卸载）；trailingIcon 展开时 rotate-180 + duration-200，motion-reduce 时禁用旋转过渡 |
