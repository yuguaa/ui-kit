---
title: Alert 警告提示
description: 展示需要关注的信息，提供四种语义
---

# Alert 警告提示

用于页面中展示需要关注的信息，提供成功、信息、警告、错误四种语义，可附带图标与关闭按钮。

<script setup>
import AlertTypes from '@demos/vue/alert-types.vue'
import alertTypesRaw from '@demos/vue/alert-types.vue.code.txt?raw'
import AlertClosable from '@demos/vue/alert-closable.vue'
import alertClosableRaw from '@demos/vue/alert-closable.vue.code.txt?raw'
import AlertVariants from '@demos/vue/alert-variants.vue'
import alertVariantsRaw from '@demos/vue/alert-variants.vue.code.txt?raw'
</script>

## 变体

<DemoBlock title="solid / outline / subtle" description="variant 控制提示强度" :code="alertVariantsRaw">
  <AlertVariants />
</DemoBlock>

## 四种语义

<DemoBlock title="成功 / 信息 / 警告 / 错误" description="type + showIcon" :code="alertTypesRaw">
  <AlertTypes />
</DemoBlock>

## 关闭与自定义内容

<DemoBlock title="可关闭与自定义操作" description="closable 显示关闭按钮，description 插槽可嵌入操作" :code="alertClosableRaw">
  <AlertClosable />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-alert
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | success · info · warning · error | info | 提示类型 |
| variant | solid · outline · soft · subtle | soft | 预设样式 |
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

## 动效

无动效：静态提示组件。关闭按钮的 hover 颜色过渡由 XButton 承担。
