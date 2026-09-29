---
title: NavigationMenu 导航菜单
description: 为页面提供功能导航，支持垂直、水平与内嵌模式
---

# NavigationMenu 导航菜单

为页面提供功能导航，支持垂直、水平与内嵌模式，子菜单使用 DropdownMenu 展开。

<script setup>
import NavigationBasic from '@demos/react/navigation-basic'
import navigationBasicRaw from '@demos/react/navigation-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="水平模式与选中态" :code="navigationBasicRaw">
  <ReactDemo :component="NavigationBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-navigation-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label, icon?, children?, disabled? }[] | - | 菜单项数组（children 为子菜单） |
| selectedKeys | string[] | [] | 当前选中的 key |
| mode | vertical · horizontal · inline | vertical | 菜单模式 |
| theme | light · dark | light | 菜单主题 |
| onClick / onSelect | (item) => void | - | 点击 / 选中回调 |

## 动效

- 子菜单：弹层淡入 + 缩放（scale 0.95，100ms）
- trigger：hover 背景过渡
- 箭头：旋转过渡
