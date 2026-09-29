---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态。

<script setup>
import InputBasic from '@demos/vue/input-basic.vue'
import inputBasicRaw from '@demos/vue/input-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单控件全景（示例中含多选框与半选状态）" :code="inputBasicRaw">
  <InputBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-checkbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中（支持 v-model） |
| disabled | boolean | false | 是否禁用 |
| indeterminate | boolean | false | 半选状态 |
| value | string · number | - | 选项的值 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 选项文字插槽 |
