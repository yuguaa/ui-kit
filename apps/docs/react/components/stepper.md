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

## 设计规格

### 主题 token

- 背景：触发器默认 `bg-muted`；completed / active `bg-{color}`（默认 `bg-primary`；neutral → `bg-foreground`）
- 文字：触发器默认 `text-muted-foreground`；completed / active `text-white`；title `text-foreground font-medium`；description `text-muted-foreground`
- 描边：触发器 `focus-visible:outline-3 outline-{color}/25`（neutral → `outline-foreground/25`）；分隔线未完成 `bg-border`、completed `bg-{color}`
- 圆角与阴影：触发器 `rounded-full`；分隔线 `rounded-full`
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| orientation | horizontal / vertical | 分隔线 `h-0.5` / `w-0.5`，位置按尺寸计算 |
| size | xs / sm / md / lg / xl | 触发器 `size-6 ~ size-14` + 字号、图标尺寸、间距 |
| color | 六色 + neutral | 完成/激活态触发器背景与分隔线颜色 |

### 交互

- 键盘：触发器为原生 `<button>`（Tab 聚焦、Enter / Space 触发）；无方向键导航；`linear` 模式阻止跳转到超过当前步骤 +1 的步骤，允许返回已完成步骤
- ARIA：手工输出 `data-state`（completed / active / inactive）与 `data-disabled`；分隔线 `aria-hidden`；Vue 端 reka-ui 输出的 `aria-current`、`aria-labelledby`、`aria-describedby` 此处无对应实现
- 动效：无过渡类，状态切换即时换色；分隔线随 completed 状态换色

**双端差异**：

- Vue 端基于 reka-ui Stepper（item 输出 `aria-current="true"`，trigger 输出 `aria-labelledby` / `aria-describedby`）；React 端手工实现，仅输出 `data-state`，无对应 ARIA 属性
- Vue 端禁用项由 reka 输出 `disabled` 属性；React 端按钮 `disabled` + 分隔线 `group-data-[disabled]:opacity-75`
- 语义色映射：Vue `bg-elevated` / `text-inverted` / `bg-accented` ↔ React `bg-muted` / `text-white` / `bg-border`
