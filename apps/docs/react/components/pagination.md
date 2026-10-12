---
title: Pagination 分页
description: 对长列表数据进行分页浏览
---

# Pagination 分页

内置 reka-ui 同款页码序列算法（省略号由 `showEdges` / `siblingCount` 控制），页码与首末按钮用 XButton 渲染，`color` / `variant` / `size` 与激活态（`activeColor` / `activeVariant`）独立配置。

<script setup>
import PaginationBasic from '@demos/react/pagination-basic'
import paginationBasicRaw from '@demos/react/pagination-basic.tsx.code.txt?raw'
import PaginationControls from '@demos/react/pagination-controls'
import paginationControlsRaw from '@demos/react/pagination-controls.tsx.code.txt?raw'
import PaginationUiCustom from '@demos/react/pagination-ui-custom'
import paginationUiCustomRaw from '@demos/react/pagination-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

`page` 受控当前页（`onPageChange` 回调），`total` 与 `itemsPerPage` 计算总页数，`showEdges` 始终显示第一页、最后一页与省略号。

<DemoBlock title="受控页码 + 省略号" description="page / onPageChange / total / itemsPerPage / showEdges" :code="paginationBasicRaw">
  <ReactDemo :component="PaginationBasic" />
</DemoBlock>

## 首页末页按钮与图标自定义

`showControls` 在页码列表两端显示首页与末页按钮；`firstIcon` / `prevIcon` / `nextIcon` / `lastIcon` 自定义控制按钮图标；`color` / `variant` / `size` 与激活态颜色样式组合使用。

<DemoBlock title="showControls + 图标 + 颜色样式" description="showControls / firstIcon / prevIcon / nextIcon / lastIcon / color / variant / size" :code="paginationControlsRaw">
  <ReactDemo :component="PaginationControls" />
</DemoBlock>

## ui 插槽与页码渲染函数

`ui` 按主题插槽覆盖类名；`itemSlot` 自定义页码渲染（参数含 item / index / page / pageCount）。

<DemoBlock title="ui 插槽 · itemSlot" description="ui 类名 / itemSlot 渲染函数" :code="paginationUiCustomRaw">
  <ReactDemo :component="PaginationUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-pagination
```

## API

<!--@include: ./api/pagination.md-->
| color | XButtonColor | neutral | 页码按钮颜色 |
| variant | XButtonVariant | outline | 页码按钮样式 |
| size | XButtonSize | - | 页码按钮尺寸 |
| activeColor | XButtonColor | primary | 激活页码颜色 |
| activeVariant | XButtonVariant | solid | 激活页码样式 |
| to | (page) => ReactElement | - | 将页码控件渲染为链接 |
| onPageChange | (page) => void | - | 页码变化回调 |
| ui | XPaginationUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |
| first / prev / next / last / ellipsis | ReactNode | - | 各控制按钮内容 |
| itemSlot | (props) => ReactNode | - | 页码渲染函数（{ item, index, page, pageCount }） |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 分页根元素 |
| list | 页码列表 |
| first / prev / next / last | 首页 / 上一页 / 下一页 / 末页按钮 |
| item | 页码按钮 |
| ellipsis | 省略号控件 |
| label | 页码文字 |

## 动效

- 按钮：hover / active 颜色过渡

## 设计规格

### 主题 token

- 背景：无，按钮背景由 `XButton` 提供
- 文字：页码按钮文字居中（`label` 插槽）；其余无
- 描边：无，由 `XButton` 提供
- 圆角与阴影：无，由 `XButton` 提供
- 变体：

| 配置 | 默认值 | token 组合 |
| --- | --- | --- |
| color / variant | neutral / outline | 未激活页与首末按钮 |
| activeColor / activeVariant | primary / solid | 当前页按钮 |
| showEdges / siblingCount | false / 2 | 页码序列窗口（reka-ui 同款算法） |
| size | — | 透传 XButton 尺寸 |

### 交互

- 键盘：页码与首末按钮为原生 `<button>`（Tab 聚焦、Enter / Space 触发）；省略号渲染为不可聚焦的图标按钮
- ARIA：页码按钮输出 `aria-label="Page {value}"` 与 `aria-current="page"`（当前页，由 `page` prop 判定）；整体 `disabled` 时按钮输出 `disabled`
- 动效：XButton hover / active 颜色过渡

**双端差异**：

- Vue 端基于 reka-ui Pagination（根渲染 `<nav>`，`aria-current` 由 PaginationListItem 输出）；React 端手工渲染 `<div>` 根 + 按钮组，`aria-current` 手工输出
- Vue 端 RTL 下首、上、下、末图标自动换向；React 端固定 lucide 图标不换向
- Vue 端 `to` 返回路由地址由 XButton 渲染 NuxtLink；React 端 `to` 返回 ReactElement
