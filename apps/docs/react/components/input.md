---
title: Input 输入框
description: 支持 leading / trailing 插槽、变体与颜色、校验状态
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<script setup>
import InputBasicDemo from "@demos/react/input-basic-demo"
import inputBasicDemoRaw from '@demos/react/input-basic-demo.tsx.code.txt?raw'
import InputVariants from "@demos/react/input-variants"
import inputVariantsRaw from '@demos/react/input-variants.tsx.code.txt?raw'
import InputStates from "@demos/react/input-states"
import inputStatesRaw from '@demos/react/input-states.tsx.code.txt?raw'
import InputAddon from "@demos/react/input-addon"
import inputAddonRaw from '@demos/react/input-addon.tsx.code.txt?raw'
import InputClearable from "@demos/react/input-clearable"
import inputClearableRaw from '@demos/react/input-clearable.tsx.code.txt?raw'
import InputUi from "@demos/react/input-ui"
import inputUiRaw from '@demos/react/input-ui.tsx.code.txt?raw'
</script>

## 基础用法

size 支持 xs / sm / md / lg / xl 五档；leading / trailing 在输入框两侧渲染任意内容。

<DemoBlock title="尺寸与两侧内容" description="size / leading / trailing" :code="inputBasicDemoRaw">
  <ReactDemo :component="InputBasicDemo" />
</DemoBlock>

## 变体与颜色

variant 支持 outline / soft / subtle / ghost / none；color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态；fixed=false 时桌面端缩小一档字号。

<DemoBlock title="变体、颜色、高亮" description="variant / color / highlight / fixed" :code="inputVariantsRaw">
  <ReactDemo :component="InputVariants" />
</DemoBlock>

## 校验状态

<DemoBlock title="错误 / 警告 / 禁用" description="status / disabled" :code="inputStatesRaw">
  <ReactDemo :component="InputStates" />
</DemoBlock>

## 前后置标签

<DemoBlock title="addon" description="addonBefore / addonAfter" :code="inputAddonRaw">
  <ReactDemo :component="InputAddon" />
</DemoBlock>

## 清空按钮

clearable 在输入有值、未禁用、未只读时显示清空按钮；与 trailing 内容同时存在时，清空按钮排在最后并预留右侧内边距。

<DemoBlock title="一键清空" description="clearable 属性与 onClear 回调" :code="inputClearableRaw">
  <ReactDemo :component="InputClearable" />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名" description="ui 的 root / base / leading / trailing 键与左侧头像" :code="inputUiRaw">
  <ReactDemo :component="InputUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input
```

## API

<!--@include: ./api/input.md-->

**事件**：clear 点击清空按钮时触发，onChange 值变化（支持受控 value + onChange）

**插槽**：leading 前置内容 · trailing 后置内容 · prefix 前置图标 · suffix 后缀图标 · addonBefore 前置标签 · addonAfter 后置标签
| render | ReactElement | - | 渲染为指定元素 |
| ui | XInputUi | - | 主题插槽类名 |
| onClear | () => void | - | 点击清空按钮时回调 |

## ui 插槽

| 键 | 说明 |
| --- | --- |
| root | 根元素 |
| base | 输入框 |
| leading | 前置内容容器 |
| leadingIcon | 前置默认图标 |
| leadingAvatar | 前置头像 |
| leadingAvatarSize | 前置头像尺寸 |
| trailing | 后置内容容器 |
| trailingIcon | 后置默认图标 |

## 动效

- focus：outline 加粗过渡（transition-colors）
- 无位移动画

## 设计规格

React 端将 Nuxt UI token 语义映射到本地 shadcn CSS 变量（`--background` / `--muted` / `--border` / `--foreground` 等），对应关系如下：

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | `bg-background`（outline） | `bg-default` |
| 背景 | `bg-muted/50`（soft）· `bg-muted`（subtle 与 soft 的 hover / focus） | `bg-elevated/50` / `bg-elevated` |
| 背景 | `bg-transparent`（ghost / none） | 相同 |
| 文字 | 正文继承 `text-foreground` | `text-highlighted` |
| 文字 | `placeholder:text-muted-foreground` | `placeholder:text-dimmed` |
| 描边 | `ring-1 ring-inset ring-border`（outline / subtle） | `ring ring-inset ring-accented` |
| 描边 | 聚焦：`outline-{color}/25` + `focus-visible:outline-3` + `focus-visible:ring-{color}`（outline / subtle 额外 ring-1） | 相同规则 |
| 圆角 | `rounded-md`（6px）；addon 外侧 `rounded-l-lg` / `rounded-r-lg` | 相同 |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `bg-background` + `ring-1 ring-inset ring-border` |
| soft | `bg-muted/50`，hover / focus 为 `bg-muted` |
| subtle | `bg-muted` + `ring-1 ring-inset ring-border` |
| ghost | `bg-transparent`，hover / focus 为 `bg-muted` |
| none | `bg-transparent` + `focus:outline-none` |

`highlight: true` 时叠加 `ring-1 ring-inset ring-{color}`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | 原生 input 行为，无额外键盘处理 |
| ARIA | 原生 input 隐式 `role=textbox` |
| 动效 | `transition-colors` |

**与 Vue 端差异**：React 端额外提供 `status`（error / warning 描边）、`clearable` 清空按钮、`addonBefore` / `addonAfter`、`prefix` / `suffix`；`fixed` 默认 `true`（Vue 端未开启时桌面端缩小字号）；尺寸为固定高度 `h-6 ~ h-11` 加 px 内边距（Vue 端为 py 内边距）；无 loading 图标旋转。
