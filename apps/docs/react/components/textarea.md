---
title: Textarea 多行文本
description: 用于输入多行文本内容
---

# Textarea 多行文本

用于输入多行文本内容，支持尺寸、颜色、自动高度与字数统计。

<script setup>
import TextareaBasic from "@demos/react/textarea-basic"
import textareaBasicRaw from '@demos/react/textarea-basic.tsx.code.txt?raw'
import TextareaShowCount from "@demos/react/textarea-showcount"
import textareaShowCountRaw from '@demos/react/textarea-showcount.tsx.code.txt?raw'
import TextareaAutosize from "@demos/react/textarea-autosize"
import textareaAutosizeRaw from '@demos/react/textarea-autosize.tsx.code.txt?raw'
import TextareaMaxRows from "@demos/react/textarea-maxrows"
import textareaMaxRowsRaw from '@demos/react/textarea-maxrows.tsx.code.txt?raw'
import TextareaColors from "@demos/react/textarea-colors"
import textareaColorsRaw from '@demos/react/textarea-colors.tsx.code.txt?raw'
import TextareaUi from "@demos/react/textarea-ui"
import textareaUiRaw from '@demos/react/textarea-ui.tsx.code.txt?raw'
</script>

## 基础用法

size 支持 xs / sm / md / lg / xl 五档；rows 控制默认行数。

<DemoBlock title="尺寸与禁用" description="size / placeholder / disabled" :code="textareaBasicRaw">
  <ReactDemo :component="TextareaBasic" />
</DemoBlock>

## 字数统计

showCount 在右下角显示字数统计；配合 maxLength 时显示「当前长度 / 最大长度」。

<DemoBlock title="当前字数与上限" description="showCount / maxLength" :code="textareaShowCountRaw">
  <ReactDemo :component="TextareaShowCount" />
</DemoBlock>

## 自动高度

autoresize 让高度随内容增长，autoresizeDelay 控制挂载后首次调整的延迟。

<DemoBlock title="高度随内容增长" description="autoresize / autoresizeDelay" :code="textareaAutosizeRaw">
  <ReactDemo :component="TextareaAutosize" />
</DemoBlock>

## 高度上限

maxrows 给自动高度加上行数上限，内容超过上限后高度保持不变，在控件内部滚动。

<DemoBlock title="超出上限内部滚动" description="autoresize / maxrows" :code="textareaMaxRowsRaw">
  <ReactDemo :component="TextareaMaxRows" />
</DemoBlock>

## 颜色与高亮

color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态。

<DemoBlock title="颜色与高亮" description="color / highlight" :code="textareaColorsRaw">
  <ReactDemo :component="TextareaColors" />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名" description="ui 的 base 键" :code="textareaUiRaw">
  <ReactDemo :component="TextareaUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-textarea
```

## API

<!--@include: ./api/textarea.md-->

## ui 插槽

| 键 | 说明 |
| --- | --- |
| base | 多行文本框 |

## 动效

- focus：outline 加粗过渡（transition-colors）
- 无位移动画
