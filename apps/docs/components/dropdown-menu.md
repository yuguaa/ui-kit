---
title: DropdownMenu 下拉菜单
description: 点击按钮展开的操作菜单
---

# DropdownMenu 下拉菜单

点击按钮展开的操作菜单。

<script setup>
import OverlayBasic from '@demos/vue/overlay-basic.vue'
import overlayBasicRaw from '@demos/vue/overlay-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「操作」按钮展开菜单，支持分隔线" :code="overlayBasicRaw">
  <OverlayBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-dropdown-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label?, disabled?, separator? }[] | - | 菜单项数组 |
| open | boolean | - | 是否打开（支持 v-model:open） |
| closeOnSelect | boolean | true | 选择后关闭 |
| triggerLabel | string | 操作 | 触发按钮文字 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| trigger | 触发按钮 |
| item | 自定义菜单项 |

## 事件

| 名称 | 说明 |
| --- | --- |
| select | 选中回调 |

## hook

```ts
const [DropdownMenu, menuApi] = useXDropdownMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
