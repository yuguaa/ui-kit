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

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | 容器继承 Input 变体：`bg-default`（outline）· `bg-elevated/50`（soft）· `bg-elevated`（subtle） | #ffffff / #171717；#f5f5f5 / #262626 |
| 背景 | 标签项 `bg-elevated`，激活态 `data-[state=active]:bg-accented` | #f5f5f5 / #262626；#e5e5e5 / #404040 |
| 文字 | 标签项 `text-default` | #404040 / #e5e5e5 |
| 文字 | 删除图标 `text-dimmed`，hover 为 `text-default` | #a3a3a3 → #404040 |
| 描边 | 容器 `ring ring-inset ring-accented`（outline / subtle）；聚焦改为容器级 `has-focus-visible` 时 `outline-{color}/25` + `ring-{color}` | #d4d4d4 / #404040；primary #22c55e |
| 描边 | 标签项 `ring ring-inset ring-accented` | #d4d4d4 / #404040 |
| 圆角 | 容器 `rounded-md`（6px）· 标签项 `rounded-sm`（4px）· 删除按钮 `rounded-xs`（2px） | --radius-md / sm / xs |
| 阴影 | 无 | - |

`input-tags.ts` 基于 `input.ts` 扩展：`focus:` 前缀改写为 `has-focus:`，使聚焦样式在内部输入聚焦时作用于容器。

### 变体

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | `text-highlighted` + `bg-default` + `ring ring-inset ring-accented` |
| soft / subtle / ghost / none | 与 Input 相同组合（见 Input 设计规格） |

标签项文字随组件尺寸：xs / sm 为 `text-[10px]/3`，xl 为 `text-sm`；删除图标 `size-3 ~ size-4`。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | reka-ui TagsInput 语义：Enter 添加标签，Backspace 删除最后一项，方向键在标签与输入框之间移动焦点；`addOnTab` 时 Tab 添加，`addOnPaste` 时粘贴按 delimiter 拆分添加 |
| ARIA | 内部 input 保持 `role=textbox`；标签删除按钮由 reka-ui 提供 aria-label |
| 动效 | 容器与删除按钮 `transition-colors`；删除按钮 hover `bg-accented/75` |
