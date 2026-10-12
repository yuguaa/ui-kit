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

<!--@include: ./api/table.md-->
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

## 设计规格

### 主题 token

- 背景：sticky / pinned 表头表尾 `bg-background/75` + `backdrop-blur-sm`；选中行 `bg-muted/50`；可选中行 hover `bg-muted/50`
- 文字：th `text-foreground font-semibold`；td `text-muted-foreground`；empty / loading 居中
- 描边：行间 `divide-y`；表头尾分隔线 `bg-border`；根 `focus-visible:outline-3 outline-primary/25`
- 圆角与阴影：无
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| pinned | true | 列单元格 `sticky z-1 bg-background/75` |
| sticky | true / header / footer | thead / tfoot `sticky inset-x-0 top-0 z-1 bg-background/75 backdrop-blur-sm` |
| loading | true | thead 顶部 `after:` 加载指示条 |
| externalScroll | true | 根 `overflow-visible` |
| loadingAnimation | carousel / carousel-inverse / swing / elastic | `after:` 动画 2s 循环（`motion-safe`） |
| loadingColor | 六色 + neutral | `after:bg-{color}`；neutral → `after:bg-inverted` |

### 交互

- 键盘：传入 `onSelect` 时行 `tabIndex=0` 可聚焦，Enter / Space 触发行选中（`event.target === event.currentTarget` 时生效，忽略按键重复）；点击行内交互元素内部不触发行选中
- ARIA：th 输出 `scope="col"`（跨列 `colgroup`）；排序列输出 `aria-sort`（ascending / descending / none）；caption `sr-only`；虚拟滚动占位行 `aria-hidden`
- 动效：加载指示条 `carousel / carousel-inverse / swing / elastic` 2s 循环；`motion-reduce` 下仅脉冲；其余无过渡

**双端差异**：

- Vue 端 sticky 背景 `bg-default/75`、选中行 `bg-elevated/50`、文字 `text-highlighted` / `text-muted`；React 端对应 `bg-background/75`、`bg-muted/50`、`text-foreground` / `text-muted-foreground`（同语义映射）
