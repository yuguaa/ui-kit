---
title: Toast 消息通知
description: 操作后的轻量级全局消息通知
---

# Toast 消息通知

操作后的轻量级全局消息通知。应用根部挂载 `<XToaster />`，任意位置调用 `useToast().show / .dismiss`，选项与 Nuxt UI Toast 对齐：图标/头像、进度条、关闭按钮、横纵向布局与 ui 插槽。

<script setup>
import ToastBasic from '@demos/vue/toast-basic.vue'
import toastBasicRaw from '@demos/vue/toast-basic.vue.code.txt?raw'
import ToastActions from '@demos/vue/toast-actions.vue'
import toastActionsRaw from '@demos/vue/toast-actions.vue.code.txt?raw'
import ToastCustom from '@demos/vue/toast-custom.vue'
import toastCustomRaw from '@demos/vue/toast-custom.vue.code.txt?raw'
</script>

## 基础用法

三种语义色通知，`icon` 在标题左侧显示图标。

<DemoBlock title="语义通知与图标" description="color 语义色，icon 图标名" :code="toastBasicRaw">
  <ToastBasic />
</DemoBlock>

## 操作区与关闭按钮

`actions` 操作按钮列表、`action` / `cancel`（点击后关闭当前通知）、`close` 关闭按钮与 `orientation` 排列方向。

<DemoBlock title="操作按钮 · 关闭按钮 · 横向布局" description="actions / action / cancel / close / orientation" :code="toastActionsRaw">
  <ToastActions />
</DemoBlock>

## 头像、进度条与自定义渲染

`avatar` 显示头像，`progress` 显示剩余时长进度条；`title` 传组件等价 title 插槽，`ui` 按主题插槽覆盖类名。

<DemoBlock title="avatar · progress · ui · 自定义标题" description="avatar 头像、progress 进度条、ui 插槽类名、title 组件" :code="toastCustomRaw">
  <ToastCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-toast
```

## 用法

```vue
<template>
  <XToaster />
</template>

<script setup>
import XToaster from '@/components/kit/XToaster.vue'
import { useToast } from '@/components/kit/XToast'

const toastApi = useToast()
toastApi.show({ title: '操作成功', description: '数据已保存。', color: 'success' })
toastApi.dismiss()
</script>
```

## API

useToast().show(options) 的选项：

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string · Component | - | 通知标题，组件等价 title 插槽 |
| description | string · Component | - | 说明文字，组件等价 description 插槽 |
| icon | IconName | - | 图标名 |
| avatar | AvatarProps | - | 头像配置 |
| color | primary · success · warning · error | primary | 语义色 |
| orientation | vertical · horizontal | vertical | 内容与操作区的排列方向 |
| close | boolean · ButtonProps · Component | true | 关闭按钮，组件等价 close 插槽 |
| closeIcon | IconName | x | 关闭按钮图标 |
| actions | ButtonProps[] · Component | - | 操作按钮列表，组件等价 actions 插槽 |
| action | { label, onClick } | - | 操作按钮，点击后关闭通知 |
| cancel | { label, onClick } | - | 取消按钮，点击后关闭通知 |
| leading | Component | - | 自定义图标/头像区域，等价 leading 插槽 |
| progress | boolean · { color, ui } | true | 剩余时长进度条 |
| duration | number | 3000 | 展示时长（ms），0 表示不自动关闭 |
| id | string · number | - | 通知 id，相同 id 复用同一条通知 |
| ui | ToastUi | - | 主题插槽类名 |
| onCloseToast | () => void | - | 关闭回调（内部：由通知 API 注入） |
| isPaused | boolean | - | 暂停进度计时（内部：由通知 API 注入） |

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

show 的选项支持传入组件实现同名插槽的自定义渲染：

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
