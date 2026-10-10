---
title: Toast 消息通知
description: 操作后的轻量级全局消息通知
---

# Toast 消息通知

操作后的轻量级全局消息通知。应用根部挂载 `<XToaster />`，任意位置调用 `toast.show / .dismiss`，选项与 Nuxt UI Toast 对齐：图标/头像、进度条、关闭按钮、横纵向布局与 ui 插槽。

<script setup>
import ToastBasic from '@demos/react/toast-basic'
import toastBasicRaw from '@demos/react/toast-basic.tsx.code.txt?raw'
import ToastActions from '@demos/react/toast-actions'
import toastActionsRaw from '@demos/react/toast-actions.tsx.code.txt?raw'
import ToastCustom from '@demos/react/toast-custom'
import toastCustomRaw from '@demos/react/toast-custom.tsx.code.txt?raw'
</script>

## 基础用法

三种语义色通知，`icon` 在标题左侧显示图标。

<DemoBlock title="语义通知与图标" description="color 语义色，icon 图标名" :code="toastBasicRaw">
  <ReactDemo :component="ToastBasic" />
</DemoBlock>

## 操作区与关闭按钮

`actions` 操作按钮列表、`action` / `cancel`（点击后关闭当前通知）、`close` 关闭按钮与 `orientation` 排列方向。

<DemoBlock title="操作按钮 · 关闭按钮 · 横向布局" description="actions / action / cancel / close / orientation" :code="toastActionsRaw">
  <ReactDemo :component="ToastActions" />
</DemoBlock>

## 头像、进度条与自定义渲染

`avatar` 显示头像，`progress` 显示剩余时长进度条；`title` 传节点等价 title 插槽，`ui` 按主题插槽覆盖类名。

<DemoBlock title="avatar · progress · ui · 自定义标题" description="avatar 头像、progress 进度条、ui 插槽类名、title 节点" :code="toastCustomRaw">
  <ReactDemo :component="ToastCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-toast
```

## 用法

```tsx
import { toast, XToaster } from "@/components/kit/x-toast";

// 应用根部
<XToaster />

// 任意位置
toast.show({ title: "操作成功", description: "数据已保存。", color: "success" });
toast.dismiss();
```

## API

<!--@include: ./api/toast.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 通知根元素 |
| wrapper | 标题/描述/操作区容器 |
| title | 标题元素 |
| description | 描述元素 |
| icon | 图标元素 |
| avatar | 头像元素 |
| avatarSize | 头像尺寸（xs · sm · md · lg · xl） |
| actions | 操作区容器 |
| progress | 进度条元素 |
| close | 关闭按钮 |

## 插槽

show 的选项支持传入节点实现同名插槽的自定义渲染：

| 名称 | 说明 |
| --- | --- |
| leading | 图标/头像区域 |
| title | 标题 |
| description | 说明文字 |
| actions | 操作区 |
| close | 关闭按钮 |

## 动效

- 进出场：滑入 + 淡入淡出（sonner）
- 进度条：随剩余时长线性缩减，悬停时暂停
