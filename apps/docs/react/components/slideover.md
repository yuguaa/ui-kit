---
title: Slideover 侧滑
description: 从侧边滑入的浮层，常用于移动端导航
---

# Slideover 侧滑

从侧边滑入的浮层，常用于移动端导航。支持四个滑入方向与内嵌模式，可通过 header / actions / body / footer / close 插槽自由组合。

<script setup>
import SlideoverBasicDemo from '@demos/react/slideover-basic-demo'
import slideoverBasicDemoRaw from '@demos/react/slideover-basic-demo.tsx.code.txt?raw'
import SlideoverVariants from '@demos/react/slideover-variants'
import slideoverVariantsRaw from '@demos/react/slideover-variants.tsx.code.txt?raw'
import SlideoverSlots from '@demos/react/slideover-slots'
import slideoverSlotsRaw from '@demos/react/slideover-slots.tsx.code.txt?raw'
import SlideoverUiCustom from '@demos/react/slideover-ui-custom'
import slideoverUiCustomRaw from '@demos/react/slideover-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="侧滑面板与导航链接" description="open / title / body" :code="slideoverBasicDemoRaw">
  <ReactDemo :component="SlideoverBasicDemo" />
</DemoBlock>

## 方向与变体

`side` 控制四个滑入方向；`inset` 让面板与屏幕边缘保留间距；`overlay` 为 false 时隐藏遮罩；`close` 为 false 时隐藏关闭按钮。

<DemoBlock title="side · inset · overlay · close" description="四个方向与内嵌模式" :code="slideoverVariantsRaw">
  <ReactDemo :component="SlideoverVariants" />
</DemoBlock>

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管整个面板内容（标题转为隐藏标题保证可访问性）。

<DemoBlock title="header / actions / body / footer / content" description="插槽自由组合" :code="slideoverSlotsRaw">
  <ReactDemo :component="SlideoverSlots" />
</DemoBlock>

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）覆盖类名。

<DemoBlock title="ui 主题插槽" description="按键覆盖 overlay / content / header / title 等类名" :code="slideoverUiCustomRaw">
  <ReactDemo :component="SlideoverUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-slideover
```

## API

<!--@include: ./api/slideover.md-->

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
const [Slideover, slideoverApi] = useXSlideover({ title: "侧滑面板" })
slideoverApi.open()   // open / close / toggle / setState / setData / getData
```

## 动效

- 面板：侧向滑入滑出（200ms）
- 遮罩：淡入淡出（200ms）

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
| content | sm:ring-1 ring-border | 对应 sm:ring ring-default |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content（inset=true） | rounded-lg | 8px |
| content | sm:shadow-lg | sm 及以上弹窗阴影阶梯 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| side=top / bottom | 贴左右边（inset-x-0 + top-0 / bottom-0），inset=true 时距边 1rem 且 max-h-[calc(100%-2rem)] |
| side=right / left | 贴上下边（inset-y-0 + right-0 / left-0）且 max-w-md |
| inset=true | content rounded-lg |
| transition=true | 遮罩 fade；content 按 side 播 data-open:slide-in-from-{top,right,bottom,left} / data-closed:slide-out-to-{top,right,bottom,left} |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 打开时焦点移入面板并锁定（focus trap，Base UI Dialog 语义）；Esc 关闭；关闭后焦点恢复触发元素；dismissible=false 时外部点击（outside-press）与 Esc（escape-key）被拦截并触发 onClosePrevent |
| ARIA | Popup 由 Base UI Dialog 渲染 role="dialog"，modal 时 aria-modal="true"；Title / Description 关联 aria-labelledby / aria-describedby；无标题或使用 content 插槽时渲染 sr-only 的 Title / Description；content 带 data-side 标注方向；关闭按钮 aria-label="关闭" |
| 动效 | 遮罩淡入淡出 + 面板按 side 侧向滑入滑出（data-open / data-closed 状态驱动，与 Vue 端 slide-in-from-* 动效语义对应）；打开时锁定 body 滚动（Base UI Dialog 语义） |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| 遮罩背景 | bg-elevated/75（跟随主题亮暗） | bg-black/50（固定黑色，不随主题） |
| 动效实现 | CSS 关键帧 fade-in / slide-in-from-* | data-open 状态 + animate-in / slide-in-from-* 工具类 |
