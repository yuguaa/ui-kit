---
title: Slider 滑块
description: 通过拖动滑块在区间内取值
---

# Slider 滑块

通过拖动滑块在区间内取值。

<script setup>
import SelectBasic from '@demos/react/select-basic'
import selectBasicRaw from '@demos/react/select-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含滑块）" :code="selectBasicRaw">
  <ReactDemo :component="SelectBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-slider
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | number[] | - | 绑定值 |
| min / max | number | 0 / 100 | 最小值 / 最大值 |
| step | number | 1 | 步长 |
| disabled | boolean | false | 是否禁用 |

## 动效

- 拖动：即时响应
- thumb：hover / focus 聚焦环过渡
