---
title: FieldGroup 字段组
description: 将多个字段组合为一行或一组
---

# FieldGroup 字段组

将多个字段组合为一行或一组。`orientation` 控制排列方向（horizontal 同行 / vertical 纵向堆叠），旧属性 `inline` 保留兼容：未传 `orientation` 时由 `inline` 决定方向。

<script setup>
import FieldGroupOrientation from '@demos/vue/field-group-orientation.vue'
import fieldGroupOrientationRaw from '@demos/vue/field-group-orientation.vue.code.txt?raw'
import FieldGroupSize from '@demos/vue/field-group-size.vue'
import fieldGroupSizeRaw from '@demos/vue/field-group-size.vue.code.txt?raw'
import FieldGroupUiCustom from '@demos/vue/field-group-ui-custom.vue'
import fieldGroupUiCustomRaw from '@demos/vue/field-group-ui-custom.vue.code.txt?raw'
</script>

## 排列方向

`orientation` 控制排列方向；`inline` 作为旧属性保留，显式传 `orientation` 时优先。

<DemoBlock title="horizontal 与 vertical" description="orientation 属性控制排列方向" :code="fieldGroupOrientationRaw">
  <FieldGroupOrientation />
</DemoBlock>

## 尺寸

`size` 控制字段间距（xs → xl）。

<DemoBlock title="五档尺寸" description="size 属性控制字段间距" :code="fieldGroupSizeRaw">
  <FieldGroupSize />
</DemoBlock>

## ui 插槽

`ui.root` 自定义字段组根元素类名。

<DemoBlock title="ui 插槽" description="ui.root 覆盖根元素类名" :code="fieldGroupUiCustomRaw">
  <FieldGroupUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-field-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as | string · Component | div | 渲染为指定元素或组件 |
| size | xs · sm · md · lg · xl | md | 尺寸（控制字段间距） |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| inline | boolean | true | 旧属性：true 等价 horizontal，false 等价 vertical |
| ui | FieldGroupUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

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
