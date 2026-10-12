---
title: Listbox 列表
description: 可选中项的列表选择组件，支持单选与多选、搜索过滤、加载态、字段映射与分组结构
---

# Listbox 列表

可选中项的列表选择组件。`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；项可带 `type: 'label' | 'separator'` 渲染分组标题与分隔线；`items` 为二维数组时按行分组；`size` 提供五档尺寸。

<script setup>
import ListboxBasic from '@demos/react/listbox-basic'
import listboxBasicRaw from '@demos/react/listbox-basic.tsx.code.txt?raw'
import ListboxFilterable from '@demos/react/listbox-filterable'
import listboxFilterableRaw from '@demos/react/listbox-filterable.tsx.code.txt?raw'
import ListboxLoading from '@demos/react/listbox-loading'
import listboxLoadingRaw from '@demos/react/listbox-loading.tsx.code.txt?raw'
import ListboxSizes from '@demos/react/listbox-sizes'
import listboxSizesRaw from '@demos/react/listbox-sizes.tsx.code.txt?raw'
import ListboxStructure from '@demos/react/listbox-structure'
import listboxStructureRaw from '@demos/react/listbox-structure.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="单选与多选" description="selected 受控，onSelect 返回 key" :code="listboxBasicRaw">
  <ReactDemo :component="ListboxBasic" />
</DemoBlock>

## 搜索过滤

filterable 开启顶部搜索框，按 labelKey 文本实时过滤；过滤结果为空时显示 emptyText。

<DemoBlock title="搜索过滤与空状态" description="输入不存在的关键词查看空提示" :code="listboxFilterableRaw">
  <ReactDemo :component="ListboxFilterable" />
</DemoBlock>

## 加载态

loading 显示加载提示并禁止交互，loadingIcon 自定义加载图标（XIcon 名称或任意组件）。

<DemoBlock title="加载中" description="loading 显示加载提示并禁止交互" :code="listboxLoadingRaw">
  <ReactDemo :component="ListboxLoading" />
</DemoBlock>

## 尺寸

size 提供 xs / sm / md / lg / xl 五档，控制项内边距、字号与图标大小。

<DemoBlock title="五档尺寸" description="xs → xl 控制项内边距与图标大小" :code="listboxSizesRaw">
  <ReactDemo :component="ListboxSizes" />
</DemoBlock>

## 字段映射、分组与 ui 插槽

labelKey / valueKey / descriptionKey 映射任意字段；二维数组按行分组，type 渲染分组标题与分隔线；selectedIcon 自定义选中图标；ui 按主题插槽覆盖类名。

<DemoBlock title="字段映射 · 分组 · 图标 · ui" description="labelKey / valueKey / descriptionKey / type / selectedIcon / ui" :code="listboxStructureRaw">
  <ReactDemo :component="ListboxStructure" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-listbox
```

## API

### XListbox

<!--@include: ./api/listbox.md-->
| onChange | (event) => void | - | 值变化事件回调 |
| onEntryFocus | (event) => void | - | 焦点进入回调 |
| onHighlight | (payload) => void | - | 高亮项变化回调 |
| onLeave | (event) => void | - | 焦点离开回调 |
| loadingSlot | ReactNode | - | 自定义加载内容 |
| empty | ReactNode | - | 自定义空数据内容 |
| item | ({ item, index }) => ReactNode | - | 自定义列表项 |
| itemLeading / itemLabel / itemDescription / itemTrailing | ({ item }) => ReactNode | - | 选项片段自定义 |

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

React 端基于 Base UI Combobox 的 inline 模式（无弹层，列表内联展示），主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量 + kit-theme.css 色板。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| root · input | bg-transparent | 与 Vue 端一致（无背景 token） |
| item（高亮 / 选中） | data-highlighted:bg-accent · data-selected:bg-accent | 对应 before:bg-elevated/50；Vue 端选中项仅显示 check 图标无背景，差异注明 |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| item | text-foreground | 对应 text-default |
| item（高亮 / 选中） | data-highlighted:text-accent-foreground · data-selected:text-accent-foreground | 对应 text-highlighted |
| itemLeadingIcon · empty · loading | text-muted-foreground | 对应 text-dimmed / text-muted |
| label（分组标题） | text-foreground | 对应 text-highlighted |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| root | ring-1 ring-inset ring-input | 对应 ring ring-inset ring-default（shadcn --input：亮 oklch(0.922 0 0)，暗 oklch(1 0 0 / 15%)） |
| root（highlight=true） | ring-2 ring-primary | 对应 ring ring-inset ring-primary |
| input | border-b border-border | 对应 border-b border-default |
| separator | bg-border | 与 Vue 端一致 |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| root | rounded-lg | 8px，与 Vue 端同值 |
| item | rounded-md | 6px，与 Vue 端同值 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| color（primary 等七色） | highlight=true 时 ring-2 ring-primary |
| color（neutral） | highlight=true 时 ring-2 ring-foreground/30 |
| disabled | opacity-75 + cursor-not-allowed |
| highlight | ring-2 + 对应颜色（常驻描边） |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Base UI Combobox inline 语义，与 Vue 端 reka Listbox 一致：ArrowDown / ArrowUp 在选项间移动，Enter 选择，Home / End 跳转首尾，字母键高亮匹配项；输入框过滤选项，Esc 清除过滤词 |
| ARIA | 与 Vue 端一致：选项 role=option + aria-selected；data-highlighted 表示高亮项，data-selected 表示选中项 |
| 动效 | item 无 transition 类（Vue 端为 transition-colors，差异注明）；loadingIcon 为 animate-spin；列表为内联布局，无面板进出场动画 |
