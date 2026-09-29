---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态。

<script setup>
import CheckboxBasicDemo from '@demos/vue/checkbox-basic-demo.vue'
import checkboxBasicDemoRaw from '@demos/vue/checkbox-basic-demo.vue.code.txt?raw'
</script>

<DemoBlock title="选中 / 半选 / 禁用" description="v-model / indeterminate / disabled" :code="checkboxBasicDemoRaw">
  <CheckboxBasicDemo />
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

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
