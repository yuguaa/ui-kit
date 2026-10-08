---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态、说明文字、语义色与三档尺寸。

<script setup>
import CheckboxBasicDemo from '@demos/vue/checkbox-basic-demo.vue'
import checkboxBasicDemoRaw from '@demos/vue/checkbox-basic-demo.vue.code.txt?raw'
import CheckboxDescriptionDemo from '@demos/vue/checkbox-description.vue'
import checkboxDescriptionRaw from '@demos/vue/checkbox-description.vue.code.txt?raw'
import CheckboxColorDemo from '@demos/vue/checkbox-color.vue'
import checkboxColorRaw from '@demos/vue/checkbox-color.vue.code.txt?raw'
import CheckboxSizeDemo from '@demos/vue/checkbox-size.vue'
import checkboxSizeRaw from '@demos/vue/checkbox-size.vue.code.txt?raw'
</script>

<DemoBlock title="选中 / 半选 / 禁用" description="v-model / indeterminate / disabled" :code="checkboxBasicDemoRaw">
  <CheckboxBasicDemo />
</DemoBlock>

## 说明文字

description 插槽在选项文字下方展示辅助说明。

<DemoBlock title="label 下方辅助说明" description="description 插槽" :code="checkboxDescriptionRaw">
  <CheckboxDescriptionDemo />
</DemoBlock>

## 语义色

color 属性控制选中与半选状态下控件自身的颜色。

<DemoBlock title="七种语义色" description="color 属性，选中与半选状态" :code="checkboxColorRaw">
  <CheckboxColorDemo />
</DemoBlock>

## 尺寸

<DemoBlock title="三档尺寸" description="sm / md / lg，图标同步缩放" :code="checkboxSizeRaw">
  <CheckboxSizeDemo />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-checkbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中（支持 v-model） |
| disabled | boolean | false | 是否禁用 |
| indeterminate | boolean | false | 半选状态 |
| value | string · number | - | 选项的值 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 选中与半选时控件的语义色 |
| size | sm · md · lg | md | 控件尺寸 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 选项文字插槽 |
| description | 选项文字下方的辅助说明 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
