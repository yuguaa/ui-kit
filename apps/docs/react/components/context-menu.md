---
title: ContextMenu 右键菜单
description: 在指定区域右键唤出的上下文菜单
---

# ContextMenu 右键菜单

在指定区域右键唤出的上下文菜单。

<script setup>
import MenuBasicDemo from '@demos/react/menu-basic-demo'
import menuBasicDemoRaw from '@demos/react/menu-basic-demo.tsx.code.txt?raw'
</script>

<DemoBlock title="右键菜单" description="items / 默认插槽为触发区域" :code="menuBasicDemoRaw">
  <ReactDemo :component="MenuBasicDemo" />
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

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
