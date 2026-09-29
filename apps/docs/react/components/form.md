---
title: Form 表单
description: 收集、校验并提交表单数据，配套 hook 先行用法
---

# Form 表单

收集、校验并提交表单数据。`rules` 支持 required / pattern / min / max / 自定义 validator。

<script setup>
import FormBasic from '@demos/react/form-basic'
import formBasicRaw from '@demos/react/form-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="hook 先行用法：useXForm 创建 [Form, formApi]，表单校验、重置与提交" :code="formBasicRaw">
  <ReactDemo :component="FormBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-form
npx shadcn@latest add @ui-kit/x-form-field
npx shadcn@latest add @ui-kit/x-field-group
```

## useXForm hook

```tsx
const [Form, formApi] = useXForm({
  defaultValues: { email: "" },
  rules: { email: [{ required: true, message: "邮箱不能为空" }] },
});

formApi.setValue("email", "you@example.com");
formApi.validate();   // 校验，返回错误记录
formApi.reset();      // 重置
formApi.submit();     // 提交
```

| 名称 | 说明 |
| --- | --- |
| values / errors | 表单数据 / 校验错误 |
| setValue / setValues | 更新字段 / 批量更新 |
| validate / reset / submit | 校验 / 重置 / 提交 |

## 组件 API

### XForm

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| values / defaultValues | object | - | 表单数据 |
| rules | Record<string, Rule[]> | - | 校验规则（按字段名） |
| disabled | boolean | false | 整体禁用 |
| onSubmit | (values) => void | - | 校验通过后触发 |
| onError | (errors) => void | - | 校验失败触发 |

### XFormField

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | - | 字段名（关联表单校验结果） |
| label | ReactNode | - | 标签文字 |
| description | ReactNode | - | 辅助说明 |
| error | ReactNode | - | 错误信息（优先取表单校验结果） |
| required | boolean | false | 是否必填 |

### XFieldGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | sm · md · lg | md | 尺寸 |
| inline | boolean | true | 是否同行排列 |
