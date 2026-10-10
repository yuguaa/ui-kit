---
title: DropdownMenu 下拉菜单
description: 点击按钮展开的操作菜单，支持子菜单、字段映射、过滤搜索与 ui 主题插槽
---

# DropdownMenu 下拉菜单

点击按钮展开的操作菜单。`items` 支持子菜单（`children`）、分组标题（`type: 'label'`）与分隔线（`type: 'separator'`）；`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；`filter` 开启顶部搜索框；`size` 提供五档尺寸。

<script setup>
import DropdownMenuBasic from '@demos/react/dropdown-menu-basic'
import dropdownMenuBasicRaw from '@demos/react/dropdown-menu-basic.tsx.code.txt?raw'
import DropdownMenuItemExtras from '@demos/react/dropdown-menu-item-extras'
import dropdownMenuItemExtrasRaw from '@demos/react/dropdown-menu-item-extras.tsx.code.txt?raw'
import DropdownMenuSubmenu from '@demos/react/dropdown-menu-submenu'
import dropdownMenuSubmenuRaw from '@demos/react/dropdown-menu-submenu.tsx.code.txt?raw'
import DropdownMenuFilter from '@demos/react/dropdown-menu-filter'
import dropdownMenuFilterRaw from '@demos/react/dropdown-menu-filter.tsx.code.txt?raw'
</script>

## 基础用法

type 渲染分组标题与分隔线，icon 前置图标，color 项语义色，size 控制项内边距与图标大小。

<DemoBlock title="分组 · 图标 · 语义色" description="items / type / icon / color / size" :code="dropdownMenuBasicRaw">
  <ReactDemo :component="DropdownMenuBasic" />
</DemoBlock>

## 说明与快捷键

description 说明文字、shortcut 快捷键显示在项尾部。

<DemoBlock title="说明与快捷键" description="description 说明文字 / shortcut 快捷键" :code="dropdownMenuItemExtrasRaw">
  <ReactDemo :component="DropdownMenuItemExtras" />
</DemoBlock>

## 子菜单与 checkbox

children 定义子菜单，悬停展开；type: 'checkbox' 渲染勾选项，checked 受控选中态，选中显示 checkedIcon；loading 时前置图标显示旋转的 loadingIcon。

<DemoBlock title="子菜单 · checkbox · 加载态" description="children / checkbox / checkedIcon / loadingIcon" :code="dropdownMenuSubmenuRaw">
  <ReactDemo :component="DropdownMenuSubmenu" />
</DemoBlock>

## 过滤与字段映射

filter 开启顶部搜索框，filterFields 指定匹配字段（默认 [labelKey]）；labelKey / descriptionKey 映射任意字段；arrow 显示指向触发器的箭头；target: '_blank' 的项在标签后显示 externalIcon；ui 按主题插槽覆盖类名。

<DemoBlock title="过滤 · 字段映射 · 外链 · ui" description="filter / filterFields / labelKey / descriptionKey / arrow / externalIcon / ui" :code="dropdownMenuFilterRaw">
  <ReactDemo :component="DropdownMenuFilter" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-dropdown-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XDropdownMenuItem[] · XDropdownMenuItem[][] | [] | 菜单项数组，二维数组时按行分组 |
| size | xs · sm · md · lg · xl | md | 尺寸，控制项内边距与图标大小 |
| open | boolean | - | 是否打开 |
| defaultOpen | boolean | false | 默认打开状态（非受控） |
| modal | boolean | true | 模态：打开时锁定页面滚动与指针交互 |
| closeOnSelect | boolean | true | 选择后关闭菜单 |
| triggerLabel | ReactNode | 操作 | 触发按钮文字 |
| trigger | ReactElement | - | 自定义触发按钮 |
| labelKey | string | label | 菜单项标签字段 |
| valueKey | string | key | 菜单项值字段 |
| descriptionKey | string | description | 菜单项说明字段 |
| checkedIcon | string · ComponentType | check | checkbox 选中态图标 |
| loadingIcon | string · ComponentType | loader-circle | 加载图标 |
| externalIcon | boolean · string · ComponentType | true | 外链图标，false 时隐藏 |
| filter | boolean · { placeholder? } | false | 顶部过滤搜索框，对象可配置占位文字 |
| filterFields | string[] | [labelKey] | 过滤时匹配的字段 |
| ignoreFilter | boolean | false | 忽略过滤（适合自定义过滤场景） |
| content | { align?, side?, alignOffset?, sideOffset? } | - | 浮层定位配置 |
| portal | boolean · string · HTMLElement | true | 浮层是否渲染到 body，可为选择器或指定容器元素 |
| arrow | boolean | false | 是否显示指向触发器的箭头 |
| disabled | boolean | false | 是否禁用触发按钮 |
| ui | XDropdownMenuUi | - | 主题插槽类名 |
| className | string | - | 触发按钮类名 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |
| onSelect | (item) => void | - | 选中菜单项回调 |
| emptySlot | (props: { searchTerm }) => ReactNode | - | 过滤无结果时的内容 |
| contentTopSlot | (props: { sub }) => ReactNode | - | 浮层顶部内容（搜索框之后） |
| contentBottomSlot | (props: { sub }) => ReactNode | - | 浮层底部内容 |
| itemSlot | (props: { item, index, active }) => ReactNode | - | 完全自定义菜单项 |
| itemLeadingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项前置区域 |
| itemLabelSlot | (props: { item, index, active }) => ReactNode | - | 自定义项标题 |
| itemDescriptionSlot | (props: { item, index, active }) => ReactNode | - | 自定义项说明 |
| itemTrailingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项尾部区域 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| content | 浮层容器 |
| input | 过滤输入框 |
| empty | 空数据提示 |
| viewport | 分组滚动区 |
| arrow | 指向触发器的箭头 |
| group | 分组容器 |
| label | 分组标题项 |
| separator | 分隔线项 |
| item | 菜单项按钮 |
| itemLeadingIcon | 项前置图标 |
| itemLeadingAvatar | 项前置头像 |
| itemLeadingAvatarSize | 项前置头像尺寸 |
| itemTrailing | 项尾部容器 |
| itemTrailingIcon | 子菜单箭头 / 选中态图标 |
| itemTrailingKbds | 快捷键容器 |
| itemTrailingKbdsSize | 快捷键尺寸 |
| itemWrapper | 项文本容器 |
| itemLabel | 项标签 |
| itemDescription | 项说明 |
| itemLabelExternalIcon | 外链图标 |

## hook

```tsx
const [DropdownMenu, menuApi] = useXDropdownMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 项：hover 背景过渡
- 加载：图标旋转
