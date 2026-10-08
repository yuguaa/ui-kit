---
title: Textarea 多行文本
description: 用于输入多行文本内容
---

# Textarea 多行文本

用于输入多行文本内容，支持行数、自动调整高度、字数统计与校验状态。

<script setup>
import TextareaShowCount from '@demos/react/textarea-showcount'
import textareaShowCountRaw from '@demos/react/textarea-showcount.tsx.code.txt?raw'
import TextareaAutosize from '@demos/react/textarea-autosize'
import textareaAutosizeRaw from '@demos/react/textarea-autosize.tsx.code.txt?raw'
import TextareaMaxRows from '@demos/react/textarea-maxrows'
import textareaMaxRowsRaw from '@demos/react/textarea-maxrows.tsx.code.txt?raw'
</script>

## 字数统计

showCount 在右下角显示字数统计；配合 maxLength 时显示「当前长度 / 最大长度」。

<DemoBlock title="当前字数与上限" description="showCount / maxLength" :code="textareaShowCountRaw">
  <ReactDemo :component="TextareaShowCount" />
</DemoBlock>

## 自动高度

autosize 让高度随内容增长，可与 showCount 组合使用。

<DemoBlock title="高度随内容增长" description="autosize 与 showCount 组合" :code="textareaAutosizeRaw">
  <ReactDemo :component="TextareaAutosize" />
</DemoBlock>

## 高度上限

maxRows 给自动高度加上行数上限，内容超过上限后高度保持不变，在控件内部滚动。

<DemoBlock title="超出上限内部滚动" description="autosize / maxRows" :code="textareaMaxRowsRaw">
  <ReactDemo :component="TextareaMaxRows" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-textarea
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| rows | number | 3 | 行数 |
| placeholder | string | - | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| autosize | boolean | false | 自动调整高度 |
| maxRows | number | - | 自动调整高度的行数上限，超出后内容在控件内部滚动 |
| status | error · warning | - | 校验状态 |
| maxLength | number | - | 最大输入长度 |
| showCount | boolean | false | 右下角显示字数统计，设置 maxLength 时显示「当前长度 / 最大长度」 |

## 动效

- focus：ring 加粗过渡（transition-[box-shadow,color]）
- 无位移动画
