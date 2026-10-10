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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开（受控） |
| defaultOpen | boolean | false | 初始是否打开 |
| title | ReactNode | - | 标题 |
| description | ReactNode | - | 辅助说明 |
| modal | boolean | true | 模态：聚焦锁定与遮罩拦截 |
| unmountOnHide | boolean | false | 关闭后卸载内容 |
| overlay | boolean | true | 渲染遮罩 |
| scrollable | boolean | false | 滚动遮罩模式：内容随遮罩滚动居中 |
| transition | boolean | true | 开关动画 |
| fullscreen | boolean | false | 全屏模式 |
| portal | boolean | true | 渲染到 body |
| close | boolean \| 按钮属性对象 \| ReactNode | true | 显示关闭按钮；传元素时作为 close 插槽渲染 |
| closeIcon | ReactNode | XIcon | 关闭按钮图标 |
| dismissible | boolean | true | 允许点击外部或按 Esc 关闭 |
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
