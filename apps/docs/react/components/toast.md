---
title: Toast 消息通知
description: 操作后的轻量级全局消息通知
---

# Toast 消息通知

操作后的轻量级全局消息通知。应用根部挂载 `<XToaster />`，任意位置调用 `toast.show / .dismiss`。

<script setup>
import OverlayBasic from '@demos/react/overlay-basic'
import overlayBasicRaw from '@demos/react/overlay-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「成功通知」「失败通知」按钮体验" :code="overlayBasicRaw">
  <ReactDemo :component="OverlayBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-toast
```

## 用法

```tsx
import { toast, XToaster } from "@/components/kit/x-toast";

// 应用根部
<XToaster />

// 任意位置
toast.show({ title: "操作成功", description: "数据已保存。", color: "success" });
toast.dismiss();
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | - | 通知标题 |
| description | string | - | 说明文字 |
| color | primary · success · warning · error | primary | 语义色 |
| duration | number | 3000 | 展示时长（ms） |

## 动效

- 进出场：滑入 + 淡入淡出（sonner）
