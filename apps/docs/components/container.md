---
title: Container 容器
description: 约束内容宽度的居中布局容器
---

# Container 容器

约束内容宽度的居中布局容器，五档最大宽度：xs 640 / sm 768 / md 1024 / lg 1280 / xl 1536。

<script setup>
import ContainerBasic from '@demos/vue/container-basic.vue'
import containerBasicRaw from '@demos/vue/container-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="md 尺寸居中约束" :code="containerBasicRaw">
  <ContainerBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-container
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | xs · sm · md · lg · xl | lg | 最大宽度 |
| as | string | div | 渲染标签 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 容器内容 |
