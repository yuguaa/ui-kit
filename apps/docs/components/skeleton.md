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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| loading | boolean | true | 是否显示骨架，为 false 时渲染默认插槽 |
| variant | text · circle · rect | rect | 形状 |
| width / height | number · string | - | 宽度 / 高度，覆盖形状默认尺寸 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | SkeletonUi | - | 主题插槽类名 |

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
