---
title: InputTime 时间选择
description: 选择时间，支持 12/24 小时制与时间区间
---

# InputTime 时间选择

输入框 + popover 时间列表，选择时间，支持 12/24 小时制、分钟步长与时间区间。容器支持五档尺寸、七种语义色、五种变体与高亮描边。


## 基础用法

`value` 绑定时间（HH:mm），点击输入框弹出时间列表选择。

<DemoPreview file="demos/react/input-time-basic.tsx" react title="基础用法" description="value + onChange 绑定时间" />

## 时间区间

range 开启后绑定值为 [开始, 结束] 数组，触发器内两个输入框由分隔图标连接；`separatorIcon` 可自定义分隔图标。

<DemoPreview file="demos/react/input-time-range.tsx" react title="时间区间" description="range 模式 + separatorIcon 自定义分隔图标" />

## 尺寸、语义色与变体

`size` 五档尺寸；`color` 七种语义色；`variant` 五种变体；`highlight` 常显颜色描边。

<DemoPreview file="demos/react/input-time-colors.tsx" react title="尺寸与语义色" description="size / color / variant / highlight" />

## 内容与 ui

`leading` / `trailing` / `separator` 自定义内容；`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/react/input-time-slots.tsx" react title="内容与 ui" description="leading / trailing / ui 主题插槽" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-time
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string \| string[] | - | 绑定时间（HH:mm，range 时为 [开始, 结束]） |
| range | boolean | false | 时间区间选择 |
| hour12 | boolean | false | 12 小时制 |
| step | number | 1 | 步长（分钟） |
| disabled | boolean | false | 是否禁用 |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| separatorIcon | XInputTimeIcon | minus | 区间分隔图标（XIcon 名称或组件） |
| render | ReactElement | - | 渲染为指定元素 |
| autofocus | boolean | false | 挂载后自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（毫秒） |
| leading / separator / trailing | ReactNode | - | 前置 / 区间分隔 / 后置内容 |
| onChange | (time) => void | - | 时间变化回调，载荷为 string，range 模式下为 string[] |
| ui | XInputTimeUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 触发按钮 |
| base | 输入容器（变体、描边、圆角） |
| leading | 前置内容容器 |
| leadingIcon | 默认前置图标 |
| separatorIcon | 区间分隔图标 |
| trailing | 后置内容容器 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 容器：focus ring 过渡

## 设计规格

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | 容器 `bg-background`（outline）· `bg-muted/50`（soft）· `bg-muted`（subtle） | `bg-default` / `bg-elevated/50` / `bg-elevated` |
| 文字 | 输入框继承 `text-foreground`；`placeholder:text-muted-foreground`；分隔图标 `text-muted-foreground` | `text-highlighted` / `text-dimmed` / `text-muted` |
| 描边 | 容器 `ring-1 ring-inset ring-border`（outline / subtle）；聚焦 `has-focus-visible:outline-3` + `has-focus-visible:ring-{color}` | 相同规则 |
| 圆角 | 容器 `rounded-md`（6px） | 相同 |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `bg-background` + `ring-1 ring-inset ring-border` |
| soft / subtle / ghost / none | 与 XInput 相同组合（focus 前缀改为 has-focus-visible） |

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | 触发按钮 Tab 聚焦，Enter / Space 打开时间列表；列表项 Tab 聚焦，Enter / Space 选中 |
| ARIA | 触发按钮 `aria-expanded` 由 Popover 管理；选中项以勾选图标与 `bg-primary/10` 呈现 |
| 动效 | 弹层由 Popover 提供进出场动画；容器 `transition-colors`；列表项 hover `bg-muted` |

**与 Vue 端差异**：React 端为「只读输入 + 时间列表弹层」方案，Vue 端为 reka-ui TimeField 可编辑分段输入；React 端选中项为 `bg-primary/10` + `text-primary`（Vue 端分段聚焦背景按变体区分）。
