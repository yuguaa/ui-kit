---
title: NavigationMenu 导航菜单
description: 为页面提供功能导航，支持垂直手风琴、水平内容面板、折叠图标模式与 ui 主题插槽
---

# NavigationMenu 导航菜单

为页面提供功能导航。垂直方向（`orientation="vertical"`）使用手风琴展开子菜单，`collapsed` 折叠为仅图标并用 `popover` / `tooltip` 展示子菜单与标签；水平方向使用内容面板悬浮展开；`highlight` 选中项显示指示线；`labelKey` / `valueKey` 支持任意字段映射。

<script setup>
import NavigationMenuVertical from '@demos/vue/navigation-menu-vertical.vue'
import navigationMenuVerticalRaw from '@demos/vue/navigation-menu-vertical.vue.code.txt?raw'
import NavigationMenuHorizontal from '@demos/vue/navigation-menu-horizontal.vue'
import navigationMenuHorizontalRaw from '@demos/vue/navigation-menu-horizontal.vue.code.txt?raw'
import NavigationMenuCollapsed from '@demos/vue/navigation-menu-collapsed.vue'
import navigationMenuCollapsedRaw from '@demos/vue/navigation-menu-collapsed.vue.code.txt?raw'
</script>

## 垂直手风琴

垂直方向手风琴展开子菜单；type: 'label' 渲染分组标题；highlight 选中项显示指示线（嵌套级在左侧，highlightColor 指定颜色）；variant 提供 pill / link 两种预设。

<DemoBlock title="手风琴 · 分组 · 指示线 · 字段映射" description="children / label / highlight / highlightColor / variant / labelKey" :code="navigationMenuVerticalRaw">
  <NavigationMenuVertical />
</DemoBlock>

## 水平内容面板

水平方向悬浮展开内容面板，子项支持 icon 与 description；arrow 显示指向面板的指示箭头；target: '_blank' 的项显示 externalIcon。

<DemoBlock title="水平面板 · 箭头 · 外链" description="orientation / content / arrow / externalIcon" :code="navigationMenuHorizontalRaw">
  <NavigationMenuHorizontal />
</DemoBlock>

## 折叠图标模式

collapsed 折叠为仅图标；tooltip 悬停显示标签，popover 悬停展开子菜单列表；badge 徽标在折叠时隐藏；ui 按主题插槽覆盖类名。

<DemoBlock title="折叠 · tooltip · popover · ui" description="collapsed / tooltip / popover / badge / ui" :code="navigationMenuCollapsedRaw">
  <NavigationMenuCollapsed />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-navigation-menu
```

## API

<!--@include: ./api/navigation-menu.md-->

**事件**：click 点击菜单项的回调 · select 选中菜单项的回调 · valueChange 展开值变化回调

**插槽**：item 自定义菜单项 ({ item, index, active }) · item-leading / item-label / item-trailing 自定义项局部 · item-content 自定义项内容面板 ({ item, index, active, ui, close? }) · list-leading 列表前内容 · list-trailing 列表后内容

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

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| viewport（水平浮层） | bg-default | #ffffff / #171717 |
| link（hover / 打开） | before:bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| childLink（active=true） | before:bg-elevated | #f5f5f5 / #262626 |
| childLink（hover） | before:bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| arrow（指示箭头） | bg-default | #ffffff / #171717 |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| link（active=false，variant=pill / link） | text-muted | #737373 / #a3a3a3 |
| link（hover / 打开 / active=true） | text-highlighted | #171717 / #ffffff |
| link（active=true + color） | text-color，如 text-primary | #22c55e |
| linkLeadingIcon | text-dimmed，hover / 打开时 text-default | #a3a3a3 / #404040 |
| label（分组标题） · childLabel | text-highlighted | #171717 / #ffffff |
| childLink（active=false） | text-default | #404040 / #e5e5e5 |
| childLink（hover / active=true） | text-highlighted | #171717 / #ffffff |
| childLinkIcon | text-dimmed，hover 时 text-default | #a3a3a3 / #404040 |
| childLinkDescription | text-muted | #737373 / #a3a3a3 |
| linkLabelExternalIcon · childLinkLabelExternalIcon | text-dimmed | #a3a3a3 / #a3a3a3 |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| viewport | ring ring-default | #e5e5e5 / #262626 |
| link / childLink（focus-visible，color=primary） | before:outline-3 · outline-primary/25 | #22c55e |
| arrow | border border-default | #e5e5e5 / #262626 |
| separator | bg-border | 同 border-default |
| highlight 指示线（highlight=true + active） | after:bg-highlightColor，如 bg-primary | #22c55e |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| viewport · link / childLink 高亮层 | rounded-md | 6px（--radius-md） |
| arrow | rounded-xs | 2px（--radius-xs） |
| viewport | shadow-lg | Tailwind 默认 shadow-lg |

**变体**

| 变体 | token 组合 |
| --- | --- |
| variant=pill（默认） | 未激活：text-muted + hover:text-highlighted + hover:before:bg-elevated/50；激活 + color：text-color |
| variant=link | 未激活：text-muted + hover:text-highlighted（无背景高亮层）；激活 + color：text-color |
| orientation=horizontal | link 高亮层覆盖整个按钮区域；content 为悬浮面板 |
| orientation=vertical（collapsed=false） | 子菜单为手风琴结构（collapsible-down / up 200ms） |
| orientation=vertical（collapsed=true） | 子菜单为 Popover 浮层（shadow-sm rounded-sm） |
| highlight=true | 水平模式 link 底部横线、垂直模式左侧竖线，激活时 after:bg-highlightColor |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | reka NavigationMenu 语义：Enter / Space 打开 trigger 菜单，ArrowDown 移入内容，Esc 关闭，水平模式 ArrowRight / ArrowLeft 在 trigger 间移动；焦点可见时显示 before:outline-3 描边；垂直非折叠模式的子菜单为 Accordion 键盘语义（Enter / Space 展开收起） |
| ARIA | Trigger 为 aria-expanded + aria-haspopup=menu；Content 为菜单内容区域；Indicator 与 Arrow 为指示层；垂直 Accordion 的 trigger 为 role=button + aria-expanded，content 为 role=region |
| 动效 | viewport 进出场 scale-in / scale-out 100ms + 尺寸变化 transition-[width,height,left,right] 200ms；水平 content 切换 enter-from-left / enter-from-right 200ms；垂直展开 collapsible-down / collapsible-up 200ms；indicator 显示隐藏 fade-in / fade-out 100ms + 位移与宽度过渡 200ms；linkTrailingIcon 展开时 rotate-180 + duration-200 |
