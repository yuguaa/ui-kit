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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | { value?, label?, description?, disabled?, icon?, className?, ui? }[] | - | 选项数据源 |
| value | string · number | - | 受控选中值 |
| defaultValue | string · number | - | 初始选中值（非受控） |
| onValueChange | (value: string · number · null) => void | - | 选中值变化回调 |
| legend | ReactNode | - | 组标题 |
| orientation | horizontal · vertical | vertical | 排列方向 |
| valueKey | string | value | 取值字段名 |
| labelKey | string | label | 文字字段名 |
| descriptionKey | string | description | 辅助说明字段名 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 选中圆点的语义色 |
| size | xs · sm · md · lg · xl | md | 尺寸 |
| indicator | start · end · hidden | start | 指示圆点位置，hidden 时图标显示在 label 上方 |
| highlight | boolean | false | 常显高亮聚焦环 |
| required | boolean | false | 必选项，legend 后显示 * |
| disabled | boolean | false | 整体禁用 |
| id | string | - | 组 id，关联单项 label |
| variant | radio · button | radio | 展示形式 |
| buttonStyle | outline · solid | outline | 按钮样式（variant 为 button 时生效） |
| label | (option, value) => ReactNode | - | 自定义单项文字渲染 |
| description | (option, value) => ReactNode | - | 自定义单项辅助说明渲染 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XRadioGroupUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |

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
