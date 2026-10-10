---
title: Drawer 抽屉
description: 从屏幕边缘滑出的面板，承载额外内容或操作
---

# Drawer 抽屉

从屏幕边缘滑出的面板，承载额外内容或操作。支持四个方向、内嵌与拖拽把手，可通过 header / actions / body / footer / close 插槽自由组合。

<script setup>
import DrawerBasicDemo from '@demos/vue/drawer-basic-demo.vue'
import drawerBasicDemoRaw from '@demos/vue/drawer-basic-demo.vue.code.txt?raw'
import DrawerVariants from '@demos/vue/drawer-variants.vue'
import drawerVariantsRaw from '@demos/vue/drawer-variants.vue.code.txt?raw'
import DrawerSlots from '@demos/vue/drawer-slots.vue'
import drawerSlotsRaw from '@demos/vue/drawer-slots.vue.code.txt?raw'
import DrawerUiCustom from '@demos/vue/drawer-ui-custom.vue'
import drawerUiCustomRaw from '@demos/vue/drawer-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="左右两侧" description="direction 控制滑出方向" :code="drawerBasicDemoRaw">
  <DrawerBasicDemo />
</DemoBlock>

## 方向与变体

`direction` 控制四个滑出方向；`inset` 让面板与屏幕边缘保留间距；`close` 显示关闭按钮；`handle` 为 false 时隐藏拖拽把手。

<DemoBlock title="direction · inset · close · handle" description="四个方向与内嵌模式" :code="drawerVariantsRaw">
  <DrawerVariants />
</DemoBlock>

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管面板内容。

<DemoBlock title="header / actions / body / footer / content" description="插槽自由组合" :code="drawerSlotsRaw">
  <DrawerSlots />
</DemoBlock>

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / handle / container / header / wrapper / title / description / actions / body / footer / close）覆盖类名。

<DemoBlock title="ui 主题插槽" description="按键覆盖 content / handle / container / header 等类名" :code="drawerUiCustomRaw">
  <DrawerUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-drawer
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开（支持 v-model:open） |
| defaultOpen | boolean | false | 初始是否打开 |
| title | string | - | 标题 |
| description | string | - | 辅助说明 |
| modal | boolean | true | 模态：聚焦锁定与遮罩拦截 |
| direction | top · right · bottom · left | bottom | 滑出方向 |
| snapPoints | (number \| string)[] | - | 预设停靠位置（0-1 比例或像素值） |
| overlay | boolean | true | 渲染遮罩 |
| handle | boolean | true | 渲染拖拽把手 |
| portal | boolean | true | 渲染到 body |
| nested | boolean | false | 嵌套在另一个抽屉中（嵌套关系由底层原语自动识别） |
| inset | boolean | false | 与屏幕边缘保留间距 |
| close | boolean \| 按钮属性对象 | false | 显示关闭按钮（对象透传给按钮） |
| closeIcon | Component | XIcon | 关闭按钮图标 |
| dismissible | boolean | true | 允许点击外部或按 Esc 关闭 |
| class | string | - | 根节点类名（有默认插槽时绑到触发器） |
| ui | DrawerUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| overlay | 遮罩元素 |
| content | 内容面板 |
| handle | 拖拽把手 |
| container | 内容容器 |
| header | 头部区域 |
| wrapper | 标题与说明容器 |
| title | 标题 |
| description | 辅助说明 |
| actions | 头部操作区 |
| body | 正文区域 |
| footer | 底部区域 |
| close | 关闭按钮 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 触发元素 |
| content | 面板内容，替换默认 container / header / body / footer |
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
| close:prevent | 关闭被阻止（dismissible 为 false 时点击外部、按 Esc 或拖拽） |

## hook

```ts
const [Drawer, drawerApi] = useXDrawer({ title: '抽屉标题' })
drawerApi.open()   // open / close / toggle / setState / setData / getData
```

## 动效

- 面板：滑入滑出（200ms）
- 遮罩：淡入淡出（200ms）
