---
title: InputTags 标签输入
description: 以标签形式输入多个值
---

# InputTags 标签输入

以标签形式输入多个值，回车添加、点击关闭移除。支持五档尺寸、七种语义色、五种变体与高亮描边，单个标签长度由 `maxLength` 限制。


## 基础用法

`value` 绑定标签数组（受控），回车或失焦添加，点击删除图标移除。

<DemoPreview file="demos/react/input-tags-basic.tsx" react title="基础用法" description="value + onChange 绑定标签数组" />

## 尺寸、语义色与变体

`size` 五档尺寸；`color` 七种语义色；`variant` 五种变体；`highlight` 常显颜色描边。

<DemoPreview file="demos/react/input-tags-colors.tsx" react title="尺寸与语义色" description="size / color / variant / highlight" />

## 数量与长度限制

`max` 限制标签总数，`maxLength` 限制单个标签最大字符数，`deleteIcon` 自定义删除图标。

<DemoPreview file="demos/react/input-tags-features.tsx" react title="数量与长度限制" description="max / maxLength / deleteIcon" />

## 插槽与 ui

`leading` 前置内容，`tag` 自定义标签项；`ui` 按主题插槽覆盖类名，可自定义容器、标签项、删除按钮与输入框。

<DemoPreview file="demos/react/input-tags-custom.tsx" react title="ui 主题插槽" description="base / item / itemDeleteIcon / root / input" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-tags
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string[] | [] | 标签数组 |
| max | number | - | 最大标签数 |
| placeholder | string | 输入后回车添加… | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| maxLength | number | - | 单个标签最大长度 |
| deleteIcon | XInputTagsIcon | x | 删除标签图标（XIcon 名称或组件） |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| render | ReactElement | - | 渲染为指定元素 |
| autofocus | boolean | false | 挂载后自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（毫秒） |
| onAdd / onRemove | (tag) / (index) => void | - | 添加 / 删除回调 |
| leading | ReactNode | - | 前置内容 |
| tag | (state) => ReactNode | - | 自定义标签项（{ tag, index }，对应 Vue 侧 tag 插槽） |
| ui | XInputTagsUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| base | 容器外观（变体、描边、圆角） |
| item | 标签项 |
| itemText | 标签文本 |
| itemDelete | 删除按钮 |
| itemDeleteIcon | 删除图标 |
| input | 内部输入框 |
| leading | 前置内容容器 |

## 动效

- 容器：focus ring 与颜色过渡
- 删除按钮：hover 颜色过渡

## 设计规格

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | 容器 `bg-background`（outline）· `bg-muted/50`（soft）· `bg-muted`（subtle） | `bg-default` / `bg-elevated/50` / `bg-elevated` |
| 背景 | 标签项 `bg-muted` | `bg-elevated` |
| 文字 | 标签项 `text-foreground`；输入 `placeholder:text-muted-foreground` | `text-default` / `text-dimmed` |
| 描边 | 容器 `ring-1 ring-inset ring-border`（outline / subtle）；标签项 `ring-1 ring-inset ring-border` | `ring-accented` |
| 描边 | 聚焦：内部输入聚焦时容器 `has-focus-visible:outline-3` + `has-focus-visible:ring-{color}` | 相同规则 |
| 圆角 | 容器 `rounded-md`（6px）· 标签项 `rounded-xs`（2px） | 容器相同；Vue 端标签项为 `rounded-sm` |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `bg-background` + `ring-1 ring-inset ring-border` |
| soft / subtle / ghost / none | 与 XInput 相同组合（focus 前缀改为 has-focus-visible） |

标签项文字 `text-[10px]/3 ~ text-sm`，删除图标 `size-3 ~ size-4`（随尺寸）。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | Enter 添加草稿标签；Backspace 在输入为空时删除最后一项；无方向键标签导航 |
| ARIA | 内部 input `role=textbox`；删除按钮 `aria-label="close"` |
| 动效 | 容器与删除按钮 `transition-colors` |

**与 Vue 端差异**：React 端自实现标签管理（Enter / Backspace / blur 提交草稿）；无方向键在标签间移动焦点、无 addOnPaste / addOnTab / delimiter / duplicate 等 reka-ui 能力；重复标签自动忽略。
