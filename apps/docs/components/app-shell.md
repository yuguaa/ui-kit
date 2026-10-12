---
title: App Shell 应用框架
description: 浮动可折叠侧边栏、command-k 搜索、工作区切换与面包屑头部组成的后台管理框架
---

# App Shell 应用框架

参考 ReUI app-shell-2 构建的后台管理框架示例：浮动式侧边栏可折叠为图标栏，内置工作区切换器、嵌套导航（含状态脉冲与计数徽标）、command-k 搜索对话框与面包屑头部，正文为统计卡片与最近活动列表。

## 完整示例

侧边栏展开宽度 232px，点击左下角「收起侧边栏」折叠为 56px 图标栏；按 `⌘K`（Windows 为 `Ctrl+K`）打开命令搜索对话框。

<DemoPreview file="demos/vue/app-shell-2.vue" title="App Shell 框架" description="浮动侧边栏 + command-k 搜索 + 工作区切换 + 面包屑头部" />

## 结构说明

**侧边栏**

- `XDropdownMenu` 作为工作区切换器，展开态显示名称与切换图标，折叠态仅保留图标
- 导航按分组渲染，选中项使用 `bg-primary/10` 高亮；「实时活动」项展示脉冲状态点，「项目」项展示计数徽标（`XBadge`）
- 底部用户菜单同样使用 `XDropdownMenu` 承载资料、设置与退出操作

**头部**

- `XBreadcrumb` 展示层级路径
- 搜索按钮组合 `XKbd`（⌘ + K）提示快捷键，点击或按快捷键打开 `XModal` 命令面板
- 命令面板内 `XInput` 实时过滤命令列表

**正文**

- `XCard` 承载三张统计卡片与最近活动列表
- 整个示例高度固定 520px，内部滚动，适合嵌入文档与后台原型

## 组合使用的组件

`XDropdownMenu`、`XBreadcrumb`、`XModal`、`XInput`、`XKbd`、`XIcon`、`XAvatar`、`XBadge`、`XCard`、`XButton`

## 设计规格

> 本页面为文档示例（`demos/vue/app-shell-2.vue`），无独立组件主题，以下 token 为示例内实际使用的类。

### 主题 token

- 背景：外框 `bg-background`；侧边栏与头部 `bg-muted/30`；选中导航项 `bg-primary/10`；统计图标底 `bg-success/10`、`bg-info/10`、`bg-warning/10`
- 文字：选中导航项 `text-primary`；次级文字 `text-muted-foreground`；主文字继承 `text-foreground`
- 描边：外框、侧边栏、头部 `border border-border`；活动列表 `divide-y divide-border`
- 圆角与阴影：外框、面板 `rounded-xl`（12px）；导航项 `rounded-lg`（8px）；命令项 `rounded-md`（6px）
- 变体：无（示例直接使用原子类）

### 交互

- 键盘：容器 `tabindex="0"` 挂载 keydown，`⌘K` / `Ctrl+K` 打开命令面板（`event.preventDefault()`）；面板内 `Esc` 关闭（XModal 语义）；搜索输入框 `autofocus`；导航按钮原生 Tab 焦点
- ARIA：侧边栏为 `<aside>`；导航为 `<nav>`；折叠态导航项以 `title` 输出名称；命令面板由 XModal 提供对话框语义
- 动效：侧边栏 `transition-[width] duration-200 ease-out` 折叠展开；实时活动脉冲点 `animate-ping`（success 绿点）；导航与按钮 hover `transition-colors`
