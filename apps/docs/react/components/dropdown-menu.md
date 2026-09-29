---
title: DropdownMenu 下拉菜单
description: 点击按钮展开的操作菜单
---

# DropdownMenu 下拉菜单

点击按钮展开的操作菜单。

<script setup>
import OverlayBasic from '@demos/react/overlay-basic'
import overlayBasicRaw from '@demos/react/overlay-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「操作」按钮展开菜单，支持分隔线" :code="overlayBasicRaw">
  <ReactDemo :component="OverlayBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-dropdown-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label?, disabled?, separator?, icon?, onSelect? }[] | - | 菜单项数组 |
| open | boolean | - | 是否打开 |
| closeOnSelect | boolean | true | 选择后关闭 |
| triggerLabel | ReactNode | 操作 | 触发按钮文字 |
| trigger | ReactElement | - | 自定义触发按钮 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

## hook

```tsx
const [DropdownMenu, menuApi] = useXDropdownMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
