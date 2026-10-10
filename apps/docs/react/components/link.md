---
title: Link 链接
description: 页面内或跨页面的超链接，支持前后图标与激活态
---

# Link 链接

页面内或跨页面的超链接，支持 leading / trailing 图标、active / inactiveClass 状态与 ui.base 类名定制。

<script setup>
import LinkBasic from '@demos/react/link-basic'
import linkBasicRaw from '@demos/react/link-basic.tsx.code.txt?raw'
import LinkIcons from '@demos/react/link-icons'
import linkIconsRaw from '@demos/react/link-icons.tsx.code.txt?raw'
import LinkStates from '@demos/react/link-states'
import linkStatesRaw from '@demos/react/link-states.tsx.code.txt?raw'
</script>

## 基础用法

color 提供 primary / secondary / neutral 三档颜色。

<DemoBlock title="颜色" description="color 属性控制链接颜色" :code="linkBasicRaw">
  <ReactDemo :component="LinkBasic" />
</DemoBlock>

## 图标

<DemoBlock title="前置 / 后置图标" description="leading / trailing" :code="linkIconsRaw">
  <ReactDemo :component="LinkIcons" />
</DemoBlock>

## 状态

`active` 表示激活态；`inactiveClass` 仅在非激活态应用；`disabled` 移除 href 并阻止交互；`ui.base` 覆盖根元素类名；`render` 可渲染为其他元素。

<DemoBlock title="激活 · 非激活 · 禁用" description="active / inactiveClass / disabled / ui.base / render" :code="linkStatesRaw">
  <ReactDemo :component="LinkStates" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-link
```

## API

<!--@include: ./api/link.md-->

**插槽**：leading / trailing 前置与后置图标

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 链接根元素 |

## 动效

- hover：文字颜色过渡
- 无位移动画
