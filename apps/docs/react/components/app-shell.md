---
title: App Shell 应用框架
description: 浮动可折叠侧边栏、command-k 搜索、工作区切换与面包屑头部组成的后台管理框架
---

# App Shell 应用框架

参考 ReUI app-shell-2 构建的后台管理框架示例：浮动式侧边栏可折叠为图标栏，内置工作区切换器、嵌套导航（含状态脉冲与计数徽标）、command-k 搜索对话框与面包屑头部，正文为统计卡片与最近活动列表。

<script setup>
import AppShell2 from '@demos/react/app-shell-2'
import appShell2Raw from '@demos/react/app-shell-2.tsx.code.txt?raw'
</script>

## 完整示例

侧边栏展开宽度 232px，点击左下角「收起侧边栏」折叠为 56px 图标栏；按 `⌘K`（Windows 为 `Ctrl+K`）打开命令搜索对话框。快捷键通过 `useEffect` 注册全局 keydown 监听并在卸载时清理。

<DemoBlock title="App Shell 框架" description="浮动侧边栏 + command-k 搜索 + 工作区切换 + 面包屑头部" :code="appShell2Raw">
  <ReactDemo :component="AppShell2" />
</DemoBlock>

## 结构说明

**侧边栏**

- `XDropdownMenu` 的 `trigger` 接收 ReactElement 作为工作区切换器，展开态显示名称与切换图标，折叠态仅保留图标
- 导航按分组渲染，选中项使用 `bg-primary/10` 高亮；「实时活动」项展示脉冲状态点，「项目」项展示计数徽标（`XBadge`）
- 底部用户菜单同样使用 `XDropdownMenu` 承载资料、设置与退出操作

**头部**

- `XBreadcrumb` 展示层级路径
- 搜索按钮组合 `XKbd`（⌘ + K）提示快捷键，点击或按快捷键打开 `XModal` 命令面板
- 命令面板内 `XInput` 实时过滤命令列表，过滤用 `useMemo` 缓存

**正文**

- `XCard` 承载三张统计卡片与最近活动列表
- 整个示例高度固定 520px，内部滚动，适合嵌入文档与后台原型

## 组合使用的组件

`XDropdownMenu`、`XBreadcrumb`、`XModal`、`XInput`、`XKbd`、`XIcon`、`XAvatar`、`XBadge`、`XCard`、`XButton`

## 设计规格

> 本页面为文档示例（`demos/react/app-shell-2.tsx`），无独立组件主题，以下 token 为示例内实际使用的类。

### 主题 token

- 背景：外框 `bg-background`；侧边栏与头部 `bg-muted/30`；选中导航项 `bg-primary/10`；统计图标底 `bg-success/10`、`bg-info/10`、`bg-warning/10`
- 文字：选中导航项 `text-primary`；次级文字 `text-muted-foreground`；主文字继承 `text-foreground`
- 描边：外框、侧边栏、头部 `border border-border`；活动列表 `divide-y divide-border`
- 圆角与阴影：外框、面板 `rounded-xl`（12px）；导航项 `rounded-lg`（8px）；命令项 `rounded-md`（6px）
- 变体：无（示例直接使用原子类）

### 交互

- 键盘：`useEffect` 注册全局 keydown，`⌘K` / `Ctrl+K` 打开命令面板（`event.preventDefault()`），卸载时移除监听；面板内 `Esc` 关闭（XModal 语义）；搜索输入框自动聚焦；导航按钮原生 Tab 焦点
- ARIA：侧边栏为 `<aside>`；导航为 `<nav>`；工作区切换触发器 `aria-label="切换工作区"`；折叠态导航项以 `title` 输出名称；命令面板由 XModal 提供对话框语义
- 动效：侧边栏 `transition-[width] duration-200 ease-out` 折叠展开；实时活动脉冲点 `animate-ping`（success 绿点）；导航与按钮 hover `transition-colors`

**双端差异**：

- Vue 端快捷键挂在容器 `tabindex="0"` 的 keydown 上（容器聚焦才生效）；React 端挂 `window` 全局监听（任意位置生效）
- Vue 端命令过滤用 `computed`；React 端用 `useMemo` 缓存（文档中已注明）
- 其余视觉 token 与结构两端一致
