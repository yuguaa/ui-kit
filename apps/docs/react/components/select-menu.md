---
title: SelectMenu 选择菜单
description: 触发按钮与弹出选项列表组成的选择菜单，支持搜索、多选、字段映射与分组结构项
---

# SelectMenu 选择菜单

触发按钮与弹出选项列表组成。`mode` 区分 combobox（菜单内搜索）与 listbox（纯列表）；`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；选项可带 `type: 'label' | 'separator'` 渲染分组标签与分隔线。

<script setup>
import SelectMenuBasic from '@demos/react/select-menu-basic'
import selectMenuBasicRaw from '@demos/react/select-menu-basic.tsx.code.txt?raw'
import SelectMenuFields from '@demos/react/select-menu-fields'
import selectMenuFieldsRaw from '@demos/react/select-menu-fields.tsx.code.txt?raw'
import SelectMenuUi from '@demos/react/select-menu-ui'
import selectMenuUiRaw from '@demos/react/select-menu-ui.tsx.code.txt?raw'
</script>

## 基础用法

单选、菜单内搜索（showSearch）、多选、禁用与清空（clearable）。

<DemoBlock title="单选 / 搜索 / 多选 / 禁用 / 清空" description="multiple · showSearch · disabled · clearable" :code="selectMenuBasicRaw">
  <ReactDemo :component="SelectMenuBasic" />
</DemoBlock>

## 字段映射与分组结构

`labelKey` / `valueKey` / `descriptionKey` 把选项映射到任意字段；`type: 'label' | 'separator'` 渲染分组标题与分隔线；`mode="listbox"` 关闭搜索能力。

<DemoBlock title="字段映射 · 分组 · listbox 模式" description="labelKey / valueKey / descriptionKey / type / mode" :code="selectMenuFieldsRaw">
  <ReactDemo :component="SelectMenuFields" />
</DemoBlock>

## 图标、过滤字段、插槽与 ui 插槽

`selectedIcon` / `clearIcon` 自定义图标（XIcon 名称或任意组件）；`filterFields` 指定搜索命中的字段；`ui` 按主题插槽覆盖类名；`leading` / `trailing` / `option` / `empty` 自定义各区域。

<DemoBlock title="图标 · filterFields · ui · 插槽" description="selectedIcon / clearIcon / filterFields / ui / leading / trailing / option / empty" :code="selectMenuUiRaw">
  <ReactDemo :component="SelectMenuUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-select-menu
```

## API

### XSelectMenu

<!--@include: ./api/select-menu.md-->

**事件**：onValueChange / onChange 值变化 · onOpenChange 打开状态 · onSearchTermChange 搜索词 · onFocus / onBlur · onCreate 创建新选项 · onClear 清空 · onHighlight 高亮项变化

**插槽**：leading 前置内容 · trailing 后置内容 · item 自定义选项 · itemLeading / itemLabel / itemDescription / itemTrailing 选项片段 · empty 空数据提示 · contentTop / contentBottom 浮层顶部与底部 · createItemLabel 创建项文案

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

## 设计规格

React 端主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量 + kit-theme.css 色板（primary-500 = #22c55e 等，与 Vue 端同值）。以下列出类名映射与双端差异。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | bg-popover | 对应 bg-default（shadcn --popover：亮 oklch(1 0 0)，暗 oklch(0.205 0 0)） |
| item（高亮） | data-highlighted:bg-accent | 对应 before:bg-elevated/50（shadcn --accent：亮 oklch(0.97 0 0)，暗 oklch(0.269 0 0)） |
| base（outline / ghost / none 变体） | bg-transparent | Vue 端 outline 变体为 bg-default，存在差异 |
| base（soft 变体） | bg-muted/50 | 对应 bg-elevated/50 |
| base（subtle 变体） | bg-muted | 对应 bg-elevated |
| arrow | fill-popover | 对应 fill-bg |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| base / value | text-foreground | 对应 text-highlighted（shadcn --foreground：亮 oklch(0.145 0 0)，暗 oklch(0.985 0 0)） |
| placeholder | text-muted-foreground | 对应 text-dimmed |
| item | text-popover-foreground | 对应 text-default |
| item（高亮） | data-highlighted:text-accent-foreground | 对应 text-highlighted |
| itemLeadingIcon · itemDescription · empty | text-muted-foreground | 对应 text-dimmed / text-muted |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| content | ring-1 ring-border | 对应 ring ring-default |
| base（outline / subtle 变体） | ring-1 ring-inset ring-input | 对应 ring-inset ring-accented |
| base（focus-visible） | focus-visible:ring-2 ring-primary/50 | 对应 outline-primary/25 · focus-visible:ring-primary |
| arrow | stroke-border | 对应 stroke-default |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| base · content · item | rounded-md | 6px（--radius-md，kit-theme.css 与 Vue 端同值） |
| content | shadow-md | Vue 端为 shadow-lg，存在差异 |

**变体**（触发按钮 base，color 仅影响 focus-visible 描边颜色）

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
| 键盘 | 与 Vue 端一致：触发按钮上 ArrowDown / ArrowUp 打开；菜单打开后焦点进入搜索输入框；Base UI Combobox 语义：输入即过滤，ArrowDown / ArrowUp 在选项间移动，Enter 选择，Esc 关闭 |
| ARIA | 与 Vue 端一致：输入框 role=combobox + aria-expanded / aria-controls；选项 role=option + aria-selected；data-highlighted 表示高亮项 |
| 动效 | content 无进出场动画类（Vue 端为 scale-in / scale-out 100ms，差异注明）；trailingIcon 展开时 rotate-180 + transition-transform（Vue 端无旋转，差异注明）；base 为 transition-[box-shadow,color]；loading 时尾部图标 animate-spin |
