---
title: FieldGroup 字段组
description: 将多个字段组合为一行或一组
---

# FieldGroup 字段组

将多个字段组合为一行或一组。

<script setup>
import FormBasic from '@demos/vue/form-basic.vue'
import formBasicRaw from '@demos/vue/form-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单全景（示例中含同行字段组）" :code="formBasicRaw">
  <FormBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-field-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | sm · md · lg | md | 尺寸 |
| inline | boolean | true | 是否同行排列 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 字段内容 |

## 动效

无动效：布局容器组件。
