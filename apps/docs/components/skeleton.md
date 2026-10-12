---
title: Skeleton 骨架屏
description: 内容加载时的占位骨架，支持文本 / 圆形 / 矩形三种形状与宽高覆盖
---

# Skeleton 骨架屏

内容加载时的占位骨架。loading 为 false 时渲染插槽中的真实内容，适合包裹异步数据区域。骨架元素带 aria-busy / aria-label / aria-live / role 无障碍标记。

<script setup>
import SkeletonBasic from '@demos/vue/skeleton-basic.vue'
import skeletonBasicRaw from '@demos/vue/skeleton-basic.vue.code.txt?raw'
import SkeletonUi from '@demos/vue/skeleton-ui.vue'
import skeletonUiRaw from '@demos/vue/skeleton-ui.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="形状与 loading 切换" description="variant 控制形状，width / height 覆盖尺寸，loading 切换骨架与真实内容" :code="skeletonBasicRaw">
  <SkeletonBasic />
</DemoBlock>

## ui 插槽与 as

ui.base 注入自定义类名；as 指定渲染标签。

<DemoBlock title="ui · as" description="ui：base，as 渲染标签" :code="skeletonUiRaw">
  <SkeletonUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-skeleton
```

## API

<!--@include: ./api/skeleton.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 骨架根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | loading 为 false 时渲染的内容 |

## 动效

- 骨架：脉冲动画（animate-pulse）

## 设计规格

### 主题 token

**背景**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| base | bg-elevated | #f5f5f5（亮）/ #262626（暗） |

**圆角**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| base | rounded-md | --radius-md 6px |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| 无内建变体 | 形状与尺寸通过 class / ui.base 注入 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无（非交互组件） |
| ARIA | role="alert" + aria-busy="true" + aria-label="loading" + aria-live="polite"（组件源码显式设置） |
| 动效 | animate-pulse 脉冲 |
