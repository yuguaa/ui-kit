---
title: Textarea 多行文本
description: 用于输入多行文本内容
---

# Textarea 多行文本

用于输入多行文本内容，支持尺寸、颜色、自动高度与字数统计。


## 基础用法

size 支持 xs / sm / md / lg / xl 五档；rows 控制默认行数。

<DemoPreview file="demos/react/textarea-basic.tsx" react title="尺寸与禁用" description="size / placeholder / disabled" />

## 字数统计

showCount 在右下角显示字数统计；配合 maxLength 时显示「当前长度 / 最大长度」。

<DemoPreview file="demos/react/textarea-showcount.tsx" react title="当前字数与上限" description="showCount / maxLength" />

## 自动高度

autoresize 让高度随内容增长，autoresizeDelay 控制挂载后首次调整的延迟。

<DemoPreview file="demos/react/textarea-autosize.tsx" react title="高度随内容增长" description="autoresize / autoresizeDelay" />

## 高度上限

maxrows 给自动高度加上行数上限，内容超过上限后高度保持不变，在控件内部滚动。

<DemoPreview file="demos/react/textarea-maxrows.tsx" react title="超出上限内部滚动" description="autoresize / maxrows" />

## 颜色与高亮

color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态。

<DemoPreview file="demos/react/textarea-colors.tsx" react title="颜色与高亮" description="color / highlight" />

## ui 插槽自定义

<DemoPreview file="demos/react/textarea-ui.tsx" react title="主题插槽类名" description="ui 的 base 键" />

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

## 设计规格

### 主题 token

与 Vue 端同规则，映射到本地 shadcn 变量：

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | `bg-background`（outline）· `bg-muted/50`（soft）· `bg-muted`（subtle） | `bg-default` / `bg-elevated/50` / `bg-elevated` |
| 文字 | 正文 `text-foreground`；`placeholder:text-muted-foreground` | `text-highlighted` / `text-dimmed` |
| 描边 | `ring-1 ring-inset ring-border`（outline / subtle）；聚焦 `outline-{color}/25` + `focus-visible:ring-{color}` | 相同规则 |
| 圆角 | `rounded-md`（6px） | 相同 |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `bg-background` + `ring-1 ring-inset ring-border` |
| soft / subtle / ghost / none | 与 XInput 相同组合 |

`resizeEnabled`（autoresize 或 autosize）时追加 `resize-none`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | 原生 textarea 行为 |
| ARIA | 原生 textarea 隐式 `role=textbox` |
| 动效 | `transition-colors`；autoresize 按内容行数即时调整高度 |

**与 Vue 端差异**：React 端支持 `autosize`（CSS `field-sizing-content` 方案）与 `showCount` 字数统计；无 leading / trailing 插槽（仅 avatar）；`fixed` 默认 `true`。
