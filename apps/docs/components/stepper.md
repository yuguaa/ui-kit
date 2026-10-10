---
title: Stepper 步骤条
description: 引导用户按步骤完成流程
---

# Stepper 步骤条

items 字段（title / description / icon / content / slot / value）驱动，支持受控 `modelValue` 与非受控 `defaultValue`，`next` / `prev` 可通过 ref 调用。

<script setup>
import StepperBasic from '@demos/vue/stepper-basic.vue'
import stepperBasicRaw from '@demos/vue/stepper-basic.vue.code.txt?raw'
import StepperUiCustom from '@demos/vue/stepper-ui-custom.vue'
import stepperUiCustomRaw from '@demos/vue/stepper-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

`items` 驱动步骤条渲染，`color` 控制完成 / 激活态的语义色，`size` 控制触发器尺寸；`next` / `prev` 通过 ref 调用并抛出同名事件。

<DemoBlock title="基础用法 + 步骤切换" description="items / v-model / color / size / next / prev" :code="stepperBasicRaw">
  <StepperBasic />
</DemoBlock>

## 插槽与 ui 插槽

`indicator` / `title` / `description` / `content` 插槽自定义各区域；`ui` 按主题插槽覆盖类名。

<DemoBlock title="插槽 · ui 插槽" description="indicator / title / description / content / ui" :code="stepperUiCustomRaw">
  <StepperUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-stepper
```

## API

<!--@include: ./api/stepper.md-->

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

## 插槽

| 名称 | 说明 |
| --- | --- |
| indicator | 指示器内容（{ item, ui }） |
| wrapper | 标题与描述包装（{ item }） |
| title | 步骤标题（{ item }） |
| description | 步骤描述（{ item }） |
| content | 内容面板（{ item }），按 item.slot 分发 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 步骤变化回调 |
| next / prev | 进入下一步 / 回到上一步回调（参数为步骤项） |

**方法**（ref 调用）：next() · prev()，hasNext / hasPrev 可读

## hook

```ts
const [Stepper, stepperApi] = useXStepper({ items: [...] })
stepperApi.next()   // current 可读，next / prev / reset / go
```

## 动效

- 步骤状态切换：背景与文字颜色过渡（transition-colors）
