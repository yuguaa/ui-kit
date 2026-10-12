---
title: Splitter 分割面板
description: 可拖拽调整大小的分栏面板
---

# Splitter 分割面板

可拖拽调整大小的分栏面板，支持 items 数组形态与任意数量面板。

<DemoPreview file="demos/react/splitter-basic.tsx" react title="基础用法" description="items 数组渲染三个面板与两个拖拽条" />

## 可折叠

开启 `collapsible` 后，拖拽分隔条越过一半最小尺寸即折叠被压缩一侧的面板，分隔条停在边界，点击该侧的按钮恢复面板。

<DemoPreview file="demos/react/splitter-collapsible.tsx" react title="可折叠" description="拖到边界折叠，点击按钮展开" />

## disabled 与 ui 插槽

`disabled` 锁定全部拖拽条；`ui` 按主题插槽（root / panel / handle）覆盖类名。

<DemoPreview file="demos/react/splitter-disabled.tsx" react title="disabled 与 ui 插槽" description="disabled 锁定拖拽，ui 插槽类名" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-splitter
```

## API

<!--@include: ./api/splitter.md-->

### XSplitterItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| id | string | - | 面板 id，默认自动生成 |
| defaultSize | number | 剩余均分 | 初始尺寸（百分比） |
| minSize | number | 10 | 最小尺寸（百分比） |
| maxSize | number | 100 | 最大尺寸（百分比） |
| collapsible | boolean | false | 拖拽越过最小尺寸一半时折叠 |
| collapsedSize | number | 0 | 折叠后的尺寸 |
| sizeUnit | % · px | % | 尺寸单位 |
| content | ReactNode | - | 面板内容 |
| className | string | - | 面板类名 |
| ui | { panel: string } | - | 面板主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| panel | 面板 |
| handle | 拖拽条 |

**ref 方法**：resize(index, size)

## hook

```tsx
const [Splitter, splitterApi] = useXSplitter()
splitterApi.resize(30)   // size 可读，resize 调整
```

## 动效

- 拖拽：即时响应，无过渡动效
- 折叠 / 展开：即时切换，无过渡动效

## 设计规格

### 主题 token

**背景与描边**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | border border-border | 容器描边（Vue 端 root 无描边） |
| handle | bg-border + hover:bg-primary/10 | 拖拽条底色（Vue 端 handle 无底色） |
| handle | focus-visible:outline-2 focus-visible:outline-primary | 聚焦轮廓用 primary |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | rounded-lg | 8px |
| 无 shadow | - | 主题未内建 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| orientation=horizontal | root flex-row h-full；handle w-2 cursor-col-resize |
| orientation=vertical | root flex-col；handle h-2 cursor-row-resize |
| disabled=true | handle cursor-default，tabIndex 降为 -1 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | handle role="separator" tabIndex=0（disabled 时 -1）；方向键按 10 调整相邻面板（无 Home / End） |
| ARIA | handle role="separator" + aria-orientation + data-panel-resize-handle-enabled；panel 无角色 |
| 动效 | 无过渡（即时响应）；handle 有 transition-colors（hover 底色过渡） |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| 底层实现 | reka-ui Splitter | 手写 Pointer Events 实现 |
| 键盘 Home / End | 支持（跳至最小 / 最大） | 不支持（仅方向键 ±10） |
| root 样式 | 无内建背景与描边 | overflow-hidden rounded-lg border border-border |
| handle 底色 | 无背景色 | bg-border + hover:bg-primary/10 |
