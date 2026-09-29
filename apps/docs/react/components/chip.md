---
title: Chip 芯片
description: 芯片用于标记属性，支持多种颜色与可选关闭按钮
---

# Chip 芯片

芯片用于标记属性，支持多种语义色。

<script setup>
import ChipBasic from '@demos/react/chip-basic'
import chipBasicRaw from '@demos/react/chip-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="七种语义色、可关闭、图标与尺寸" :code="chipBasicRaw">
  <ReactDemo :component="ChipBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-chip
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | primary · secondary · neutral · success · info · warning · error | primary | 标签颜色 |
| size | xs · sm · md · lg · xl | md | 标签尺寸 |
| closable | boolean | false | 是否可关闭 |
| icon | ReactNode | - | 标签图标 |
| onClose | (event) => void | - | 关闭时回调 |
