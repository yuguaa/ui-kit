---
title: Splitter 分割面板
description: 可拖拽调整大小的分栏面板
---

# Splitter 分割面板

可拖拽调整大小的分栏面板。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="拖拽中间分割线调整左右比例" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-splitter
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 方向 |
| minSize | number | 20 | 最小尺寸（百分比） |
| defaultSize | number | 50 | 默认尺寸（百分比） |
| size | number | - | 受控尺寸（百分比） |
| first / second | ReactNode | - | 左侧 / 右侧面板 |
| onResize | (size) => void | - | 调整尺寸回调 |

## hook

```tsx
const [Splitter, splitterApi] = useXSplitter()
splitterApi.resize(30)   // size 可读，resize 调整
```
