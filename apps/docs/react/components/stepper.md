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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | div | 渲染为指定元素 |
| items | XStepperItem[] | [] | 步骤项数组 |
| value | string · number | - | 当前激活步骤的 value（受控） |
| defaultValue | string · number | - | 初始激活步骤的 value |
| size | xs · sm · md · lg · xl | md | 步骤尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色 |
| orientation | horizontal · vertical | horizontal | 步骤排列方向 |
| valueKey | string | value | 从步骤项取 value 的字段，支持点路径 |
| disabled | boolean | false | 是否禁用全部步骤 |
| linear | boolean | true | 是否必须按顺序完成 |
| onValueChange | (value) => void | - | 步骤变化回调 |
| onNext / onPrev | (item) => void | - | 进入下一步 / 回到上一步回调 |
| ui | XStepperUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |
| indicator | (props) => ReactNode | - | 指示器渲染函数（{ item, ui }） |
| wrapper | (item) => ReactNode | - | 标题与描述包装渲染函数 |
| title | (item) => ReactNode | - | 步骤标题渲染函数 |
| description | (item) => ReactNode | - | 步骤描述渲染函数 |
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
