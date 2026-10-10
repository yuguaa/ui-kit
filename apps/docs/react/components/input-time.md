---
title: InputTime 时间选择
description: 选择时间，支持 12/24 小时制与时间区间
---

# InputTime 时间选择

输入框 + popover 时间列表，选择时间，支持 12/24 小时制、分钟步长与时间区间。容器支持五档尺寸、七种语义色、五种变体与高亮描边。

<script setup>
import InputTimeBasic from '@demos/react/input-time-basic'
import inputTimeBasicRaw from '@demos/react/input-time-basic.tsx.code.txt?raw'
import InputTimeRange from '@demos/react/input-time-range'
import inputTimeRangeRaw from '@demos/react/input-time-range.tsx.code.txt?raw'
import InputTimeColors from '@demos/react/input-time-colors'
import inputTimeColorsRaw from '@demos/react/input-time-colors.tsx.code.txt?raw'
import InputTimeSlots from '@demos/react/input-time-slots'
import inputTimeSlotsRaw from '@demos/react/input-time-slots.tsx.code.txt?raw'
</script>

## 基础用法

`value` 绑定时间（HH:mm），点击输入框弹出时间列表选择。

<DemoBlock title="基础用法" description="value + onChange 绑定时间" :code="inputTimeBasicRaw">
  <ReactDemo :component="InputTimeBasic" />
</DemoBlock>

## 时间区间

range 开启后绑定值为 [开始, 结束] 数组，触发器内两个输入框由分隔图标连接；`separatorIcon` 可自定义分隔图标。

<DemoBlock title="时间区间" description="range 模式 + separatorIcon 自定义分隔图标" :code="inputTimeRangeRaw">
  <ReactDemo :component="InputTimeRange" />
</DemoBlock>

## 尺寸、语义色与变体

`size` 五档尺寸；`color` 七种语义色；`variant` 五种变体；`highlight` 常显颜色描边。

<DemoBlock title="尺寸与语义色" description="size / color / variant / highlight" :code="inputTimeColorsRaw">
  <ReactDemo :component="InputTimeColors" />
</DemoBlock>

## 内容与 ui

`leading` / `trailing` / `separator` 自定义内容；`ui` 按主题插槽覆盖类名。

<DemoBlock title="内容与 ui" description="leading / trailing / ui 主题插槽" :code="inputTimeSlotsRaw">
  <ReactDemo :component="InputTimeSlots" />
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
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| separatorIcon | XInputTimeIcon | minus | 区间分隔图标（XIcon 名称或组件） |
| render | ReactElement | - | 渲染为指定元素 |
| autofocus | boolean | false | 挂载后自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（毫秒） |
| leading / separator / trailing | ReactNode | - | 前置 / 区间分隔 / 后置内容 |
| onChange | (time) => void | - | 时间变化回调，载荷为 string，range 模式下为 string[] |
| ui | XInputTimeUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 触发按钮 |
| base | 输入容器（变体、描边、圆角） |
| leading | 前置内容容器 |
| leadingIcon | 默认前置图标 |
| separatorIcon | 区间分隔图标 |
| trailing | 后置内容容器 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 容器：focus ring 过渡
