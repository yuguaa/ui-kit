---
title: DropdownMenu 下拉菜单
description: 点击按钮展开的操作菜单
---

# DropdownMenu 下拉菜单

点击按钮展开的操作菜单。

<script setup>
import MenuBasicDemo from '@demos/react/menu-basic-demo'
import menuBasicDemoRaw from '@demos/react/menu-basic-demo.tsx.code.txt?raw'
import DropdownMenuItemExtras from '@demos/react/dropdown-menu-item-extras'
import dropdownMenuItemExtrasRaw from '@demos/react/dropdown-menu-item-extras.tsx.code.txt?raw'
</script>

<DemoBlock title="操作菜单" description="items / separator 分隔线" :code="menuBasicDemoRaw">
  <ReactDemo :component="MenuBasicDemo" />
</DemoBlock>

<DemoBlock title="说明与快捷键" description="description 说明文字 / shortcut 快捷键" :code="dropdownMenuItemExtrasRaw">
  <ReactDemo :component="DropdownMenuItemExtras" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-dropdown-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label?, description?, shortcut?, disabled?, separator?, icon?, onSelect? }[] | - | 菜单项数组 |
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
