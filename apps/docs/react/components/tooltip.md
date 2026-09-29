---
title: Tooltip 文字提示
description: 简单的文字提示气泡，悬浮时显示
---

# Tooltip 文字提示

简单的文字提示气泡，悬浮时显示。

<script setup>
import TooltipPlacement from '@demos/react/tooltip-placement'
import tooltipPlacementRaw from '@demos/react/tooltip-placement.tsx.code.txt?raw'
import TooltipTrigger from '@demos/react/tooltip-trigger'
import tooltipTriggerRaw from '@demos/react/tooltip-trigger.tsx.code.txt?raw'
</script>

## 位置

<DemoBlock title="四个方向" description="placement 控制弹出方向" :code="tooltipPlacementRaw">
  <ReactDemo :component="TooltipPlacement" />
</DemoBlock>

## 触发方式

<DemoBlock title="hover / click / focus" description="trigger 控制触发方式" :code="tooltipTriggerRaw">
  <ReactDemo :component="TooltipTrigger" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-tooltip
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | ReactNode | - | 提示内容 |
| placement | top · bottom · left · right | top | 弹出位置 |
| trigger | hover · click · focus | hover | 触发方式 |
| open | boolean | - | 受控显示状态 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

**ref 方法**：show() · hide()

## hook

```tsx
const [Tooltip, tooltipApi] = useXTooltip({ title: "提示文字" })
tooltipApi.show()   // show / hide / toggle / setState
```

## 动效

- 弹出：淡入 + 缩放（scale 0.95，100ms）
