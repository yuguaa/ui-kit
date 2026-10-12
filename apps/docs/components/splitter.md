---
title: Splitter 分割面板
description: 可拖拽调整大小的分栏面板
---

# Splitter 分割面板

可拖拽调整大小的分栏面板，支持 items 数组形态与任意数量面板。

<DemoPreview file="demos/vue/splitter-basic.vue" title="基础用法" description="items 数组渲染三个面板与两个拖拽条" />

## 可折叠

开启 `collapsible` 后，拖拽分隔条越过一半最小尺寸即折叠被压缩一侧的面板，分隔条停在边界，点击该侧的按钮恢复面板。

<DemoPreview file="demos/vue/splitter-collapsible.vue" title="可折叠" description="拖到边界折叠，点击按钮展开" />

## disabled 与 ui 插槽

`disabled` 锁定全部拖拽条；`ui` 按主题插槽（root / panel / handle）覆盖类名。

<DemoPreview file="demos/vue/splitter-disabled.vue" title="disabled 与 ui 插槽" description="disabled 锁定拖拽，ui 插槽类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-splitter
```

## API

<!--@include: ./api/splitter.md-->

### SplitterPanelItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| id | string | - | 面板 id，默认自动生成 |
| defaultSize | number | 剩余均分 | 初始尺寸（百分比） |
| minSize | number | 10 | 最小尺寸（百分比） |
| maxSize | number | 100 | 最大尺寸（百分比） |
| collapsible | boolean | false | 拖拽越过最小尺寸一半时折叠 |
| collapsedSize | number | 0 | 折叠后的尺寸 |
| sizeUnit | % · px | % | 尺寸单位 |
| slot | string | panel-{index} | 内容插槽名 |
| class | string | - | 面板类名 |
| ui | { panel: string } | - | 面板主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| panel | 面板 |
| handle | 拖拽条 |

## 插槽

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| panel-{index} | { item, index, collapsed, collapse, expand, resize } | 第 index 个面板 |
| first / second | 同上 | 双面板形态的左右（上下）面板 |
| resize-handle | { index } | 自定义拖拽条内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| layout | 布局变化（sizes） |
| collapse | 面板折叠（index） |
| expand | 面板展开（index） |
| resize | 面板尺寸变化（index, size, prevSize?） |
| dragging | 拖拽状态变化（index, dragging） |

## hook

```ts
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
| root | 无背景 / 无描边 | 主题未内建容器样式 |
| panel | flex | 无背景 token |
| handle | focus-visible:outline-2 focus-visible:outline-primary | 聚焦轮廓用 primary（#22c55e） |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| 无圆角 / 无阴影 | - | 主题未内建 |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| orientation=horizontal | handle w-2 cursor-col-resize |
| orientation=vertical | handle h-2 cursor-row-resize |
| disabled=true | handle data-[panel-resize-handle-enabled=false]:cursor-default |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | handle role="separator" tabindex=0（reka-ui 语义）；方向键按 keyboardResizeBy（默认 10）调整相邻面板；Home / End 跳至最小 / 最大（reka-ui Splitter 行为实现确认） |
| ARIA | handle role="separator" + aria-orientation + data-state（inactive / drag / keyboard）+ data-panel-resize-handle-enabled；panel 无角色 |
| 动效 | 无过渡（即时响应） |
