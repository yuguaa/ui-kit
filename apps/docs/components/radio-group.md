---
title: RadioGroup 单选框组
description: 在一组可选项中进行单项选择
---

# RadioGroup 单选框组

在一组可选项中进行单项选择，按钮样式可紧凑展示。

<script setup>
import InputBasic from '@demos/vue/input-basic.vue'
import inputBasicRaw from '@demos/vue/input-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单控件全景（示例中含单选框组）" :code="inputBasicRaw">
  <InputBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-radio-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | { value, label?, disabled? }[] | - | 选项数据源 |
| variant | radio · button | radio | 展示形式 |
| buttonStyle | outline · solid | outline | 按钮样式（variant 为 button 时生效） |
| disabled | boolean | false | 整体禁用 |
