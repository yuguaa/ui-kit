---
title: Kbd 键盘按键
description: 展示快捷键或按键组合，四种变体 × 七种语义色 × 五档尺寸
---

# Kbd 键盘按键

展示快捷键或按键组合。支持 solid / outline / soft / subtle 四种变体、七种语义色与五档尺寸，`render` 渲染为指定元素，`ui` 定制根元素类名。

<script setup>
import KbdVariants from '@demos/react/kbd-variants'
import kbdVariantsRaw from '@demos/react/kbd-variants.tsx.code.txt?raw'
import KbdAsUi from '@demos/react/kbd-as-ui'
import kbdAsUiRaw from '@demos/react/kbd-as-ui.tsx.code.txt?raw'
</script>

## 变体与组合

<DemoBlock title="四种变体与按键组合" description="variant / color / value" :code="kbdVariantsRaw">
  <ReactDemo :component="KbdVariants" />
</DemoBlock>

## 尺寸、render 与 ui

五档尺寸；`render` 指定渲染元素；`ui.base` 注入自定义类名。

<DemoBlock title="尺寸 · render · ui" description="size：xs → xl，render 渲染元素，ui.base 类名" :code="kbdAsUiRaw">
  <ReactDemo :component="KbdAsUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-kbd
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
| children | 按键内容（value 的替代） |

## 动效

无动效：静态展示组件。
