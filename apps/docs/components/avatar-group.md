---
title: AvatarGroup 头像组
description: 将多个头像重叠排列展示，超出 max 折叠为 +N
---

# AvatarGroup 头像组

将多个头像重叠排列展示，超出 max 时折叠为 +N。max 支持 number 与 string，缺省时全部显示；size / color 会透传给未指定的子头像。

<script setup>
import AvatarGroupBasic from '@demos/vue/avatar-group-basic.vue'
import avatarGroupBasicRaw from '@demos/vue/avatar-group-basic.vue.code.txt?raw'
import AvatarGroupMax from '@demos/vue/avatar-group-max.vue'
import avatarGroupMaxRaw from '@demos/vue/avatar-group-max.vue.code.txt?raw'
import AvatarGroupColors from '@demos/vue/avatar-group-colors.vue'
import avatarGroupColorsRaw from '@demos/vue/avatar-group-colors.vue.code.txt?raw'
import AvatarGroupUi from '@demos/vue/avatar-group-ui.vue'
import avatarGroupUiRaw from '@demos/vue/avatar-group-ui.vue.code.txt?raw'
</script>

## 基础用法

头像重叠排列，后一个压前一个，size 控制整体尺寸（环形描边与负边距随尺寸分档）。

<DemoBlock title="基础重叠排列" description="全部显示与 size 分档" :code="avatarGroupBasicRaw">
  <AvatarGroupBasic />
</DemoBlock>

## max 折叠

max 限制可见数量，超出部分折叠为 +N；plus 插槽可自定义溢出标记。

<DemoBlock title="max 折叠与 plus 插槽" description="max 折叠为 +N，plus 自定义溢出标记" :code="avatarGroupMaxRaw">
  <AvatarGroupMax />
</DemoBlock>

## 语义色透传

color 属性透传给子头像，子头像自身指定 color 时不被覆盖。

<DemoBlock title="color 透传" description="头像组的 color 透传给未指定 color 的子头像" :code="avatarGroupColorsRaw">
  <AvatarGroupColors />
</DemoBlock>

## ui 插槽自定义

ui 按主题插槽（root / base）覆盖类名。

<DemoBlock title="ui 插槽类名" description="root 与 base 插槽类名" :code="avatarGroupUiRaw">
  <AvatarGroupUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-avatar-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | number · string | - | 最多显示数量，超出部分折叠为 +N |
| size | xs · sm · md · lg · xl | md | 头像尺寸，透传给未指定 size 的子头像 |
| color | primary · secondary · neutral · success · info · warning · error | - | 透传给子头像的语义色（子头像自身指定 color 时不覆盖） |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | AvatarGroupUi | - | 主题插槽类名 |
| class | any | - | 根元素类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 头像组根元素 |
| base | 每个头像的包裹元素（含 +N 溢出标记） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 头像列表 |
| plus | 自定义溢出标记 |

## 动效

无动效：静态展示组件。

## 设计规格

### 主题 token

slots 公共类：`root` 为 `inline-flex flex-row-reverse justify-end`；`base` 为 `relative rounded-full ring-bg first:me-0`。

| 项目 | 类名 | 说明 |
| --- | --- | --- |
| 背景 | 不使用 | 没有背景 token |
| 文字 | 不使用 | 没有文字 token |
| 描边 | ring-bg（#ffffff / #171717） | 每个头像的外环，与页面背景同色形成间隔 |
| 圆角 | rounded-full | 头像与包裹元素全圆角 |
| 阴影 | 不使用 | 没有阴影 |

**变体**

| 变体 | 取值 | 说明 |
| --- | --- | --- |
| size | 3xs ~ 3xl | 外环与重叠间距分档：3xs ~ xs 为 ring（1px）+ -me-0.5；sm ~ lg 为 ring-2 + -me-1.5；xl ~ 3xl 为 ring-3 + -me-2；默认 md |
| color | primary / secondary / success / info / warning / error / neutral | 透传给子头像的背景与文字色，默认 neutral |

size / color 通过 provide / inject（avatarGroupInjectionKey）传递给子 XAvatar，子头像自身指定时优先。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，默认渲染 `<div>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 没有内置角色 |

**状态**

| 状态 | 说明 |
| --- | --- |
| max | 超出 max 的头像折叠为单个 XAvatar（text 为 `+N`）；max 支持字符串（parseInt） |

**动效**

没有动效：静态展示组件。
