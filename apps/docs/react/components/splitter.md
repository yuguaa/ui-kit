---
title: Splitter 分割面板
description: 可拖拽调整大小的分栏面板
---

# Splitter 分割面板

可拖拽调整大小的分栏面板，支持 items 数组形态与任意数量面板。

<script setup>
import SplitterBasic from '@demos/react/splitter-basic'
import splitterBasicRaw from '@demos/react/splitter-basic.tsx.code.txt?raw'
import SplitterCollapsible from '@demos/react/splitter-collapsible'
import splitterCollapsibleRaw from '@demos/react/splitter-collapsible.tsx.code.txt?raw'
import SplitterDisabled from '@demos/react/splitter-disabled'
import splitterDisabledRaw from '@demos/react/splitter-disabled.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="items 数组渲染三个面板与两个拖拽条" :code="splitterBasicRaw">
  <ReactDemo :component="SplitterBasic" />
</DemoBlock>

## 可折叠

开启 `collapsible` 后，拖拽分隔条越过一半最小尺寸即折叠被压缩一侧的面板，分隔条停在边界，点击该侧的按钮恢复面板。

<DemoBlock title="可折叠" description="拖到边界折叠，点击按钮展开" :code="splitterCollapsibleRaw">
  <ReactDemo :component="SplitterCollapsible" />
</DemoBlock>

## disabled 与 ui 插槽

`disabled` 锁定全部拖拽条；`ui` 按主题插槽（root / panel / handle）覆盖类名。

<DemoBlock title="disabled 与 ui 插槽" description="disabled 锁定拖拽，ui 插槽类名" :code="splitterDisabledRaw">
  <ReactDemo :component="SplitterDisabled" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-splitter
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 方向 |
| items | XSplitterItem[] | - | 面板数组；未提供时使用 first / second 双面板形态 |
| disabled | boolean | false | 锁定全部拖拽 |
| id | string | - | 分组 id |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XSplitterUi | - | 主题插槽类名 |
| minSize | number | 20 | 双面板形态：最小尺寸（百分比） |
| defaultSize | number | 50 | 双面板形态：默认尺寸（百分比） |
| size | number | - | 双面板形态：受控尺寸（百分比） |
| collapsible | boolean | false | 双面板形态：拖拽越过边界时折叠对应面板 |
| first / second | ReactNode | - | 双面板形态的左右（上下）面板 |
| onLayout | (sizes: number[]) => void | - | 布局变化回调 |
| onCollapse | (index: number) => void | - | 面板折叠回调 |
| onExpand | (index: number) => void | - | 面板展开回调 |
| onResize | (index, size, prevSize?) => void | - | 面板尺寸变化回调 |
| onDragging | (index, dragging) => void | - | 拖拽状态变化回调 |

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
