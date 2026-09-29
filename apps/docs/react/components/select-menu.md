---
title: SelectMenu 选择菜单
description: 带搜索的增强选择器，支持多选与空状态
---

# SelectMenu 选择菜单

带搜索的增强选择器，选项为 `{ label, value }` 结构，支持多选。

<script setup>
import SelectMenuBasic from '@demos/react/select-menu-basic'
import selectMenuBasicRaw from '@demos/react/select-menu-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="单选 / 搜索 / 多选 / 禁用" description="options / showSearch / multiple / disabled" :code="selectMenuBasicRaw">
  <ReactDemo :component="SelectMenuBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-select-menu
npx shadcn@latest add @ui-kit/x-input-menu
npx shadcn@latest add @ui-kit/x-input-number
npx shadcn@latest add @ui-kit/x-slider
npx shadcn@latest add @ui-kit/x-input-rating
npx shadcn@latest add @ui-kit/x-input-tags
npx shadcn@latest add @ui-kit/x-input-date
npx shadcn@latest add @ui-kit/x-input-time
```

## API

### XSelectMenu

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | { label, value }[] | - | 选项数据源 |
| multiple | boolean | false | 多选模式 |
| showSearch | boolean | false | 是否支持搜索 |
| placeholder | string | 请选择 | 占位提示文字 |
| value / defaultValue | string · string[] | - | 选中值 |
| onChange | (value) => void | - | 选中回调 |

### XInputMenu

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { label, value }[] | - | 菜单项数组 |
| searchable | boolean | true | 是否可搜索 |
| onSelect | (item) => void | - | 选中回调 |

### XInputNumber

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | number | 0 | 绑定值 |
| min / max | number | - | 最小值 / 最大值 |
| step | number | 1 | 步长 |
| onChange | (value) => void | - | 值变化回调 |

### XSlider

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | number[] | - | 绑定值 |
| min / max | number | 0 / 100 | 最小值 / 最大值 |
| step | number | 1 | 步长 |

### XInputRating

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | number | 0 | 评分值 |
| max | number | 5 | 最大分值 |
| allowHalf | boolean | false | 允许半星 |
| item | (state) => ReactNode | - | 自定义图标渲染 |

### XInputTags

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string[] | [] | 标签数组 |
| max | number | - | 最大标签数 |
| onAdd / onRemove | (tag) / (index) => void | - | 添加 / 删除回调 |

### XInputDate / XInputTime

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string | - | 绑定日期（yyyy-MM-dd）/ 时间（HH:mm） |
| min / max | string | - | 最小 / 最大日期 |
| hour12 | boolean | false | （时间）12 小时制 |
| step | number | 1 | （时间）步长（分钟） |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 触发按钮：focus ring 过渡
