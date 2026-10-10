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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as | string · Component | nav | 渲染为指定元素或组件 |
| page | number | - | 当前页码（受控，支持 v-model:page） |
| defaultPage | number | - | 初始页码 |
| total | number | 0 | 数据总数 |
| itemsPerPage | number | 10 | 每页条数 |
| showEdges | boolean | false | 始终显示第一页、最后一页与省略号 |
| siblingCount | number | 2 | 当前页两侧的页码数量 |
| disabled | boolean | false | 是否禁用 |
| showControls | boolean | true | 是否显示首页、上一页、下一页与末页按钮 |
| firstIcon / prevIcon / nextIcon / lastIcon / ellipsisIcon | IconName | - | 各控制按钮图标 |
| color | ButtonColor | neutral | 页码按钮颜色 |
| variant | ButtonVariant | outline | 页码按钮样式 |
| size | ButtonSize | - | 页码按钮尺寸 |
| activeColor | ButtonColor | primary | 激活页码颜色 |
| activeVariant | ButtonVariant | solid | 激活页码样式 |
| to | (page) => ButtonAs | - | 将页码控件渲染为链接 |
| ui | PaginationUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

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
