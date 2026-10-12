---
title: FieldGroup 字段组
description: 将多个字段组合为一行或一组
---

# FieldGroup 字段组

将多个字段组合为一行或一组。`orientation` 控制排列方向（horizontal 同行 / vertical 纵向堆叠），旧属性 `inline` 保留兼容：未传 `orientation` 时由 `inline` 决定方向。

## 排列方向

`orientation` 控制排列方向；`inline` 作为旧属性保留，显式传 `orientation` 时优先。

<DemoPreview file="demos/vue/field-group-orientation.vue" title="horizontal 与 vertical" description="orientation 属性控制排列方向" />

## 尺寸

`size` 控制字段间距（xs → xl）。

<DemoPreview file="demos/vue/field-group-size.vue" title="五档尺寸" description="size 属性控制字段间距" />

## ui 插槽

`ui.root` 自定义字段组根元素类名。

<DemoPreview file="demos/vue/field-group-ui-custom.vue" title="ui 插槽" description="ui.root 覆盖根元素类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-field-group
```

## API

<!--@include: ./api/field-group.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 字段组根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 字段内容 |

## 动效

无动效：布局容器组件。

## 设计规格

### 主题 token

- 背景：无
- 文字：无
- 描边：无（相邻控件通过负外边距合并描边：horizontal `-space-x-px`、vertical `-space-y-px`）
- 圆角与阴影：无（圆角由成员组件的 `fieldGroupVariant` 拼接：首项保留起始圆角、末项保留结束圆角、中间项直角，焦点项 `z-[1]` 保证描边完整显示）
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| orientation | horizontal | `inline-flex -space-x-px` |
| orientation | vertical | `flex flex-col -space-y-px` |
| size | xs / sm / md / lg / xl | 无视觉类，仅透传给成员组件 |

### 交互

- 键盘：无，布局容器不参与焦点
- ARIA：无角色；`Primitive` 输出 `data-orientation`
- 动效：无
