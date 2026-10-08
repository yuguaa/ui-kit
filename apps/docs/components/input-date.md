---
title: InputDate 日期选择
description: 选择日期，支持最小/最大日期与日期区间
---

# InputDate 日期选择

输入框 + popover 日历，选择日期，支持最小/最大日期、底部自定义内容与日期区间。

<script setup>
import SelectBasic from '@demos/vue/select-basic.vue'
import selectBasicRaw from '@demos/vue/select-basic.vue.code.txt?raw'
import InputDateRange from '@demos/vue/input-date-range.vue'
import inputDateRangeRaw from '@demos/vue/input-date-range.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含日期与时间）" :code="selectBasicRaw">
  <SelectBasic />
</DemoBlock>

## 日期区间

range 开启后绑定值为 [开始, 结束] 数组，先点开始日期再点结束日期，日历自动补全中间日期高亮，触发器展示「开始 → 结束」。

<DemoBlock title="日期区间" description="range 模式下选择开始与结束日期" :code="inputDateRangeRaw">
  <InputDateRange />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-date
npx shadcn-vue@latest add @ui-kit/x-input-time
```

## API

### XInputDate

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string \| string[] | - | 绑定日期（yyyy-MM-dd，range 时为 [开始, 结束]，支持 v-model） |
| range | boolean | false | 日期区间选择 |
| min / max | string | - | 最小 / 最大日期 |
| disabled | boolean | false | 是否禁用 |
| placeholder | string | 选择日期 | 占位文字 |

**事件**：`update:modelValue` / `change`，载荷为 string，range 模式下为 string[]

**插槽**：footer 底部自定义内容

### XInputTime

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | - | 绑定时间（HH:mm，支持 v-model） |
| hour12 | boolean | false | 12 小时制 |
| step | number | 1 | 步长（分钟） |
| disabled | boolean | false | 是否禁用 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 触发按钮：focus ring 过渡
