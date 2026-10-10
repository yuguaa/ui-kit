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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | primary · secondary · neutral · success · info · warning · error | - | 语义色，缺省回退 type，最终 primary |
| type | success · info · warning · error | - | 提示类型，作为 color 的回退 |
| variant | solid · outline · soft · subtle | solid | 预设样式 |
| orientation | vertical · horizontal | vertical | 内容与操作区的排列方向 |
| title | ReactNode | - | 提示标题，与 message 并存且优先显示 |
| message | ReactNode | - | 提示标题 |
| description | ReactNode | - | 辅助说明文字 |
| icon | XIconName · ReactNode | - | 图标名或自定义图标 |
| showIcon | boolean | false | 显示类型默认图标 |
| avatar | XAvatarProps | - | 头像配置 |
| leading | ReactNode | - | 前置内容，优先于 icon / avatar / showIcon 的默认图标 |
| actions | ReactNode · XAlertButtonProps[] | - | 操作按钮列表：数组渲染为 xs 尺寸按钮，其他内容原样渲染 |
| close | boolean · XAlertButtonProps | false | 显示关闭按钮，点击后 open 置为 false；传对象时整体透传给 XButton |
| closeSlot | ReactNode | - | 自定义关闭按钮（对应 close 插槽） |
| closable | boolean | false | 显示关闭按钮 |
| closeIcon | XIconName | x | 关闭按钮图标 |
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
