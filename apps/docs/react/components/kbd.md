---
title: Kbd 键盘按键
description: 展示快捷键或按键组合，四种变体 × 七种语义色 × 五档尺寸
---

# Kbd 键盘按键

展示快捷键或按键组合。支持 solid / outline / soft / subtle 四种变体、七种语义色与五档尺寸。

<script setup>
import KbdVariants from '@demos/react/kbd-variants'
import kbdVariantsRaw from '@demos/react/kbd-variants.tsx.code.txt?raw'
</script>

## 变体与组合

<DemoBlock title="四种变体与按键组合" description="variant / color / value" :code="kbdVariantsRaw">
  <ReactDemo :component="KbdVariants" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-kbd
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | - | 按键内容 |
| variant | solid · outline · soft · subtle | outline | 预设样式 |
| color | primary · secondary · neutral · success · info · warning · error | neutral | 按键颜色 |
| size | xs · sm · md · lg · xl | md | 尺寸 |

## 动效

无动效：静态展示组件。
