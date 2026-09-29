---
title: InputNumber 数字输入
description: 带步进按钮的数字输入框
---

# InputNumber 数字输入

带加减步进按钮的数字输入框。

<script setup>
import SelectBasic from '@demos/vue/select-basic.vue'
import selectBasicRaw from '@demos/vue/select-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含数字输入）" :code="selectBasicRaw">
  <SelectBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-number
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 绑定值（支持 v-model） |
| min / max | number | -∞ / +∞ | 最小值 / 最大值 |
| step | number | 1 | 步长 |
| disabled | boolean | false | 是否禁用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| increment | 加号按钮 |
| decrement | 减号按钮 |

## 事件

| 名称 | 说明 |
| --- | --- |
| change | 值变化回调 |

## 动效

- 步进按钮：hover 背景过渡
