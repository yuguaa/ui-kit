---
title: InputMenu 输入菜单
description: 输入框与下拉菜单组合的组件
---

# InputMenu 输入菜单

输入框与下拉菜单组合的组件，输入关键字过滤菜单项，选中后回填输入框。

<script setup>
import SelectBasic from '@demos/react/select-basic'
import selectBasicRaw from '@demos/react/select-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含输入菜单）" :code="selectBasicRaw">
  <ReactDemo :component="SelectBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { label, value }[] | - | 菜单项数组 |
| searchable | boolean | true | 是否可搜索 |
| placeholder | string | 搜索并选择… | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| onSelect | (item) => void | - | 选中回调 |
