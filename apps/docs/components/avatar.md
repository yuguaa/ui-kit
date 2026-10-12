---
title: Avatar 头像
description: 头像用于展示用户形象，支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标
---

# Avatar 头像

头像用于展示用户形象，支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标，图片加载失败时自动展示 fallback 内容。

## 尺寸与形状

<DemoPreview file="demos/vue/avatar-sizes.vue" title="五档尺寸与形状" description="size 控制尺寸，shape 切换圆形 / 方形" />

## 图片、文字与图标

有 src 时展示图片，加载失败自动展示 fallback；无图片时可通过 text 显示文字，也可使用 icon 属性（图标名）或 icon 插槽显示图标，两者都缺省时由 alt 生成首字母（最多两个）。

<DemoPreview file="demos/vue/avatar-icon-text.vue" title="图片 · 文字 · 图标 · 首字母" description="src 图片、text 文字、icon 图标、alt 首字母回退" />

## 语义色

color 属性为文字/图标头像提供七种语义色背景（1 阶背景、7 阶文字色），默认 neutral。

<DemoPreview file="demos/vue/avatar-colors.vue" title="七种语义色" description="color 属性控制文字/图标头像的背景与文字色" />

## chip 徽标

chip 接受布尔或配置对象。布尔渲染默认主色圆点；对象可指定 text、color、size 与 position（top-right / bottom-right / top-left / bottom-left）。

<DemoPreview file="demos/vue/avatar-chip.vue" title="chip 徽标" description="布尔圆点与配置对象徽标" />

## ui 插槽自定义

ui 按主题插槽（root / image / fallback / icon）覆盖类名。

<DemoPreview file="demos/vue/avatar-ui.vue" title="ui 插槽类名" description="root / image / fallback 插槽类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-avatar
```

## API

<!--@include: ./api/avatar.md-->

### AvatarChip

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string · number | - | 徽标文字，缺省渲染纯色圆点 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 徽标颜色 |
| size | xs · sm · md · lg · xl | xs | 徽标尺寸 |
| position | top-right · bottom-right · top-left · bottom-left | top-right | 徽标位置 |
| class | any | - | 徽标类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 头像根元素 |
| image | 图片元素 |
| fallback | 文字/图标回退容器 |
| icon | 图标容器 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 头像文字，优先级高于 text |
| icon | 头像图标，优先级高于 text |

## 事件

| 名称 | 说明 |
| --- | --- |
| error | 图片加载失败回调 |

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

slots 公共类：`root` 为 `inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle`；`image` 为 `h-full w-full rounded-[inherit] object-cover`；`fallback` 为 `font-medium truncate`；`icon` 为 `shrink-0`。

**背景**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| bg-{color}/10 | 语义色 500 级 10% 透明度 | 文字 / 图标头像的背景 |
| bg-elevated | #f5f5f5 / #262626 | neutral 背景 |

**文字**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| text-{color} | 语义色 500 级 | fallback 文字与图标颜色 |
| text-muted | #737373 / #a3a3a3 | neutral fallback 文字与图标 |

**描边**

| 类 | 说明 |
| --- | --- |
| 不使用 | 没有描边 token；chip 模式时由 XChip 的 ring-bg 承担外环 |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-full | 全圆角（image 用 rounded-[inherit] 继承） |
| 阴影 | 不使用 |

**变体**

| 变体 | 取值 | 说明 |
| --- | --- | --- |
| color | primary / secondary / success / info / warning / error / neutral | 背景与文字色，默认 neutral |
| size | 3xs ~ 3xl | size-4 ~ size-12（16px ~ 48px），文字 text-[8px] ~ text-2xl，默认 md |

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，默认渲染 `<span>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| alt | 图片替代文本，同时参与生成 fallback（每个词首字符，最多 2 个） |
| 不输出 | 没有内置角色 |

**状态**

| 状态 | 说明 |
| --- | --- |
| 加载失败 | src 加载 error 事件后切换为 fallback（icon / text / 首字母）；src 变化时重置错误态 |
| chip | chip 属性为 true 或对象时，本体包裹 XChip（inset=true）角标 |

**动效**

没有动效：静态展示组件。
