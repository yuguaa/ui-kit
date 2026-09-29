---
title: FormField 表单字段
description: 带标签、说明与错误信息的表单字段
---

# FormField 表单字段

带标签、辅助说明与错误信息的表单字段，错误信息优先取表单校验结果。

<script setup>
import FormBasic from '@demos/react/form-basic'
import formBasicRaw from '@demos/react/form-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单全景（示例中含字段与字段组）" :code="formBasicRaw">
  <ReactDemo :component="FormBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-form-field
npx shadcn@latest add @ui-kit/x-field-group
```

## API

### XFormField

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | - | 字段名（关联表单校验结果） |
| label | ReactNode | - | 标签文字 |
| description | ReactNode | - | 辅助说明 |
| error | ReactNode | - | 错误信息（优先取表单校验结果） |
| required | boolean | false | 是否必填 |
| id | string | - | 控件 id（label 关联用） |

### XFieldGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | sm · md · lg | md | 尺寸 |
| inline | boolean | true | 是否同行排列 |
