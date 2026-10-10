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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | nav | 渲染为指定元素 |
| page | number | - | 当前页码（受控） |
| defaultPage | number | - | 初始页码 |
| total | number | 0 | 数据总数 |
| itemsPerPage | number | 10 | 每页条数 |
| showEdges | boolean | false | 始终显示第一页、最后一页与省略号 |
| siblingCount | number | 2 | 当前页两侧的页码数量 |
| disabled | boolean | false | 是否禁用 |
| showControls | boolean | true | 是否显示首页、上一页、下一页与末页按钮 |
| firstIcon / prevIcon / nextIcon / lastIcon / ellipsisIcon | XIconName | - | 各控制按钮图标 |
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
