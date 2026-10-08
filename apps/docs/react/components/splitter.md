---
title: Splitter 分割面板
description: 可拖拽调整大小的分栏面板
---

# Splitter 分割面板

可拖拽调整大小的分栏面板。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
import SplitterCollapsible from '@demos/react/splitter-collapsible'
import splitterCollapsibleRaw from '@demos/react/splitter-collapsible.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="拖拽中间分割线调整左右比例" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 可折叠

开启 `collapsible` 后，拖拽分隔条越过一半最小尺寸即折叠被压缩一侧的面板，分隔条停在边界，点击该侧的按钮恢复面板。

<DemoBlock title="可折叠" description="拖到边界折叠，点击按钮展开" :code="splitterCollapsibleRaw">
  <ReactDemo :component="SplitterCollapsible" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-splitter
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 方向 |
| minSize | number | 20 | 最小尺寸（百分比） |
| defaultSize | number | 50 | 默认尺寸（百分比） |
| size | number | - | 受控尺寸（百分比） |
| collapsible | boolean | false | 拖到边界时折叠对应面板 |
| first / second | ReactNode | - | 左侧 / 右侧面板 |
| onResize | (size) => void | - | 调整尺寸回调，折叠时触发 0 / 100，展开时恢复原尺寸 |

## hook

```tsx
const [Splitter, splitterApi] = useXSplitter()
splitterApi.resize(30)   // size 可读，resize 调整
```

## 动效

- 拖拽：即时响应，无过渡动效
- 折叠 / 展开：即时切换，无过渡动效
