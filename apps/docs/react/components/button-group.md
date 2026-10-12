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

<!--@include: ./api/button-group.md-->

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

## 设计规格

### 主题 token

主题与 Vue 端一致：组件没有独立 theme 文件，类名内联在 `x-button-group.tsx` 中。

| 项目 | 类名 | 说明 |
| --- | --- | --- |
| 背景 | 不使用 | 布局容器不设背景 token |
| 文字 | 不使用 | 不设文字 token |
| 描边 | 不使用 | 相邻按钮共享边框由负边距实现（-ml-px / -mt-px） |
| 圆角 | [&>*:not(:first-child)]:rounded-l-none 等 | 中间按钮去除相邻圆角，首尾按钮保留自身 rounded-md |
| 阴影 | 不使用 | 没有阴影 |
| 变体 | orientation | horizontal：flex-row items-center；vertical：flex-col items-stretch |

根元素公共类：`inline-flex`。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| Tab | 焦点按 DOM 顺序进入组内按钮，没有方向键管理 |
| 禁用 | 组本身没有禁用态，由子按钮各自处理 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| role="group" | 渲染为分组角色 |
| data-orientation | 输出 horizontal / vertical |

**动效**

没有动效：布局容器，按钮动效由 XButton 承担。

与 Vue 端没有差异：类名、角色、data-orientation 双端一致；仅渲染机制不同（Vue 用 reka-ui Primitive 的 as，React 用 useRender 的 render）。
