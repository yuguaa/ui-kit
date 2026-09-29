---
title: Progress 进度条
description: 展示操作的当前进度，支持线形与圆形
---

# Progress 进度条

展示操作的当前进度，支持线形与圆形两种类型。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="线形进度 + 状态 + 圆形进度" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-progress
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| percent | number | 0 | 完成百分比 |
| type | line · circle | line | 进度类型 |
| status | normal · success · exception · active | normal | 进度状态 |
| strokeColor | string | 主色 | 进度条颜色 |
| showInfo | boolean | true | 是否显示数值 |
| size | number | 96 | 圆形直径（px） |
