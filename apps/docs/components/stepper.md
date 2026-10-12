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

## 设计规格

### 主题 token

- 背景：触发器默认 `bg-elevated`（#f5f5f5 / 暗色 #262626）；completed / active `bg-{color}`（默认 `bg-primary`，neutral → `bg-inverted`）
- 文字：触发器默认 `text-muted`；completed / active `text-inverted`；title `text-default font-medium`；description `text-muted`
- 描边：触发器 `focus-visible:outline-3 outline-{color}/25`（neutral → `outline-inverted/25`）；分隔线未完成 `bg-accented`、completed `bg-{color}`
- 圆角与阴影：触发器 `rounded-full`；分隔线 `rounded-full`
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| orientation | horizontal / vertical | 分隔线水平 `h-0.5` / 垂直 `w-0.5`，位置按尺寸计算 |
| size | xs / sm / md / lg / xl | 触发器 `size-6 ~ size-14` + 字号、图标尺寸、间距 |
| color | 六色 + neutral | 完成/激活态触发器背景与分隔线颜色 |

### 交互

- 键盘：`StepperTrigger` 为原生 `<button>`（Tab 聚焦、Enter / Space 触发）；无方向键导航（reka-ui Stepper 未实现 roving focus）；`linear` 模式阻止跳转到超过当前步骤 +1 的步骤，允许返回已完成步骤
- ARIA：item 输出 `data-state`（completed / active / inactive）；激活项 `aria-current="true"`；trigger 输出 `aria-labelledby`（关联标题）与 `aria-describedby`（关联描述）；禁用项按钮输出 `disabled`
- 动效：无过渡类，状态切换即时换色；分隔线随 completed 状态换色
