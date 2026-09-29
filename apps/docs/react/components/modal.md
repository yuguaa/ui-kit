---
title: Modal 对话框
description: 模态对话框，用于承载需要用户确认的信息或操作
---

# Modal 对话框

模态对话框，用于承载需要用户确认的信息或操作。底部操作区默认提供取消与确定按钮，可通过 footer 自定义。

<script setup>
import OverlayBasic from '@demos/react/overlay-basic'
import overlayBasicRaw from '@demos/react/overlay-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「对话框」按钮打开，默认底部含取消与确定" :code="overlayBasicRaw">
  <ReactDemo :component="OverlayBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-modal
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否显示对话框 |
| title | ReactNode | - | 标题 |
| description | ReactNode | - | 辅助说明 |
| width | number | 520 | 对话框宽度 |
| maskClosable | boolean | true | 点击遮罩是否关闭 |
| centered | boolean | false | 是否垂直居中显示 |
| okText / cancelText | string | 确 定 / 取 消 | 按钮文字 |
| footer | ReactNode | - | 底部操作区 |
| onOk / onCancel | (event) => void | - | 确定 / 取消回调 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

## hook

```tsx
const [Modal, modalApi] = useXModal({ title: "对话框标题", onOk: () => {} })
modalApi.open()      // open / close / toggle
modalApi.setState({ title: "新标题" })
```
