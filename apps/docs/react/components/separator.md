---
title: Separator 分割线
description: 水平或垂直分隔内容，支持标签、图标、头像、语义色、五档粗细与实线 / 虚线 / 点线
---

# Separator 分割线

在内容之间插入水平或垂直分隔。支持标签文字、图标与头像内容，通过 position 控制内容位置，通过 size / type / color 控制线条粗细、样式与语义色。

<script setup>
import SeparatorBasic from '@demos/react/separator-basic'
import separatorBasicRaw from '@demos/react/separator-basic.tsx.code.txt?raw'
import SeparatorContent from '@demos/react/separator-content'
import separatorContentRaw from '@demos/react/separator-content.tsx.code.txt?raw'
import SeparatorUi from '@demos/react/separator-ui'
import separatorUiRaw from '@demos/react/separator-ui.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="类型 · 粗细 · 语义色 · 方向" description="type 切换线条样式，size 控制粗细，color 使用语义色，orientation 切换方向" :code="separatorBasicRaw">
  <ReactDemo :component="SeparatorBasic" />
</DemoBlock>

## 标签、图标与头像

label 显示文字，icon 显示图标，avatar 显示头像，三者优先级依次为 label → icon → avatar；position 控制内容位置。

<DemoBlock title="标签 · 图标 · 头像" description="label / icon / avatar 内容与 position 位置" :code="separatorContentRaw">
  <ReactDemo :component="SeparatorContent" />
</DemoBlock>

## ui 插槽自定义

ui 按主题插槽（root / border / container / icon / avatar / avatarSize / label）覆盖类名；avatarSize 控制分割线内头像的尺寸。

<DemoBlock title="ui 插槽类名" description="border / container / label / avatarSize 等插槽键" :code="separatorUiRaw">
  <ReactDemo :component="SeparatorUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-separator
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 方向 |
| decorative | boolean | false | 纯装饰分割线，不渲染无障碍角色（role 为 none） |
| label | string | - | 标签文字，优先级高于 icon / avatar |
| icon | XIconName | - | 标签图标 |
| avatar | XAvatarProps | - | 标签头像，优先级高于子元素 |
| color | primary · secondary · neutral · success · info · warning · error | neutral | 语义色边框 |
| size | xs · sm · md · lg · xl | xs | 边框粗细 |
| type | solid · dashed · dotted | solid | 线条样式 |
| position | start · center · end | center | 内容位置 |
| render | ReactElement | div | 渲染为指定元素 |
| ui | XSeparatorUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 分割线根元素 |
| border | 线条元素 |
| container | 内容容器 |
| icon | 图标元素 |
| avatar | 头像元素 |
| avatarSize | 头像尺寸（值语义，xs · sm · md · lg · xl） |
| label | 标签文字元素 |

## 动效

无动效：静态分割组件。
