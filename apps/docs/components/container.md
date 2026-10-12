---
title: Container 容器
description: 约束内容宽度的居中布局容器，五档最大宽度
---

# Container 容器

约束内容宽度的居中布局容器，五档最大宽度：xs 640 / sm 768 / md 1024 / lg 1280 / xl 1536。

## 基础用法

<DemoPreview file="demos/vue/container-basic.vue" title="基础用法" description="md 尺寸居中约束" />

## 尺寸与 ui

五档最大宽度；as 指定渲染标签；ui.base 注入自定义类名。

<DemoPreview file="demos/vue/container-sizes.vue" title="尺寸 · as · ui" description="size：xs → xl，as 渲染标签，ui.base 类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-container
```

## API

<!--@include: ./api/container.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 容器根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 容器内容 |

## 动效

无动效：布局容器组件。

## 设计规格

### 主题 token

| 项目 | 类名 | 说明 |
| --- | --- | --- |
| 背景 | 不使用 | 没有背景 token |
| 文字 | 不使用 | 没有文字 token |
| 描边 | 不使用 | 没有描边 token |
| 圆角 | 不使用 | 没有圆角 |
| 阴影 | 不使用 | 没有阴影 |

**布局**

| 类 | 值 | 说明 |
| --- | --- | --- |
| w-full | 100% | 占满父容器 |
| max-w-(--ui-container) | --ui-container 80rem（1280px） | 内容最大宽度 |
| mx-auto | 居中 | 水平居中 |
| px-4 sm:px-6 lg:px-8 | 16px / 24px / 32px | 响应式水平内边距 |

**变体**

没有变体：单一样式布局组件。

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 默认渲染 `<div>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 没有内置角色 |

**动效**

没有动效：布局容器组件。
