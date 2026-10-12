---
title: Switch 开关
description: 表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字
---

# Switch 开关

表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字。


<DemoPreview file="demos/react/switch-basic-demo.tsx" react title="开关 / 文字 / 尺寸 / 语义色" description="checked / checkedChildren / size / disabled / color" />

## 加载态、说明文字与必选

loading 阻止交互并显示旋转图标，description 展示 label 下方的辅助说明文字。

<DemoPreview file="demos/react/switch-loading-demo.tsx" react title="加载态与说明" description="loading / loadingIcon / description / required" />

## 滑块内图标与聚焦环

`checkedIcon` / `uncheckedIcon` 在滑块内按状态显示图标；`highlight` 常显聚焦环。

<DemoPreview file="demos/react/switch-icons.tsx" react title="滑块内图标与 highlight" description="checkedIcon / uncheckedIcon / highlight / color" />

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/react/switch-ui-custom.tsx" react title="ui 插槽自定义" description="ui 键：root / base / container / thumb / icon / wrapper / label / description" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-switch
```

## API

<!--@include: ./api/switch.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| base | 开关控件 |
| container | 控件包裹层 |
| thumb | 滑块 |
| icon | 滑块内图标 |
| wrapper | label 与 description 容器 |
| label | 关联文字 |
| description | 辅助说明 |

## 动效

- 滑块：位移过渡 + 背景色过渡（200ms ease-out）
- loading：图标旋转

## 设计规格

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | 轨道选中 `data-checked:bg-{color}`；未选中 `data-unchecked:bg-input` | `data-[state=checked]:bg-{color}` / `bg-accented` |
| 背景 | 滑块 `bg-background` | `bg-default` |
| 文字 | `label: text-foreground`；`description: text-muted-foreground` | `text-default` / `text-muted` |
| 文字 | 图标选中 `group-data-checked:text-{color}`，未选中 `group-data-unchecked:text-muted-foreground` | `text-{color}` / `text-dimmed` |
| 描边 | 轨道 `border-2 border-transparent`，聚焦 `focus-visible:outline-3` | 相同规则（未显式设置色板 outline） |
| 圆角 | 轨道与滑块 `rounded-full` | 圆形 |
| 阴影 | 滑块 `shadow-lg` | 相同 |

### 变体

| 变体 | token 组合 |
| --- | --- |
| checked | 轨道 `bg-{color}`，滑块 `translate-x-[calc(100%-2px)]`，选中图标 `opacity-100` |
| unchecked | 轨道 `bg-input`，滑块 `translate-x-0`，未选中图标 `opacity-100` |
| loading | 图标 `animate-spin`，控件置为 disabled 并设置 `aria-busy` |

`highlight: true` 时轨道 `ring-2 ring-{color}`。尺寸仅 default / small 两档（Vue 端为 xs ~ xl 五档）。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | base-ui Switch 语义：Tab 聚焦，Space / Enter 切换 |
| ARIA | `role=switch` + `aria-checked`；loading 时 `aria-busy` |
| 动效 | 轨道 `transition-[background]` 200ms ease-out；滑块 `transition-transform` 200ms（`motion-reduce:transition-none`）；图标 `transition-[color,opacity]` 200ms |
