---
title: Table 表格
description: 展示行列数据，支持排序、筛选、固定列与加载状态
---

# Table 表格

基于 TanStack Table 的表格，列配置直接使用 `ColumnDef`，支持排序、列筛选、固定列、行选择、固定表头与加载状态。

<script setup>
import TableBasic from '@demos/vue/table-basic.vue'
import tableBasicRaw from '@demos/vue/table-basic.vue.code.txt?raw'
import TableSortSelect from '@demos/vue/table-sort-select.vue'
import tableSortSelectRaw from '@demos/vue/table-sort-select.vue.code.txt?raw'
import TableUiCustom from '@demos/vue/table-ui-custom.vue'
import tableUiCustomRaw from '@demos/vue/table-ui-custom.vue.code.txt?raw'
</script>

## 基础用法与列筛选

`columns` 为 TanStack `ColumnDef` 数组，`data` 为数据源。`caption` 提供无障碍表格说明，`columnFiltersOptions` 开启列筛选，`v-model:columnFilters` 受控筛选状态。

<DemoBlock title="基础渲染 + caption + 列筛选" description="columns / data / caption / columnFiltersOptions" :code="tableBasicRaw">
  <TableBasic />
</DemoBlock>

## 排序、行选择与固定列

`sortingOptions` 开启排序后，在 `<名称>-header` 动态插槽中调用 `column.toggleSorting()`；`columnPinningOptions` 开启固定列（`v-model:columnPinning` 指定左右固定列）；`rowSelectionOptions` 开启行选择；`sticky` 固定表头，外层容器限高后内容区独立滚动。

<DemoBlock title="排序 + 行选择 + 固定列" description="sortingOptions / columnPinningOptions / rowSelectionOptions / sticky" :code="tableSortSelectRaw">
  <TableSortSelect />
</DemoBlock>

## ui 插槽与加载 / 空态

`ui` 按主题插槽覆盖类名；`loading` 时默认渲染骨架行，也可用 `loading` 插槽自定义；`empty` 插槽覆盖空数据提示。

<DemoBlock title="ui 插槽 · loading · empty" description="ui 类名 / loading 插槽 / empty 插槽" :code="tableUiCustomRaw">
  <TableUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-table
```

## API

<!--@include: ./api/table.md-->

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

## 插槽

| 名称 | 说明 |
| --- | --- |
| caption | 表格说明内容 |
| empty | 空数据内容 |
| loading | 加载内容 |
| expanded | 展开行内容（{ row }） |
| body-top / body-bottom | 表体上方 / 下方内容 |
| `{列id}-header` / `{列id}-footer` | 表头 / 表尾单元格（header.getContext()） |
| `{列id}-cell` | 数据单元格（cell.getContext()） |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:globalFilter | 全局筛选状态变化（v-model:global-filter） |
| update:columnFilters | 列筛选状态变化（v-model:column-filters） |
| update:columnOrder | 列顺序变化（v-model:column-order） |
| update:columnVisibility | 列显示状态变化（v-model:column-visibility） |
| update:columnPinning | 固定列状态变化（v-model:column-pinning） |
| update:columnSizing / update:columnSizingInfo | 列宽状态变化 |
| update:rowSelection | 行选择状态变化（v-model:row-selection） |
| update:rowPinning | 固定行状态变化（v-model:row-pinning） |
| update:sorting | 排序状态变化（v-model:sorting） |
| update:grouping | 分组状态变化（v-model:grouping） |
| update:expanded | 展开状态变化（v-model:expanded） |
| update:pagination | 分页状态变化（v-model:pagination） |

**方法**（ref 调用）：`tableApi`（TanStack Table 实例）

## hook

```ts
const [Table, tableApi] = useXTable({ columns, data })
tableApi.setLoading(true)   // loading 可读，setLoading / reload
```

## 动效

- 行：hover 背景过渡；表头排序图标随排序状态切换

## 设计规格

### 主题 token

- 背景：sticky / pinned 表头表尾 `bg-default/75`（#ffffff/75% / 暗色 #171717/75%）+ `backdrop-blur-sm`；选中行 `bg-elevated/50`；可选中行 hover `bg-elevated/50`
- 文字：th `text-highlighted`（#171717 / 暗色 #ffffff）`font-semibold`；td `text-muted`；empty / loading `text-muted`
- 描边：行间 `divide-y divide-default`（#e5e5e5 / 暗色 #262626）；表头尾分隔线 `bg-(--ui-border-accented)`（#d4d4d4 / 暗色 #404040）；根 `focus-visible:outline-3 outline-primary/25`
- 圆角与阴影：无
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| pinned | true | 列单元格 `sticky bg-default/75 z-1` |
| sticky | true / header / footer | thead / tfoot `sticky bg-default/75 backdrop-blur-sm z-1` |
| loading | true | thead 顶部 `after:` 加载指示条（见动效） |
| externalScroll | true | `root: overflow-visible`（外部容器接管滚动） |
| loadingAnimation | carousel / carousel-inverse / swing / elastic | 指示条动画（2s 循环，`motion-safe` 生效） |
| loadingColor | 六色 + neutral | 指示条 `after:bg-{color}`；neutral → `after:bg-inverted` |

### 交互

- 键盘：传入 `onSelect` 时行 `<tr tabindex="0">` 可聚焦，Enter / Space 触发行选中（`keydown.self.exact.enter.space`，忽略按键重复）；点击行内 `a / button / input / label / select / textarea` 内部不触发行选中
- ARIA：th 输出 `scope="col"`（跨列输出 `colgroup`）；排序列输出 `aria-sort`（ascending / descending / none，仅主排序键所在可见列）；caption `sr-only`；虚拟滚动占位行 `aria-hidden`
- 动效：加载指示条 `carousel / carousel-inverse / swing / elastic` 2s 循环；`motion-reduce` 下关闭动画仅保留脉冲；其余无过渡
