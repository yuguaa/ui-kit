## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| class? | any | - |  |
| style? | any | - |  |
| id? | any | - |  |
| title? | any | - |  |
| role? | any | - |  |
| name? | any | - |  |
| type? | any | - |  |
| value? | any | - |  |
| placeholder? | any | - |  |
| disabled? | any | - |  |
| required? | any | - |  |
| readonly? | any | - |  |
| autocomplete? | any | - |  |
| autofocus? | any | - |  |
| tabindex? | any | - |  |
| form? | any | - |  |
| minlength? | any | - |  |
| maxlength? | any | - |  |
| pattern? | any | - |  |
| step? | any | - |  |
| min? | any | - |  |
| max? | any | - |  |
| multiple? | any | - |  |
| checked? | any | - |  |
| size? | any | - |  |
| rows? | any | - |  |
| cols? | any | - |  |
| wrap? | any | - |  |
| accept? | any | - |  |
| capture? | any | - |  |
| download? | any | - |  |
| href? | any | - |  |
| target? | any | - |  |
| rel? | any | - |  |
| loading? | any | - |  |
| accesskey? | any | - |  |
| contenteditable? | any | - |  |
| draggable? | any | - |  |
| hidden? | any | - |  |
| lang? | any | - |  |
| slot? | any | - |  |
| autocapitalize? | any | - |  |
| autocorrect? | any | - |  |
| spellcheck? | any | - |  |
| enterkeyhint? | any | - |  |
| inputmode? | any | - |  |
| aria-label? | any | - |  |
| aria-describedby? | any | - |  |
| aria-hidden? | any | - |  |
| aria-expanded? | any | - |  |
| aria-current? | any | - |  |
| aria-checked? | any | - |  |
| aria-controls? | any | - |  |
| aria-disabled? | any | - |  |
| aria-invalid? | any | - |  |
| aria-live? | any | - |  |
| aria-selected? | any | - |  |
| data-testid? | any | - |  |
| as? | any | 'div' | The element or component this component should render as. |
| data? | T[] | - |  |
| columns? | TableColumn&lt;T&gt;[] | - |  |
| caption? | string | - |  |
| meta? | TableMeta&lt;T&gt; | - |  |
| virtualize? | boolean \| (Partial&lt;Omit&lt;VirtualizerOptions&lt;Element, Element&gt;, 'coun | - |  |
| getScrollElement? | () =&gt; Element \| null | undefined | Virtualize against an external scroll element instead of the |
| overscan? | number | 12 | Number of items rendered outside the visible area |
| empty? | string | t('table.noData') | The text to display when the table is empty. |
| sticky? | boolean \| 'header' \| 'footer' | false | Whether the table should have a sticky header or footer. Tru |
| loading? | boolean | - | Whether the table should be in loading state. |
| loadingColor? | Table['variants']['loadingColor'] | 'primary' |  |
| loadingAnimation? | Table['variants']['loadingAnimation'] | 'carousel' |  |
| watchOptions? | WatchOptions | - |  |
| globalFilterOptions? | Omit&lt;GlobalFilterOptions&lt;T&gt;, 'onGlobalFilterChange'&gt; | - |  |
| columnFiltersOptions? | Omit&lt;ColumnFiltersOptions&lt;T&gt;, 'getFilteredRowModel' \| 'onColumnFilters | - |  |
| columnPinningOptions? | Omit&lt;ColumnPinningOptions, 'onColumnPinningChange'&gt; | - |  |
| columnSizingOptions? | Omit&lt;ColumnSizingOptions, 'onColumnSizingChange' \| 'onColumnSizingInfoChange | - |  |
| visibilityOptions? | Omit&lt;VisibilityOptions, 'onColumnVisibilityChange'&gt; | - |  |
| sortingOptions? | Omit&lt;SortingOptions&lt;T&gt;, 'getSortedRowModel' \| 'onSortingChange'&gt; | - |  |
| groupingOptions? | Omit&lt;GroupingOptions, 'onGroupingChange'&gt; | - |  |
| expandedOptions? | Omit&lt;ExpandedOptions&lt;T&gt;, 'getExpandedRowModel' \| 'onExpandedChange'&gt | - |  |
| rowSelectionOptions? | Omit&lt;RowSelectionOptions&lt;T&gt;, 'onRowSelectionChange'&gt; | - |  |
| rowPinningOptions? | Omit&lt;RowPinningOptions&lt;T&gt;, 'onRowPinningChange'&gt; | - |  |
| paginationOptions? | Omit&lt;PaginationOptions, 'onPaginationChange'&gt; | - |  |
| facetedOptions? | FacetedOptions&lt;T&gt; | - |  |
| onSelect? | (e: Event, row: TableRow&lt;T&gt;) =&gt; void | - |  |
| onHover? | (e: Event, row: TableRow&lt;T&gt; \| null) =&gt; void | - |  |
| onContextmenu? | ((e: Event, row: TableRow&lt;T&gt;) =&gt; void) \| Array&lt;((e: Event, row: Tab | - |  |
| class? | any | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| expanded? | (props: { row: Row&lt;T&gt; }) =&gt; VNode[] | - |  |
| empty? | (props?: {}) =&gt; VNode[] | - |  |
| loading? | (props?: {}) =&gt; VNode[] | - |  |
| caption? | (props?: {}) =&gt; VNode[] | - |  |
| body-top? | (props?: {}) =&gt; VNode[] | - |  |
| body-bottom? | (props?: {}) =&gt; VNode[] | - |  |
