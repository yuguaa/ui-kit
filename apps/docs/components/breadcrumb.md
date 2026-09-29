---
title: Breadcrumb 面包屑
description: 显示当前页面在层级结构中的位置
---

# Breadcrumb 面包屑

显示当前页面在层级结构中的位置。

<script setup>
import NavigationBasic from '@demos/vue/navigation-basic.vue'
import navigationBasicRaw from '@demos/vue/navigation-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="层级结构与分隔符（示例见顶部）" :code="navigationBasicRaw">
  <NavigationBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-breadcrumb
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { title, href? }[] | - | 面包屑项数组（末项可省略 href） |
| separator | string | / | 分隔符 |
| disabled | boolean | false | 是否禁用 |

## 动效

- hover：链接文字颜色过渡
- 无位移动画
