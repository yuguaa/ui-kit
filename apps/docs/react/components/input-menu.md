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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XInputMenuItemData[] | - | 菜单项数组，支持任意字段、description、type、disabled、icon |
| value / defaultValue | string · number · boolean | - | 选中值，autocomplete 模式下为输入文本 |
| mode | combobox · listbox · autocomplete | combobox | combobox 输入框即搜索，listbox 输入框只读、菜单内搜索，autocomplete 自由输入 |
| searchInput | boolean · { placeholder } | - | 菜单内搜索框 |
| color | 七种语义色 | primary | 语义色 |
| variant | outline · solid · soft · ghost · subtle · link | outline | 预设样式 |
| size | sm · md · lg | md | 尺寸 |
| type | string | text | 输入框类型 |
| required | boolean | false | 必填标记 |
| placeholder | string | 搜索并选择… | 占位文字 |
| trailingIcon | string · 组件 | chevron-down | 展开图标 |
| selectedIcon | string · 组件 | check | 选中态图标 |
| deleteIcon | string · 组件 | x | 删除标签图标 |
| clear | boolean | false | 有选中项时显示清空按钮 |
| clearIcon | string · 组件 | x | 清空按钮图标 |
| content | 对象 | - | 浮层内容配置 |
| arrow | boolean | false | 浮层箭头 |
| portal | boolean | true | 浮层渲染到 body |
| virtualize | boolean | false | 虚拟滚动（长列表） |
| valueKey / labelKey / descriptionKey | string | value / label / description | 菜单项字段名 |
| multiple | boolean | false | 多标签模式（tags 形态） |
| highlight | boolean | false | 选中项高亮样式 |
| fixed | boolean | false | 触发器固定样式 |
| createItem | boolean | false | 关键字不存在时回车创建新选项 |
| filterFields | string[] | [labelKey] | 过滤字段 |
| ignoreFilter | boolean | false | 忽略内部过滤 |
| autofocus | boolean | false | 打开时自动聚焦 |
| autofocusDelay | number | 0 | 自动聚焦延迟（ms） |
| open | boolean | - | 受控打开状态 |
| defaultOpen | boolean | false | 初始打开状态 |
| openOnClick | boolean | false | 点击触发器打开 |
| openOnFocus | boolean | false | 聚焦输入框打开 |
| highlightOnHover | boolean | true | 悬停高亮选项 |
| disabled | boolean | false | 是否禁用 |
| id / name | string | - | 表单字段标识 |
| icon / avatar | ReactNode · 对象 | - | 前置图标或头像 |
| loading | boolean | false | 加载态 |
| loadingIcon | string · 组件 | loader-circle | 加载图标 |
| render | ReactElement | - | 渲染为指定元素（根容器） |
| ui | XInputMenuUi | - | 主题插槽类名 |
| onValueChange | (value) => void | - | 值变化回调 |
| onChange | (event) => void | - | 值变化事件回调 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |
| onFocus / onBlur | (event) => void | - | 打开与关闭回调 |
| onCreate | (value) => void | - | 创建新选项回调 |
| onClear | () => void | - | 清空回调 |
| onRemoveTag | (value) => void | - | 删除标签回调 |
| onHighlight | (payload) => void | - | 高亮项变化回调 |
| leading / trailing | ReactNode | - | 前置 / 后置内容 |
| searchInputSlot | ({ keyword, onInput }) => ReactNode | - | 菜单内搜索框 |
| item | ({ item, index }) => ReactNode | - | 自定义菜单项 |
| itemLeading / itemLabel / itemDescription / itemTrailing | ({ item }) => ReactNode | - | 选项片段自定义 |
| tagsItemText / tagsItemDelete | ({ item, index }) => ReactNode | - | 多标签模式下的标签片段自定义 |
| empty | ReactNode | - | 空数据提示内容 |
| contentTop / contentBottom | ReactNode | - | 浮层顶部 / 底部内容 |
| createItemLabel | ReactNode | - | 创建项文案 |

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
