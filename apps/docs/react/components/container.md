---
title: Container 容器
description: 约束内容宽度的居中布局容器，五档最大宽度
---

# Container 容器

约束内容宽度的居中布局容器，五档最大宽度：xs 640 / sm 768 / md 1024 / lg 1280 / xl 1536。

<script setup>
import ContainerBasic from '@demos/react/container-basic'
import containerBasicRaw from '@demos/react/container-basic.tsx.code.txt?raw'
import ContainerSizes from '@demos/react/container-sizes'
import containerSizesRaw from '@demos/react/container-sizes.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="基础用法" description="md 尺寸居中约束" :code="containerBasicRaw">
  <ReactDemo :component="ContainerBasic" />
</DemoBlock>

## 尺寸与 ui

五档最大宽度；render 指定渲染元素；ui.base 注入自定义类名。

<DemoBlock title="尺寸 · render · ui" description="size：xs → xl，render 渲染元素，ui.base 类名" :code="containerSizesRaw">
  <ReactDemo :component="ContainerSizes" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-container
```

## API

<!--@include: ./api/container.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 容器根元素 |

## 动效

无动效：布局容器组件。
