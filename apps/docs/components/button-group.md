---
title: ButtonGroup 按钮组
description: 将多个按钮水平或垂直拼接为一个整体
---

# ButtonGroup 按钮组

将多个按钮拼接为一个整体，相邻按钮共享边框与圆角。

<script setup>
import ButtonBasic from '@demos/vue/button-basic.vue'
import buttonBasicRaw from '@demos/vue/button-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="水平拼接（示例见右下方按钮组）" :code="buttonBasicRaw">
  <ButtonBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-button-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 排列方向 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 按钮组内容 |
