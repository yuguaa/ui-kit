---
title: Table 表格
description: 展示行列数据，支持状态标签、加载与分页
---

# Table 表格

展示行列数据，支持单元格自定义渲染、加载状态与分页。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
import TableSortSelect from '@demos/react/table-sort-select'
import tableSortSelectRaw from '@demos/react/table-sort-select.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="列配置 + 状态标签渲染 + 分页" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 排序、行选择与固定表头

列配置 `sortable` 后点击表头切换升序 / 降序 / 取消；`rowSelection` 开启行选择列并支持全选；`sticky` 配合 `maxHeight` 固定表头，内容区独立滚动。

<DemoBlock title="排序 + 行选择 + 固定表头" description="sortable / rowSelection / sticky" :code="tableSortSelectRaw">
  <ReactDemo :component="TableSortSelect" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-table
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | { key, title, width?, align?, sortable?, render? }[] | [] | 表格列配置 |
| dataSource | T[] | [] | 数据源数组 |
| rowKey | string | key | 行唯一键 |
| loading | boolean | false | 加载状态 |
| size | sm · md | md | 表格尺寸 |
| sticky / maxHeight | boolean / number · string | false / - | 固定表头及内容区最大高度 |
| rowSelection | boolean | false | 显示行选择列 |
| selectedRowKeys | string[] | - | 受控选中行（不传时组件内部维护） |
| pagination | { current?, pageSize?, total? } · false | 默认分页 | 分页配置 |
| emptyText | ReactNode | 暂无数据 | 空数据提示 |
| onPageChange | (page, pageSize) => void | - | 页码变化回调 |
| onSelectionChange | (keys: string[]) => void | - | 选中行变化回调 |

## hook

```tsx
const [Table, tableApi] = useXTable({ columns, dataSource, onReload })
tableApi.setLoading(true)   // loading / page 可读，setLoading / reload / setPage
```

## 动效

- 行：hover 背景过渡
