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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | - | 提示文本 |
| kbds | (string \| Kbd 属性对象)[] | - | 快捷键组合 |
| open | boolean | false | 是否打开（支持 v-model:open） |
| defaultOpen | boolean | false | 初始是否打开 |
| delayDuration | number | 700 | 打开延迟（毫秒） |
| disableHoverableContent | boolean | false | 内容不可悬停保持 |
| disableClosingTrigger | boolean | false | 点击触发器不关闭 |
| ignoreNonKeyboardFocus | boolean | false | 非键盘聚焦不打开 |
| disabled | boolean | false | 禁用提示 |
| arrow | boolean | false | 是否显示箭头 |
| portal | boolean | true | 渲染到 body |
| class | string | - | 根节点类名（有默认插槽时绑到触发器） |
| ui | TooltipUi | - | 主题插槽类名 |

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
