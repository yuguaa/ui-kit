---
title: Drawer 抽屉
description: 从屏幕边缘滑出的面板，承载额外内容或操作
---

# Drawer 抽屉

从屏幕边缘滑出的面板，承载额外内容或操作。支持四个方向、内嵌与拖拽把手，可通过 header / actions / body / footer / close 插槽自由组合。

<script setup>
import DrawerBasicDemo from '@demos/react/drawer-basic-demo'
import drawerBasicDemoRaw from '@demos/react/drawer-basic-demo.tsx.code.txt?raw'
import DrawerVariants from '@demos/react/drawer-variants'
import drawerVariantsRaw from '@demos/react/drawer-variants.tsx.code.txt?raw'
import DrawerSlots from '@demos/react/drawer-slots'
import drawerSlotsRaw from '@demos/react/drawer-slots.tsx.code.txt?raw'
import DrawerUiCustom from '@demos/react/drawer-ui-custom'
import drawerUiCustomRaw from '@demos/react/drawer-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="左右两侧" description="direction 控制滑出方向" :code="drawerBasicDemoRaw">
  <ReactDemo :component="DrawerBasicDemo" />
</DemoBlock>

## 方向与变体

`direction` 控制四个滑出方向；`inset` 让面板与屏幕边缘保留间距；`close` 显示关闭按钮；`handle` 为 false 时隐藏拖拽把手。

<DemoBlock title="direction · inset · close · handle" description="四个方向与内嵌模式" :code="drawerVariantsRaw">
  <ReactDemo :component="DrawerVariants" />
</DemoBlock>

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管面板内容。

<DemoBlock title="header / actions / body / footer / content" description="插槽自由组合" :code="drawerSlotsRaw">
  <ReactDemo :component="DrawerSlots" />
</DemoBlock>

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / handle / container / header / wrapper / title / description / actions / body / footer / close）覆盖类名。

<DemoBlock title="ui 主题插槽" description="按键覆盖 content / handle / container / header 等类名" :code="drawerUiCustomRaw">
  <ReactDemo :component="DrawerUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-drawer
```

## API

<!--@include: ./api/drawer.md-->
| ui | XDrawerUi | - | 主题插槽类名 |
| onOpenChange | (open, details) => void | - | 打开状态变化回调 |
| onClosePrevent | () => void | - | 关闭被阻止（dismissible 为 false 时点击外部、按 Esc 或拖拽） |

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

## 插槽（props）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| children | ReactNode | 触发元素（default 插槽） |
| content | ReactNode | 面板内容，替换默认 container / header / body / footer |
| header | ReactNode | 自定义头部 |
| title | ReactNode | 自定义标题 |
| description | ReactNode | 自定义辅助说明 |
| actions | ReactNode | 头部操作区 |
| close | ReactNode | 自定义关闭按钮 |
| body | ReactNode | 正文 |
| footer | ReactNode | 底部区域 |

## hook

```tsx
const [Drawer, drawerApi] = useXDrawer({ title: "抽屉标题" })
drawerApi.open()   // open / close / toggle / setState / setData / getData
```

## 动效

- 面板：滑入滑出（200ms）
- 遮罩：淡入淡出（200ms）

## 设计规格

### 主题 token

**背景**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| overlay | bg-black/50 | 黑色 50% 透明度（视觉对应 Vue 端 bg-elevated/75） |
| content | bg-background | shadcn 变量，对应 bg-default |
| handle | bg-border | 对应 bg-accented |

**文字**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| title | text-foreground | 对应 text-highlighted |
| description | text-muted-foreground | 对应 text-muted |

**描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content | 方向性 border | top→border-b、bottom→border-t、left→border-r、right→border-l，均 border-border（对应 ring ring-default） |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content（inset=false） | 方向性圆角 | top→rounded-b-lg、bottom→rounded-t-lg、left→rounded-r-lg、right→rounded-l-lg（8px） |
| content（inset=true） | rounded-lg | 四角 8px，距边 1rem（--drawer-inset） |
| content | 无 shadow | 抽屉无阴影 token |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| direction=top / bottom | 贴左右边 + max-h-[96%]；handle 尺寸 w-12 h-1.5（top 时 mb-4，bottom 时 mt-4） |
| direction=right / left | 贴上下边 + max-w-[calc(100%-2rem)]；handle 尺寸 h-12 w-1.5（right 时 ml-4，left 时 mr-4） |
| inset=true | 四角 rounded-lg + 距边 1rem（--drawer-inset） |
| snapPoints | 预设停靠位置（0-1 比例或像素值） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Esc 关闭（Base UI Drawer 语义）；dismissible=false 时外部点击（outside-press）、Esc（escape-key）与拖拽（swipe）被拦截并触发 onClosePrevent；打开时焦点进入面板、关闭后恢复触发元素（Base UI Drawer 语义） |
| ARIA | Popup 由 Base UI Drawer 渲染 role="dialog"；Title / Description 关联 aria-labelledby / aria-describedby；无标题或使用 content 插槽时渲染 sr-only 的 Title / Description；把手 aria-hidden="true"；关闭按钮 aria-label="关闭" |
| 动效 | 面板 transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]（vaul 同款缓动），拖拽中取消过渡（data-swiping:duration-0）；遮罩淡入淡出；拖拽手势调整位置，超过阈值关闭（Base UI Drawer 语义） |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| 遮罩背景 | bg-elevated/75（跟随主题亮暗） | bg-black/50（固定黑色，不随主题） |
| 开合动效 | 由 vaul-vue 内置接管 | 显式写在 content：transition-transform 200ms + cubic-bezier(0.32,0.72,0,1) |
| 把手背景 | !bg-accented | bg-border（同体系等价） |
| dismissible=false 拦截范围 | Esc 与外部点击 | 额外包含拖拽（swipe） |
