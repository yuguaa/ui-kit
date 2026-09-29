---
title: Accordion 手风琴
description: 可展开与折叠的内容分组
---

# Accordion 手风琴

可展开与折叠的内容分组，支持多开与禁用。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击标题展开内容" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-accordion
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { title, disabled? }[] | - | 手风琴项数组 |
| multiple | boolean | false | 是否可多开 |
| disabled | boolean | false | 是否禁用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| item | 自定义项标题（{ item, index }） |
| content | 项内容（{ item, index }） |

## hook

```ts
const [Accordion, accordionApi] = useXAccordion({ items: [...] })
accordionApi.open(0)    // open(index) / close(index) / toggle(index)，value 可读
```

## 动效

- expand / collapse：内容区高度展开与收起动画（animate-accordion-down / up）
- hover：触发器文字下划线过渡
- 无位移动画
