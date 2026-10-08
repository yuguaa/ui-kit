---
title: Separator 分割线
description: 水平或垂直分隔内容，支持标签文字、标签位置与实线 / 虚线 / 点线
---

# Separator 分割线

在内容之间插入水平或垂直分隔。水平方向可以带标签文字（或插槽内容），通过 position 控制标签位置，通过 type 切换线条样式。

<script setup>
import SeparatorBasic from '@demos/vue/separator-basic.vue'
import separatorBasicRaw from '@demos/vue/separator-basic.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="线条样式与标签" description="type 切换线条，label / 插槽承载标签，position 控制标签位置" :code="separatorBasicRaw">
  <SeparatorBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-separator
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 方向 |
| label | string | - | 标签文字（等价于默认插槽） |
| position | start · center · end | center | 标签位置（仅水平方向带标签时生效） |
| type | solid · dashed · dotted | solid | 线条样式 |
| color | string | - | 线条颜色，缺省使用边框语义色 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 标签内容，支持图标与自定义节点 |

## 动效

无动效：静态分割组件。
