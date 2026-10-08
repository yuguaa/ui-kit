---
title: Slider 滑块
description: 通过拖动滑块在区间内取值
---

# Slider 滑块

通过拖动滑块在区间内取值，支持数值提示与纵向布局。

<script setup>
import SliderTooltip from '@demos/vue/slider-tooltip.vue'
import sliderTooltipRaw from '@demos/vue/slider-tooltip.vue.code.txt?raw'
import SliderVertical from '@demos/vue/slider-vertical.vue'
import sliderVerticalRaw from '@demos/vue/slider-vertical.vue.code.txt?raw'
</script>

## 数值提示

tooltip 开启后，悬浮或拖动滑块时在滑块上方显示当前值。

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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 绑定值（支持 v-model） |
| min / max | number | 0 / 100 | 最小值 / 最大值 |
| step | number | 1 | 步长 |
| disabled | boolean | false | 是否禁用 |
| tooltip | boolean | false | 悬浮或拖动时显示当前值提示 |
| orientation | horizontal · vertical | horizontal | 滑块方向（纵向时高度由 class 控制） |

## 事件

| 名称 | 说明 |
| --- | --- |
| change | 值变化回调 |

## 动效

- 拖动：即时响应
- thumb：hover / focus 聚焦环过渡
- tooltip：淡入缩放过渡
