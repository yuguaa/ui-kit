---
title: Tooltip 文字提示
description: 简单的文字提示气泡，悬浮时显示
---

# Tooltip 文字提示

简单的文字提示气泡，悬浮时显示。

<script setup>
import OverlayBasic from '@demos/react/overlay-basic'
import overlayBasicRaw from '@demos/react/overlay-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="悬浮「悬浮查看提示」按钮查看" :code="overlayBasicRaw">
  <ReactDemo :component="OverlayBasic" />
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
