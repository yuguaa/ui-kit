---
title: ColorPicker 颜色选择
description: HSV 色板与色相轨道拖拽选色
---

# ColorPicker 颜色选择

饱和度/亮度色板加色相轨道拖拽选色，支持 hex / rgb / hsl / cmyk / lab 五种输出格式与五档尺寸。

<script setup>
import ColorPickerBasic from '@demos/vue/color-picker-basic.vue'
import colorPickerBasicRaw from '@demos/vue/color-picker-basic.vue.code.txt?raw'
import ColorPickerSizes from '@demos/vue/color-picker-sizes.vue'
import colorPickerSizesRaw from '@demos/vue/color-picker-sizes.vue.code.txt?raw'
import ColorPickerFormats from '@demos/vue/color-picker-formats.vue'
import colorPickerFormatsRaw from '@demos/vue/color-picker-formats.vue.code.txt?raw'
import ColorPickerStates from '@demos/vue/color-picker-states.vue'
import colorPickerStatesRaw from '@demos/vue/color-picker-states.vue.code.txt?raw'
import ColorPickerUiCustom from '@demos/vue/color-picker-ui-custom.vue'
import colorPickerUiCustomRaw from '@demos/vue/color-picker-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

`v-model` 绑定颜色，拖拽色板调整饱和度与亮度，拖拽色相轨道调整色相。

<DemoBlock title="基础用法" description="v-model 绑定，默认 hex 输出" :code="colorPickerBasicRaw">
  <ColorPickerBasic />
</DemoBlock>

## 尺寸

<DemoBlock title="五档尺寸" description="xs → xl" :code="colorPickerSizesRaw">
  <ColorPickerSizes />
</DemoBlock>

## 输出格式

`format` 控制 modelValue 的输出格式：hex / rgb / hsl / cmyk / lab。

<DemoBlock title="五种输出格式" description="切换 format 观察输出字符串变化" :code="colorPickerFormatsRaw">
  <ColorPickerFormats />
</DemoBlock>

## 状态

<DemoBlock title="禁用与节流" description="disabled 禁止拖拽，throttle 控制值更新频率" :code="colorPickerStatesRaw">
  <ColorPickerStates />
</DemoBlock>

## ui 插槽

<DemoBlock title="ui 插槽自定义" description="picker / selector / selectorBackground / selectorThumb / track / trackThumb 覆盖类名" :code="colorPickerUiCustomRaw">
  <ColorPickerUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-color-picker
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | - | 绑定颜色（v-model） |
| defaultValue | string | #FFFFFF | 默认颜色 |
| format | hex · rgb · hsl · cmyk · lab | hex | 输出格式 |
| size | xs · sm · md · lg · xl | md | 尺寸 |
| throttle | number | 50 | 拖拽值更新节流间隔（ms） |
| disabled | boolean | false | 禁用 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | ColorPickerUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| picker | 色板与轨道的横向容器 |
| selector | 饱和度/亮度色板 |
| selectorBackground | 色板渐变背景 |
| selectorThumb | 色板拖拽圆点 |
| track | 色相轨道 |
| trackThumb | 轨道拖拽圆点 |

## 动效

- 拖拽圆点跟随指针，位置更新带 throttle 节流
- 无进出场动效，交互即时反馈
