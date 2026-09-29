---
title: Switch 开关
description: 表示两种状态之间的切换
---

# Switch 开关

表示两种状态之间的切换，支持选中/未选中文字与两档尺寸。

<script setup>
import InputBasic from '@demos/vue/input-basic.vue'
import inputBasicRaw from '@demos/vue/input-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单控件全景（示例中含开关）" :code="inputBasicRaw">
  <InputBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-switch
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中（支持 v-model） |
| disabled | boolean | false | 是否禁用 |
| size | default · small | default | 控件尺寸 |
| label | string | - | 关联文字 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| checkedChildren | 开启状态文字插槽 |
| unCheckedChildren | 关闭状态文字插槽 |
