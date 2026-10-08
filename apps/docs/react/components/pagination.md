---
title: Pagination 分页
description: 对长列表数据进行分页浏览
---

# Pagination 分页

对长列表数据进行分页浏览，支持省略号与每页条数切换。

<script setup>
import NavigationBasic from '@demos/react/navigation-basic'
import navigationBasicRaw from '@demos/react/navigation-basic.tsx.code.txt?raw'
import PaginationControls from '@demos/react/pagination-controls'
import paginationControlsRaw from '@demos/react/pagination-controls.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="省略号分页与页码切换" :code="navigationBasicRaw">
  <ReactDemo :component="NavigationBasic" />
</DemoBlock>

<DemoBlock title="首页末页按钮" description="showControls 在页码列表两端显示首页与末页按钮" :code="paginationControlsRaw">
  <ReactDemo :component="PaginationControls" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-pagination
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| current | number | 1 | 当前页数 |
| total | number | 0 | 数据总数 |
| pageSize | number | 10 | 每页条数 |
| showSizeChanger | boolean | false | 是否显示每页条数切换 |
| showControls | boolean | false | 是否显示首页与末页按钮 |
| disabled | boolean | false | 是否禁用 |
| onChange | (page, pageSize) => void | - | 页码或每页条数变化回调 |

## 动效

- 页面项：hover 背景过渡
