---
title: NavigationMenu 导航菜单
description: 为页面提供功能导航，支持垂直手风琴、水平内容面板、折叠图标模式与 ui 主题插槽
---

# NavigationMenu 导航菜单

为页面提供功能导航。垂直方向（`orientation="vertical"`）使用手风琴展开子菜单，`collapsed` 折叠为仅图标并用 `popover` / `tooltip` 展示子菜单与标签；水平方向使用内容面板悬浮展开；`highlight` 选中项显示指示线；`labelKey` / `valueKey` 支持任意字段映射。

<script setup>
import NavigationMenuVertical from '@demos/react/navigation-menu-vertical'
import navigationMenuVerticalRaw from '@demos/react/navigation-menu-vertical.tsx.code.txt?raw'
import NavigationMenuHorizontal from '@demos/react/navigation-menu-horizontal'
import navigationMenuHorizontalRaw from '@demos/react/navigation-menu-horizontal.tsx.code.txt?raw'
import NavigationMenuCollapsed from '@demos/react/navigation-menu-collapsed'
import navigationMenuCollapsedRaw from '@demos/react/navigation-menu-collapsed.tsx.code.txt?raw'
</script>

## 垂直手风琴

垂直方向手风琴展开子菜单；type: 'label' 渲染分组标题；highlight 选中项显示指示线（嵌套级在左侧，highlightColor 指定颜色）；variant 提供 pill / link 两种预设。

<DemoBlock title="手风琴 · 分组 · 指示线 · 字段映射" description="children / label / highlight / highlightColor / variant / labelKey" :code="navigationMenuVerticalRaw">
  <ReactDemo :component="NavigationMenuVertical" />
</DemoBlock>

## 水平内容面板

水平方向悬浮展开内容面板，子项支持 icon 与 description；arrow 显示指向面板的指示箭头；target: '_blank' 的项显示 externalIcon。

<DemoBlock title="水平面板 · 箭头 · 外链" description="orientation / content / arrow / externalIcon" :code="navigationMenuHorizontalRaw">
  <ReactDemo :component="NavigationMenuHorizontal" />
</DemoBlock>

## 折叠图标模式

collapsed 折叠为仅图标；tooltip 悬停显示标签，popover 悬停展开子菜单列表；badge 徽标在折叠时隐藏；ui 按主题插槽覆盖类名。

<DemoBlock title="折叠 · tooltip · popover · ui" description="collapsed / tooltip / popover / badge / ui" :code="navigationMenuCollapsedRaw">
  <ReactDemo :component="NavigationMenuCollapsed" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-navigation-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XNavigationMenuItem[] · XNavigationMenuItem[][] | - | 菜单项数组，二维数组时渲染多列表并以分隔线隔开 |
| selectedKeys | string[] | [] | 当前选中的 key（或 valueKey 字段值），用于高亮当前项 |
| value | string · string[] | - | 受控值：水平方向为打开的面板项值，垂直方向为展开的手风琴项值 |
| defaultValue | string · string[] | - | 非受控初始值 |
| type | single · multiple | multiple | 垂直方向手风琴展开模式：single 单开，multiple 多开 |
| collapsible | boolean | true | 垂直方向手风琴是否可关闭已展开项 |
| disabled | boolean | false | 根级禁用（垂直方向手风琴） |
| mode | vertical · horizontal · inline | vertical | 菜单模式（inline 等同垂直手风琴） |
| orientation | horizontal · vertical | - | 排列方向，优先于 mode |
| color | primary · secondary · neutral · success · info · warning · error | primary | 语义色：选中项文字颜色 |
| variant | pill · link | pill | 预设样式 |
| collapsed | boolean | false | 垂直方向折叠为仅图标 |
| tooltip | boolean · 配置对象 | false | 折叠时显示标签提示，`{ delayDuration?, content? }` |
| popover | boolean · 配置对象 | false | 折叠时子菜单用 popover 展示，`{ content? }` |
| highlight | boolean | false | 选中项显示指示线 |
| highlightColor | primary · secondary · neutral · success · info · warning · error | primary | 指示线颜色 |
| trailingIcon | string · ComponentType | chevron-down | 子菜单展开图标 |
| externalIcon | boolean · string · ComponentType | true | 外链图标，false 时隐藏 |
| arrow | boolean | false | 水平方向显示指示箭头 |
| content | { align?, alignOffset? } | - | 水平方向内容面板配置 |
| contentOrientation | horizontal · vertical | horizontal | 内容面板排列方向（仅水平模式） |
| labelKey | string | label | 菜单项标题字段 |
| valueKey | string | key | 菜单项值字段 |
| theme | light · dark | light | 菜单主题（dark 为深色底） |
| render | ReactElement | - | 渲染为指定元素（根容器） |
| ui | XNavigationMenuUi | - | 主题插槽类名 |
| className | string | - | 根容器类名 |
| onClick | (item) => void | - | 点击菜单项的回调 |
| onSelect | (item) => void | - | 选中菜单项的回调 |
| onValueChange | (value) => void | - | 展开值变化回调 |
| listLeadingSlot | () => ReactNode | - | 列表前内容 |
| listTrailingSlot | () => ReactNode | - | 列表后内容 |
| itemContentSlot / item / index / active / close | (props: { item, index, active, ui, close? }) => ReactNode | - | 自定义项内容面板（水平模式与折叠 popover） |
| itemSlot | (props: { item, index, active }) => ReactNode | - | 完全自定义菜单项 |
| itemLeadingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项前置区域 |
| itemLabelSlot | (props: { item, index, active }) => ReactNode | - | 自定义项标题 |
| itemTrailingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项尾部区域 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| list | 菜单列表 |
| label | 分组标题项 |
| item | 菜单项 |
| link | 菜单链接 |
| linkLeadingIcon | 链接前置图标 |
| linkLeadingAvatar | 链接前置头像 |
| linkLeadingAvatarSize | 链接前置头像尺寸 |
| linkLeadingChipSize | 链接前置 chip 尺寸 |
| linkTrailing | 链接尾部容器 |
| linkTrailingBadge | 链接尾部徽标 |
| linkTrailingBadgeSize | 链接尾部徽标尺寸 |
| linkTrailingIcon | 链接尾部图标 |
| linkLabel | 链接标签 |
| linkLabelExternalIcon | 外链图标 |
| childList | 子菜单列表 |
| childLabel | 折叠 popover 的子菜单标题 |
| childItem | 子菜单项 |
| childLink | 子菜单链接 |
| childLinkWrapper | 子菜单链接文本容器 |
| childLinkIcon | 子菜单链接图标 |
| childLinkLabel | 子菜单链接标签 |
| childLinkLabelExternalIcon | 子菜单外链图标 |
| childLinkDescription | 子菜单链接说明 |
| separator | 多列表分隔线 |
| viewportWrapper | 水平浮层定位容器 |
| viewport | 水平浮层面板 |
| content | 展开内容容器 |
| indicator | 水平指示箭头容器 |
| arrow | 水平指示箭头 |

## 动效

- 面板：淡入 + 缩放进出场（scale 0.95，100ms）
- 链接：hover 背景过渡
- 箭头：旋转过渡
