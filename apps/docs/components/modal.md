---
title: Modal 对话框
description: 模态对话框，用于承载需要用户确认的信息或操作
---

# Modal 对话框

模态对话框，用于承载需要用户确认的信息或操作。支持全屏与滚动遮罩模式，可通过 header / actions / body / footer / close 插槽自由组合。

## 基础用法

<DemoPreview file="demos/vue/modal-basic-demo.vue" title="受控打开与确认回调" description="v-model:open / title / description / body / footer 插槽" />

## 变体与状态

`fullscreen` 让内容占满屏幕；`scrollable` 开启滚动遮罩模式，内容随遮罩滚动并居中；`dismissible` 为 false 时点击外部或按 Esc 不再关闭，改为发射 `close:prevent`。

<DemoPreview file="demos/vue/modal-variants.vue" title="fullscreen · scrollable · dismissible" description="三种模式与关闭策略" />

## 插槽

`header` 替换默认头部；`actions` 渲染头部操作区；`body` 与 `footer` 提供正文与底部；`content` 接管整个面板内容（标题转为隐藏标题保证可访问性）；`close` 替换默认关闭按钮。

<DemoPreview file="demos/vue/modal-slots.vue" title="header / actions / body / footer / content / close" description="插槽自由组合" />

## ui 插槽自定义

`ui` 属性按主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）覆盖类名。

<DemoPreview file="demos/vue/modal-ui-custom.vue" title="ui 主题插槽" description="按键覆盖 overlay / content / header / title 等类名" />

## hook 用法

<DemoPreview file="demos/vue/modal-hook.vue" title="hook 先行" description="useXModal 返回 [Modal, modalApi]，api 控制打开关闭与 setState" />

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
| content（非全屏） | ring ring-default | 1px 环 #e5e5e5（亮）/ #262626（暗） |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| content（非全屏） | rounded-lg | --radius-lg 8px |
| content（非全屏） | shadow-lg | Tailwind 弹窗阴影阶梯 |
| header | min-h-(--ui-header-height) | 4rem |

**变体**

| 变体 | token 组合 |
| --- | --- |
| transition=true | overlay：data-[state=open] 播 fade-in、closed 播 fade-out；content：scale-in / scale-out（均 200ms var(--ease-out)） |
| fullscreen=true | content inset-0 全屏铺满 |
| fullscreen=false | content w-[calc(100vw-2rem)] max-w-lg + rounded-lg shadow-lg ring ring-default |
| overlay=true | overlay 渲染 bg-elevated/75 |
| scrollable=true | overlay overflow-y-auto + grid place-items-center p-4 sm:py-8；content relative |
| scrollable=false | content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] overflow-hidden；body overflow-y-auto |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 打开时焦点移入面板并锁定（focus trap，reka-ui Dialog 语义）；Esc 关闭；关闭后焦点恢复触发元素；dismissible=false 时 Esc 与外部点击被拦截并触发 close:prevent |
| ARIA | DialogContent role="dialog"，modal 时 aria-modal="true"；title / description 关联 aria-labelledby / aria-describedby；无标题或使用 content 插槽时渲染 VisuallyHidden 的 DialogTitle / DialogDescription；关闭按钮 aria-label 来自 t('modal.close') |
| 动效 | 遮罩 fade-in / fade-out 200ms；面板 scale-in / scale-out 200ms（transition=true）；打开时锁定 body 滚动（reka-ui Dialog 语义） |
