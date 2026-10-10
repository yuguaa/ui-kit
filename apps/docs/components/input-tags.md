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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string[] | [] | 标签数组（支持 v-model） |
| max | number | - | 最大标签数 |
| placeholder | string | 输入后回车添加… | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| maxLength | number | - | 单个标签最大长度 |
| deleteIcon | InputTagsIcon | x | 删除标签图标（XIcon 名称或组件） |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| as | string · Component | span | 渲染为指定元素或组件 |
| autofocus | boolean | false | 挂载后自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（毫秒） |
| ui | InputTagsUi | - | 主题插槽类名 |

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
