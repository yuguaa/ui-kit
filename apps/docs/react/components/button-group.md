---
title: ButtonGroup 按钮组
description: 将多个按钮水平或垂直拼接为一个整体
---

# ButtonGroup 按钮组

将多个按钮拼接为一个整体，相邻按钮共享边框与圆角。`orientation` 控制排列方向，`render` 渲染为指定元素，`ui` 定制根元素类名。

<script setup>
import ButtonGroupBasic from '@demos/react/button-group-basic'
import buttonGroupBasicRaw from '@demos/react/button-group-basic.tsx.code.txt?raw'
import ButtonGroupAsUi from '@demos/react/button-group-as-ui'
import buttonGroupAsUiRaw from '@demos/react/button-group-as-ui.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="水平与垂直拼接" description="orientation 排列方向" :code="buttonGroupBasicRaw">
  <ReactDemo :component="ButtonGroupBasic" />
</DemoBlock>

## render 与 ui

`render` 指定渲染元素；`ui.root` 注入自定义类名。

<DemoBlock title="render · ui" description="render 渲染元素，ui.root 类名" :code="buttonGroupAsUiRaw">
  <ReactDemo :component="ButtonGroupAsUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-button-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XButtonGroupUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 按钮组根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| children | 按钮组内容 |

## 动效

无动效：布局容器，按钮动效由 XButton 承担。
