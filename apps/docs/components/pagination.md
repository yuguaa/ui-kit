---
title: Pagination 分页
description: 对长列表数据进行分页浏览
---

# Pagination 分页

由 reka-ui PaginationRoot 计算页码序列，页码与首末按钮用 XButton 渲染，`color` / `variant` / `size` 与激活态（`activeColor` / `activeVariant`）独立配置。

<script setup>
import PaginationBasic from '@demos/vue/pagination-basic.vue'
import paginationBasicRaw from '@demos/vue/pagination-basic.vue.code.txt?raw'
import PaginationControls from '@demos/vue/pagination-controls.vue'
import paginationControlsRaw from '@demos/vue/pagination-controls.vue.code.txt?raw'
import PaginationUiCustom from '@demos/vue/pagination-ui-custom.vue'
import paginationUiCustomRaw from '@demos/vue/pagination-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

`v-model:page` 受控当前页，`total` 与 `itemsPerPage` 计算总页数，`showEdges` 始终显示第一页、最后一页与省略号。

<DemoBlock title="受控页码 + 省略号" description="v-model:page / total / itemsPerPage / showEdges" :code="paginationBasicRaw">
  <PaginationBasic />
</DemoBlock>

## 首页末页按钮与图标自定义

`showControls` 在页码列表两端显示首页与末页按钮；`firstIcon` / `prevIcon` / `nextIcon` / `lastIcon` 自定义控制按钮图标；`color` / `variant` / `size` 与激活态颜色样式组合使用。

<DemoBlock title="showControls + 图标 + 颜色样式" description="showControls / firstIcon / prevIcon / nextIcon / lastIcon / color / variant / size" :code="paginationControlsRaw">
  <PaginationControls />
</DemoBlock>

## ui 插槽与页码插槽

`ui` 按主题插槽覆盖类名；`item` 插槽自定义页码渲染（参数含 item / index / page / pageCount）。

<DemoBlock title="ui 插槽 · item 插槽" description="ui 类名 / item 插槽" :code="paginationUiCustomRaw">
  <PaginationUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-pagination
```

## API

<!--@include: ./api/pagination.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 分页根元素 |
| list | 页码列表 |
| first / prev / next / last | 首页 / 上一页 / 下一页 / 末页按钮 |
| item | 页码按钮 |
| ellipsis | 省略号控件 |
| label | 页码文字 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| first / prev / next / last | 各控制按钮内容 |
| ellipsis | 省略号内容（{ ui }） |
| item | 页码内容（{ item, index, page, pageCount }） |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:page | 页码变化回调 |

## 动效

- 按钮：hover / active 颜色过渡

## 设计规格

### 主题 token

- 背景：无，按钮背景由 `XButton` 主题提供
- 文字：页码按钮文字 `min-w-5 text-center` 居中；其余无
- 描边：无，按钮描边由 `XButton` 主题提供
- 圆角与阴影：无，由 `XButton` 提供
- 变体：

| 配置 | 默认值 | token 组合 |
| --- | --- | --- |
| color / variant | neutral / outline | 未激活页与首末按钮（XButton `color=neutral variant=outline`） |
| activeColor / activeVariant | primary / solid | 当前页（XButton `color=primary variant=solid`，即 `bg-primary text-inverted`） |
| showEdges / siblingCount | false / 2 | 页码序列窗口（省略号逻辑） |
| size | — | 透传 XButton 尺寸 |

### 交互

- 键盘：页码与首末按钮为原生 `<button>`（Tab 聚焦、Enter / Space 触发）；省略号 `pointer-events-none` 不可聚焦
- ARIA：根渲染 `<nav>`（reka-ui PaginationRoot）；页码按钮 `aria-label="Page {value}"`，当前页 `aria-current="page"` + `data-selected`；整体 `disabled` 时按钮输出 `disabled`
- 动效：XButton hover / active 颜色过渡；RTL 下首、上、下、末图标自动换向（`dir` 判定）
