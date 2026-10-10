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
import CheckboxVariantDemo from '@demos/vue/checkbox-variant.vue'
import checkboxVariantRaw from '@demos/vue/checkbox-variant.vue.code.txt?raw'
import CheckboxIconDemo from '@demos/vue/checkbox-icon.vue'
import checkboxIconRaw from '@demos/vue/checkbox-icon.vue.code.txt?raw'
import CheckboxUiCustomDemo from '@demos/vue/checkbox-ui-custom.vue'
import checkboxUiCustomRaw from '@demos/vue/checkbox-ui-custom.vue.code.txt?raw'
</script>

<DemoBlock title="选中 / 半选 / 禁用 / 必选" description="v-model / indeterminate / disabled / required" :code="checkboxBasicDemoRaw">
  <CheckboxBasicDemo />
</DemoBlock>

## 说明文字

description 插槽在选项文字下方展示辅助说明。

<DemoBlock title="label 下方辅助说明" description="description 插槽" :code="checkboxDescriptionRaw">
  <CheckboxDescriptionDemo />
</DemoBlock>

## 语义色

color 属性控制选中与半选状态下指示块的颜色。

<DemoBlock title="七种语义色" description="color 属性，选中与半选状态" :code="checkboxColorRaw">
  <CheckboxColorDemo />
</DemoBlock>

## 尺寸

<DemoBlock title="三档尺寸" description="sm / md / lg，图标同步缩放" :code="checkboxSizeRaw">
  <CheckboxSizeDemo />
</DemoBlock>

## 变体与指示块位置

`variant="card"` 时整个卡片可点击；`indicator` 控制指示块位置，`hidden` 时指示块隐藏、图标显示在 label 上方。

<DemoBlock title="variant 与 indicator" description="list / card × start / end / hidden" :code="checkboxVariantRaw">
  <CheckboxVariantDemo />
</DemoBlock>

## 自定义图标与聚焦环

`icon` / `indeterminateIcon` 自定义选中与半选图标；`highlight` 常显聚焦环。

<DemoBlock title="icon 与 highlight" description="icon / indeterminateIcon / highlight" :code="checkboxIconRaw">
  <CheckboxIconDemo />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoBlock title="ui 插槽自定义" description="ui 键：root / container / base / indicator / icon / wrapper / label / description" :code="checkboxUiCustomRaw">
  <CheckboxUiCustomDemo />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-checkbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | boolean · indeterminate | false | 是否选中（支持 v-model） |
| disabled | boolean | false | 是否禁用 |
| indeterminate | boolean | false | 半选状态 |
| required | boolean | false | 必选项，label 后显示 * |
| value | string · number | - | 选项的值 |
| label | string | - | 选项文字 |
| description | string | - | 选项文字下方的辅助说明 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 选中与半选时指示块的颜色 |
| variant | list · card | list | 展示形式，card 时整个卡片可点击 |
| size | sm · md · lg | md | 控件尺寸 |
| indicator | start · end · hidden | start | 指示块位置，hidden 时图标显示在 label 上方 |
| highlight | boolean | false | 常显高亮聚焦环 |
| icon | Component | check 图标 | 选中时显示的图标 |
| indeterminateIcon | Component | minus 图标 | 半选时显示的图标 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | CheckboxUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

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

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 选项文字插槽，props 含 label |
| description | 选项文字下方的辅助说明插槽，props 含 description |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 选中状态变化 |
| change | 状态切换时触发，event.target.value 为当前值 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
