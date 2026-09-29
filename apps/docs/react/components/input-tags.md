---
title: InputTags 标签输入
description: 以标签形式输入多个值
---

# InputTags 标签输入

以标签形式输入多个值，回车添加、点击关闭移除。

<script setup>
import SelectBasic from '@demos/react/select-basic'
import selectBasicRaw from '@demos/react/select-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含标签输入）" :code="selectBasicRaw">
  <ReactDemo :component="SelectBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-tags
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string[] | [] | 标签数组 |
| max | number | - | 最大标签数 |
| placeholder | string | 输入后回车添加… | 占位文字 |
| onAdd / onRemove | (tag) / (index) => void | - | 添加 / 删除回调 |
