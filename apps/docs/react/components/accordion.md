---
title: Accordion 手风琴
description: 可展开与折叠的内容分组
---

# Accordion 手风琴

可展开与折叠的内容分组，支持多开、字段映射与禁用项。

<DemoPreview file="demos/react/accordion-basic.tsx" react title="基础用法" description="items 数组渲染标题与内容，defaultValue 指定默认展开项" />

## 字段映射与插槽

`labelKey` / `valueKey` 指定标题与唯一值来源字段；`leading` / `trailing` / `body` 为函数插槽，接收 `{ item, index, open }`。

<DemoPreview file="demos/react/accordion-slots.tsx" react title="字段映射与插槽" description="labelKey / valueKey 映射，leading / body 函数插槽" />

## ui 插槽自定义

`ui` 按主题插槽（root / item / header / trigger / leadingIcon / label / trailingIcon / content / body）覆盖每一层元素的类名。

<DemoPreview file="demos/react/accordion-ui.tsx" react title="ui 插槽自定义" description="九个插槽键逐层注入类名" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-accordion
```

## API

<!--@include: ./api/accordion.md-->

**插槽**：leading / trailing 前置与后置 · content 整个内容区 · body 内容容器内部 · children 标题内容

插槽 props：`{ item, index, open }`

### XAccordionItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | string | - | 标题文本（字段名由 labelKey 决定） |
| icon | XIconName · ComponentType | - | 前置图标 |
| trailingIcon | XIconName · ComponentType | - | 后置图标，优先于组件级 trailingIcon |
| content | ReactNode | - | 内容 |
| value | string | - | 唯一值（字段名由 valueKey 决定），默认取索引 |
| disabled | boolean | false | 该项是否禁用 |
| className | string | - | 该项根元素类名 |
| ui | XAccordionItemUi | - | 该项主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| item | 单项容器 |
| header | 标题行 |
| trigger | 触发按钮 |
| leadingIcon | 前置图标 |
| label | 标题文本 |
| trailingIcon | 后置图标 |
| content | 内容区 |
| body | 内容容器 |

## hook

```tsx
const [Accordion, accordionApi] = useXAccordion({ items: [...] })
accordionApi.open(0)    // open(index) / close(index) / toggle(index)，value 可读
```

## 动效

- expand / collapse：内容区高度展开与收起动画（animate-accordion-down / up）
- trailingIcon：展开时旋转 180°（transition-transform）
- 无位移动画

## 设计规格

React 端基于 Base UI Accordion，主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| root · trigger · content | 无背景 token | 与 Vue 端一致 |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| trigger | text-sm font-medium（无颜色 token） | 与 Vue 端一致 |
| body | text-sm（无颜色 token） | 与 Vue 端一致 |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| item | border-b border-border（最后一项无下边框） | 对应 border-b border-default |
| trigger（focus-visible） | outline-primary/25 + focus-visible:outline-3 | 与 Vue 端一致 |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| trigger | rounded-md | 6px，与 Vue 端同值 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| disabled | trigger 为 cursor-not-allowed + opacity-75 |
| multiple=false（默认） | 仅一项展开；collapsible=true（默认）时允许全部收起，与 Vue 端 type=single 一致 |
| multiple=true | 多项同时展开，与 Vue 端 type=multiple 一致 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Base UI Accordion 语义，与 Vue 端 reka Accordion 一致：Enter / Space 切换展开状态；ArrowDown / ArrowUp 在 trigger 间移动焦点；Home / End 跳转首尾 |
| ARIA | 与 Vue 端一致：trigger 为 role=button + aria-expanded；Panel 为内容区域；默认 unmountOnHide=true 关闭后卸载，与 Vue 端一致 |
| 动效 | content 为 data-open:animate-accordion-down / data-closed:animate-accordion-up（tailwindcss-animate 的 accordion-down / up keyframes，与 Vue 端 reka 动画同名同行为，200ms 由 keyframes 时长控制）；trailingIcon 展开时 rotate-180 + duration-200，与 Vue 端一致 |
