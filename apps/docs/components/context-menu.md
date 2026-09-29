---
title: ContextMenu 右键菜单
description: 在指定区域右键唤出的上下文菜单
---

# ContextMenu 右键菜单

在指定区域右键唤出的上下文菜单。

<script setup>
import OverlayBasic from '@demos/vue/overlay-basic.vue'
import overlayBasicRaw from '@demos/vue/overlay-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="在「在此区域右键」区域内右键体验" :code="overlayBasicRaw">
  <OverlayBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-context-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label, disabled?, separator? }[] | - | 菜单项数组 |
| open | boolean | - | 是否打开（为 true 时在触发区域派发 contextmenu 事件打开） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 触发区域内容 |
| item | 自定义菜单项 |

## 事件

| 名称 | 说明 |
| --- | --- |
| select | 选中菜单项回调 |

## hook

```ts
const [ContextMenu, menuApi] = useXContextMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
