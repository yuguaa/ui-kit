---
title: Textarea 多行文本
description: 用于输入多行文本内容
---

# Textarea 多行文本

用于输入多行文本内容，支持尺寸、颜色、自动高度与字数统计。


## 基础用法

size 支持 xs / sm / md / lg / xl 五档；rows 控制默认行数。

<DemoPreview file="demos/vue/textarea-basic.vue" title="尺寸与禁用" description="size / placeholder / disabled" />

## 字数统计

showCount 在右下角显示字数统计；配合 maxLength 时显示「当前长度 / 最大长度」。

<DemoPreview file="demos/vue/textarea-showcount.vue" title="当前字数与上限" description="showCount / maxLength" />

## 自动高度

autoresize 让高度随内容增长，autoresizeDelay 控制挂载后首次调整的延迟。

<DemoPreview file="demos/vue/textarea-autosize.vue" title="高度随内容增长" description="autoresize / autoresizeDelay" />

## 高度上限

maxrows 给自动高度加上行数上限，内容超过上限后高度保持不变，在控件内部滚动。

<DemoPreview file="demos/vue/textarea-maxrows.vue" title="超出上限内部滚动" description="autoresize / maxrows" />

## 颜色与高亮

color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态。

<DemoPreview file="demos/vue/textarea-colors.vue" title="颜色与高亮" description="color / highlight" />

## ui 插槽自定义

<DemoPreview file="demos/vue/textarea-ui.vue" title="主题插槽类名" description="ui 的 base 键" />

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

## 设计规格

主题 token 与变体继承 Input（`textarea.ts` 以 `defu` 合并 `input.ts`），背景 / 文字 / 描边 / 聚焦规则与 Input 一致，差异仅在插槽定位与 autoresize。

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | `bg-default`（outline）· `bg-elevated/50`（soft）· `bg-elevated`（subtle） | #ffffff / #171717；#f5f5f5 / #262626 |
| 文字 | `text-highlighted` | #171717 / #ffffff |
| 文字 | `placeholder:text-dimmed` | #a3a3a3 / #a3a3a3 |
| 描边 | `ring ring-inset ring-accented`（outline / subtle） | #d4d4d4 / #404040 |
| 描边 | 聚焦：`outline-{color}/25` + `focus-visible:ring-{color}` | primary 为 #22c55e（25% 透明度） |
| 圆角 | `rounded-md` | 6px（--radius-md） |
| 阴影 | 无 | - |

`leading` / `trailing` 插槽改为顶部对齐（`items-start`），并按尺寸使用 `inset-y-1 ~ inset-y-2` 定位。

### 变体

与 Input 相同五档：outline / soft / subtle / ghost / none（默认 outline，组合见 Input 设计规格）。`autoresize: true` 时 base 追加 `resize-none`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | 原生 textarea 行为：输入、方向键、Enter 换行；无额外键盘处理 |
| ARIA | 原生 textarea 隐式 `role=textbox`；`aria-invalid` 等由 `useFormField` 透传 |
| 动效 | `transition-colors`；autoresize 按内容行数即时调整高度，无过渡动画 |
