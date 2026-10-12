---
title: Chip 芯片
description: 标记属性或数值的角标，支持定位与可选关闭按钮
---

# Chip 芯片

芯片用于标记属性或数值。text 直接给定内容，position / inset / standalone 控制角标定位，show 控制芯片本体显隐。

## 基础用法

<DemoPreview file="demos/vue/chip-basic.vue" title="七种语义色、尺寸与可关闭" description="text / color / size / closable / standalone / show" />

## 角标定位

默认绝对定位在父容器右上角；position 指定位置，inset 位于圆角元素内部时保持位置，standalone 相对父容器渲染。

<DemoPreview file="demos/vue/chip-position.vue" title="position / inset / standalone" description="chip 定位在头像各角" />

## ui 插槽与渲染

<DemoPreview file="demos/vue/chip-ui-custom.vue" title="ui 插槽自定义与 as" description="content 插槽自定义内容，ui 键覆盖主题插槽类名，as 更换渲染元素" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-chip
```

## API

<!--@include: ./api/chip.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素（定位壳） |
| base | 芯片本体 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| content | 芯片内容，优先于默认插槽与 text |
| default | 芯片内容 |
| icon | 标签图标 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:show | 显隐模型更新事件（v-model:show） |
| close | 关闭时回调 |

## 动效

无动效：关闭按钮的 hover 颜色过渡由按钮原子承担。

## 设计规格

### 主题 token

slots 公共类：`root` 为 `relative inline-flex items-center justify-center shrink-0`；`base` 为 `rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap`。

**背景**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| bg-{color} | 语义色 500 级（primary #22c55e 等） | 芯片本体实心背景 |
| bg-inverted | #171717 / #ffffff | neutral 实心背景 |

**文字**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| text-inverted | #ffffff / #171717 | 芯片本体文字（全部颜色） |

**描边**

| token | 取值（亮 / 暗） | 使用场景 |
| --- | --- | --- |
| ring ring-bg | #ffffff / #171717 | 本体外环（与宿主背景同色，形成间隔） |

**圆角与阴影**

| 类 | 值 |
| --- | --- |
| rounded-full | 全圆角 |
| 阴影 | 不使用 |

**变体**

| 变体 | 取值 | 说明 |
| --- | --- | --- |
| color | primary / secondary / success / info / warning / error / neutral | 本体背景色，默认 primary |
| size | 3xs ~ 3xl | 高度与最小宽度 4px ~ 12px，文字同值（h-[4px] ~ h-[12px]） |
| position | top-right（默认）/ bottom-right / top-left / bottom-left | 角标位置 |
| inset | false（默认）/ true | false 时 translate 外移半个身位贴合圆角边沿 |
| standalone | false（默认）/ true | false 时 absolute 定位，true 时相对父容器流内渲染 |

### 交互

**键盘**

| 行为 | 说明 |
| --- | --- |
| 焦点 | 静态展示，默认渲染 `<span>`，没有可聚焦行为 |

**ARIA**

| 属性 | 说明 |
| --- | --- |
| 不输出 | 没有内置角色与状态属性 |

**状态**

| 状态 | 说明 |
| --- | --- |
| show | `v-model:show` 控制本体渲染，false 时本体不渲染（root 壳保留） |

**动效**

没有动效：静态角标。
