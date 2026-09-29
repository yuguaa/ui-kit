---
title: Slider 滑块
description: 通过拖动滑块在区间内取值
---

# Slider 滑块

通过拖动滑块在区间内取值。

<script setup>
import SelectBasic from '@demos/vue/select-basic.vue'
import selectBasicRaw from '@demos/vue/select-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含滑块）" :code="selectBasicRaw">
  <SelectBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-slider
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 绑定值（支持 v-model） |
| min / max | number | 0 / 100 | 最小值 / 最大值 |
| step | number | 1 | 步长 |
| disabled | boolean | false | 是否禁用 |

## 事件

| 名称 | 说明 |
| --- | --- |
| change | 值变化回调 |

## 动效

- 拖动：即时响应
- thumb：hover / focus 聚焦环过渡
