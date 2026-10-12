---
title: Popover 气泡
description: 点击或悬停触发的轻量气泡卡片
---

# Popover 气泡

点击或悬停触发的轻量气泡卡片。支持 anchor 锚点定位、dismissible 关闭策略与 portal 渲染。

<script setup>
import PopoverBasicDemo from '@demos/react/popover-basic-demo'
import popoverBasicDemoRaw from '@demos/react/popover-basic-demo.tsx.code.txt?raw'
import PopoverArrowDemo from '@demos/react/popover-arrow-demo'
import popoverArrowDemoRaw from '@demos/react/popover-arrow-demo.tsx.code.txt?raw'
import PopoverAnchor from '@demos/react/popover-anchor'
import popoverAnchorRaw from '@demos/react/popover-anchor.tsx.code.txt?raw'
import PopoverUiCustom from '@demos/react/popover-ui-custom'
import popoverUiCustomRaw from '@demos/react/popover-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

`mode` 区分点击（click）与悬停（hover）触发；`content` 传函数时接收 `close` 方法，可在内容里直接关闭。

<DemoBlock title="click / hover / 函数内容" description="mode 与 content 函数作用域" :code="popoverBasicDemoRaw">
  <ReactDemo :component="PopoverBasicDemo" />
</DemoBlock>

## 箭头

开启 `arrow` 后浮层显示指向触发元素的箭头。

<DemoBlock title="带箭头浮层" description="arrow" :code="popoverArrowDemoRaw">
  <ReactDemo :component="PopoverArrowDemo" />
</DemoBlock>

## 锚点

`anchor` 指定定位参考元素，浮层相对它而不是触发器定位。

<DemoBlock title="anchor 锚点" description="anchor 作为定位参考" :code="popoverAnchorRaw">
  <ReactDemo :component="PopoverAnchor" />
</DemoBlock>

## 关闭策略与 ui 插槽

`dismissible` 为 false 时点击外部或按 Esc 不会关闭，改为回调 `onClosePrevent`；`ui` 属性按主题插槽键（content / arrow）覆盖类名。

<DemoBlock title="dismissible · ui" description="禁止外部关闭与主题定制" :code="popoverUiCustomRaw">
  <ReactDemo :component="PopoverUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-popover
```

## API

<!--@include: ./api/popover.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| content | 气泡内容面板 |
| arrow | 指向箭头 |

## 插槽（props）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| children | ReactNode | 触发元素（default 插槽） |
| content | ReactNode \| ((close) => ReactNode) | 气泡内容，传函数时接收 close 方法 |
| anchor | ReactNode | 定位参考元素（anchor 插槽） |

## hook

```tsx
const [Popover, popoverApi] = useXPopover()
popoverApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（100ms）

## 设计规格

React 端基于 Base UI Popover，主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | bg-background | 对应 bg-default |
| arrow | fill-background | 对应 fill-bg |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | 无文字 token | 与 Vue 端一致 |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | ring-1 ring-border | 对应 ring ring-default |
| arrow | stroke-border | 对应 stroke-default |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | rounded-md | 6px，与 Vue 端同值 |
| content | shadow-lg | 与 Vue 端同值 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| mode=click（默认） | 点击打开；modal 时焦点锁定与遮罩拦截 |
| mode=hover | 悬停打开与移出关闭，默认 openDelay=0 / closeDelay=0；Vue 端 reka HoverCard 默认为 700ms / 300ms，差异注明 |
| dismissible=false | 拦截外部点击与 Esc 关闭并回调 onClosePrevent；Vue 端无对应 prop，差异注明 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Base UI Popover 语义，与 Vue 端一致：Esc 关闭；modal=true 时打开后焦点锁定在内容内；dismissible=false 时 Esc 与外部点击的关闭被拦截 |
| ARIA | 与 Vue 端一致：trigger 元素为 aria-expanded + aria-haspopup；content 可聚焦（focus:outline-none） |
| 动效 | content 进出场为 tailwindcss-animate 风格 animate-in / fade-in-0 / zoom-in-95（Vue 端为 scale-in / scale-out 100ms，实现方式不同，差异注明） |
