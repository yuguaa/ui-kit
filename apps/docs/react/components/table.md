---
title: Table 表格
description: 展示行列数据，支持状态标签、加载与分页
---

# Table 表格

展示行列数据，支持单元格自定义渲染、加载状态与分页。

<script setup>
import ContentBasic from '@demos/react/content-basic'
import contentBasicRaw from '@demos/react/content-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="列配置 + 状态标签渲染 + 分页" :code="contentBasicRaw">
  <ReactDemo :component="ContentBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-table
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | { key, title, width?, render? }[] | [] | 表格列配置 |
| dataSource | T[] | [] | 数据源数组 |
| rowKey | string | key | 行唯一键 |
| loading | boolean | false | 加载状态 |
| size | sm · md | md | 表格尺寸 |
| pagination | { current?, pageSize?, total? } · false | 默认分页 | 分页配置 |
| emptyText | ReactNode | 暂无数据 | 空数据提示 |
| onPageChange | (page, pageSize) => void | - | 页码变化回调 |

## hook

```tsx
const [Table, tableApi] = useXTable({ columns, dataSource, onReload })
tableApi.setLoading(true)   // loading / page 可读，setLoading / reload / setPage
```

## 动效

- 行：hover 背景过渡
