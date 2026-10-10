## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement | - | 渲染为指定元素 |
| data? | T[] | - | 数据源数组 |
| columns? | XTableColumn&lt;T&gt;[] | - | 列配置(TanStack ColumnDef) |
| caption? | React.ReactNode | - | 表格说明文字 |
| meta? | TableMeta&lt;T&gt; | - | 行与列的 meta 配置(类名 / 样式) |
| empty? | React.ReactNode | - | 无数据时展示的文字 |
| sticky? | boolean \| "header" \| "footer" | - |  |
| loading? | boolean | - | 加载状态 |
| globalFilterOptions? | GlobalFilterOptions&lt;T&gt; & { state?: { globalFilter?: TableState["globalFilt | - | TanStack 全局筛选选项(state 可受控) |
| columnFiltersOptions? | Omit&lt;ColumnFiltersOptions&lt;T&gt;, "getFilteredRowModel"&gt; & { state?: { c | - | TanStack 列筛选选项(state 可受控) |
| columnPinningOptions? | ColumnPinningOptions & { state?: { columnPinning?: TableState["columnPinning"] } | - | TanStack 固定列选项(state 可受控) |
| columnSizingOptions? | ColumnSizingOptions & { state?: { columnSizing?: TableState["columnSizing"]; col | - | TanStack 列宽调整选项(state 可受控) |
| visibilityOptions? | VisibilityOptions & { state?: { columnVisibility?: TableState["columnVisibility" | - | TanStack 列显示选项(state 可受控) |
| sortingOptions? | Omit&lt;SortingOptions&lt;T&gt;, "getSortedRowModel"&gt; & { state?: { sorting?: | - | TanStack 排序选项(state 可受控) |
| groupingOptions? | GroupingOptions & { state?: { grouping?: TableState["grouping"] } } | - | TanStack 分组选项(state 可受控) |
| expandedOptions? | Omit&lt;ExpandedOptions&lt;T&gt;, "getExpandedRowModel"&gt; & { state?: { expand | - | TanStack 展开选项(state 可受控) |
| rowSelectionOptions? | RowSelectionOptions&lt;T&gt; & { state?: { rowSelection?: TableState["rowSelecti | - | TanStack 行选择选项(state 可受控) |
| rowPinningOptions? | RowPinningOptions&lt;T&gt; & { state?: { rowPinning?: TableState["rowPinning"] } | - | TanStack 固定行选项(state 可受控) |
| paginationOptions? | PaginationOptions & { state?: { pagination?: TableState["pagination"] } } | - | TanStack 分页选项(state 可受控) |
| facetedOptions? | FacetedOptions&lt;T&gt; | - | TanStack 列聚合选项 |
| onSelect? | (event: React.SyntheticEvent, row: Row&lt;T&gt;) =&gt; void | - | 行选择回调(点击交互元素内部时忽略) |
| onHover? | (event: React.SyntheticEvent, row: Row&lt;T&gt; \| null) =&gt; void | - | 行悬停回调 |
| onContextMenu? | ((event: React.SyntheticEvent, row: Row&lt;T&gt;) =&gt; void) \| Array&lt;(event | - | 行右键回调 |
| ui? | XTableUi | - | 主题插槽类名 |
| className? | string | - |  |
| expandedSlot? | (row: Row&lt;T&gt;) =&gt; React.ReactNode | - | 展开行渲染函数(等价于 expanded 插槽) |
| loadingSlot? | React.ReactNode | - | 加载内容(等价于 loading 插槽) |
| emptySlot? | React.ReactNode | - | 空数据内容(等价于 empty 插槽) |
| bodyTop? | React.ReactNode | - | 表体上方内容 |
| bodyBottom? | React.ReactNode | - | 表体下方内容 |
