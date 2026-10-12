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

<!--@include: ./api/navigation-menu.md-->

**插槽**：listLeadingSlot / listTrailingSlot 列表前与后 · itemContentSlot 自定义项内容面板 · itemSlot 完全自定义菜单项 · itemLeadingSlot / itemLabelSlot / itemTrailingSlot 项局部

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

## 设计规格

React 端基于 Base UI NavigationMenu（折叠模式用 Base UI Popover / Tooltip），主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量 + kit-theme.css 色板。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| viewport（水平浮层） | bg-popover | 对应 bg-default |
| link（hover / 打开） | hover:before:bg-muted/50 | 对应 before:bg-elevated/50 |
| childLink（hover） | hover:before:bg-muted/50 | 对应 before:bg-elevated/50 |
| 折叠 Popover 面板 | bg-popover | 对应 Vue 端垂直折叠 Popover 的 bg-default |
| arrow（指示箭头） | bg-popover | 对应 bg-default |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| link（未激活） | text-muted-foreground | 对应 text-muted |
| link（hover / 打开） | hover:text-highlighted（自定义类） | 对应 text-highlighted |
| link（active=true + color） | text-primary / text-success 等 | 对应 text-color，与 Vue 端一致 |
| linkLeadingIcon | text-muted-foreground，hover 时 text-default | 对应 text-dimmed / text-default |
| childLink（active=false） | text-foreground | 对应 text-default |
| childLink（hover） | hover:text-highlighted | 对应 text-highlighted |
| childLinkDescription | text-muted-foreground | 对应 text-muted |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| viewport | ring-1 ring-border | 对应 ring ring-default |
| link / childLink（focus-visible） | before:outline-3 + outline-color/25 | 与 Vue 端一致 |
| arrow | border border-border | 对应 border border-default |
| separator | bg-border | 与 Vue 端一致 |
| highlight 指示线 | after:bg-highlightColor | 与 Vue 端一致 |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| viewport · link / childLink 高亮层 | rounded-md | 6px，与 Vue 端同值 |
| viewport | shadow-lg | 与 Vue 端同值 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| variant=pill（默认） | 未激活：text-muted-foreground + hover:text-highlighted + hover:before:bg-muted/50；激活 + color：text-color |
| variant=link | 未激活：text-muted-foreground + hover:text-highlighted（无背景高亮层） |
| orientation=horizontal | 浮层为 viewport 面板；orientation=vertical 折叠时子菜单为 Popover 浮层 |
| highlight=true | 水平模式 link 底部横线、垂直模式左侧竖线，激活时 after:bg-highlightColor |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Base UI NavigationMenu 语义，与 Vue 端 reka 一致：Enter / Space 打开 trigger 菜单，ArrowDown 移入内容，Esc 关闭，水平模式 ArrowRight / ArrowLeft 在 trigger 间移动；折叠模式的 Popover 支持 Esc 关闭与外部点击关闭 |
| ARIA | 与 Vue 端一致：Trigger 为 aria-expanded + aria-haspopup=menu；Indicator 与 Arrow 为指示层 |
| 动效 | viewport 进出场为 tailwindcss-animate 风格 animate-in / fade-in-0 / zoom-in-95（Vue 端为 scale-in / scale-out 100ms，差异注明）；trailingIcon 展开时 rotate-180 + duration-200，与 Vue 端一致；indicator 为 fade-in / fade-out；link 为 transition-colors + before:transition-colors |
