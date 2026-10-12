---
title: Slider 滑块
description: 通过拖动滑块在区间内取值
---

# Slider 滑块

通过拖动滑块在区间内取值，支持单值 / 双值、color / size、tooltip 数值提示与纵向布局。

## 基础用法

size 提供五档尺寸，modelValue 传数组即为双值区间滑块。

<DemoPreview file="demos/vue/slider-basic.vue" title="尺寸与区间" description="size / 双值 modelValue / ui" />

## 颜色与禁用

color 控制指示条与拇指颜色，disabled 禁用交互。

<DemoPreview file="demos/vue/slider-colors.vue" title="语义色与禁用" description="color / disabled" />

## 数值提示

tooltip 开启后，悬浮或拖动滑块时显示当前值；传对象可透传 XTooltip 属性。

<DemoPreview file="demos/vue/slider-tooltip.vue" title="数值提示" description="tooltip" />

## 纵向滑块

orientation 设为 vertical 后滑块纵向排布，高度由 class 控制；数值提示显示在滑块右侧。

<DemoPreview file="demos/vue/slider-vertical.vue" title="纵向滑块" description="orientation=vertical / class 控制高度" />

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

## 设计规格

### 主题 token

**背景与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| track | bg-accented | #e5e5e5（亮）/ #404040（暗） |
| range（color=`<color>`） | bg-`<color>` | 语义色 500 级（如 primary #22c55e） |
| range（neutral） | bg-inverted | #171717（亮）/ #ffffff（暗） |
| thumb | bg-default + ring-2 | #ffffff（亮）/ #171717（暗）底 + 2px 环 |
| thumb（color=`<color>`） | ring-`<color>` outline-`<color>`/25 | 环与聚焦轮廓用语义色，轮廓 25% 透明度 |
| thumb（neutral） | ring-inverted outline-inverted/25 | 环与轮廓用 inverted |

**圆角**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| track / range / thumb | rounded-full | 胶囊形 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| size | thumb 尺寸 xs size-3 → xl size-5；track 粗细水平 h-[6px] → h-[10px]、垂直 w-[6px] → w-[10px] |
| orientation=horizontal | root w-full；range h-full |
| orientation=vertical | root flex-col h-full；range w-full |
| disabled=true | root opacity-75 cursor-not-allowed |

默认 size md、color primary。

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | thumb role="slider" tabindex=0（reka-ui 语义）；方向键按 step 增减（水平 ←/→、垂直 ↑/↓）；Home / End 跳至最小 / 最大值（reka-ui 2.10.5 实现确认）；minStepsBetweenThumbs 限制双 thumb 最小间隔 |
| ARIA | thumb 带 aria-valuemin / aria-valuemax / aria-valuenow / aria-orientation；单 thumb 支持 aria-label / aria-labelledby / aria-describedby / aria-valuetext / aria-invalid 透传（默认标签 'Thumb'）；多 thumb 且根元素带 aria-label / aria-labelledby 时根 role="group"，reka 自动生成 'Minimum' / 'Maximum' 等 thumb 标签 |
| 动效 | 无过渡（值实时跟随）；focus-visible 显示 outline-3 聚焦环 |
