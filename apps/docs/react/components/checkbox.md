---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态。

<script setup>
import InputBasic from '@demos/react/input-basic'
import inputBasicRaw from '@demos/react/input-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单控件全景（示例中含多选框与半选状态）" :code="inputBasicRaw">
  <ReactDemo :component="InputBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-checkbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中 |
| disabled | boolean | false | 是否禁用 |
| indeterminate | boolean | false | 半选状态 |
| value | string · number | - | 选项的值 |
| label | ReactNode | - | 选项文字 |
