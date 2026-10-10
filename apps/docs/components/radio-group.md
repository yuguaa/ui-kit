---
title: RadioGroup 单选框组
description: 在一组可选项中进行单项选择
---

# RadioGroup 单选框组

在一组可选项中进行单项选择，支持组标题、横向 / 纵向排列、字段映射、语义色与五档尺寸。

<script setup>
import RadioGroupBasicDemo from '@demos/vue/radio-group-basic.vue'
import radioGroupBasicRaw from '@demos/vue/radio-group-basic.vue.code.txt?raw'
import RadioGroupFieldMappingDemo from '@demos/vue/radio-group-field-mapping.vue'
import radioGroupFieldMappingRaw from '@demos/vue/radio-group-field-mapping.vue.code.txt?raw'
import RadioGroupVariantsDemo from '@demos/vue/radio-group-variants.vue'
import radioGroupVariantsRaw from '@demos/vue/radio-group-variants.vue.code.txt?raw'
import RadioGroupColorSizeDemo from '@demos/vue/radio-group-color-size.vue'
import radioGroupColorSizeRaw from '@demos/vue/radio-group-color-size.vue.code.txt?raw'
import RadioGroupIndicatorDemo from '@demos/vue/radio-group-indicator.vue'
import radioGroupIndicatorRaw from '@demos/vue/radio-group-indicator.vue.code.txt?raw'
import RadioGroupUiCustomDemo from '@demos/vue/radio-group-ui-custom.vue'
import radioGroupUiCustomRaw from '@demos/vue/radio-group-ui-custom.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="legend 组标题 / orientation 方向" :code="radioGroupBasicRaw">
  <RadioGroupBasicDemo />
</DemoBlock>

## 字段映射与插槽

`valueKey` / `labelKey` / `descriptionKey` 映射选项对象字段；`label` / `description` 插槽自定义单项渲染。

<DemoBlock title="字段映射与插槽" description="valueKey / labelKey / descriptionKey 与 label / description 插槽" :code="radioGroupFieldMappingRaw">
  <RadioGroupFieldMappingDemo />
</DemoBlock>

## 变体

`variant="button"` 将选项渲染为紧凑按钮，`buttonStyle` 控制选中填充。

<DemoBlock title="radio 与 button 变体" description="variant / buttonStyle / orientation" :code="radioGroupVariantsRaw">
  <RadioGroupVariantsDemo />
</DemoBlock>

## 语义色与尺寸

<DemoBlock title="七种语义色 × 五档尺寸" description="color / size / highlight" :code="radioGroupColorSizeRaw">
  <RadioGroupColorSizeDemo />
</DemoBlock>

## 指示圆点位置

`indicator="hidden"` 时圆点隐藏，选项的 `icon` 显示在 label 上方。

<DemoBlock title="indicator 位置" description="start / end / hidden" :code="radioGroupIndicatorRaw">
  <RadioGroupIndicatorDemo />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽覆盖类名，选项内 `ui` 字段可单项覆盖。

<DemoBlock title="ui 插槽自定义" description="ui 键：root / fieldset / legend / item / container / base / indicator / wrapper / label / icon / description" :code="radioGroupUiCustomRaw">
  <RadioGroupUiCustomDemo />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-radio-group
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | { value?, label?, description?, disabled?, icon?, class?, ui? }[] | - | 选项数据源 |
| modelValue | string · number | - | 受控选中值（支持 v-model） |
| legend | string | - | 组标题 |
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
| id | string | - | 组 id，label 通过 for 关联单项 |
| variant | radio · button | radio | 展示形式 |
| buttonStyle | outline · solid | outline | 按钮样式（variant 为 button 时生效） |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | RadioGroupUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

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

## 插槽

| 名称 | 说明 |
| --- | --- |
| legend | 组标题插槽 |
| label | 单项文字插槽，props 含 item 与 modelValue |
| description | 单项辅助说明插槽，props 含 item 与 modelValue |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 选中值变化 |
| change | 选中切换时触发，event.target.value 为当前值 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
