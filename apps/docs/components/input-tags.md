---
title: InputTags 标签输入
description: 以标签形式输入多个值
---

# InputTags 标签输入

以标签形式输入多个值，回车添加、点击关闭移除。支持五档尺寸、七种语义色、五种变体与高亮描边，单个标签长度由 `maxLength` 限制。

<script setup>
import InputTagsBasic from '@demos/vue/input-tags-basic.vue'
import inputTagsBasicRaw from '@demos/vue/input-tags-basic.vue.code.txt?raw'
import InputTagsColors from '@demos/vue/input-tags-colors.vue'
import inputTagsColorsRaw from '@demos/vue/input-tags-colors.vue.code.txt?raw'
import InputTagsFeatures from '@demos/vue/input-tags-features.vue'
import inputTagsFeaturesRaw from '@demos/vue/input-tags-features.vue.code.txt?raw'
import InputTagsCustom from '@demos/vue/input-tags-custom.vue'
import inputTagsCustomRaw from '@demos/vue/input-tags-custom.vue.code.txt?raw'
</script>

## 基础用法

`modelValue` 绑定标签数组，回车或失焦添加，点击删除图标移除。

<DemoBlock title="基础用法" description="v-model 绑定标签数组" :code="inputTagsBasicRaw">
  <InputTagsBasic />
</DemoBlock>

## 尺寸、语义色与变体

`size` 五档尺寸；`color` 七种语义色；`variant` 五种变体；`highlight` 常显颜色描边。

<DemoBlock title="尺寸与语义色" description="size / color / variant / highlight" :code="inputTagsColorsRaw">
  <InputTagsColors />
</DemoBlock>

## 数量与长度限制

`max` 限制标签总数，`maxLength` 限制单个标签最大字符数，`deleteIcon` 自定义删除图标。

<DemoBlock title="数量与长度限制" description="max / maxLength / deleteIcon" :code="inputTagsFeaturesRaw">
  <InputTagsFeatures />
</DemoBlock>

## 插槽与 ui

`leading` 插槽前置内容，`tag` 插槽自定义标签项；`ui` 按主题插槽覆盖类名。

<DemoBlock title="插槽与 ui" description="leading 插槽 / ui 主题插槽" :code="inputTagsCustomRaw">
  <InputTagsCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-tags
```

## API

<!--@include: ./api/input-tags.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| base | 容器外观（变体、描边、圆角） |
| item | 标签项 |
| itemText | 标签文本 |
| itemDelete | 删除按钮 |
| itemDeleteIcon | 删除图标 |
| input | 内部输入框 |
| leading | 前置内容容器 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| tag | 自定义标签项（{ tag, index }） |
| leading | 前置内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 标签数组变化 |
| add | 添加标签回调 |
| remove | 删除标签回调（载荷为下标） |

## 动效

- 容器：focus ring 与颜色过渡
- 删除按钮：hover 颜色过渡
