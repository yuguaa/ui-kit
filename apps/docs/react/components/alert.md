---
title: Alert 警告提示
description: 展示需要关注的信息，提供七种语义色与四种变体
---

# Alert 警告提示

用于页面中展示需要关注的信息，提供七种语义色、四种变体，可附带图标、头像、操作区与受控关闭按钮。

<script setup>
import AlertBasic from '@demos/react/alert-basic'
import alertBasicRaw from '@demos/react/alert-basic.tsx.code.txt?raw'
import AlertVariants from '@demos/react/alert-variants'
import alertVariantsRaw from '@demos/react/alert-variants.tsx.code.txt?raw'
import AlertTypes from '@demos/react/alert-types'
import alertTypesRaw from '@demos/react/alert-types.tsx.code.txt?raw'
import AlertClosable from '@demos/react/alert-closable'
import alertClosableRaw from '@demos/react/alert-closable.tsx.code.txt?raw'
import AlertIconActions from '@demos/react/alert-icon-actions'
import alertIconActionsRaw from '@demos/react/alert-icon-actions.tsx.code.txt?raw'
import AlertOrientation from '@demos/react/alert-orientation'
import alertOrientationRaw from '@demos/react/alert-orientation.tsx.code.txt?raw'
import AlertUiCustom from '@demos/react/alert-ui-custom'
import alertUiCustomRaw from '@demos/react/alert-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

icon 指定图标名，avatar 传入头像配置；close 配合 open / onOpenChange 提供受控关闭。

<DemoBlock title="图标、头像与受控关闭" description="icon / avatar / close + open" :code="alertBasicRaw">
  <ReactDemo :component="AlertBasic" />
</DemoBlock>

## 变体

<DemoBlock title="四种变体" description="variant 控制提示强度" :code="alertVariantsRaw">
  <ReactDemo :component="AlertVariants" />
</DemoBlock>

## 语义色

color 提供七种语义色；kit 既有属性 type 仍可作为 color 的回退。

<DemoBlock title="七种语义色" description="color" :code="alertTypesRaw">
  <ReactDemo :component="AlertTypes" />
</DemoBlock>

## 受控关闭

close 为布尔时使用默认关闭按钮；传对象时整体透传给关闭按钮（可配置 variant / color / size / label 等）；closeSlot 替换默认按钮，closeIcon 更换图标。

<DemoBlock title="close 与 closeIcon" description="close / closeSlot / closeIcon / onOpenChange" :code="alertClosableRaw">
  <ReactDemo :component="AlertClosable" />
</DemoBlock>

## 图标、头像与操作区

<DemoBlock title="icon / avatar / actions" description="leading、actions 与 actions 数组" :code="alertIconActionsRaw">
  <ReactDemo :component="AlertIconActions" />
</DemoBlock>

## 排列方向

<DemoBlock title="vertical / horizontal" description="orientation 控制内容与操作区的排列方向" :code="alertOrientationRaw">
  <ReactDemo :component="AlertOrientation" />
</DemoBlock>

## ui 插槽与渲染

<DemoBlock title="ui 插槽自定义与 render" description="ui 键覆盖主题插槽类名，render 更换渲染元素" :code="alertUiCustomRaw">
  <ReactDemo :component="AlertUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-alert
```

## API

<!--@include: ./api/alert.md-->
| open | boolean | - | 受控关闭模型 |
| onOpenChange | (open: boolean) => void | - | 打开状态变化回调 |
| onClose | (event) => void | - | 点击关闭按钮时的回调 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XAlertUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| wrapper | 标题、描述与纵向操作区的容器 |
| title | 标题元素 |
| description | 描述元素 |
| icon | 图标元素 |
| avatar | 头像元素 |
| avatarSize | 头像尺寸（xs · sm · md · lg · xl） |
| actions | 操作区容器（vertical / horizontal 两处） |
| close | 关闭按钮 |

## 动效

无动效：静态提示组件。关闭按钮的 hover 颜色过渡由 XButton 承担。

## 设计规格

### 主题 token

**背景与文字**

| 变体 | 背景 | 文字 | 说明 |
| --- | --- | --- | --- |
| solid（color=primary 等） | bg-`<color>` | text-background | 语义色底（如 primary）+ 反色字（对应 Vue text-inverted） |
| outline | 无背景 | text-`<color>` | 语义色文字 |
| soft | bg-`<color>`/10 | text-`<color>` | 语义色 10% 浅底 |
| subtle | bg-`<color>`/10 | text-`<color>` | 语义色 10% 浅底 |
| neutral solid | bg-foreground | text-background | 对应 Vue bg-inverted / text-inverted |
| neutral outline | 无背景 | text-foreground | 对应 Vue text-highlighted |
| neutral soft | bg-muted | text-foreground | 对应 Vue bg-elevated/50 |
| neutral subtle | bg-muted | text-foreground | 同上 |

**描边**

| 变体 | 类 | 值 |
| --- | --- | --- |
| outline / subtle（color=`<color>`） | ring-1 ring-inset ring-`<color>`/25 | 语义色 25% 内描边 |
| neutral outline / subtle | ring-1 ring-inset ring-border | 对应 Vue ring-default / ring-accented |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | rounded-lg | 8px |
| root | 无 shadow | 提示组件无阴影 token |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| variant=solid | bg-`<color>` + 反色文字 |
| variant=outline | text-`<color>` + ring-1 ring-inset ring-`<color>`/25 |
| variant=soft | bg-`<color>`/10 text-`<color>` |
| variant=subtle | bg-`<color>`/10 text-`<color>` + ring-1 ring-inset ring-`<color>`/25 |
| orientation=horizontal | root items-center，actions 与关闭按钮同行 |
| orientation=vertical | root items-start，actions 在描述下方（mt-2.5） |
| 标题存在 | description mt-1 |

默认 color primary、variant solid。icon 尺寸 size-5，actions flex flex-wrap gap-1.5，close p-0。

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无内建键盘行为；操作按钮与关闭按钮的 Enter / Space 与焦点样式由 XButton 承担 |
| ARIA | React 端根节点 role="alert"（源码显式设置）；关闭按钮 aria-label="关闭" |
| 动效 | 无（静态组件） |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| 根节点角色 | 无 role | role="alert" |
| solid 反色字 | text-inverted | text-background（shadcn 变量等价） |
| neutral soft / subtle 底色 | bg-elevated/50 | bg-muted |
