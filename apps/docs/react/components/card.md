---
title: Card 卡片
description: 通用卡片容器，用于承载标题、操作区和内容
---

# Card 卡片

通用卡片容器，用于承载标题、操作区、封面与底部操作，支持悬浮提升动效。

<script setup>
import CardBasic from '@demos/react/card-basic'
import cardBasicRaw from '@demos/react/card-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="标题/描述/操作区与无边框悬浮卡片" :code="cardBasicRaw">
  <ReactDemo :component="CardBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-card
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | ReactNode | - | 标题 |
| description | ReactNode | - | 辅助说明 |
| bordered | boolean | true | 是否显示边框 |
| hoverable | boolean | false | 悬浮时提升效果 |
| size | default · small | default | 卡片尺寸 |
| cover | ReactNode | - | 封面 |
| actions | ReactNode | - | 底部操作按钮 |
| onClick | (event) => void | - | 点击卡片时触发 |
