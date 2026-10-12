---
title: Drawer 抽屉
description: 从屏幕边缘滑出的面板，承载额外内容或操作
---

# Drawer 抽屉

从屏幕边缘滑出的面板，承载额外内容或操作。支持四个方向、内嵌与拖拽把手，可通过 header / actions / body / footer / close 插槽自由组合。

## 基础用法

<DemoPreview file="demos/vue/drawer-basic-demo.vue" title="左右两侧" description="direction 控制滑出方向" />

## 方向与变体

`direction` 控制四个滑出方向；`inset` 让面板与屏幕边缘保留间距；`close` 显示关闭按钮；`handle` 为 false 时隐藏拖拽把手。

<DemoPreview file="demos/vue/drawer-variants.vue" title="direction · inset · close · handle" description="四个方向与内嵌模式" />

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管面板内容。

<DemoPreview file="demos/vue/drawer-slots.vue" title="header / actions / body / footer / content" description="插槽自由组合" />

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / handle / container / header / wrapper / title / description / actions / body / footer / close）覆盖类名。

<DemoPreview file="demos/vue/drawer-ui-custom.vue" title="ui 主题插槽" description="按键覆盖 content / handle / container / header 等类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-drawer
```

## API

<!--@include: ./api/drawer.md-->

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

## 设计规格

### 主题 token

**背景**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| overlay | bg-elevated/75 | #f5f5f5（亮）/ #262626（暗），75% 透明度 |
| content | bg-default | #ffffff（亮）/ #171717（暗） |
| handle | !bg-accented | #e5e5e5（亮）/ #404040（暗） |

**文字**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| title | text-highlighted | #171717（亮）/ #ffffff（暗） |
| description | text-muted | #737373（亮）/ #a3a3a3（暗） |

**描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content | ring ring-default | 1px 环 #e5e5e5（亮）/ #262626（暗） |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content（inset=false） | 方向性圆角 | top→rounded-b-lg、bottom→rounded-t-lg、left→rounded-r-lg、right→rounded-l-lg（--radius-lg 8px） |
| content（inset=true） | rounded-lg | 四角 8px，贴边处距边 1rem |
| content | 无 shadow | 抽屉无阴影 token |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| direction=top / bottom | content 贴左右边，max-h-[96%]；handle !w-12 !h-1.5 mx-auto（top 时 mb-4，bottom 时 mt-4） |
| direction=right / left | content 贴上下边，max-w-[calc(100%-2rem)]；handle !h-12 !w-1.5（right 时 !ml-4，left 时 !mr-4） |
| inset=true | content rounded-lg overflow-hidden，各方向距边 1rem（inset-x-4 / inset-y-4） |
| snapPoints=true | direction=top / bottom → h-full；right / left → w-full |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Esc 关闭（vaul-vue 语义）；dismissible=false 时 Esc 与外部点击被拦截并触发 close:prevent；打开时焦点进入面板、关闭后恢复触发元素（vaul-vue 语义） |
| ARIA | 内容 role="dialog"，title / description 关联 aria-labelledby / aria-describedby；无标题/描述或使用 content 插槽时渲染 VisuallyHidden 的 DrawerTitle / DrawerDescription；把手为装饰元素（aria-hidden）；关闭按钮 aria-label 来自 t('drawer.close') |
| 动效 | 开合 transform 过渡由 vaul-vue 内置接管（Vue 主题无显式动画变体）；handle 有 transition-opacity ease-out；拖拽把手或面板调整 snapPoints，超过 closeThreshold 关闭（vaul-vue 语义） |
