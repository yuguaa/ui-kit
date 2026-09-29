---
title: Listbox 列表
description: 可选中项的列表选择组件
---

# Listbox 列表

可选中项的列表选择组件，支持单选与多选。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选中高亮与勾选标记" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-listbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label, disabled?, icon? }[] | - | 列表项数组 |
| selected | string[] | [] | 选中项 |
| multiple | boolean | false | 是否多选 |
| disabled | boolean | false | 是否禁用 |
| onSelect | (key) => void | - | 选中回调 |
