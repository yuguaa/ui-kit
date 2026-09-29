---
title: Popover 气泡
description: 点击或悬停触发的轻量气泡卡片
---

# Popover 气泡

点击或悬停触发的轻量气泡卡片。

<script setup>
import OverlayBasic from '@demos/vue/overlay-basic.vue'
import overlayBasicRaw from '@demos/vue/overlay-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「打开气泡」按钮查看标题与说明" :code="overlayBasicRaw">
  <OverlayBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-popover
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否显示（支持 v-model:open） |
| trigger | hover · click | hover | 触发方式 |
| side | top · bottom · left · right | top | 位置 |
| title | string | - | 标题 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| trigger | 触发元素 |
| content | 气泡内容 |

**方法**（ref 调用）：open() · close()

## hook

```ts
const [Popover, popoverApi] = useXPopover({ title: '气泡标题', content: '说明文字' })
popoverApi.open()   // open / close / toggle / setState
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
