---
title: Slideover 侧滑
description: 从侧边滑入的浮层，常用于移动端导航
---

# Slideover 侧滑

从侧边滑入的浮层，常用于移动端导航。支持四个滑入方向与内嵌模式，可通过 header / actions / body / footer / close 插槽自由组合。

<script setup>
import SlideoverBasicDemo from '@demos/vue/slideover-basic-demo.vue'
import slideoverBasicDemoRaw from '@demos/vue/slideover-basic-demo.vue.code.txt?raw'
import SlideoverVariants from '@demos/vue/slideover-variants.vue'
import slideoverVariantsRaw from '@demos/vue/slideover-variants.vue.code.txt?raw'
import SlideoverSlots from '@demos/vue/slideover-slots.vue'
import slideoverSlotsRaw from '@demos/vue/slideover-slots.vue.code.txt?raw'
import SlideoverUiCustom from '@demos/vue/slideover-ui-custom.vue'
import slideoverUiCustomRaw from '@demos/vue/slideover-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="侧滑面板与导航链接" description="open / title / body 插槽" :code="slideoverBasicDemoRaw">
  <SlideoverBasicDemo />
</DemoBlock>

## 方向与变体

`side` 控制四个滑入方向；`inset` 让面板与屏幕边缘保留间距；`overlay` 为 false 时隐藏遮罩；`close` 为 false 时隐藏关闭按钮。

<DemoBlock title="side · inset · overlay · close" description="四个方向与内嵌模式" :code="slideoverVariantsRaw">
  <SlideoverVariants />
</DemoBlock>

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管整个面板内容（标题转为隐藏标题保证可访问性）。

<DemoBlock title="header / actions / body / footer / content" description="插槽自由组合" :code="slideoverSlotsRaw">
  <SlideoverSlots />
</DemoBlock>

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）覆盖类名。

<DemoBlock title="ui 主题插槽" description="按键覆盖 overlay / content / header / title 等类名" :code="slideoverUiCustomRaw">
  <SlideoverUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-slideover
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开（支持 v-model:open） |
| defaultOpen | boolean | false | 初始是否打开 |
| title | string | - | 标题 |
| description | string | - | 辅助说明 |
| modal | boolean | true | 模态：聚焦锁定与遮罩拦截 |
| unmountOnHide | boolean | false | 关闭后卸载内容 |
| overlay | boolean | true | 渲染遮罩 |
| transition | boolean | true | 开关动画 |
| side | top · right · bottom · left | right | 滑入方向 |
| inset | boolean | false | 与屏幕边缘保留间距 |
| portal | boolean | true | 渲染到 body |
| close | boolean \| 按钮属性对象 | true | 显示关闭按钮（对象透传给按钮） |
| closeIcon | Component | XIcon | 关闭按钮图标 |
| dismissible | boolean | true | 允许点击外部或按 Esc 关闭 |
| class | string | - | 根节点类名（有默认插槽时绑到触发器） |
| ui | SlideoverUi | - | 主题插槽类名 |

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

| 名称 | 说明 |
| --- | --- |
| default | 触发元素 |
| content | 面板内容，替换默认 header / body / footer |
| header | 自定义头部 |
| title | 自定义标题 |
| description | 自定义辅助说明 |
| actions | 头部操作区 |
| close | 自定义关闭按钮 |
| body | 正文 |
| footer | 底部区域 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:open | 打开状态变化回调 |
| close:prevent | 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） |

## hook

```ts
const [Slideover, slideoverApi] = useXSlideover({ title: '侧滑面板' })
slideoverApi.open()   // open / close / toggle / setState / setData / getData
```

## 动效

- 面板：侧向滑入滑出（200ms）
- 遮罩：淡入淡出（200ms）
