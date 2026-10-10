---
title: Tooltip 文字提示
description: 简单的文字提示气泡，悬浮时显示
---

# Tooltip 文字提示

简单的文字提示气泡，悬浮时显示。支持 kbds 快捷键组合、content 插槽与 portal 渲染。

<script setup>
import TooltipBasic from '@demos/react/tooltip-basic'
import tooltipBasicRaw from '@demos/react/tooltip-basic.tsx.code.txt?raw'
import TooltipKbds from '@demos/react/tooltip-kbds'
import tooltipKbdsRaw from '@demos/react/tooltip-kbds.tsx.code.txt?raw'
import TooltipUiCustom from '@demos/react/tooltip-ui-custom'
import tooltipUiCustomRaw from '@demos/react/tooltip-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

`text` 直接给提示文本；`delayDuration` 控制打开延迟；`arrow` 显示指向触发元素的箭头。

<DemoBlock title="text · delayDuration · arrow" description="提示文本与延迟" :code="tooltipBasicRaw">
  <ReactDemo :component="TooltipBasic" />
</DemoBlock>

## 快捷键提示

`kbds` 传入按键列表，元素可以是文本，也可以是带样式配置的对象（透传给 XKbd）。

<DemoBlock title="kbds 快捷键" description="文本与对象两种按键项" :code="tooltipKbdsRaw">
  <ReactDemo :component="TooltipKbds" />
</DemoBlock>

## content 插槽与 ui 插槽

`content` 插槽替换 text / kbds 默认内容；`ui` 属性按主题插槽键（content / arrow / text / kbds / kbdsSize）覆盖类名。

<DemoBlock title="content · ui" description="自定义内容与主题定制" :code="tooltipUiCustomRaw">
  <ReactDemo :component="TooltipUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-tooltip
```

## API

<!--@include: ./api/tooltip.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| content | 气泡内容面板 |
| arrow | 指向箭头 |
| text | 提示文本 |
| kbds | 快捷键容器 |
| kbdsSize | 按键尺寸（xs · sm · md · lg · xl，默认 sm） |

## 插槽（props）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| children | ReactNode | 触发元素（default 插槽） |
| content | ReactNode | 自定义内容，替换 text / kbds 默认内容 |

## hook

```tsx
const [Tooltip, tooltipApi] = useXTooltip({ text: "提示文字" })
tooltipApi.show()   // show / hide / toggle / setState
```

## 动效

- 弹出：淡入 + 缩放（100ms）
