---
title: Chip 芯片
description: 标记属性或数值的角标，支持定位与可选关闭按钮
---

# Chip 芯片

芯片用于标记属性或数值。text 直接给定内容，position / inset / standalone 控制角标定位，show 控制芯片本体显隐。

<script setup>
import ChipBasic from '@demos/vue/chip-basic.vue'
import chipBasicRaw from '@demos/vue/chip-basic.vue.code.txt?raw'
import ChipPosition from '@demos/vue/chip-position.vue'
import chipPositionRaw from '@demos/vue/chip-position.vue.code.txt?raw'
import ChipUiCustom from '@demos/vue/chip-ui-custom.vue'
import chipUiCustomRaw from '@demos/vue/chip-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="七种语义色、尺寸与可关闭" description="text / color / size / closable / standalone / show" :code="chipBasicRaw">
  <ChipBasic />
</DemoBlock>

## 角标定位

默认绝对定位在父容器右上角；position 指定位置，inset 位于圆角元素内部时保持位置，standalone 相对父容器渲染。

<DemoBlock title="position / inset / standalone" description="chip 定位在头像各角" :code="chipPositionRaw">
  <ChipPosition />
</DemoBlock>

## ui 插槽与渲染

<DemoBlock title="ui 插槽自定义与 as" description="content 插槽自定义内容，ui 键覆盖主题插槽类名，as 更换渲染元素" :code="chipUiCustomRaw">
  <ChipUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-chip
```

## API

<!--@include: ./api/chip.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素（定位壳） |
| base | 芯片本体 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| content | 芯片内容，优先于默认插槽与 text |
| default | 芯片内容 |
| icon | 标签图标 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:show | 显隐模型更新事件（v-model:show） |
| close | 关闭时回调 |

## 动效

无动效：关闭按钮的 hover 颜色过渡由按钮原子承担。
