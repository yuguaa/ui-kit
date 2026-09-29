---
title: Slideover 侧滑
description: 从侧边滑入的浮层，常用于移动端导航
---

# Slideover 侧滑

从侧边滑入的浮层，常用于移动端导航。

<script setup>
import OverlayBasic from '@demos/vue/overlay-basic.vue'
import overlayBasicRaw from '@demos/vue/overlay-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「侧滑」按钮打开，常用于移动端导航" :code="overlayBasicRaw">
  <OverlayBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-slideover
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开（支持 v-model:open） |
| side | left · right | right | 滑出方向 |
| dismissible | boolean | true | 点击遮罩关闭 |
| title | string | - | 标题 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| header | 自定义头部 |
| content | 内容 |
| footer | 底部 |

## hook

```ts
const [Slideover, slideoverApi] = useXSlideover({ title: '侧滑面板' })
slideoverApi.open()   // open / close / toggle / setState
```

## 动效

- 面板：侧向滑入滑出（200ms）
- 遮罩：淡入淡出（200ms）
