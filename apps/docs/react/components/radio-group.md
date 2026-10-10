---
title: RadioGroup 单选框组
description: 在一组可选项中进行单项选择
---

# RadioGroup 单选框组

在一组可选项中进行单项选择，支持组标题、横向 / 纵向排列、字段映射、语义色与五档尺寸。

<script setup>
import RadioGroupBasicDemo from '@demos/react/radio-group-basic'
import radioGroupBasicRaw from '@demos/react/radio-group-basic.tsx.code.txt?raw'
import RadioGroupFieldMappingDemo from '@demos/react/radio-group-field-mapping'
import radioGroupFieldMappingRaw from '@demos/react/radio-group-field-mapping.tsx.code.txt?raw'
import RadioGroupVariantsDemo from '@demos/react/radio-group-variants'
import radioGroupVariantsRaw from '@demos/react/radio-group-variants.tsx.code.txt?raw'
import RadioGroupColorSizeDemo from '@demos/react/radio-group-color-size'
import radioGroupColorSizeRaw from '@demos/react/radio-group-color-size.tsx.code.txt?raw'
import RadioGroupIndicatorDemo from '@demos/react/radio-group-indicator'
import radioGroupIndicatorRaw from '@demos/react/radio-group-indicator.tsx.code.txt?raw'
import RadioGroupUiCustomDemo from '@demos/react/radio-group-ui-custom'
import radioGroupUiCustomRaw from '@demos/react/radio-group-ui-custom.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="legend 组标题 / orientation 方向" :code="radioGroupBasicRaw">
  <ReactDemo :component="RadioGroupBasicDemo" />
</DemoBlock>

## 字段映射与插槽

`valueKey` / `labelKey` / `descriptionKey` 映射选项对象字段；`label` / `description` 属性自定义单项渲染。

<DemoBlock title="字段映射与插槽" description="valueKey / labelKey / descriptionKey 与 label / description 属性" :code="radioGroupFieldMappingRaw">
  <ReactDemo :component="RadioGroupFieldMappingDemo" />
</DemoBlock>

## 变体

`variant="button"` 将选项渲染为紧凑按钮，`buttonStyle` 控制选中填充。

<DemoBlock title="radio 与 button 变体" description="variant / buttonStyle / orientation" :code="radioGroupVariantsRaw">
  <ReactDemo :component="RadioGroupVariantsDemo" />
</DemoBlock>

## 语义色与尺寸

<DemoBlock title="七种语义色 × 五档尺寸" description="color / size / highlight" :code="radioGroupColorSizeRaw">
  <ReactDemo :component="RadioGroupColorSizeDemo" />
</DemoBlock>

## 指示圆点位置

`indicator="hidden"` 时圆点隐藏，选项的 `icon` 显示在 label 上方。

<DemoBlock title="indicator 位置" description="start / end / hidden" :code="radioGroupIndicatorRaw">
  <ReactDemo :component="RadioGroupIndicatorDemo" />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽覆盖类名，选项内 `ui` 字段可单项覆盖。

<DemoBlock title="ui 插槽自定义" description="ui 键：root / fieldset / legend / item / container / base / indicator / wrapper / label / icon / description" :code="radioGroupUiCustomRaw">
  <ReactDemo :component="RadioGroupUiCustomDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-radio-group
```

## API

<!--@include: ./api/radio-group.md-->

**插槽**：label 自定义单项文字渲染 · description 自定义单项辅助说明渲染

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| fieldset | 选项组容器 |
| legend | 组标题 |
| item | 单项容器 |
| container | 控件包裹层 |
| base | 单选框控件 |
| indicator | 选中圆点 |
| wrapper | label 与 description 容器 |
| label | 选项文字 |
| icon | indicator 为 hidden 时 label 上方的图标 |
| description | 辅助说明 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
