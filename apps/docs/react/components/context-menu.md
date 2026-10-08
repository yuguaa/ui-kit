---
title: ContextMenu 右键菜单
description: 在指定区域右键唤出的上下文菜单
---

# ContextMenu 右键菜单

在指定区域右键唤出的上下文菜单。

<script setup>
import MenuBasicDemo from '@demos/react/menu-basic-demo'
import menuBasicDemoRaw from '@demos/react/menu-basic-demo.tsx.code.txt?raw'
import ContextMenuItemExtras from '@demos/react/context-menu-item-extras'
import contextMenuItemExtrasRaw from '@demos/react/context-menu-item-extras.tsx.code.txt?raw'
</script>

<DemoBlock title="右键菜单" description="items / 默认插槽为触发区域" :code="menuBasicDemoRaw">
  <ReactDemo :component="MenuBasicDemo" />
</DemoBlock>

<DemoBlock title="说明与快捷键" description="description 说明文字 / shortcut 快捷键" :code="contextMenuItemExtrasRaw">
  <ReactDemo :component="ContextMenuItemExtras" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-context-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label?, description?, shortcut?, disabled?, separator?, icon?, onSelect? }[] | - | 菜单项数组 |
| open | boolean | - | 是否打开 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

## hook

```tsx
const [ContextMenu, menuApi] = useXContextMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
