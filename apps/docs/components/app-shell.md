---
title: App Shell 应用框架
description: 浮动可折叠侧边栏、command-k 搜索、工作区切换与面包屑头部组成的后台管理框架
---

# App Shell 应用框架

参考 ReUI app-shell-2 构建的后台管理框架示例：浮动式侧边栏可折叠为图标栏，内置工作区切换器、嵌套导航（含状态脉冲与计数徽标）、command-k 搜索对话框与面包屑头部，正文为统计卡片与最近活动列表。

<script setup>
import AppShell2 from '@demos/vue/app-shell-2.vue'
import appShell2Raw from '@demos/vue/app-shell-2.vue.code.txt?raw'
</script>

## 完整示例

侧边栏展开宽度 232px，点击左下角「收起侧边栏」折叠为 56px 图标栏；按 `⌘K`（Windows 为 `Ctrl+K`）打开命令搜索对话框。

<DemoBlock title="App Shell 框架" description="浮动侧边栏 + command-k 搜索 + 工作区切换 + 面包屑头部" :code="appShell2Raw">
  <AppShell2 />
</DemoBlock>

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
