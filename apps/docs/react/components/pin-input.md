---
title: PinInput 验证码输入
description: 分段输入验证码或密码，支持分组分隔符
---

# PinInput 验证码输入

分段输入验证码或密码。支持五种变体、七种语义色、五档尺寸、分组分隔符与掩码。


## 基础用法

默认 5 位输入，`value` / `onChange` 绑定当前值。

<DemoPreview file="demos/react/pin-input-basic.tsx" react title="基础用法" description="受控绑定，默认 5 位" />

## 变体与语义色

<DemoPreview file="demos/react/pin-input-variants.tsx" react title="五种变体 × 七种语义色" description="variant 与 color 组合" />

## 尺寸

<DemoPreview file="demos/react/pin-input-sizes.tsx" react title="五档尺寸" description="xs → xl" />

## 分组分隔符

`separator` 传数字表示每隔 N 位插入，传数组表示在指定位置之后插入；`separatorSlot` 自定义分隔内容。

<DemoPreview file="demos/react/pin-input-separator.tsx" react title="separator 分组" description="数字、数组与 separatorSlot 自定义" />

## 状态

<DemoPreview file="demos/react/pin-input-states.tsx" react title="掩码、高亮、字号与禁用" description="mask / highlight / fixed / disabled / otp" />

## ui 插槽

<DemoPreview file="demos/react/pin-input-ui-custom.tsx" react title="ui 插槽自定义" description="root / base / separator 覆盖类名" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-pin-input
```

## API

<!--@include: ./api/pin-input.md-->

**插槽**：separatorSlot 分隔符内容自定义渲染

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| base | 单个输入槽 |
| separator | 分组分隔符容器 |

## 动效

无进出场动效：光标闪烁为浏览器默认行为，聚焦描边由 transition-colors 过渡。

## 设计规格

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | `bg-background`（outline）· `bg-muted/50`（soft）· `bg-muted`（subtle） | `bg-default` / `bg-elevated/50` / `bg-elevated` |
| 文字 | 正文 `text-foreground`；`placeholder:text-muted-foreground`；分隔符 `text-muted-foreground` | `text-highlighted` / `text-dimmed` |
| 描边 | `ring-1 ring-inset ring-border`（outline / subtle）；聚焦 `outline-{color}/25` + `focus-visible:ring-{color}` | 相同规则 |
| 圆角 | `rounded-md`（6px） | 相同 |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `bg-background` + `ring-1 ring-inset ring-border` |
| soft / subtle / ghost / none | 与 XInput 相同组合 |

尺寸 xs ~ xl 对应输入槽 `size-6 ~ size-10`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | input-otp 语义：输入后自动跳至下一槽，Backspace 回删，方向键移动焦点，支持粘贴 |
| ARIA | 每个输入槽为独立 input；`otp` 时 `autocomplete="one-time-code"`；分隔符 `role="presentation"` + `aria-hidden="true"` |
| 动效 | `transition-colors`；`mask` 以 `text-transparent` 视觉隐藏已输入字符 |

**与 Vue 端差异**：React 端基于 shadcn input-otp（Vue 端基于 reka-ui PinInput）；mask 实现为文字透明（Vue 端切换 input type 为 password）；值模型为 string（Vue 端为 string[] / number[]）。
