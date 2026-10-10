---
title: Slider 滑块
description: 通过拖动滑块在区间内取值
---

# Slider 滑块

通过拖动滑块在区间内取值，支持单值 / 双值、color / size、tooltip 数值提示与纵向布局。

<script setup>
import SliderBasic from '@demos/vue/slider-basic.vue'
import sliderBasicRaw from '@demos/vue/slider-basic.vue.code.txt?raw'
import SliderColors from '@demos/vue/slider-colors.vue'
import sliderColorsRaw from '@demos/vue/slider-colors.vue.code.txt?raw'
import SliderTooltip from '@demos/vue/slider-tooltip.vue'
import sliderTooltipRaw from '@demos/vue/slider-tooltip.vue.code.txt?raw'
import SliderVertical from '@demos/vue/slider-vertical.vue'
import sliderVerticalRaw from '@demos/vue/slider-vertical.vue.code.txt?raw'
</script>

## 基础用法

size 提供五档尺寸，modelValue 传数组即为双值区间滑块。

<DemoBlock title="尺寸与区间" description="size / 双值 modelValue / ui" :code="sliderBasicRaw">
  <SliderBasic />
</DemoBlock>

## 颜色与禁用

color 控制指示条与拇指颜色，disabled 禁用交互。

<DemoBlock title="语义色与禁用" description="color / disabled" :code="sliderColorsRaw">
  <SliderColors />
</DemoBlock>

## 数值提示

tooltip 开启后，悬浮或拖动滑块时显示当前值；传对象可透传 XTooltip 属性。

<DemoBlock title="数值提示" description="tooltip" :code="sliderTooltipRaw">
  <SliderTooltip />
</DemoBlock>

## 纵向滑块

orientation 设为 vertical 后滑块纵向排布，高度由 class 控制；数值提示显示在滑块右侧。

<DemoBlock title="纵向滑块" description="orientation=vertical / class 控制高度" :code="sliderVerticalRaw">
  <SliderVertical />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-slider
```

## API

<!--@include: ./api/slider.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| track | 轨道 |
| range | 已选区间指示条 |
| thumb | 拇指 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 值变化回调 |
| change | 值提交（拖动结束）回调，event.target.value 为提交值 |

## 动效

- 拖动：即时响应
- thumb：hover / focus 聚焦环过渡
- tooltip：淡入缩放过渡
