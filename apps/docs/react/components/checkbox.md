---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态、说明文字、语义色与三档尺寸。

<script setup>
import CheckboxBasicDemo from '@demos/react/checkbox-basic-demo'
import checkboxBasicDemoRaw from '@demos/react/checkbox-basic-demo.tsx.code.txt?raw'
import CheckboxDescriptionDemo from '@demos/react/checkbox-description'
import checkboxDescriptionRaw from '@demos/react/checkbox-description.tsx.code.txt?raw'
import CheckboxColorDemo from '@demos/react/checkbox-color'
import checkboxColorRaw from '@demos/react/checkbox-color.tsx.code.txt?raw'
import CheckboxSizeDemo from '@demos/react/checkbox-size'
import checkboxSizeRaw from '@demos/react/checkbox-size.tsx.code.txt?raw'
import CheckboxVariantDemo from '@demos/react/checkbox-variant'
import checkboxVariantRaw from '@demos/react/checkbox-variant.tsx.code.txt?raw'
import CheckboxIconDemo from '@demos/react/checkbox-icon'
import checkboxIconRaw from '@demos/react/checkbox-icon.tsx.code.txt?raw'
import CheckboxUiCustomDemo from '@demos/react/checkbox-ui-custom'
import checkboxUiCustomRaw from '@demos/react/checkbox-ui-custom.tsx.code.txt?raw'
</script>

<DemoBlock title="选中 / 半选 / 禁用 / 必选" description="checked / indeterminate / disabled / required" :code="checkboxBasicDemoRaw">
  <ReactDemo :component="CheckboxBasicDemo" />
</DemoBlock>

## 说明文字

description 在选项文字下方展示辅助说明。

<DemoBlock title="label 下方辅助说明" description="description 属性" :code="checkboxDescriptionRaw">
  <ReactDemo :component="CheckboxDescriptionDemo" />
</DemoBlock>

## 语义色

color 属性控制选中与半选状态下指示块的颜色。

<DemoBlock title="七种语义色" description="color 属性，选中与半选状态" :code="checkboxColorRaw">
  <ReactDemo :component="CheckboxColorDemo" />
</DemoBlock>

## 尺寸

<DemoBlock title="三档尺寸" description="sm / md / lg，图标同步缩放" :code="checkboxSizeRaw">
  <ReactDemo :component="CheckboxSizeDemo" />
</DemoBlock>

## 变体与指示块位置

`variant="card"` 时整个卡片可点击；`indicator` 控制指示块位置，`hidden` 时指示块隐藏、图标显示在 label 上方。

<DemoBlock title="variant 与 indicator" description="list / card × start / end / hidden" :code="checkboxVariantRaw">
  <ReactDemo :component="CheckboxVariantDemo" />
</DemoBlock>

## 自定义图标与聚焦环

`icon` / `indeterminateIcon` 自定义选中与半选图标；`highlight` 常显聚焦环。

<DemoBlock title="icon 与 highlight" description="icon / indeterminateIcon / highlight" :code="checkboxIconRaw">
  <ReactDemo :component="CheckboxIconDemo" />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoBlock title="ui 插槽自定义" description="ui 键：root / container / base / indicator / icon / wrapper / label / description" :code="checkboxUiCustomRaw">
  <ReactDemo :component="CheckboxUiCustomDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-checkbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中（受控） |
| defaultChecked | boolean | false | 初始选中状态（非受控） |
| disabled | boolean | false | 是否禁用 |
| indeterminate | boolean | false | 半选状态 |
| required | boolean | false | 必选项，label 后显示 * |
| value | string · number | - | 选项的值 |
| name | string | - | 表单字段名 |
| id | string | - | 控件 id，label 通过 htmlFor 关联 |
| label | ReactNode | - | 选项文字 |
| description | ReactNode | - | 选项文字下方的辅助说明 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 选中与半选时指示块的颜色 |
| variant | list · card | list | 展示形式，card 时整个卡片可点击 |
| size | sm · md · lg | md | 控件尺寸 |
| indicator | start · end · hidden | start | 指示块位置，hidden 时图标显示在 label 上方 |
| highlight | boolean | false | 常显高亮聚焦环 |
| icon | ElementType | check 图标 | 选中时显示的图标 |
| indeterminateIcon | ElementType | minus 图标 | 半选时显示的图标 |
| onCheckedChange | (checked: boolean) => void | - | 选中状态变化回调 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XCheckboxUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| container | 控件包裹层 |
| base | 复选框控件 |
| indicator | 勾选指示块 |
| icon | 选中 / 半选图标 |
| wrapper | label 与 description 容器 |
| label | 选项文字 |
| description | 辅助说明 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
