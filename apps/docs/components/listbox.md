---
title: Listbox 列表
description: 可选中项的列表选择组件，支持单选与多选、搜索过滤、加载态、字段映射与分组结构
---

# Listbox 列表

可选中项的列表选择组件。`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；项可带 `type: 'label' | 'separator'` 渲染分组标题与分隔线；`items` 为二维数组时按行分组；`size` 提供五档尺寸。

## 基础用法

<DemoPreview file="demos/vue/listbox-basic.vue" title="单选与多选" description="selected 受控，select 事件返回 key" />

## 搜索过滤

filterable 开启顶部搜索框，按 labelKey 文本实时过滤；过滤结果为空时显示 emptyText。

<DemoPreview file="demos/vue/listbox-filterable.vue" title="搜索过滤与空状态" description="输入不存在的关键词查看空提示" />

## 加载态

loading 显示加载提示并禁止交互，loadingIcon 自定义加载图标（XIcon 名称或任意组件）。

<DemoPreview file="demos/vue/listbox-loading.vue" title="加载中" description="loading 显示加载提示并禁止交互" />

## 尺寸

size 提供 xs / sm / md / lg / xl 五档，控制项内边距、字号与图标大小。

<DemoPreview file="demos/vue/listbox-sizes.vue" title="五档尺寸" description="xs → xl 控制项内边距与图标大小" />

## 字段映射、分组与 ui 插槽

labelKey / valueKey / descriptionKey 映射任意字段；二维数组按行分组，type 渲染分组标题与分隔线；selectedIcon 自定义选中图标；ui 按主题插槽覆盖类名。

<DemoPreview file="demos/vue/listbox-structure.vue" title="字段映射 · 分组 · 图标 · ui" description="labelKey / valueKey / descriptionKey / type / selectedIcon / ui" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-listbox
```

## API

### XListbox

<!--@include: ./api/listbox.md-->

**事件**：update:modelValue 值变化 · change 值变化事件 · entryFocus 焦点进入 · highlight 高亮项变化 · leave 焦点离开

**插槽**：loading 自定义加载内容 · empty 自定义空数据内容 ({ searchTerm }) · item 自定义列表项 ({ item, index }) · item-leading / item-label / item-description / item-trailing 选项片段

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| input | 搜索输入框 |
| content | 列表容器 |
| group | 分组容器 |
| label | 分组标题项 |
| separator | 分隔线项 |
| empty | 空数据提示 |
| loading | 加载提示 |
| loadingIcon | 加载图标 |
| item | 选项按钮 |
| itemLeadingIcon | 选项前置图标 |
| itemWrapper | 选项文本容器 |
| itemLabel | 选项标签 |
| itemDescription | 选项说明 |
| itemTrailing | 选项尾部容器 |
| itemTrailingIcon | 选中态图标 |

## 动效

- 选项：hover 背景过渡
- 加载：图标旋转

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root | 透明（无背景 token） | — |
| item（高亮） | before:bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| input | 透明（无背景 token） | — |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| item | text-default | #404040 / #e5e5e5 |
| item（高亮） | text-highlighted | #171717 / #ffffff |
| itemLeadingIcon | text-dimmed，高亮时 text-default | #a3a3a3 / #404040 |
| itemDescription · empty · loading | text-muted | #737373 / #a3a3a3 |
| label（分组标题） | text-highlighted | #171717 / #ffffff |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root | ring ring-inset ring-default | #e5e5e5 / #262626 |
| root（focus-visible，color=primary） | outline-primary/25 · has-focus-visible:ring-primary | #22c55e |
| root（highlight=true） | ring ring-inset ring-primary | #22c55e |
| input | border-b border-default | #e5e5e5 / #262626 |
| separator | bg-border | 同 border-default |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| root | rounded-lg | 8px（--radius-lg） |
| item 高亮层 | rounded-md | 6px（--radius-md） |

**变体**

| 变体 | token 组合 |
| --- | --- |
| color（primary 等七色） | focus-visible：outline-color/25 · has-focus-visible:ring-color |
| color（neutral） | outline-inverted/25 · has-focus-visible:ring-inverted |
| disabled | opacity-75 + cursor-not-allowed |
| highlight | ring ring-inset ring-color（常驻描边） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | reka Listbox 语义：ArrowDown / ArrowUp 在选项间移动，Enter 选择，Home / End 跳转首尾，字母键高亮匹配项；filter=true 时输入框过滤选项，Esc 清除过滤词 |
| ARIA | 选项 role=option + aria-selected；data-highlighted 表示当前高亮项，data-disabled 表示禁用项；分组标题与分隔线为结构性项 |
| 动效 | item 为 transition-colors；loadingIcon 为 animate-spin；列表为内联布局，无面板进出场动画 |
