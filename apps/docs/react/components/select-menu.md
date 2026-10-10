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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XSelectMenuItemData[] | - | 选项数据源，支持任意字段、description、type、disabled、icon |
| value / defaultValue | string · number · boolean · 数组 | - | 选中值，多选为数组 |
| open | boolean | - | 受控打开状态 |
| defaultOpen | boolean | false | 初始打开状态 |
| searchTerm | string | - | 受控搜索词 |
| mode | combobox · listbox | combobox | 底层模式：combobox 支持菜单内搜索，listbox 纯列表 |
| searchInput | boolean | true | 是否显示菜单内搜索输入框 |
| color | 七种语义色 | primary | 语义色（选中态与高亮） |
| variant | outline · solid · soft · ghost · subtle · link | outline | 触发器预设样式 |
| size | sm · md · lg | md | 尺寸 |
| required | boolean | false | 必填标记 |
| placeholder | string | 请选择 | 占位提示文字 |
| trailingIcon | string · 组件 | chevron-down | 展开图标 |
| selectedIcon | string · 组件 | check | 选中态图标 |
| clear | boolean | false | 有选中项时显示清空按钮（单选清为 ''，多选清为 []） |
| clearIcon | string · 组件 | x | 清空按钮图标 |
| content | 对象 | - | 浮层内容配置（side / align 等） |
| arrow | boolean | false | 浮层箭头 |
| portal | boolean | true | 浮层渲染到 body |
| virtualize | boolean | false | 虚拟滚动（长列表） |
| valueKey / labelKey / descriptionKey | string | value / label / description | 选项字段名 |
| multiple | boolean | false | 多选模式 |
| highlight | boolean | false | 选中项高亮样式 |
| fixed | boolean | false | 触发器固定样式 |
| createItem | boolean | false | 搜索关键字不存在时允许创建新选项 |
| filterFields | string[] | [labelKey] | 过滤字段 |
| ignoreFilter | boolean | false | 忽略内部过滤（服务端过滤场景） |
| autofocus | boolean | false | 打开时自动聚焦搜索框 |
| autofocusDelay | number | 0 | 自动聚焦延迟（ms） |
| highlightOnHover | boolean | true | 悬停高亮选项 |
| disabled | boolean | false | 是否禁用 |
| id / name | string | - | 表单字段标识 |
| icon / avatar | ReactNode · 对象 | - | 触发器前置图标或头像 |
| loading | boolean | false | 加载态 |
| loadingIcon | string · 组件 | loader-circle | 加载图标 |
| render | ReactElement | - | 渲染为指定元素（触发按钮） |
| ui | XSelectMenuUi | - | 主题插槽类名 |
| onValueChange | (value) => void | - | 值变化回调 |
| onChange | (event) => void | - | 值变化事件回调 |
| onClear | () => void | - | 清空回调 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |
| onSearchTermChange | (term) => void | - | 搜索词变化回调 |
| onFocus / onBlur | (event) => void | - | 打开与关闭回调 |
| onCreate | (value) => void | - | 创建新选项回调 |
| onHighlight | (payload) => void | - | 高亮项变化回调 |
| leading / trailing | ReactNode | - | 前置 / 后置内容 |
| item | ({ item, index }) => ReactNode | - | 自定义选项内容 |
| itemLeading / itemLabel / itemDescription / itemTrailing | ({ item }) => ReactNode | - | 选项片段自定义 |
| empty | ReactNode | - | 空数据提示内容 |
| contentTop / contentBottom | ReactNode | - | 浮层顶部 / 底部内容 |
| createItemLabel | ReactNode | - | 创建项文案 |

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
