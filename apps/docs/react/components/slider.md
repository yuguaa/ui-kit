---
title: Slider 滑块
description: 通过拖动滑块在区间内取值
---

# Slider 滑块

通过拖动滑块在区间内取值，支持单值 / 双值、color / size、tooltip 数值提示与纵向布局。

<script setup>
import SliderBasic from '@demos/react/slider-basic'
import sliderBasicRaw from '@demos/react/slider-basic.tsx.code.txt?raw'
import SliderColors from '@demos/react/slider-colors'
import sliderColorsRaw from '@demos/react/slider-colors.tsx.code.txt?raw'
import SliderTooltip from '@demos/react/slider-tooltip'
import sliderTooltipRaw from '@demos/react/slider-tooltip.tsx.code.txt?raw'
import SliderVertical from '@demos/react/slider-vertical'
import sliderVerticalRaw from '@demos/react/slider-vertical.tsx.code.txt?raw'
</script>

## 基础用法

size 提供五档尺寸，value 传数组即为双值区间滑块。

<DemoBlock title="尺寸与区间" description="size / 双值 value / ui" :code="sliderBasicRaw">
  <ReactDemo :component="SliderBasic" />
</DemoBlock>

## 颜色与禁用

color 控制指示条与拇指颜色，disabled 禁用交互。

<DemoBlock title="语义色与禁用" description="color / disabled" :code="sliderColorsRaw">
  <ReactDemo :component="SliderColors" />
</DemoBlock>

## 数值提示

tooltip 开启后，悬浮或拖动滑块时显示当前值；传对象可透传 XTooltip 属性。

<DemoBlock title="数值提示" description="tooltip" :code="sliderTooltipRaw">
  <ReactDemo :component="SliderTooltip" />
</DemoBlock>

## 纵向滑块

orientation 设为 vertical 后滑块纵向排布，高度由 class 控制；数值提示显示在滑块右侧。

<DemoBlock title="纵向滑块" description="orientation=vertical / class 控制高度" :code="sliderVerticalRaw">
  <ReactDemo :component="SliderVertical" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-slider
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

## 动效

- 拖动：即时响应
- thumb：hover / focus 聚焦环过渡
- tooltip：淡入缩放过渡

## 设计规格

### 主题 token

**背景与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| track | bg-muted | shadcn 变量，对应 Vue bg-accented |
| range（color=`<color>`） | bg-`<color>` | 语义色底（如 primary） |
| range（neutral） | bg-foreground | 对应 Vue bg-inverted |
| thumb | bg-background + ring-2 | 对应 Vue bg-default + ring-2 |
| thumb（color=`<color>`） | ring-`<color>` outline-`<color>`/25 | 环与聚焦轮廓用语义色，轮廓 25% 透明度 |
| thumb（neutral） | ring-foreground outline-foreground/25 | 对应 Vue ring-inverted |

**圆角**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| track / range / thumb | rounded-full | 胶囊形 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| size | thumb 尺寸 xs size-3 → xl size-5；track 粗细水平 h-[6px] → h-[10px]、垂直 w-[6px] → w-[10px] |
| orientation=horizontal | root w-full |
| orientation=vertical | root flex-col h-full |
| disabled=true | root opacity-75 cursor-not-allowed |

默认 size md、color primary。

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | thumb 可聚焦（Base UI Slider 语义）；方向键按 step 增减；Home / End 跳至最小 / 最大值；PageUp / PageDown 按 step×10 增减；minStepsBetweenThumbs 映射为 minStepsBetweenValues |
| ARIA | Thumb 由 Base UI Slider 渲染 role="slider" + aria-valuemin / aria-valuemax / aria-valuenow；aria-label 显式设置为 'Thumb'（多 thumb 为 'Thumb n'）；其余 aria-* 透传（继承 Base UI Slider 语义） |
| 动效 | 无过渡（值实时跟随）；focus-visible 显示 outline-3 聚焦环 |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| track 底色 | bg-accented（#e5e5e5 / #404040） | bg-muted（#fafafa / #262626） |
| 键盘 PageUp / PageDown | 不支持 | 支持（step×10，Base UI 语义） |
| 多 thumb 标签 | reka 自动生成 'Minimum' / 'Maximum' | 固定 'Thumb n' |
| 根元素角色 | 多 thumb 且有标签时为 role="group" | 无（Base UI 内部管理） |
