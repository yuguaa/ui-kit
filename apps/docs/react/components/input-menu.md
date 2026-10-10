---
title: InputMenu 输入菜单
description: 输入框与下拉菜单组合，支持 combobox / listbox 双模式、菜单内搜索与字段映射
---

# InputMenu 输入菜单

输入框与下拉菜单组合。`mode` 区分 combobox（输入框即搜索）与 listbox（输入框只读、菜单内搜索）；listbox 模式可开启 `searchInput` 在菜单顶部渲染搜索输入框，并可用 `searchInputSlot` 自定义。

<script setup>
import InputMenuBasic from '@demos/react/input-menu-basic'
import inputMenuBasicRaw from '@demos/react/input-menu-basic.tsx.code.txt?raw'
import InputMenuListbox from '@demos/react/input-menu-listbox'
import inputMenuListboxRaw from '@demos/react/input-menu-listbox.tsx.code.txt?raw'
import InputMenuUi from '@demos/react/input-menu-ui'
import inputMenuUiRaw from '@demos/react/input-menu-ui.tsx.code.txt?raw'
</script>

## 基础用法

combobox 模式输入即搜索；`clearable` 清空已选项；`createItem` 关键字不存在时回车创建新选项。

<DemoBlock title="combobox · 清空 · 创建" description="searchable · clearable · createItem · disabled" :code="inputMenuBasicRaw">
  <ReactDemo :component="InputMenuBasic" />
</DemoBlock>

## listbox 模式与菜单内搜索

`mode="listbox"` 时输入框只读，点击展开菜单；`searchInput` 在菜单顶部渲染搜索输入框（可传 `{ placeholder }`），`searchInputSlot` 完全自定义。

<DemoBlock title="listbox · searchInput · searchInputSlot" description="mode / searchInput / searchInputSlot" :code="inputMenuListboxRaw">
  <ReactDemo :component="InputMenuListbox" />
</DemoBlock>

## 字段映射、图标与 ui 插槽

`labelKey` / `valueKey` / `descriptionKey` 映射任意字段；`selectedIcon` / `clearIcon` 自定义图标；`filterFields` 指定过滤字段；`ui` 按主题插槽覆盖类名；`leading` / `item` 自定义。

<DemoBlock title="字段映射 · 图标 · filterFields · ui" description="labelKey / valueKey / descriptionKey / selectedIcon / clearIcon / filterFields / ui" :code="inputMenuUiRaw">
  <ReactDemo :component="InputMenuUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-menu
```

## API

### XInputMenu

<!--@include: ./api/input-menu.md-->

**插槽**：leading / trailing 前置与后置 · searchInputSlot 菜单内搜索框 · item 自定义菜单项 · itemLeading / itemLabel / itemDescription / itemTrailing 选项片段 · tagsItemText / tagsItemDelete 标签片段 · empty 空数据提示 · contentTop / contentBottom 浮层顶部与底部 · createItemLabel 创建项文案

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| base | 输入框 |
| leading | 前置内容容器 |
| trailing | 尾部容器 |
| trailingClear | 清空按钮 |
| content | 弹出内容面板 |
| input | 菜单内搜索输入框 |
| viewport | 选项滚动容器 |
| group | 选项分组容器 |
| empty | 空数据提示 |
| label | 分组标题项 |
| separator | 分隔线项 |
| item | 选项按钮 |
| itemLeadingIcon | 选项前置图标 |
| itemWrapper | 选项文本容器 |
| itemLabel | 选项标签 |
| itemDescription | 选项说明 |
| itemTrailing | 选项尾部容器 |
| itemTrailingIcon | 选中态图标 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 输入框：focus ring 过渡
