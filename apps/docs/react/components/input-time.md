---
title: InputTime 时间选择
description: 选择时间，支持 12/24 小时制
---

# InputTime 时间选择

输入框 + popover 时间列表，选择时间，支持 12/24 小时制与分钟步长。

<script setup>
import SelectBasic from '@demos/react/select-basic'
import selectBasicRaw from '@demos/react/select-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含时间选择）" :code="selectBasicRaw">
  <ReactDemo :component="SelectBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-time
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string | - | 绑定时间（HH:mm） |
| hour12 | boolean | false | 12 小时制 |
| step | number | 1 | 步长（分钟） |
| disabled | boolean | false | 是否禁用 |
| onChange | (time) => void | - | 时间变化回调 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 触发按钮：focus ring 过渡
