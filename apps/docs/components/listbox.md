---
title: Listbox 列表
description: 可选中项的列表选择组件
---

# Listbox 列表

可选中项的列表选择组件，支持单选与多选。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选中高亮与勾选标记" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-listbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label, disabled? }[] | - | 列表项数组 |
| selected | string[] | [] | 选中项 |
| multiple | boolean | false | 是否多选 |
| disabled | boolean | false | 是否禁用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| item | 自定义列表项（{ item }） |

## 事件

| 名称 | 说明 |
| --- | --- |
| select | 选中回调 (key) |
