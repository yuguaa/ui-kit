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
</script>

<DemoBlock title="选中 / 半选 / 禁用" description="checked / indeterminate / disabled" :code="checkboxBasicDemoRaw">
  <ReactDemo :component="CheckboxBasicDemo" />
</DemoBlock>

## 说明文字

description 属性在选项文字下方展示辅助说明。

<DemoBlock title="label 下方辅助说明" description="description 属性" :code="checkboxDescriptionRaw">
  <ReactDemo :component="CheckboxDescriptionDemo" />
</DemoBlock>

## 语义色

color 属性控制选中与半选状态下控件自身的颜色。

<DemoBlock title="七种语义色" description="color 属性，选中与半选状态" :code="checkboxColorRaw">
  <ReactDemo :component="CheckboxColorDemo" />
</DemoBlock>

## 尺寸

<DemoBlock title="三档尺寸" description="sm / md / lg，图标同步缩放" :code="checkboxSizeRaw">
  <ReactDemo :component="CheckboxSizeDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-checkbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中 |
| disabled | boolean | false | 是否禁用 |
| indeterminate | boolean | false | 半选状态 |
| value | string · number | - | 选项的值 |
| label | ReactNode | - | 选项文字 |
| description | ReactNode | - | 选项文字下方的辅助说明 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 选中与半选时控件的语义色 |
| size | sm · md · lg | md | 控件尺寸 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
