---
title: Popover 气泡
description: 点击或悬停触发的轻量气泡卡片
---

# Popover 气泡

点击或悬停触发的轻量气泡卡片。

<script setup>
import PopoverBasicDemo from '@demos/react/popover-basic-demo'
import popoverBasicDemoRaw from '@demos/react/popover-basic-demo.tsx.code.txt?raw'
</script>

<DemoBlock title="四个方向" description="side / trigger / title / content" :code="popoverBasicDemoRaw">
  <ReactDemo :component="PopoverBasicDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-popover
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否显示 |
| trigger | hover · click | hover | 触发方式 |
| side | top · bottom · left · right | top | 位置 |
| title / content | ReactNode | - | 标题 / 内容 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

**ref 方法**：open() · close()

## hook

```tsx
const [Popover, popoverApi] = useXPopover({ title: "气泡标题", content: "说明文字" })
popoverApi.open()   // open / close / toggle / setState
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
