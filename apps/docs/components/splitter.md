---
title: Splitter 分割面板
description: 可拖拽调整大小的分栏面板
---

# Splitter 分割面板

可拖拽调整大小的分栏面板。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="拖拽中间分割线调整左右比例" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-splitter
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 方向 |
| minSize | number | 20 | 最小尺寸（百分比） |
| defaultSize | number | 50 | 默认尺寸（百分比） |
| size | number | - | 受控尺寸（百分比） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| first | 左侧（上方）面板 |
| second | 右侧（下方）面板 |

## 事件

| 名称 | 说明 |
| --- | --- |
| resize | 调整尺寸回调 |

## hook

```ts
const [Splitter, splitterApi] = useXSplitter()
splitterApi.resize(30)   // size 可读，resize 调整
```
