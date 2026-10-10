---
title: InputDate 日期选择
description: 选择日期，支持最小/最大日期与日期区间
---

# InputDate 日期选择

输入框 + popover 日历，选择日期，支持最小/最大日期、底部自定义内容与日期区间。容器支持五档尺寸、七种语义色、五种变体与高亮描边。

<script setup>
import InputDateBasic from '@demos/react/input-date-basic'
import inputDateBasicRaw from '@demos/react/input-date-basic.tsx.code.txt?raw'
import InputDateRange from '@demos/react/input-date-range'
import inputDateRangeRaw from '@demos/react/input-date-range.tsx.code.txt?raw'
import InputDateColors from '@demos/react/input-date-colors'
import inputDateColorsRaw from '@demos/react/input-date-colors.tsx.code.txt?raw'
import InputDateSlots from '@demos/react/input-date-slots'
import inputDateSlotsRaw from '@demos/react/input-date-slots.tsx.code.txt?raw'
</script>

## 基础用法

`value` 绑定日期（yyyy-MM-dd），点击输入框弹出日历选择。

<DemoBlock title="基础用法" description="value + onChange 绑定日期" :code="inputDateBasicRaw">
  <ReactDemo :component="InputDateBasic" />
</DemoBlock>

## 日期区间

range 开启后绑定值为 [开始, 结束] 数组，触发器内两个输入框由分隔图标连接；`separatorIcon` 可自定义分隔图标。

<DemoBlock title="日期区间" description="range 模式 + separatorIcon 自定义分隔图标" :code="inputDateRangeRaw">
  <ReactDemo :component="InputDateRange" />
</DemoBlock>

## 尺寸、语义色与变体

`size` 五档尺寸；`color` 七种语义色；`variant` 五种变体；`highlight` 常显颜色描边。

<DemoBlock title="尺寸与语义色" description="size / color / variant / highlight" :code="inputDateColorsRaw">
  <ReactDemo :component="InputDateColors" />
</DemoBlock>

## 内容与 ui

`leading` / `trailing` / `separator` 自定义内容；`ui` 按主题插槽覆盖类名。

<DemoBlock title="内容与 ui" description="leading / trailing / separator / ui 主题插槽" :code="inputDateSlotsRaw">
  <ReactDemo :component="InputDateSlots" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-date
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string \| string[] | - | 绑定日期（yyyy-MM-dd，range 时为 [开始, 结束]） |
| range | boolean | false | 日期区间选择 |
| min / max | string | - | 最小 / 最大日期 |
| disabled | boolean | false | 是否禁用 |
| placeholder | string | 选择日期 | 占位文字 |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| separatorIcon | XInputDateIcon | minus | 区间分隔图标（XIcon 名称或组件） |
| render | ReactElement | - | 渲染为指定元素 |
| autofocus | boolean | false | 挂载后自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（毫秒） |
| leading / separator / trailing | ReactNode | - | 前置 / 区间分隔 / 后置内容 |
| footer | ReactNode | - | 日历底部自定义内容 |
| onChange | (date) => void | - | 日期变化回调，载荷为 string，range 模式下为 string[] |
| ui | XInputDateUi | - | 主题插槽类名 |

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
