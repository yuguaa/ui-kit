---
title: InputDate 日期选择
description: 选择日期，支持最小/最大日期与日期区间
---

# InputDate 日期选择

输入框 + popover 日历，选择日期，支持最小/最大日期、底部自定义内容与日期区间。容器支持五档尺寸、七种语义色、五种变体与高亮描边。

<script setup>
import InputDateBasic from '@demos/vue/input-date-basic.vue'
import inputDateBasicRaw from '@demos/vue/input-date-basic.vue.code.txt?raw'
import InputDateRange from '@demos/vue/input-date-range.vue'
import inputDateRangeRaw from '@demos/vue/input-date-range.vue.code.txt?raw'
import InputDateColors from '@demos/vue/input-date-colors.vue'
import inputDateColorsRaw from '@demos/vue/input-date-colors.vue.code.txt?raw'
import InputDateSlots from '@demos/vue/input-date-slots.vue'
import inputDateSlotsRaw from '@demos/vue/input-date-slots.vue.code.txt?raw'
</script>

## 基础用法

`modelValue` 绑定日期（yyyy-MM-dd），点击输入框弹出日历选择。

<DemoBlock title="基础用法" description="v-model 绑定日期" :code="inputDateBasicRaw">
  <InputDateBasic />
</DemoBlock>

## 日期区间

range 开启后绑定值为 [开始, 结束] 数组，触发器内两个输入框由分隔图标连接；`separatorIcon` 可自定义分隔图标。

<DemoBlock title="日期区间" description="range 模式 + separatorIcon 自定义分隔图标" :code="inputDateRangeRaw">
  <InputDateRange />
</DemoBlock>

## 尺寸、语义色与变体

`size` 五档尺寸；`color` 七种语义色；`variant` 五种变体；`highlight` 常显颜色描边。

<DemoBlock title="尺寸与语义色" description="size / color / variant / highlight" :code="inputDateColorsRaw">
  <InputDateColors />
</DemoBlock>

## 插槽与 ui

`leading` / `trailing` 插槽自定义两侧内容，`separator` 插槽自定义区间分隔内容；`ui` 按主题插槽覆盖类名。

<DemoBlock title="插槽与 ui" description="leading / trailing / separator 插槽 / ui 主题插槽" :code="inputDateSlotsRaw">
  <InputDateSlots />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-date
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string \| string[] | - | 绑定日期（yyyy-MM-dd，range 时为 [开始, 结束]，支持 v-model） |
| range | boolean | false | 日期区间选择 |
| min / max | string | - | 最小 / 最大日期 |
| disabled | boolean | false | 是否禁用 |
| placeholder | string | 选择日期 | 占位文字 |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| separatorIcon | InputDateIcon | minus | 区间分隔图标（XIcon 名称或组件） |
| as | string · Component | button | 渲染为指定元素或组件 |
| autofocus | boolean | false | 挂载后自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（毫秒） |
| ui | InputDateUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 触发按钮 |
| base | 输入容器（变体、描边、圆角） |
| leading | 前置内容容器 |
| leadingIcon | 默认前置图标 |
| separatorIcon | 区间分隔图标 |
| trailing | 后置内容容器 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| leading | 前置内容 |
| separator | 区间分隔内容 |
| trailing | 后置内容 |
| footer | 日历底部自定义内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 日期变化，载荷为 string，range 模式下为 string[] |
| change | 日期变化回调，载荷同上 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 容器：focus ring 过渡
