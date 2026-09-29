---
title: InputDate 日期选择
description: 选择日期，支持最小/最大日期
---

# InputDate 日期选择

输入框 + popover 日历，选择日期，支持最小/最大日期与底部自定义内容。

<script setup>
import SelectBasic from '@demos/react/select-basic'
import selectBasicRaw from '@demos/react/select-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含日期与时间）" :code="selectBasicRaw">
  <ReactDemo :component="SelectBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-date
npx shadcn@latest add @ui-kit/x-input-time
```

## API

### XInputDate

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string | - | 绑定日期（yyyy-MM-dd） |
| min / max | string | - | 最小 / 最大日期 |
| disabled | boolean | false | 是否禁用 |
| placeholder | string | 选择日期 | 占位文字 |
| footer | ReactNode | - | 底部自定义内容 |
| onChange | (date) => void | - | 日期变化回调 |

### XInputTime

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
