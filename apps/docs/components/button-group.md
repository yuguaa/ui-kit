---
title: ButtonGroup 按钮组
description: 将多个按钮水平或垂直拼接为一个整体
---

# ButtonGroup 按钮组

将多个按钮拼接为一个整体，相邻按钮共享边框与圆角。`orientation` 控制排列方向，`as` 渲染为指定元素或组件，`ui` 定制根元素类名。

<script setup>
import ButtonGroupBasic from '@demos/vue/button-group-basic.vue'
import buttonGroupBasicRaw from '@demos/vue/button-group-basic.vue.code.txt?raw'
import ButtonGroupAsUi from '@demos/vue/button-group-as-ui.vue'
import buttonGroupAsUiRaw from '@demos/vue/button-group-as-ui.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="水平与垂直拼接" description="orientation 排列方向" :code="buttonGroupBasicRaw">
  <ButtonGroupBasic />
</DemoBlock>

## as 与 ui

`as` 指定渲染标签；`ui.root` 注入自定义类名。

<DemoBlock title="as · ui" description="as 渲染标签，ui.root 类名" :code="buttonGroupAsUiRaw">
  <ButtonGroupAsUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-button-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | ButtonGroupUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 按钮组根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 按钮组内容 |

## 动效

无动效：布局容器，按钮动效由 XButton 承担。
