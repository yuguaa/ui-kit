---
title: ColorPicker 颜色选择
description: HSV 色板与色相轨道拖拽选色
---

# ColorPicker 颜色选择

饱和度/亮度色板加色相轨道拖拽选色，支持 hex / rgb / hsl / cmyk / lab 五种输出格式与五档尺寸。

<script setup>
import ColorPickerBasic from '@demos/react/color-picker-basic'
import colorPickerBasicRaw from '@demos/react/color-picker-basic.tsx.code.txt?raw'
import ColorPickerSizes from '@demos/react/color-picker-sizes'
import colorPickerSizesRaw from '@demos/react/color-picker-sizes.tsx.code.txt?raw'
import ColorPickerFormats from '@demos/react/color-picker-formats'
import colorPickerFormatsRaw from '@demos/react/color-picker-formats.tsx.code.txt?raw'
import ColorPickerStates from '@demos/react/color-picker-states'
import colorPickerStatesRaw from '@demos/react/color-picker-states.tsx.code.txt?raw'
import ColorPickerUiCustom from '@demos/react/color-picker-ui-custom'
import colorPickerUiCustomRaw from '@demos/react/color-picker-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

`value` / `onChange` 绑定颜色，拖拽色板调整饱和度与亮度，拖拽色相轨道调整色相。

<DemoBlock title="基础用法" description="受控绑定，默认 hex 输出" :code="colorPickerBasicRaw">
  <ReactDemo :component="ColorPickerBasic" />
</DemoBlock>

## 尺寸

<DemoBlock title="五档尺寸" description="xs → xl" :code="colorPickerSizesRaw">
  <ReactDemo :component="ColorPickerSizes" />
</DemoBlock>

## 输出格式

`format` 控制 onChange 的输出格式：hex / rgb / hsl / cmyk / lab。

<DemoBlock title="五种输出格式" description="切换 format 观察输出字符串变化" :code="colorPickerFormatsRaw">
  <ReactDemo :component="ColorPickerFormats" />
</DemoBlock>

## 状态

<DemoBlock title="禁用与节流" description="disabled 禁止拖拽，throttle 控制值更新频率" :code="colorPickerStatesRaw">
  <ReactDemo :component="ColorPickerStates" />
</DemoBlock>

## ui 插槽

<DemoBlock title="ui 插槽自定义" description="picker / selector / selectorBackground / selectorThumb / track / trackThumb 覆盖类名" :code="colorPickerUiCustomRaw">
  <ReactDemo :component="ColorPickerUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-color-picker
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | - | 绑定颜色 |
| defaultValue | string | #FFFFFF | 默认颜色 |
| onChange | (color) => void | - | 颜色变化回调 |
| format | hex · rgb · hsl · cmyk · lab | hex | 输出格式 |
| size | xs · sm · md · lg · xl | md | 尺寸 |
| throttle | number | 50 | 拖拽值更新节流间隔（ms） |
| disabled | boolean | false | 禁用 |
| render | ReactElement | div | 渲染为指定元素 |
| ui | XColorPickerUi | - | 主题插槽类名 |

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
