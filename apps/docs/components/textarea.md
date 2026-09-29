---
title: Textarea 多行文本
description: 用于输入多行文本内容
---

# Textarea 多行文本

用于输入多行文本内容，支持行数、自动调整高度与校验状态。

<script setup>
import InputBasic from '@demos/vue/input-basic.vue'
import inputBasicRaw from '@demos/vue/input-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单控件全景（示例中含多行文本域）" :code="inputBasicRaw">
  <InputBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-textarea
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | - | 绑定值 |
| rows | number | 3 | 行数 |
| placeholder | string | - | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| autosize | boolean | false | 自动调整高度 |
| status | error · warning | - | 校验状态 |

**方法**（ref 调用）：focus() · blur()

## 动效

- focus：ring 加粗过渡（transition-[box-shadow,color]）
- 无位移动画
