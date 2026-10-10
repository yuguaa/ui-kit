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
