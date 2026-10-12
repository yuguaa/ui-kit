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

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | 色板底色与渐变由内联样式提供：`selector` 背景为当前色相纯色，`selectorBackground` 叠加黑白双向渐变 | 非 token，运行期生成 |
| 背景 | 轨道 `track` 渐变：红 → 品红 → 蓝 → 青 → 绿 → 黄 → 红（内联样式） | 非 token |
| 文字 | 无 | - |
| 描边 | 拖拽圆点 `ring-2 ring-white` | #ffffff |
| 圆角 | `selector` / `selectorBackground` / `track` 为 `rounded-md`（6px）；thumb 为 `rounded-full` | --radius-md / 圆形 |
| 阴影 | 无 | - |
| 禁用 | root `data-[disabled]:opacity-75` | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| size xs ~ xl | 色板与轨道 `w-38 h-38` ~ `w-46 h-46` |
| disabled | 整体 `opacity-75`，圆点 `cursor-not-allowed` |

### 交互

| 类别 | 说明 |
| --- | --- |
| 指针 | pointerdown 开始拖拽，window pointermove / pointerup 跟随；色板双向（x 饱和度 / y 亮度），轨道单向（y 色相）；位置按容器尺寸换算为 0 ~ 100% |
| 节流 | `throttle` 默认 50ms，限制拖拽期间值更新频率 |
| 键盘 | 无键盘语义（纯指针拖拽） |
| ARIA | 无 role 声明；disabled 以 `data-disabled` 呈现 |
| 动效 | 无过渡动画，位置即时反馈 |
