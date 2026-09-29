---
title: Button 按钮
description: 二次封装按钮：内置六种样式 × 七种语义色 × 五档尺寸与 Framer Motion 动效
---

# Button 按钮

按钮用于触发操作，支持多种类型、尺寸与状态。

<script setup>
import ButtonBasic from '@demos/vue/button-basic.vue'
import buttonBasicRaw from '@demos/vue/button-basic.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="基础用法" description="solid / outline / soft / ghost / subtle / link 六种样式与七种语义色" :code="buttonBasicRaw">
  <ButtonBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-button
```

自动带入依赖：`@ui-kit/utils`、`@ui-kit/motion`、`@ui-kit/button`。

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| variant | solid · outline · soft · ghost · subtle · link | solid | 预设样式 |
| size | xs · sm · md · lg · xl | md | 尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色 |
| loading | boolean | false | 加载态 |
| disabled | boolean | false | 禁用状态 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| leading | 前置图标 |
| default | 按钮内容 |
| trailing | 后置图标 |

## 动效

- hover：上浮 2px + 阴影加深（fast 120ms）
- press：缩小 0.98（fast 120ms）
- loading：图标旋转 + 半透明
