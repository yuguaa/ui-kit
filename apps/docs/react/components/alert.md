---
title: Alert 警告提示
description: 展示需要关注的信息，提供四种语义
---

# Alert 警告提示

用于页面中展示需要关注的信息，提供成功、信息、警告、错误四种语义。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="四种语义 + 图标 + 关闭按钮" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-alert
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | success · info · warning · error | info | 提示类型 |
| message | ReactNode | - | 提示标题 |
| description | ReactNode | - | 辅助说明文字 |
| closable | boolean | false | 是否显示关闭按钮 |
| showIcon | boolean | false | 是否显示图标 |
| onClose | (event) => void | - | 点击关闭按钮时的回调 |
