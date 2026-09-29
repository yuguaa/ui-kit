---
title: Slideover 侧滑
description: 从侧边滑入的浮层，常用于移动端导航
---

# Slideover 侧滑

从侧边滑入的浮层，常用于移动端导航。

<script setup>
import OverlayBasic from '@demos/react/overlay-basic'
import overlayBasicRaw from '@demos/react/overlay-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「侧滑」按钮打开，常用于移动端导航" :code="overlayBasicRaw">
  <ReactDemo :component="OverlayBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-slideover
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开 |
| side | left · right | right | 滑出方向 |
| dismissible | boolean | true | 点击遮罩关闭 |
| title | ReactNode | - | 标题 |
| header / footer | ReactNode | - | 自定义头部 / 底部 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

## hook

```tsx
const [Slideover, slideoverApi] = useXSlideover({ title: "侧滑面板" })
slideoverApi.open()   // open / close / toggle / setState
```
