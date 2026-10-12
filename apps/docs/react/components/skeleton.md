---
title: Skeleton 骨架屏
description: 内容加载时的占位骨架，支持文本 / 圆形 / 矩形三种形状与宽高覆盖
---

# Skeleton 骨架屏

内容加载时的占位骨架。loading 为 false 时渲染子元素中的真实内容，适合包裹异步数据区域。骨架元素带 aria-busy / aria-label / aria-live / role 无障碍标记。

## 基础用法

<DemoPreview file="demos/react/skeleton-basic.tsx" react title="形状与 loading 切换" description="variant 控制形状，width / height 覆盖尺寸，loading 切换骨架与真实内容" />

## ui 插槽与 render

ui.base 注入自定义类名；render 指定渲染元素。

<DemoPreview file="demos/react/skeleton-ui.tsx" react title="ui · render" description="ui：base，render 渲染元素" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-skeleton
```

## API

<!--@include: ./api/skeleton.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 骨架根元素 |

## 动效

- 骨架：脉冲动画（animate-pulse）

## 设计规格

### 主题 token

**背景**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| base | bg-muted | shadcn 变量（Vue 端为 bg-elevated） |

**圆角**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| base | rounded-md | 6px |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| variant=text | h-4 w-full |
| variant=circle | size-10 rounded-full |
| variant=rect | h-24 w-full rounded-md（默认） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无（非交互组件） |
| ARIA | role="alert" + aria-busy="true" + aria-label="loading" + aria-live="polite"（组件源码显式设置，与 Vue 端一致） |
| 动效 | animate-pulse 脉冲 |

**双端差异**

| 项 | Vue | React |
| --- | --- | --- |
| 底色 | bg-elevated（#f5f5f5 / #262626） | bg-muted（#fafafa / #262626） |
| 形状变体 | 无内建 variant，由 class / ui.base 注入 | 内建 variant=text / circle / rect |
