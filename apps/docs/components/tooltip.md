---
title: Tooltip 文字提示
description: 简单的文字提示气泡，悬浮时显示
---

# Tooltip 文字提示

简单的文字提示气泡，悬浮时显示。

<script setup>
import OverlayBasic from '@demos/vue/overlay-basic.vue'
import overlayBasicRaw from '@demos/vue/overlay-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="悬浮「悬浮查看提示」按钮查看" :code="overlayBasicRaw">
  <OverlayBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-tooltip
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | - | 提示内容 |
| placement | top · bottom · left · right | top | 弹出位置 |
| trigger | hover · click · focus | hover | 触发方式 |
| open | boolean | - | 受控显示状态（支持 v-model:open） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 触发元素 |
| title | 提示内容插槽 |

**方法**（ref 调用）：show() · hide()

## hook

```ts
const [Tooltip, tooltipApi] = useXTooltip({ title: '提示文字' })
tooltipApi.show()   // show / hide / toggle / setState
```
