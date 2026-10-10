---
title: InputTags 标签输入
description: 以标签形式输入多个值
---

# InputTags 标签输入

以标签形式输入多个值，回车添加、点击关闭移除。支持五档尺寸、七种语义色、五种变体与高亮描边，单个标签长度由 `maxLength` 限制。

<script setup>
import InputTagsBasic from '@demos/react/input-tags-basic'
import inputTagsBasicRaw from '@demos/react/input-tags-basic.tsx.code.txt?raw'
import InputTagsColors from '@demos/react/input-tags-colors'
import inputTagsColorsRaw from '@demos/react/input-tags-colors.tsx.code.txt?raw'
import InputTagsFeatures from '@demos/react/input-tags-features'
import inputTagsFeaturesRaw from '@demos/react/input-tags-features.tsx.code.txt?raw'
import InputTagsCustom from '@demos/react/input-tags-custom'
import inputTagsCustomRaw from '@demos/react/input-tags-custom.tsx.code.txt?raw'
</script>

## 基础用法

`value` 绑定标签数组（受控），回车或失焦添加，点击删除图标移除。

<DemoBlock title="基础用法" description="value + onChange 绑定标签数组" :code="inputTagsBasicRaw">
  <ReactDemo :component="InputTagsBasic" />
</DemoBlock>

## 尺寸、语义色与变体

`size` 五档尺寸；`color` 七种语义色；`variant` 五种变体；`highlight` 常显颜色描边。

<DemoBlock title="尺寸与语义色" description="size / color / variant / highlight" :code="inputTagsColorsRaw">
  <ReactDemo :component="InputTagsColors" />
</DemoBlock>

## 数量与长度限制

`max` 限制标签总数，`maxLength` 限制单个标签最大字符数，`deleteIcon` 自定义删除图标。

<DemoBlock title="数量与长度限制" description="max / maxLength / deleteIcon" :code="inputTagsFeaturesRaw">
  <ReactDemo :component="InputTagsFeatures" />
</DemoBlock>

## 插槽与 ui

`leading` 前置内容，`tag` 自定义标签项；`ui` 按主题插槽覆盖类名，可自定义容器、标签项、删除按钮与输入框。

<DemoBlock title="ui 主题插槽" description="base / item / itemDeleteIcon / root / input" :code="inputTagsCustomRaw">
  <ReactDemo :component="InputTagsCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-tags
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string[] | [] | 标签数组 |
| max | number | - | 最大标签数 |
| placeholder | string | 输入后回车添加… | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| maxLength | number | - | 单个标签最大长度 |
| deleteIcon | XInputTagsIcon | x | 删除标签图标（XIcon 名称或组件） |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| render | ReactElement | - | 渲染为指定元素 |
| autofocus | boolean | false | 挂载后自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（毫秒） |
| onAdd / onRemove | (tag) / (index) => void | - | 添加 / 删除回调 |
| leading | ReactNode | - | 前置内容 |
| tag | (state) => ReactNode | - | 自定义标签项（{ tag, index }，对应 Vue 侧 tag 插槽） |
| ui | XInputTagsUi | - | 主题插槽类名 |

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

## 动效

- 容器：focus ring 与颜色过渡
- 删除按钮：hover 颜色过渡
