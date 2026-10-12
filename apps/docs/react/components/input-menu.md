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

## 设计规格

React 端主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量 + kit-theme.css 色板（primary-500 = #22c55e 等，与 Vue 端同值）。mode 枚举为 combobox / autocomplete / listbox，比 Vue 端多 listbox 模式（输入框只读、搜索框在菜单内），差异注明。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | bg-popover | 对应 bg-default |
| item（高亮） | data-highlighted:bg-accent | 对应 before:bg-elevated/50 |
| base（outline / ghost / none 变体） | bg-transparent | Vue 端 outline 变体为 bg-default，存在差异 |
| base（soft 变体） | bg-muted/50 | 对应 bg-elevated/50 |
| base（subtle 变体） | bg-muted | 对应 bg-elevated |
| tagsItem | bg-elevated | React 端 CSS 变量表未定义该 token（Vue 端为 #f5f5f5 / #262626），差异注明 |
| arrow | fill-popover | 对应 fill-bg |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| base · tagsItem | text-foreground | 对应 text-highlighted |
| base / tagsInput（placeholder） | placeholder:text-muted-foreground | 对应 placeholder:text-dimmed |
| item | text-popover-foreground | 对应 text-default |
| item（高亮） | data-highlighted:text-accent-foreground | 对应 text-highlighted |
| itemLeadingIcon · itemDescription · empty · tagsItemDelete | text-muted-foreground | 对应 text-dimmed / text-muted |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| root | ring-1 ring-inset ring-input | 对应 ring-inset ring-accented |
| root（focus） | focus-within:ring-2 ring-primary/50 | Vue 端为 focus-visible outline/ring，触发时机不同（focus-within 对全部焦点来源），差异注明 |
| content | ring-1 ring-border | 对应 ring ring-default |
| tagsItem | ring-1 ring-inset ring-border | 对应 ring-inset ring-accented |
| arrow | stroke-border | 对应 stroke-default |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| root · content · item | rounded-md | 6px（--radius-md，与 Vue 端同值） |
| tagsItem | rounded-sm | 4px，与 Vue 端同值 |
| content | shadow-md | Vue 端为 shadow-lg，存在差异 |

**变体**（输入框 root，color 仅影响 focus-within 描边颜色）

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | bg-transparent + ring-input，hover:bg-muted/50 |
| soft | bg-muted/50，hover:bg-muted |
| subtle | bg-muted + ring-input |
| ghost | bg-transparent，hover:bg-muted |
| none | bg-transparent |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 与 Vue 端一致：输入即过滤，ArrowDown / ArrowUp 在选项间移动，Enter 选择，Esc 关闭；multiple 模式标签由 Base UI Combobox Chips 承担：输入框为空时 Backspace 删除最后一个标签，ChipRemove 按钮删除单个标签 |
| ARIA | 与 Vue 端一致：输入框 role=combobox + aria-expanded / aria-controls；选项 role=option + aria-selected；标签删除按钮可聚焦 |
| 动效 | content 无进出场动画类（Vue 端为 scale-in / scale-out 100ms，差异注明）；trailingIcon 展开时 rotate-180 + transition-transform（Vue 端无旋转，差异注明）；root 为 transition-[box-shadow,color]；loading 时尾部图标 animate-spin |
