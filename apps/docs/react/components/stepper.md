---
title: Stepper 步骤条
description: 引导用户按步骤完成流程
---

# Stepper 步骤条

引导用户按步骤完成流程，支持受控与非受控两种用法。

<script setup>
import NavigationBasic from '@demos/react/navigation-basic'
import navigationBasicRaw from '@demos/react/navigation-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="完成 / 进行中 / 待处理三种状态" :code="navigationBasicRaw">
  <ReactDemo :component="NavigationBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-stepper
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { title, description? }[] | - | 步骤项数组 |
| current | number | 0 | 当前步骤（受控） |
| defaultCurrent | number | 0 | 初始步骤 |
| orientation | horizontal · vertical | horizontal | 方向 |
| disabled | boolean | false | 是否禁用 |
| onChange | (current) => void | - | 步骤变化回调 |

**ref 方法**：next() · prev() · reset()

## hook

```tsx
const [Stepper, stepperApi] = useXStepper({ items: [...] })
stepperApi.next()   // current 可读可写，另有 prev / reset / go
```
