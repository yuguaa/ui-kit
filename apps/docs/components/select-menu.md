---
title: SelectMenu 选择菜单
description: 触发按钮与弹出选项列表组成的选择菜单，支持搜索、多选、字段映射与分组结构项
---

# SelectMenu 选择菜单

触发按钮与弹出选项列表组成。`mode` 区分 combobox（菜单内搜索）与 listbox（纯列表）；`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；选项可带 `type: 'label' | 'separator'` 渲染分组标签与分隔线。

<script setup>
import SelectMenuBasic from '@demos/vue/select-menu-basic.vue'
import selectMenuBasicRaw from '@demos/vue/select-menu-basic.vue.code.txt?raw'
import SelectMenuFields from '@demos/vue/select-menu-fields.vue'
import selectMenuFieldsRaw from '@demos/vue/select-menu-fields.vue.code.txt?raw'
import SelectMenuUi from '@demos/vue/select-menu-ui.vue'
import selectMenuUiRaw from '@demos/vue/select-menu-ui.vue.code.txt?raw'
</script>

## 基础用法

单选、菜单内搜索（showSearch）、多选、禁用与清空（clearable）。

<DemoBlock title="单选 / 搜索 / 多选 / 禁用 / 清空" description="multiple · showSearch · disabled · clearable" :code="selectMenuBasicRaw">
  <SelectMenuBasic />
</DemoBlock>

## 字段映射与分组结构

`labelKey` / `valueKey` / `descriptionKey` 把选项映射到任意字段；`type: 'label' | 'separator'` 渲染分组标题与分隔线；`mode="listbox"` 关闭搜索能力。

<DemoBlock title="字段映射 · 分组 · listbox 模式" description="labelKey / valueKey / descriptionKey / type / mode" :code="selectMenuFieldsRaw">
  <SelectMenuFields />
</DemoBlock>

## 图标、过滤字段、插槽与 ui 插槽

`selectedIcon` / `clearIcon` 自定义图标（XIcon 名称或任意组件）；`filterFields` 指定搜索命中的字段；`ui` 按主题插槽覆盖类名；`leading` / `trailing` / `option` / `empty` 插槽自定义各区域。

<DemoBlock title="图标 · filterFields · ui · 插槽" description="selectedIcon / clearIcon / filterFields / ui / leading / trailing / option / empty" :code="selectMenuUiRaw">
  <SelectMenuUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-select-menu
```

## API

### XSelectMenu

<!--@include: ./api/selectmenu.md-->

**事件**：update:modelValue 值变化 · update:open 打开状态变化 · update:searchTerm 搜索词变化 · change 值变化 · focus / blur 打开与关闭 · create 创建新选项 · clear 清空 · highlight 高亮项变化

**插槽**：leading 前置内容 · trailing 后置内容 · contentTop / contentBottom 浮层顶部与底部 · item 自定义选项 ({ item, index }) · itemLeading / itemLabel / itemDescription / itemTrailing 选项片段 · empty 空数据提示 · createItemLabel 创建项文案

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 触发按钮 |
| value | 选中值文本 |
| placeholder | 占位文本 |
| leading | 前置内容容器 |
| trailing | 后置内容容器 |
| trailingIcon | 展开图标 |
| trailingClear | 清空按钮 |
| content | 弹出内容面板 |
| focusScope | 内容焦点区容器 |
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
- 触发按钮：focus ring 过渡
