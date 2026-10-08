---
title: Listbox 列表
description: 可选中项的列表选择组件
---

# Listbox 列表

可选中项的列表选择组件，支持单选与多选、搜索过滤、加载态与空状态。

<script setup>
import ListboxBasic from '@demos/react/listbox-basic'
import listboxBasicRaw from '@demos/react/listbox-basic.tsx.code.txt?raw'
import ListboxFilterable from '@demos/react/listbox-filterable'
import listboxFilterableRaw from '@demos/react/listbox-filterable.tsx.code.txt?raw'
import ListboxLoading from '@demos/react/listbox-loading'
import listboxLoadingRaw from '@demos/react/listbox-loading.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="单选与多选" description="selected 受控，onSelect 返回 key" :code="listboxBasicRaw">
  <ReactDemo :component="ListboxBasic" />
</DemoBlock>

## 搜索过滤

filterable 开启顶部搜索框，按列表项 label 文本实时过滤；过滤结果为空时显示 emptyText。

<DemoBlock title="搜索过滤与空状态" description="输入不存在的关键词查看空提示" :code="listboxFilterableRaw">
  <ReactDemo :component="ListboxFilterable" />
</DemoBlock>

## 加载态

<DemoBlock title="加载中" description="loading 显示加载提示并禁止交互" :code="listboxLoadingRaw">
  <ReactDemo :component="ListboxLoading" />
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
| filterable | boolean | false | 是否显示搜索框 |
| loading | boolean | false | 加载态，显示加载提示并禁止交互 |
| searchPlaceholder | string | 搜索… | 搜索框占位文字 |
| emptyText | string | 暂无匹配项 | 过滤结果为空时的提示文字 |
| onSelect | (key) => void | - | 选中回调 |

## 动效

- 选项：hover 背景过渡
- 加载：图标旋转
