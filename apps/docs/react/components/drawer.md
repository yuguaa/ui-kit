---
title: Drawer 抽屉
description: 从屏幕边缘滑出的面板，承载额外内容或操作
---

# Drawer 抽屉

从屏幕边缘滑出的面板，承载额外内容或操作。

<script setup>
import OverlayBasic from '@demos/react/overlay-basic'
import overlayBasicRaw from '@demos/react/overlay-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「抽屉」按钮打开，右侧滑出" :code="overlayBasicRaw">
  <ReactDemo :component="OverlayBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-drawer
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开 |
| side | left · right | right | 滑出方向 |
| dismissible | boolean | true | 点击遮罩关闭 |
| title | ReactNode | - | 标题 |
| header / footer | ReactNode | - | 自定义头部 / 底部操作区 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

## hook

```tsx
const [Drawer, drawerApi] = useXDrawer({ title: "抽屉标题" })
drawerApi.open()   // open / close / toggle / setState
```
