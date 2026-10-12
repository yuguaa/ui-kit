---
title: FieldGroup 字段组
description: 将多个字段组合为一行或一组
---

# FieldGroup 字段组

将多个字段组合为一行或一组。`orientation` 控制排列方向（horizontal 同行 / vertical 纵向堆叠），旧属性 `inline` 保留兼容：未传 `orientation` 时由 `inline` 决定方向。

<script setup>
import FieldGroupOrientation from '@demos/react/field-group-orientation'
import fieldGroupOrientationRaw from '@demos/react/field-group-orientation.tsx.code.txt?raw'
import FieldGroupSize from '@demos/react/field-group-size'
import fieldGroupSizeRaw from '@demos/react/field-group-size.tsx.code.txt?raw'
import FieldGroupUiCustom from '@demos/react/field-group-ui-custom'
import fieldGroupUiCustomRaw from '@demos/react/field-group-ui-custom.tsx.code.txt?raw'
</script>

## 排列方向

`orientation` 控制排列方向；`inline` 作为旧属性保留，显式传 `orientation` 时优先。

<DemoBlock title="horizontal 与 vertical" description="orientation 属性控制排列方向" :code="fieldGroupOrientationRaw">
  <ReactDemo :component="FieldGroupOrientation" />
</DemoBlock>

## 尺寸

`size` 控制字段间距（xs → xl）。

<DemoBlock title="五档尺寸" description="size 属性控制字段间距" :code="fieldGroupSizeRaw">
  <ReactDemo :component="FieldGroupSize" />
</DemoBlock>

## ui 插槽

`ui.root` 自定义字段组根元素类名。

<DemoBlock title="ui 插槽" description="ui.root 覆盖根元素类名" :code="fieldGroupUiCustomRaw">
  <ReactDemo :component="FieldGroupUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-field-group
```

## API

<!--@include: ./api/field-group.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 字段组根元素 |

## 动效

无动效：布局容器组件。

## 设计规格

### 主题 token

- 背景：无
- 文字：无
- 描边：无
- 圆角与阴影：无
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| orientation | horizontal | `flex items-start` + 间距 |
| orientation | vertical | `flex flex-col` + 间距 |
| size | xs / sm / md / lg / xl | `gap-1` / `gap-2` / `gap-3` / `gap-4` / `gap-5` |

### 交互

- 键盘：无，布局容器不参与焦点
- ARIA：无角色；输出 `data-orientation`
- 动效：无

**双端差异**：

- Vue 端以 `-space-x-px` / `-space-y-px` 合并相邻控件描边，并由成员组件 `fieldGroupVariant` 拼接圆角；React 端以 `gap-1 ~ gap-5` 间距排列，成员无描边合并与圆角拼接
