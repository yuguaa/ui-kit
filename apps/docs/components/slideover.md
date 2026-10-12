---
title: Slideover 侧滑
description: 从侧边滑入的浮层，常用于移动端导航
---

# Slideover 侧滑

从侧边滑入的浮层，常用于移动端导航。支持四个滑入方向与内嵌模式，可通过 header / actions / body / footer / close 插槽自由组合。

## 基础用法

<DemoPreview file="demos/vue/slideover-basic-demo.vue" title="侧滑面板与导航链接" description="open / title / body 插槽" />

## 方向与变体

`side` 控制四个滑入方向；`inset` 让面板与屏幕边缘保留间距；`overlay` 为 false 时隐藏遮罩；`close` 为 false 时隐藏关闭按钮。

<DemoPreview file="demos/vue/slideover-variants.vue" title="side · inset · overlay · close" description="四个方向与内嵌模式" />

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管整个面板内容（标题转为隐藏标题保证可访问性）。

<DemoPreview file="demos/vue/slideover-slots.vue" title="header / actions / body / footer / content" description="插槽自由组合" />

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）覆盖类名。

<DemoPreview file="demos/vue/slideover-ui-custom.vue" title="ui 主题插槽" description="按键覆盖 overlay / content / header / title 等类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-slideover
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

## 设计规格

### 主题 token

**背景**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| overlay | bg-elevated/75 | #f5f5f5（亮）/ #262626（暗），75% 透明度 |
| content | bg-default | #ffffff（亮）/ #171717（暗） |

**文字**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| title | text-highlighted | #171717（亮）/ #ffffff（暗） |
| description | text-muted | #737373（亮）/ #a3a3a3（暗） |

**描边与分割**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content | divide-y divide-default | 分割线 #e5e5e5（亮）/ #262626（暗） |
| content | sm:ring ring-default | sm 及以上 1px 环 #e5e5e5（亮）/ #262626（暗） |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content（inset=true） | rounded-lg | --radius-lg 8px |
| content | sm:shadow-lg | sm 及以上弹窗阴影阶梯 |
| header | min-h-(--ui-header-height) | 4rem |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| side=top / bottom | content 贴左右边（inset-x-0 + top-0 / bottom-0），inset=true 时距边 1rem 且 max-h-[calc(100%-2rem)] |
| side=right / left | content 贴上下边（inset-y-0 + right-0 / left-0）且 max-w-md |
| inset=true | content rounded-lg |
| transition=true | overlay：data-[state=open] 播 fade-in、closed 播 fade-out；content：按 side 播 slide-in-from-{top,right,bottom,left} / slide-out-to-{top,right,bottom,left}（均 200ms var(--ease-out)） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 打开时焦点移入面板并锁定（focus trap，reka-ui Dialog 语义）；Esc 关闭；关闭后焦点恢复触发元素；dismissible=false 时 Esc 与外部点击被拦截并触发 close:prevent |
| ARIA | DialogContent role="dialog"，modal 时 aria-modal="true"；title / description 关联 aria-labelledby / aria-describedby；无标题或使用 content 插槽时渲染 VisuallyHidden 的 DialogTitle / DialogDescription；content 带 data-side 标注方向；关闭按钮 aria-label 来自 t('slideover.close') |
| 动效 | 遮罩 fade-in / fade-out 200ms；面板按 side 侧向滑入滑出 200ms（transition=true）；打开时锁定 body 滚动（reka-ui Dialog 语义） |
