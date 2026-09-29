---
title: SelectMenu 选择菜单
description: 带搜索的增强选择器，支持多选与空状态插槽
---

# SelectMenu 选择菜单

带搜索的增强选择器，选项为 `{ label, value }` 结构，支持多选。

<script setup>
import SelectMenuBasic from '@demos/vue/select-menu-basic.vue'
import selectMenuBasicRaw from '@demos/vue/select-menu-basic.vue.code.txt?raw'
</script>

<DemoBlock title="单选 / 搜索 / 多选 / 禁用" description="options / show-search / multiple / disabled" :code="selectMenuBasicRaw">
  <SelectMenuBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-select-menu
npx shadcn-vue@latest add @ui-kit/x-input-menu
npx shadcn-vue@latest add @ui-kit/x-input-number
npx shadcn-vue@latest add @ui-kit/x-slider
npx shadcn-vue@latest add @ui-kit/x-input-rating
npx shadcn-vue@latest add @ui-kit/x-input-tags
npx shadcn-vue@latest add @ui-kit/x-input-date
npx shadcn-vue@latest add @ui-kit/x-input-time
```

## API

### XSelectMenu

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | { label, value }[] | - | 选项数据源 |
| multiple | boolean | false | 多选模式 |
| showSearch | boolean | false | 是否支持搜索 |
| placeholder | string | 请选择 | 占位提示文字 |
| disabled | boolean | false | 是否禁用 |

**插槽**：option 自定义选项内容 · empty 空数据提示内容

### XInputMenu

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { label, value }[] | - | 菜单项数组 |
| searchable | boolean | true | 是否可搜索 |
| placeholder | string | 搜索并选择… | 占位文字 |

**插槽**：leading 前置图标 · item 自定义菜单项

### XInputNumber

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 绑定值 |
| min / max | number | -∞ / +∞ | 最小值 / 最大值 |
| step | number | 1 | 步长 |

### XSlider

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 绑定值 |
| min / max | number | 0 / 100 | 最小值 / 最大值 |
| step | number | 1 | 步长 |

### XInputRating

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 评分值 |
| max | number | 5 | 最大分值 |
| allowHalf | boolean | false | 允许半星 |

### XInputTags

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string[] | [] | 标签数组 |
| max | number | - | 最大标签数 |
| placeholder | string | 输入后回车添加… | 占位文字 |

**事件**：add 添加标签 · remove 删除标签

### XInputDate / XInputTime

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | - | 绑定日期（yyyy-MM-dd）/ 时间（HH:mm） |
| min / max | string | - | 最小 / 最大日期 |
| hour12 | boolean | false | （时间）12 小时制 |
| step | number | 1 | （时间）步长（分钟） |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 触发按钮：focus ring 过渡
