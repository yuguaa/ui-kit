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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XListItemData[] · XListItemData[][] | - | 列表项数组，二维数组时按行分组，支持 label / separator 结构项 |
| value / defaultValue | string · number · 数组 | - | 选中值，多选为数组 |
| multiple | boolean | false | 是否多选 |
| color | 七种语义色 | primary | 语义色（选中态与高亮） |
| size | xs · sm · md · lg · xl | md | 尺寸，控制项内边距与图标大小 |
| valueKey / labelKey / descriptionKey | string | key / label / description | 列表项字段名 |
| loading | boolean | false | 加载态，显示加载提示并禁止交互 |
| loadingIcon | string · 组件 | loader-circle | 加载图标 |
| filter | boolean · { placeholder, disabled } | false | 顶部搜索过滤 |
| filterFields | string[] | [labelKey] | 过滤字段 |
| ignoreFilter | boolean | false | 忽略内部过滤（服务端过滤场景） |
| selectedIcon | string · 组件 | check | 选中态图标 |
| virtualize | boolean | false | 虚拟滚动（长列表） |
| highlight | boolean | false | 选中项高亮样式 |
| autofocus | boolean | false | 打开时自动聚焦搜索框 |
| autofocusDelay | number | 0 | 自动聚焦延迟（ms） |
| disabled | boolean | false | 是否禁用 |
| required | boolean | false | 必填标记 |
| name / id | string | - | 表单字段标识 |
| orientation | vertical · horizontal | vertical | 排列方向 |
| highlightOnHover | boolean | true | 悬停高亮选项 |
| render | ReactElement | - | 渲染为指定元素（根容器） |
| ui | XListboxUi | - | 主题插槽类名 |
| onValueChange | (value) => void | - | 值变化回调 |
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
