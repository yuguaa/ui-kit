---
title: Modal 对话框
description: 模态对话框，用于承载需要用户确认的信息或操作
---

# Modal 对话框

模态对话框，用于承载需要用户确认的信息或操作。支持全屏与滚动遮罩模式，可通过 header / actions / body / footer / close 插槽自由组合。

<script setup>
import ModalBasicDemo from '@demos/react/modal-basic-demo'
import modalBasicDemoRaw from '@demos/react/modal-basic-demo.tsx.code.txt?raw'
import ModalVariants from '@demos/react/modal-variants'
import modalVariantsRaw from '@demos/react/modal-variants.tsx.code.txt?raw'
import ModalSlots from '@demos/react/modal-slots'
import modalSlotsRaw from '@demos/react/modal-slots.tsx.code.txt?raw'
import ModalUiCustom from '@demos/react/modal-ui-custom'
import modalUiCustomRaw from '@demos/react/modal-ui-custom.tsx.code.txt?raw'
import ModalHook from '@demos/react/modal-hook'
import modalHookRaw from '@demos/react/modal-hook.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="受控打开与确认回调" description="open / onOpenChange / title / description / body / footer" :code="modalBasicDemoRaw">
  <ReactDemo :component="ModalBasicDemo" />
</DemoBlock>

## 变体与状态

`fullscreen` 让内容占满屏幕；`scrollable` 开启滚动遮罩模式，内容随遮罩滚动并居中；`dismissible` 为 false 时点击外部或按 Esc 不再关闭，改为回调 `onClosePrevent`。

<DemoBlock title="fullscreen · scrollable · dismissible" description="三种模式与关闭策略" :code="modalVariantsRaw">
  <ReactDemo :component="ModalVariants" />
</DemoBlock>

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管整个面板内容（标题转为隐藏标题保证可访问性）；`close` 传元素时作为插槽替换默认关闭按钮。

<DemoBlock title="header / actions / body / footer / content / close" description="插槽自由组合" :code="modalSlotsRaw">
  <ReactDemo :component="ModalSlots" />
</DemoBlock>

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）覆盖类名。

<DemoBlock title="ui 主题插槽" description="按键覆盖 overlay / content / header / title 等类名" :code="modalUiCustomRaw">
  <ReactDemo :component="ModalUiCustom" />
</DemoBlock>

## hook 用法

<DemoBlock title="hook 先行" description="useXModal 返回 [Modal, modalApi]，api 控制打开关闭与 setState" :code="modalHookRaw">
  <ReactDemo :component="ModalHook" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-modal
```

## API

<!--@include: ./api/modal.md-->
| className | string | - | 根节点类名（有触发器时绑到触发器） |
| ui | XModalUi | - | 主题插槽类名 |
| onOpenChange | (open, details) => void | - | 打开状态变化回调 |
| onClosePrevent | () => void | - | 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| overlay | 遮罩元素 |
| content | 内容面板 |
| header | 头部区域 |
| wrapper | 标题与说明容器 |
| body | 正文区域 |
| footer | 底部区域 |
| title | 标题 |
| description | 辅助说明 |
| close | 关闭按钮 |

## 插槽（props）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| children | ReactNode | 触发元素（default 插槽） |
| content | ReactNode | 面板内容，替换默认 header / body / footer |
| header | ReactNode | 自定义头部 |
| title | ReactNode | 自定义标题 |
| description | ReactNode | 自定义辅助说明 |
| actions | ReactNode | 头部操作区 |
| close | ReactNode | 自定义关闭按钮 |
| body | ReactNode | 正文 |
| footer | ReactNode | 底部区域 |

## hook

```tsx
const [Modal, modalApi] = useXModal({ title: "对话框标题" })
modalApi.open()      // open / close / toggle / setData / getData
modalApi.setState({ title: "新标题" })
```

## 动效

- 遮罩：淡入淡出（200ms）
- 面板：缩放进出场（200ms）

## 设计规格

### 主题 token

**背景**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| overlay | bg-black/50 | 黑色 50% 透明度（视觉对应 Vue 端 bg-elevated/75） |
| content | bg-background | shadcn 变量，对应 bg-default |

**文字**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| title | text-foreground | 对应 text-highlighted |
| description | text-muted-foreground | 对应 text-muted |

**描边与分割**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content | divide-y divide-border | 分割线，对应 divide-default |
| content（非全屏） | ring-1 ring-border | 对应 ring ring-default |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content（非全屏） | rounded-lg | 8px |
| content（非全屏） | shadow-lg | Tailwind 弹窗阴影阶梯 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| transition=true | 遮罩与面板 data-open 播 fade-in-0 / 面板 zoom-in-95，data-closed 播 fade-out-0 / zoom-out-95（Base UI Dialog 状态驱动） |
| fullscreen=true | content inset-0 全屏铺满 |
| fullscreen=false | content w-[calc(100vw-2rem)] max-w-lg + rounded-lg shadow-lg ring-1 ring-border |
| overlay=true | 遮罩渲染 bg-black/50 |
| scrollable=true | 遮罩 overflow-y-auto + grid place-items-center p-4 sm:py-8，面板置于遮罩内随滚动居中 |
| scrollable=false | content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] overflow-hidden；body overflow-y-auto |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 打开时焦点移入面板并锁定（focus trap，Base UI Dialog 语义）；Esc 关闭；关闭后焦点恢复触发元素；dismissible=false 时外部点击（outside-press）与 Esc（escape-key）被拦截并触发 onClosePrevent |
| ARIA | Popup 由 Base UI Dialog 渲染 role="dialog"，modal 时 aria-modal="true"；Title / Description 关联 aria-labelledby / aria-describedby；无标题或使用 content 插槽时渲染 sr-only 的 Title / Description；关闭按钮 aria-label="关闭" |
| 动效 | 遮罩与面板进出场 200ms（data-open / data-closed + animate-in / animate-out，与 Vue 端 fade / scale 动效语义对应）；打开时锁定 body 滚动（Base UI Dialog 语义） |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| 遮罩背景 | bg-elevated/75（跟随主题亮暗） | bg-black/50（固定黑色，不随主题） |
| 动效实现 | CSS 关键帧 fade-in / scale-in | data-open 状态 + animate-in / zoom-in-95 工具类 |
