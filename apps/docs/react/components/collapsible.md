---
title: Collapsible 折叠
description: 点击触发内容展开或收起
---

# Collapsible 折叠

点击触发内容展开或收起。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「展开详情」展开内容" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-collapsible
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否展开 |
| disabled | boolean | false | 是否禁用 |
| defaultOpen | boolean | false | 默认展开 |
| trigger | ReactNode | 展开详情 | 触发器内容 |
| onOpenChange | (open) => void | - | 展开状态变化回调 |

**ref 方法**：toggle()

## hook

```tsx
const [Collapsible, collapsibleApi] = useXCollapsible()
collapsibleApi.toggle()   // open 可读，toggle / setOpen
```
