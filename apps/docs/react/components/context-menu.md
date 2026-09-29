---
title: ContextMenu 右键菜单
description: 在指定区域右键唤出的上下文菜单
---

# ContextMenu 右键菜单

在指定区域右键唤出的上下文菜单。

<script setup>
import OverlayBasic from '@demos/react/overlay-basic'
import overlayBasicRaw from '@demos/react/overlay-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="在「在此区域右键」区域内右键体验" :code="overlayBasicRaw">
  <ReactDemo :component="OverlayBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-context-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label?, disabled?, separator?, icon?, onSelect? }[] | - | 菜单项数组 |
| open | boolean | - | 是否打开 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

## hook

```tsx
const [ContextMenu, menuApi] = useXContextMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```
