---
title: Alert 警告提示
description: 展示需要关注的信息，提供四种语义
---

# Alert 警告提示

用于页面中展示需要关注的信息，提供成功、信息、警告、错误四种语义。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="四种语义 + 图标 + 关闭按钮" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-alert
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | success · info · warning · error | info | 提示类型 |
| message | string | - | 提示标题 |
| description | string | - | 辅助说明文字 |
| closable | boolean | false | 是否显示关闭按钮 |
| showIcon | boolean | false | 是否显示图标 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| icon | 自定义图标内容 |
| message | 自定义标题内容 |
| description | 自定义说明内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| close | 点击关闭按钮时的回调 |
