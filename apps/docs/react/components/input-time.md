---
title: InputTime 时间选择
description: 选择时间，支持 12/24 小时制与时间区间
---

# InputTime 时间选择

输入框 + popover 时间列表，选择时间，支持 12/24 小时制、分钟步长与时间区间。

<script setup>
import SelectBasic from '@demos/react/select-basic'
import selectBasicRaw from '@demos/react/select-basic.tsx.code.txt?raw'
import InputTimeRange from '@demos/react/input-time-range'
import inputTimeRangeRaw from '@demos/react/input-time-range.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含时间选择）" :code="selectBasicRaw">
  <ReactDemo :component="SelectBasic" />
</DemoBlock>

## 时间区间

range 开启后绑定值为 [开始, 结束] 数组，列表顶部提示当前选择阶段，先点开始时间再点结束时间，触发器展示「开始 → 结束」。

<DemoBlock title="时间区间" description="range 模式下选择开始与结束时间" :code="inputTimeRangeRaw">
  <ReactDemo :component="InputTimeRange" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-time
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string \| string[] | - | 绑定时间（HH:mm，range 时为 [开始, 结束]） |
| range | boolean | false | 时间区间选择 |
| hour12 | boolean | false | 12 小时制 |
| step | number | 1 | 步长（分钟） |
| disabled | boolean | false | 是否禁用 |
| onChange | (time) => void | - | 时间变化回调，载荷为 string，range 模式下为 string[] |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 触发按钮：focus ring 过渡
