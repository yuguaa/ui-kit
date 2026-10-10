---
title: Modal 对话框
description: 模态对话框，用于承载需要用户确认的信息或操作
---

# Modal 对话框

模态对话框，用于承载需要用户确认的信息或操作。支持全屏与滚动遮罩模式，可通过 header / actions / body / footer / close 插槽自由组合。

<script setup>
import ModalBasicDemo from '@demos/vue/modal-basic-demo.vue'
import modalBasicDemoRaw from '@demos/vue/modal-basic-demo.vue.code.txt?raw'
import ModalVariants from '@demos/vue/modal-variants.vue'
import modalVariantsRaw from '@demos/vue/modal-variants.vue.code.txt?raw'
import ModalSlots from '@demos/vue/modal-slots.vue'
import modalSlotsRaw from '@demos/vue/modal-slots.vue.code.txt?raw'
import ModalUiCustom from '@demos/vue/modal-ui-custom.vue'
import modalUiCustomRaw from '@demos/vue/modal-ui-custom.vue.code.txt?raw'
import ModalHook from '@demos/vue/modal-hook.vue'
import modalHookRaw from '@demos/vue/modal-hook.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="受控打开与确认回调" description="v-model:open / title / description / body / footer 插槽" :code="modalBasicDemoRaw">
  <ModalBasicDemo />
</DemoBlock>

## 变体与状态

`fullscreen` 让内容占满屏幕；`scrollable` 开启滚动遮罩模式，内容随遮罩滚动并居中；`dismissible` 为 false 时点击外部或按 Esc 不再关闭，改为发射 `close:prevent`。

<DemoBlock title="fullscreen · scrollable · dismissible" description="三种模式与关闭策略" :code="modalVariantsRaw">
  <ModalVariants />
</DemoBlock>

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管整个面板内容（标题转为隐藏标题保证可访问性）；`close` 替换默认关闭按钮。

<DemoBlock title="header / actions / body / footer / content / close" description="插槽自由组合" :code="modalSlotsRaw">
  <ModalSlots />
</DemoBlock>

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）覆盖类名。

<DemoBlock title="ui 主题插槽" description="按键覆盖 overlay / content / header / title 等类名" :code="modalUiCustomRaw">
  <ModalUiCustom />
</DemoBlock>

## hook 用法

<DemoBlock title="hook 先行" description="useXModal 返回 [Modal, modalApi]，api 控制打开关闭与 setState" :code="modalHookRaw">
  <ModalHook />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-modal
```

## API

<!--@include: ./api/modal.md-->

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

## 插槽

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| default | - | 触发元素 |
| content | - | 面板内容，替换默认 header / body / footer |
| header | - | 自定义头部 |
| title | - | 自定义标题 |
| description | - | 自定义辅助说明 |
| actions | - | 头部操作区 |
| close | - | 自定义关闭按钮 |
| body | - | 正文 |
| footer | - | 底部区域 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:open | 打开状态变化回调 |
| close:prevent | 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） |

## hook

```ts
const [Modal, modalApi] = useXModal({ title: '对话框标题' })
modalApi.open()      // open / close / toggle / setData / getData
modalApi.setState({ title: '新标题' })
```

## 动效

- 遮罩：淡入淡出（200ms）
- 面板：缩放进出场（200ms）
