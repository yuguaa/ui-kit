---
title: Collapsible 折叠
description: 点击触发内容展开或收起
---

# Collapsible 折叠

点击触发内容展开或收起。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「展开详情」展开内容" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-collapsible
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否展开（支持 v-model:open） |
| disabled | boolean | false | 是否禁用 |
| defaultOpen | boolean | false | 默认展开 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| trigger | 触发器 |
| content | 折叠内容 |

**方法**（ref 调用）：toggle()

## hook

```ts
const [Collapsible, collapsibleApi] = useXCollapsible()
collapsibleApi.toggle()   // open 可读，toggle / setOpen
```

## 动效

- 展开 / 收起：内容区高度过渡
- 箭头：旋转过渡
