---
title: Card 卡片
description: 通用卡片容器，用于承载标题、操作区和内容
---

# Card 卡片

通用卡片容器，用于承载标题、操作区、封面与底部操作，支持悬浮提升动效。

<script setup>
import CardBasic from '@demos/vue/card-basic.vue'
import cardBasicRaw from '@demos/vue/card-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="标题/描述/操作区与无边框悬浮卡片" :code="cardBasicRaw">
  <CardBasic />
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
| hoverable | boolean | false | 悬浮时提升效果 |
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
