---
title: Popover 气泡
description: 点击或悬停触发的轻量气泡卡片
---

# Popover 气泡

点击或悬停触发的轻量气泡卡片。支持 anchor 锚点定位、dismissible 关闭策略与 portal 渲染。

## 基础用法

`mode` 区分点击（click）与悬停（hover）触发；content 插槽接收 `close` 方法，可在内容里直接关闭。

<DemoPreview file="demos/vue/popover-basic-demo.vue" title="click / hover / 函数内容" description="mode 与 content 插槽作用域" />

## 箭头

开启 `arrow` 后浮层显示指向触发元素的箭头。

<DemoPreview file="demos/vue/popover-arrow-demo.vue" title="带箭头浮层" description="arrow" />

## 锚点

`anchor` 插槽指定定位参考元素，浮层相对它而不是触发器定位。

<DemoPreview file="demos/vue/popover-anchor.vue" title="anchor 锚点" description="anchor 插槽作为定位参考" />

## 关闭策略与 ui 插槽

`dismissible` 为 false 时点击外部或按 Esc 不会关闭，改为发射 `close:prevent`；`ui` 属性按主题插槽键（content / arrow）覆盖类名。

<DemoPreview file="demos/vue/popover-ui-custom.vue" title="dismissible · ui" description="禁止外部关闭与主题定制" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-popover
```

## API

<!--@include: ./api/popover.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| content | 气泡内容面板 |
| arrow | 指向箭头 |

## 插槽

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| default | { open } | 触发元素 |
| content | { close } | 气泡内容（click 模式接收 close 方法） |
| anchor | { close } | 定位参考元素 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:open | 打开状态变化回调 |
| close:prevent | 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） |

## hook

```ts
const [Popover, popoverApi] = useXPopover()
popoverApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（100ms）

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | bg-default | #ffffff / #171717 |
| arrow | fill-bg | 同 bg-default |

**文字**

| 插槽 | token | 值 |
| --- | --- | --- |
| content | 无文字 token（由内容自行控制） | — |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | ring ring-default | #e5e5e5 / #262626 |
| arrow | stroke-default | 同 border-default |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| content | rounded-md | 6px（--radius-md） |
| content | shadow-lg | Tailwind 默认 shadow-lg |

**变体**

| 变体 | token 组合 |
| --- | --- |
| mode=click（默认） | 点击打开；modal 时焦点锁定与遮罩拦截 |
| mode=hover | HoverCard 语义：悬停打开（openDelay 默认 700ms）、移出关闭（closeDelay 默认 300ms） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | reka Popover 语义：Esc 关闭；modal=true 时打开后焦点锁定在内容内（FocusScope）；mode=hover 时 Esc 也可关闭（reka HoverCard 语义） |
| ARIA | trigger 元素为 aria-expanded + aria-haspopup=dialog；content 可聚焦（focus:outline-none） |
| 动效 | content 进出场 scale-in / scale-out 100ms |
