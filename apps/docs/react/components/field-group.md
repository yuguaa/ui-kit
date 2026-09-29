---
title: FieldGroup 字段组
description: 将多个字段组合为一行或一组
---

# FieldGroup 字段组

将多个字段组合为一行或一组。

<script setup>
import FormBasic from '@demos/react/form-basic'
import formBasicRaw from '@demos/react/form-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单全景（示例中含同行字段组）" :code="formBasicRaw">
  <ReactDemo :component="FormBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-field-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | sm · md · lg | md | 尺寸 |
| inline | boolean | true | 是否同行排列 |

## 动效

无动效：布局容器组件。
