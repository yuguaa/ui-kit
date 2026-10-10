---
title: Stepper 步骤条
description: 引导用户按步骤完成流程
---

# Stepper 步骤条

items 字段（title / description / icon / content / slot / value）驱动，支持受控 `value` 与非受控 `defaultValue`，`next` / `prev` 可通过 ref 调用。

<script setup>
import StepperBasic from '@demos/react/stepper-basic'
import stepperBasicRaw from '@demos/react/stepper-basic.tsx.code.txt?raw'
import StepperUiCustom from '@demos/react/stepper-ui-custom'
import stepperUiCustomRaw from '@demos/react/stepper-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

`items` 驱动步骤条渲染，`color` 控制完成 / 激活态的语义色，`size` 控制触发器尺寸；`next` / `prev` 通过 ref 调用并触发 `onNext` / `onPrev`。

<DemoBlock title="基础用法 + 步骤切换" description="items / value / color / size / next / prev" :code="stepperBasicRaw">
  <ReactDemo :component="StepperBasic" />
</DemoBlock>

## 渲染函数与 ui 插槽

`indicator` / `title` / `description` / `content` 渲染函数自定义各区域；`ui` 按主题插槽覆盖类名。

<DemoBlock title="渲染函数 · ui 插槽" description="indicator / title / description / content / ui" :code="stepperUiCustomRaw">
  <ReactDemo :component="StepperUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-stepper
```

## API

<!--@include: ./api/stepper.md-->

**插槽**：indicator 指示器 · wrapper 标题与描述包装 · title 步骤标题 · description 步骤描述
| content | (item) => ReactNode | - | 内容面板渲染函数 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| header | 步骤头部容器 |
| item | 单个步骤 |
| container | 触发器与分隔线容器 |
| trigger | 触发器按钮 |
| indicator | 指示器 |
| icon | 指示器图标 |
| separator | 步骤分隔线 |
| wrapper | 标题与描述包装 |
| title | 步骤标题 |
| description | 步骤描述 |
| content | 内容面板 |

**ref 方法**：next() · prev()，hasNext / hasPrev 可读

## hook

```tsx
const [Stepper, stepperApi] = useXStepper({ items: [...] })
stepperApi.next()   // current 可读，next / prev / reset / go
```

## 动效

- 步骤状态切换：背景与文字颜色过渡（transition-colors）
