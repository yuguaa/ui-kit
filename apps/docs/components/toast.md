---
title: Toast 消息通知
description: 操作后的轻量级全局消息通知
---

# Toast 消息通知

操作后的轻量级全局消息通知。应用根部挂载 `<XToaster />`，任意位置调用 `useToast().show / .dismiss`。

<script setup>
import OverlayBasic from '@demos/vue/overlay-basic.vue'
import overlayBasicRaw from '@demos/vue/overlay-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「成功通知」「失败通知」按钮体验" :code="overlayBasicRaw">
  <OverlayBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-toast
```

## 用法

```vue
<template>
  <XToaster />
</template>

<script setup>
import XToaster from '@/components/kit/XToaster.vue'
import { useToast } from '@/components/kit/XToast'

const toastApi = useToast()
toastApi.show({ title: '操作成功', description: '数据已保存。', color: 'success' })
toastApi.dismiss()
</script>
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | - | 通知标题 |
| description | string | - | 说明文字 |
| color | primary · success · warning · error | primary | 语义色 |
| duration | number | 3000 | 展示时长（ms） |
