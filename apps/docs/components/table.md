---
title: Table 表格
description: 展示行列数据，支持状态标签、加载与分页
---

# Table 表格

展示行列数据，支持单元格自定义渲染、加载状态与分页。

<script setup>
import ContentBasic from '@demos/vue/content-basic.vue'
import contentBasicRaw from '@demos/vue/content-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="列配置 + 状态标签渲染 + 分页" :code="contentBasicRaw">
  <ContentBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-table
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | { key, title, width? }[] | [] | 表格列配置 |
| dataSource | object[] | [] | 数据源数组 |
| rowKey | string | key | 行唯一键 |
| loading | boolean | false | 加载状态 |
| size | sm · md | md | 表格尺寸 |
| pagination | { current?, pageSize?, total? } · false | 默认分页 | 分页配置 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| headerCell | 表头单元格插槽（{ column }） |
| bodyCell | 单元格内容插槽（{ column, record, index }） |
| emptyText | 空数据提示插槽 |

## 事件

| 名称 | 说明 |
| --- | --- |
| pageChange | 页码或每页条数变化回调 |

**方法**（ref 调用）：reload()

## hook

```ts
const [Table, tableApi] = useXTable({ columns, dataSource })
tableApi.setLoading(true)   // loading / page 可读，setLoading / reload / setPage
```

## 动效

- 行：hover 背景过渡
