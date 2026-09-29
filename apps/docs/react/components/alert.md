---
title: Alert 警告提示
description: 展示需要关注的信息，提供四种语义
---

# Alert 警告提示

用于页面中展示需要关注的信息，提供成功、信息、警告、错误四种语义。

<script setup>
import AlertTypes from '@demos/react/alert-types'
import alertTypesRaw from '@demos/react/alert-types.tsx.code.txt?raw'
import AlertClosable from '@demos/react/alert-closable'
import alertClosableRaw from '@demos/react/alert-closable.tsx.code.txt?raw'
import AlertVariants from '@demos/react/alert-variants'
import alertVariantsRaw from '@demos/react/alert-variants.tsx.code.txt?raw'
</script>

## 变体

<DemoBlock title="solid / outline / subtle" description="variant 控制提示强度" :code="alertVariantsRaw">
  <ReactDemo :component="AlertVariants" />
</DemoBlock>

## 四种语义

<DemoBlock title="成功 / 信息 / 警告 / 错误" description="type + showIcon" :code="alertTypesRaw">
  <ReactDemo :component="AlertTypes" />
</DemoBlock>

## 关闭

<DemoBlock title="可关闭" description="closable 显示关闭按钮，onClose 接收关闭回调" :code="alertClosableRaw">
  <ReactDemo :component="AlertClosable" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-alert
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | success · info · warning · error | info | 提示类型 |
| variant | solid · outline · soft · subtle | soft | 预设样式 |
| message | ReactNode | - | 提示标题 |
| description | ReactNode | - | 辅助说明文字 |
| closable | boolean | false | 是否显示关闭按钮 |
| showIcon | boolean | false | 是否显示图标 |
| onClose | (event) => void | - | 点击关闭按钮时的回调 |

## 动效

无动效：静态提示组件。关闭按钮的 hover 颜色过渡由 XButton 承担。
