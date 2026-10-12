---
title: Tooltip 文字提示
description: 简单的文字提示气泡，悬浮时显示
---

# Tooltip 文字提示

简单的文字提示气泡，悬浮时显示。支持 kbds 快捷键组合、content 插槽与 portal 渲染。

<script setup>
import TooltipBasic from '@demos/vue/tooltip-basic.vue'
import tooltipBasicRaw from '@demos/vue/tooltip-basic.vue.code.txt?raw'
import TooltipKbds from '@demos/vue/tooltip-kbds.vue'
import tooltipKbdsRaw from '@demos/vue/tooltip-kbds.vue.code.txt?raw'
import TooltipUiCustom from '@demos/vue/tooltip-ui-custom.vue'
import tooltipUiCustomRaw from '@demos/vue/tooltip-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

`text` 直接给提示文本；`delayDuration` 控制打开延迟；`arrow` 显示指向触发元素的箭头。

<DemoBlock title="text · delayDuration · arrow" description="提示文本与延迟" :code="tooltipBasicRaw">
  <TooltipBasic />
</DemoBlock>

## 快捷键提示

`kbds` 传入按键列表，元素可以是文本，也可以是带样式配置的对象（透传给 XKbd）。

<DemoBlock title="kbds 快捷键" description="文本与对象两种按键项" :code="tooltipKbdsRaw">
  <TooltipKbds />
</DemoBlock>

## content 插槽与 ui 插槽

`content` 插槽替换 text / kbds 默认内容；`ui` 属性按主题插槽键（content / arrow / text / kbds / kbdsSize）覆盖类名。

<DemoBlock title="content · ui" description="自定义内容与主题定制" :code="tooltipUiCustomRaw">
  <TooltipUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-tooltip
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

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 触发元素 |
| content | 自定义内容，替换 text / kbds 默认内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:open | 打开状态变化回调 |

## hook

```ts
const [Tooltip, tooltipApi] = useXTooltip({ text: '提示文字' })
tooltipApi.show()   // show / hide / toggle / setState
```

## 动效

- 弹出：淡入 + 缩放（100ms）

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | bg-default | #ffffff / #171717 |
| arrow | fill-bg | 同 bg-default |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | text-highlighted | #171717 / #ffffff |
| text | truncate（继承 content 颜色） | — |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | ring ring-default | #e5e5e5 / #262626 |
| arrow | stroke-default | 同 border-default |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| content | rounded-sm | 4px（--radius-sm） |
| content | shadow-sm | Tailwind 默认 shadow-sm |

**变体**

| 变体 | token 组合 |
| --- | --- |
| kbds | kbds 容器在 lg 以下隐藏（hidden lg:inline-flex），按键尺寸默认 sm |
| disabled（无内容或 disabled=true） | 不渲染提示 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | reka Tooltip 语义：hover 或键盘焦点移入触发元素时打开；Esc 关闭；delayDuration 控制打开延迟（reka TooltipProvider 默认 700ms）；disableHoverableContent 开启时内容可悬停保持 |
| ARIA | content 为 role=tooltip；trigger 元素关联 aria-describedby |
| 动效 | content 进出场 scale-in（delayed-open 状态）/ scale-out 100ms |
