---
title: Table 表格
description: 展示行列数据，支持排序、筛选、固定列与加载状态
---

# Table 表格

基于 TanStack Table 的表格，列配置直接使用 `ColumnDef`，支持排序、列筛选、固定列、行选择、固定表头与加载状态。

<script setup>
import TableBasic from '@demos/react/table-basic'
import tableBasicRaw from '@demos/react/table-basic.tsx.code.txt?raw'
import TableSortSelect from '@demos/react/table-sort-select'
import tableSortSelectRaw from '@demos/react/table-sort-select.tsx.code.txt?raw'
import TableUiCustom from '@demos/react/table-ui-custom'
import tableUiCustomRaw from '@demos/react/table-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法与列筛选

`columns` 为 TanStack `ColumnDef` 数组，`data` 为数据源。`caption` 提供无障碍表格说明，`columnFiltersOptions` 开启列筛选（`state` 与 `onColumnFiltersChange` 受控）。

<DemoBlock title="基础渲染 + caption + 列筛选" description="columns / data / caption / columnFiltersOptions" :code="tableBasicRaw">
  <ReactDemo :component="TableBasic" />
</DemoBlock>

## 排序、行选择与固定列

`sortingOptions` 开启排序后，在列定义的 `header` 中调用 `column.toggleSorting()`；`columnPinningOptions` 开启固定列；`rowSelectionOptions` 开启行选择；`sticky` 固定表头，外层容器限高后内容区独立滚动。

<DemoBlock title="排序 + 行选择 + 固定列" description="sortingOptions / columnPinningOptions / rowSelectionOptions / sticky" :code="tableSortSelectRaw">
  <ReactDemo :component="TableSortSelect" />
</DemoBlock>

## ui 插槽与加载 / 空态

`ui` 按主题插槽覆盖类名；`loading` 时默认渲染骨架行，也可用 `loadingSlot` 自定义；`emptySlot` 覆盖空数据提示。

<DemoBlock title="ui 插槽 · loading · empty" description="ui 类名 / loadingSlot / emptySlot" :code="tableUiCustomRaw">
  <ReactDemo :component="TableUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-table
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | div | 渲染为指定元素 |
| data | T[] | [] | 数据源数组 |
| columns | XTableColumn\<T\>[] | 自动生成 | 列配置（TanStack ColumnDef） |
| caption | ReactNode | - | 表格说明文字 |
| meta | TableMeta\<T\> | - | 行与列的 meta 配置（类名 / 样式） |
| empty | ReactNode | 暂无数据 | 无数据时展示的文字 |
| sticky | boolean · header · footer | false | 固定表头 / 表尾 |
| loading | boolean | false | 加载状态 |
| globalFilterOptions | GlobalFilterOptions\<T\> & { state? } | - | TanStack 全局筛选选项 |
| columnFiltersOptions | ColumnFiltersOptions\<T\> & { state? } | - | TanStack 列筛选选项 |
| columnPinningOptions | ColumnPinningOptions & { state? } | - | TanStack 固定列选项 |
| columnSizingOptions | ColumnSizingOptions & { state? } | - | TanStack 列宽调整选项 |
| visibilityOptions | VisibilityOptions & { state? } | - | TanStack 列显示选项 |
| sortingOptions | SortingOptions\<T\> & { state? } | - | TanStack 排序选项 |
| groupingOptions | GroupingOptions & { state? } | - | TanStack 分组选项 |
| expandedOptions | ExpandedOptions\<T\> & { state? } | - | TanStack 展开选项 |
| rowSelectionOptions | RowSelectionOptions\<T\> & { state? } | - | TanStack 行选择选项 |
| rowPinningOptions | RowPinningOptions\<T\> & { state? } | - | TanStack 固定行选项 |
| paginationOptions | PaginationOptions & { state? } | - | TanStack 分页选项 |
| facetedOptions | FacetedOptions\<T\> | - | TanStack 列聚合选项 |
| onSelect | (event, row) => void | - | 行选择回调（点击交互元素内部时忽略） |
| onHover | (event, row \| null) => void | - | 行悬停回调 |
| onContextMenu | ((event, row) => void) \| ((event, row) => void)[] | - | 行右键回调 |
| ui | XTableUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |
| expandedSlot | (row) => ReactNode | - | 展开行渲染函数 |
| loadingSlot | ReactNode | - | 加载内容 |
| emptySlot | ReactNode | - | 空数据内容 |
| bodyTop / bodyBottom | ReactNode | - | 表体上方 / 下方内容 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 滚动容器 |
| base | table 元素 |
| caption | 表格说明 |
| thead | 表头 |
| tbody | 表体 |
| tfoot | 表尾 |
| tr | 数据行 |
| th | 表头单元格 |
| td | 数据单元格 |
| separator | 表头 / 表尾分隔线 |
| empty | 空数据提示 |
| loading | 加载提示 |

**ref 方法**：`tableApi`（TanStack Table 实例）

## hook

```tsx
const [Table, tableApi] = useXTable({ columns, data, onReload })
tableApi.setLoading(true)   // loading 可读，setLoading / reload
```

## 动效

- 行：hover 背景过渡；表头排序图标随排序状态切换
