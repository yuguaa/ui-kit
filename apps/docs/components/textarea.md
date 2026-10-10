---
title: Textarea 多行文本
description: 用于输入多行文本内容
---

# Textarea 多行文本

用于输入多行文本内容，支持尺寸、颜色、自动高度与字数统计。

<script setup>
import TextareaBasic from '@demos/vue/textarea-basic.vue'
import textareaBasicRaw from '@demos/vue/textarea-basic.vue.code.txt?raw'
import TextareaShowCount from '@demos/vue/textarea-showcount.vue'
import textareaShowCountRaw from '@demos/vue/textarea-showcount.vue.code.txt?raw'
import TextareaAutosize from '@demos/vue/textarea-autosize.vue'
import textareaAutosizeRaw from '@demos/vue/textarea-autosize.vue.code.txt?raw'
import TextareaMaxRows from '@demos/vue/textarea-maxrows.vue'
import textareaMaxRowsRaw from '@demos/vue/textarea-maxrows.vue.code.txt?raw'
import TextareaColors from '@demos/vue/textarea-colors.vue'
import textareaColorsRaw from '@demos/vue/textarea-colors.vue.code.txt?raw'
import TextareaUi from '@demos/vue/textarea-ui.vue'
import textareaUiRaw from '@demos/vue/textarea-ui.vue.code.txt?raw'
</script>

## 基础用法

size 支持 xs / sm / md / lg / xl 五档；rows 控制默认行数。

<DemoBlock title="尺寸与禁用" description="size / placeholder / disabled" :code="textareaBasicRaw">
  <TextareaBasic />
</DemoBlock>

## 字数统计

showCount 在右下角显示字数统计；配合 maxLength 时显示「当前长度 / 最大长度」。

<DemoBlock title="当前字数与上限" description="showCount / maxLength" :code="textareaShowCountRaw">
  <TextareaShowCount />
</DemoBlock>

## 自动高度

autoresize 让高度随内容增长，autoresizeDelay 控制挂载后首次调整的延迟。

<DemoBlock title="高度随内容增长" description="autoresize / autoresizeDelay" :code="textareaAutosizeRaw">
  <TextareaAutosize />
</DemoBlock>

## 高度上限

maxrows 给自动高度加上行数上限，内容超过上限后高度保持不变，在控件内部滚动。

<DemoBlock title="超出上限内部滚动" description="autoresize / maxrows" :code="textareaMaxRowsRaw">
  <TextareaMaxRows />
</DemoBlock>

## 颜色与高亮

color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态。

<DemoBlock title="颜色与高亮" description="color / highlight" :code="textareaColorsRaw">
  <TextareaColors />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名" description="ui 的 base 键" :code="textareaUiRaw">
  <TextareaUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-textarea
```

## API

<!--@include: ./api/textarea.md-->

**方法**（ref 调用）：focus() · blur() · autoResize()

## ui 插槽

| 键 | 说明 |
| --- | --- |
| base | 多行文本框 |

## 动效

- focus：outline 加粗过渡（transition-colors）
- 无位移动画
