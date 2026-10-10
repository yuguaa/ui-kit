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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | - | 渲染为指定元素 |
| size | xs · sm · md · lg · xl | md | 尺寸（控制字段间距） |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| inline | boolean | true | 旧属性：true 等价 horizontal，false 等价 vertical |
| ui | XFieldGroupUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 字段组根元素 |

## 动效

无动效：布局容器组件。
