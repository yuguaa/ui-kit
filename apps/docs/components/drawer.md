---
title: Drawer 抽屉
description: 从屏幕边缘滑出的面板，承载额外内容或操作
---

# Drawer 抽屉

从屏幕边缘滑出的面板，承载额外内容或操作。

<script setup>
import OverlayBasic from '@demos/vue/overlay-basic.vue'
import overlayBasicRaw from '@demos/vue/overlay-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「抽屉」按钮打开，右侧滑出" :code="overlayBasicRaw">
  <OverlayBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-drawer
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
| footer | 底部操作区 |

## hook

```ts
const [Drawer, drawerApi] = useXDrawer({ title: '抽屉标题' })
drawerApi.open()   // open / close / toggle / setState
```
