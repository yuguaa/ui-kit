---
title: Avatar 头像
description: 头像用于展示用户形象，支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标
---

# Avatar 头像

头像用于展示用户形象，支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标，图片加载失败时自动展示 fallback 内容。

<script setup>
import AvatarSizes from '@demos/react/avatar-sizes'
import avatarSizesRaw from '@demos/react/avatar-sizes.tsx.code.txt?raw'
import AvatarIconText from '@demos/react/avatar-icon-text'
import avatarIconTextRaw from '@demos/react/avatar-icon-text.tsx.code.txt?raw'
import AvatarColors from '@demos/react/avatar-colors'
import avatarColorsRaw from '@demos/react/avatar-colors.tsx.code.txt?raw'
import AvatarChip from '@demos/react/avatar-chip'
import avatarChipRaw from '@demos/react/avatar-chip.tsx.code.txt?raw'
import AvatarUi from '@demos/react/avatar-ui'
import avatarUiRaw from '@demos/react/avatar-ui.tsx.code.txt?raw'
</script>

## 尺寸与形状

<DemoBlock title="五档尺寸与形状" description="size 控制尺寸，shape 切换圆形 / 方形" :code="avatarSizesRaw">
  <ReactDemo :component="AvatarSizes" />
</DemoBlock>

## 图片、文字与图标

有 src 时展示图片，加载失败自动展示 fallback；无图片时可通过 text 显示文字，也可使用 icon 属性（图标名或图标元素）显示图标，两者都缺省时由 alt 生成首字母（最多两个）。

<DemoBlock title="图片 · 文字 · 图标 · 首字母" description="src 图片、text 文字、icon 属性图标、alt 首字母回退" :code="avatarIconTextRaw">
  <ReactDemo :component="AvatarIconText" />
</DemoBlock>

## 语义色

color 属性为文字/图标头像提供七种语义色背景（1 阶背景、7 阶文字色），默认 neutral。

<DemoBlock title="七种语义色" description="color 属性控制文字/图标头像的背景与文字色" :code="avatarColorsRaw">
  <ReactDemo :component="AvatarColors" />
</DemoBlock>

## chip 徽标

chip 接受布尔或配置对象。布尔渲染默认主色圆点；对象可指定 text、color、size 与 position（top-right / bottom-right / top-left / bottom-left）。

<DemoBlock title="chip 徽标" description="布尔圆点与配置对象徽标" :code="avatarChipRaw">
  <ReactDemo :component="AvatarChip" />
</DemoBlock>

## ui 插槽自定义

ui 按主题插槽（root / image / fallback / icon）覆盖类名。

<DemoBlock title="ui 插槽类名" description="root / image / fallback 插槽类名" :code="avatarUiRaw">
  <ReactDemo :component="AvatarUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-avatar
```

## API

<!--@include: ./api/avatar.md-->

### XAvatarChip

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string · number | - | 徽标文字，缺省渲染纯色圆点 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 徽标颜色 |
| size | xs · sm · md · lg · xl | xs | 徽标尺寸 |
| position | top-right · bottom-right · top-left · bottom-left | top-right | 徽标位置 |
| className | string | - | 徽标类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 头像根元素 |
| image | 图片元素 |
| fallback | 文字/图标回退容器 |
| icon | 图标容器 |

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

基于 @base-ui Avatar 原语（Root / Image / Fallback），样式语义与 Vue 端对应：`bg-muted` ≈ `bg-elevated`，`text-foreground` ≈ `text-default`。

**背景**

| token | 使用场景 |
| --- | --- |
| bg-{color}/10 | 文字 / 图标头像的背景 |
| bg-muted | neutral / secondary 背景 |

**文字**

| token | 使用场景 |
| --- | --- |
| text-{color} | fallback 文字与图标颜色 |
| text-foreground | neutral 文字 |
| text-secondary-foreground | secondary 文字 |

**描边**

| 类 | 说明 |
| --- | --- |
| 不使用 | 没有描边 token；chip 圆点模式为 ring-2 ring-background |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-full / rounded-md | shape 为 circle 时全圆角，square 时 --radius-md（Vue 端仅圆形） |
| 阴影 | 不使用 |

**变体**

| 变体 | 取值 | 说明 |
| --- | --- | --- |
| shape | circle（默认）/ square | 头像形状 |
| size | xs / sm / md / lg / xl | size-5 ~ size-12，默认 md |
| color | primary / secondary / neutral / success / info / warning / error | 背景与文字色，默认 neutral |
| chip | boolean / XAvatarChip | 没有 text 时渲染实心圆点（bg-{color} size-2 border-0 + ring-2 ring-background） |

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| alt | 图片替代文本（没有 alt 时兜底为 text 或 "avatar"），同时参与生成 fallback 首字母（最多 2 个） |
| 不输出 | base-ui Avatar 没有内置角色 |

**状态**

| 状态 | 说明 |
| --- | --- |
| 加载失败 | onError 后切换为 Fallback；src 变化时重置错误态；keepMounted 保持图片节点挂载 |

**动效**

没有动效：静态展示组件。

**与 Vue 端差异**

| 项目 | Vue 端 | React 端 |
| --- | --- | --- |
| 尺寸档位 | 3xs ~ 3xl 九档（size-4 ~ size-12） | xs ~ xl 五档（size-5 ~ size-12） |
| shape | 固定圆形 | 支持 circle / square |
| neutral 颜色 | bg-elevated text-muted | bg-muted text-foreground（语义等价） |
| 渲染原语 | reka-ui Primitive | @base-ui Avatar（Image 带 keepMounted） |
