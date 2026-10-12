---
title: Toast 消息通知
description: 操作后的轻量级全局消息通知
---

# Toast 消息通知

操作后的轻量级全局消息通知。应用根部挂载 `<XToaster />`，任意位置调用 `useToast().show / .dismiss`，选项与 Nuxt UI Toast 对齐：图标/头像、进度条、关闭按钮、横纵向布局与 ui 插槽。

## 基础用法

三种语义色通知，`icon` 在标题左侧显示图标。

<DemoPreview file="demos/vue/toast-basic.vue" title="语义通知与图标" description="color 语义色，icon 图标名" />

## 操作区与关闭按钮

`actions` 操作按钮列表、`action` / `cancel`（点击后关闭当前通知）、`close` 关闭按钮与 `orientation` 排列方向。

<DemoPreview file="demos/vue/toast-actions.vue" title="操作按钮 · 关闭按钮 · 横向布局" description="actions / action / cancel / close / orientation" />

## 头像、进度条与自定义渲染

`avatar` 显示头像，`progress` 显示剩余时长进度条；`title` 传组件等价 title 插槽，`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/vue/toast-custom.vue" title="avatar · progress · ui · 自定义标题" description="avatar 头像、progress 进度条、ui 插槽类名、title 组件" />

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

## 设计规格

### 主题 token

**背景**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | bg-default | #ffffff（亮）/ #171717（暗） |

**文字**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| title | text-highlighted | #171717（亮）/ #ffffff（暗） |
| description | text-muted | #737373（亮）/ #a3a3a3（暗） |

**描边与焦点环**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | ring ring-default | 1px 环 #e5e5e5（亮）/ #262626（暗） |
| root（color=primary 等） | outline-`<color>`/25 focus-visible:outline-3 focus-visible:ring-`<color>` | 焦点环用语义色（如 primary #22c55e），静态描边 25% 透明度 |
| root（color=neutral） | outline-inverted/25 focus-visible:ring-inverted | 焦点环 inverted #171717（亮）/ #ffffff（暗） |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | rounded-lg | --radius-lg 8px |
| root | shadow-lg | Tailwind 浮层阴影阶梯 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| color=`<color>` | root outline-`<color>`/25 + focus-visible:ring-`<color>`；icon text-`<color>` |
| color=neutral | root outline-inverted/25 + focus-visible:ring-inverted；icon text-highlighted |
| orientation=vertical | root items-start，actions 在描述下方（mt-2.5） |
| orientation=horizontal | root items-center，actions 与关闭按钮同行 |
| title=true | description mt-1 |

默认 color 为 primary。XToaster 容器：viewport fixed + sm:w-96 + z-[100]，默认 position bottom-right。

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 根节点 tabindex="0"（reka-ui ToastRoot 语义）；无内建 Esc 关闭（reka-ui Toast 语义）；关闭按钮 aria-label 来自 t('toast.close')；ToastAction 的 alt-text 生成操作按钮 aria-label |
| ARIA | reka ToastRoot 默认无 role；屏幕阅读播报由内部 ToastAnnounce 节点承担（role="alert"、aria-live polite，type=foreground 时 assertive）——以 reka-ui 语义为准 |
| 动效 | 打开：toast-slide-in-from-top / bottom 200ms var(--ease-out)（按 position）；关闭：toast-closed / toast-collapsed-closed 200ms；滑动结束：toast-slide-{up,right,down,left} 200ms；重复通知：toast-pulse-a / b 200ms；base 常态 transition-[transform,translate,height] duration-200 ease-out；进度条随剩余时长线性缩减、悬停暂停 |
| 手势 | pointer 拖拽滑动（swipe-direction 由 toaster position 推导），超过 swipeThreshold 关闭（reka-ui Toast 语义） |
