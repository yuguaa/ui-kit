---
title: ContextMenu 右键菜单
description: 在指定区域右键唤出的上下文菜单，支持子菜单、字段映射与 ui 主题插槽
---

# ContextMenu 右键菜单

在指定区域右键唤出的上下文菜单。`items` 支持子菜单（`children`）、分组标题（`type: 'label'`）与分隔线（`type: 'separator'`）；`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；`size` 提供五档尺寸。

<script setup>
import ContextMenuBasic from '@demos/react/context-menu-basic'
import contextMenuBasicRaw from '@demos/react/context-menu-basic.tsx.code.txt?raw'
import ContextMenuItemExtras from '@demos/react/context-menu-item-extras'
import contextMenuItemExtrasRaw from '@demos/react/context-menu-item-extras.tsx.code.txt?raw'
import ContextMenuSubmenu from '@demos/react/context-menu-submenu'
import contextMenuSubmenuRaw from '@demos/react/context-menu-submenu.tsx.code.txt?raw'
</script>

## 基础用法

children 为触发区域，右键唤出菜单；type 渲染分组标题与分隔线，icon 前置图标，color 项语义色。

<DemoBlock title="分组 · 图标 · 语义色" description="items / type / icon / color / size" :code="contextMenuBasicRaw">
  <ReactDemo :component="ContextMenuBasic" />
</DemoBlock>

## 说明与快捷键

description 说明文字、shortcut 快捷键显示在项尾部。

<DemoBlock title="说明与快捷键" description="description 说明文字 / shortcut 快捷键" :code="contextMenuItemExtrasRaw">
  <ReactDemo :component="ContextMenuItemExtras" />
</DemoBlock>

## 子菜单、字段映射与 ui 插槽

children 定义子菜单，悬停展开；type: 'checkbox' 渲染勾选项，checked 受控选中态；labelKey / descriptionKey 映射任意字段；target: '_blank' 的项在标签后显示 externalIcon；ui 按主题插槽覆盖类名。

<DemoBlock title="子菜单 · checkbox · 字段映射 · ui" description="children / checkbox / labelKey / descriptionKey / externalIcon / ui" :code="contextMenuSubmenuRaw">
  <ReactDemo :component="ContextMenuSubmenu" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-context-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XContextMenuItem[] · XContextMenuItem[][] | [] | 菜单项数组，二维数组时按行分组 |
| size | xs · sm · md · lg · xl | md | 尺寸，控制项内边距与图标大小 |
| open | boolean | - | 是否打开 |
| modal | boolean | true | 模态：打开时锁定页面滚动与指针交互 |
| labelKey | string | label | 菜单项标签字段 |
| valueKey | string | key | 菜单项值字段 |
| descriptionKey | string | description | 菜单项说明字段 |
| checkedIcon | string · ComponentType | check | checkbox 选中态图标 |
| loadingIcon | string · ComponentType | loader-circle | 加载图标 |
| externalIcon | boolean · string · ComponentType | true | 外链图标，false 时隐藏 |
| content | { align?, side?, alignOffset?, sideOffset? } | - | 浮层定位配置 |
| portal | boolean · string · HTMLElement | true | 浮层是否渲染到 body，可为选择器或指定容器元素 |
| disabled | boolean | false | 是否禁用触发区域 |
| ui | XContextMenuUi | - | 主题插槽类名 |
| className | string | - | 触发区域类名 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |
| onSelect | (item) => void | - | 选中菜单项回调 |
| itemSlot | (props: { item, index, active }) => ReactNode | - | 完全自定义菜单项 |
| contentTopSlot | (props: { sub }) => ReactNode | - | 浮层顶部内容 |
| contentBottomSlot | (props: { sub }) => ReactNode | - | 浮层底部内容 |
| itemLeadingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项前置区域 |
| itemLabelSlot | (props: { item, index, active }) => ReactNode | - | 自定义项标题 |
| itemDescriptionSlot | (props: { item, index, active }) => ReactNode | - | 自定义项说明 |
| itemTrailingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项尾部区域 |
| children | ReactNode | - | 触发区域内容 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| content | 浮层容器 |
| viewport | 分组滚动区 |
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
const [ContextMenu, menuApi] = useXContextMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 项：hover 背景过渡
