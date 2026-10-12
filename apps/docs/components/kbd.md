---
title: Kbd 键盘按键
description: 展示快捷键或按键组合，四种变体 × 七种语义色 × 五档尺寸
---

# Kbd 键盘按键

展示快捷键或按键组合。支持 solid / outline / soft / subtle 四种变体、七种语义色与五档尺寸，`as` 渲染为指定元素或组件，`ui` 定制根元素类名。

<script setup>
import KbdVariants from '@demos/vue/kbd-variants.vue'
import kbdVariantsRaw from '@demos/vue/kbd-variants.vue.code.txt?raw'
import KbdAsUi from '@demos/vue/kbd-as-ui.vue'
import kbdAsUiRaw from '@demos/vue/kbd-as-ui.vue.code.txt?raw'
</script>

## 变体与组合

<DemoBlock title="四种变体与按键组合" description="variant / color / value" :code="kbdVariantsRaw">
  <KbdVariants />
</DemoBlock>

## 尺寸、as 与 ui

五档尺寸；`as` 指定渲染标签；`ui.base` 注入自定义类名。

<DemoBlock title="尺寸 · as · ui" description="size：xs → xl，as 渲染标签，ui.base 类名" :code="kbdAsUiRaw">
  <KbdAsUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-kbd
```

## API

<!--@include: ./api/kbd.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 按键根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 按键内容（value 的替代） |

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

公共类：`inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase`。

**背景**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| bg-{color} | 语义色 500 级 | solid 变体 |
| bg-{color}/10 | 500 级 10% 透明度 | soft / subtle 变体 |
| bg-inverted | #171717 / #ffffff | neutral solid |
| bg-elevated | #f5f5f5 / #262626 | neutral soft / subtle |
| bg-default | #ffffff / #171717 | neutral outline |

**文字**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| text-inverted | #ffffff / #171717 | solid 变体 |
| text-{color} | 语义色 500 级 | outline / soft / subtle 变体 |
| text-default | #404040 / #e5e5e5 | neutral 非 solid 变体 |

**描边**

| token | 取值 | 使用场景 |
| --- | --- | --- |
| ring-{color}/50 | 500 级 50% 透明度 | outline 内描边（ring-inset） |
| ring-{color}/25 | 500 级 25% 透明度 | subtle 内描边 |
| ring-accented | #d4d4d4 / #404040 | neutral outline / subtle 内描边 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-sm | --radius-sm 4px |
| 阴影 | 不使用 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| solid | bg-{color} text-inverted（neutral：bg-inverted text-inverted） |
| outline（默认） | bg-transparent text-{color} ring ring-inset ring-{color}/50（neutral：bg-default text-default ring-accented） |
| soft | bg-{color}/10 text-{color}（neutral：bg-elevated text-default） |
| subtle | bg-{color}/10 text-{color} ring ring-inset ring-{color}/25（neutral：bg-elevated text-default ring-accented） |

尺寸：sm `h-4 min-w-[16px] text-[10px]`；md（默认）`h-5 min-w-[20px] text-[11px]`；lg `h-6 min-w-[24px] text-[12px]`。颜色枚举：primary / secondary / success / info / warning / error / neutral。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，默认渲染 `<kbd>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| kbd 元素 | 使用原生 `<kbd>` 语义，不输出附加角色与状态属性 |

**按键名转换**

value 经 useKbd 的 getKbdKey 转换：meta / ctrl / alt 按平台输出（macOS 为 ⌘ / ⌃ / ⌥，其他平台为 Ctrl / Ctrl / Alt）；shift ⇧、enter ↵、tab ⇥、delete ⌦、backspace ⌫、escape Esc、arrowup ↑、arrowdown ↓、arrowleft ←、arrowright →、capslock ⇪ 等；未收录的值原样输出。

**动效**

没有动效：静态展示组件。
