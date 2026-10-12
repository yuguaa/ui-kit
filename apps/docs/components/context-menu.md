---
title: ContextMenu 右键菜单
description: 在指定区域右键唤出的上下文菜单，支持子菜单、字段映射与 ui 主题插槽
---

# ContextMenu 右键菜单

在指定区域右键唤出的上下文菜单。`items` 支持子菜单（`children`）、分组标题（`type: 'label'`）与分隔线（`type: 'separator'`）；`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；`size` 提供五档尺寸。

<script setup>
import ContextMenuBasic from '@demos/vue/context-menu-basic.vue'
import contextMenuBasicRaw from '@demos/vue/context-menu-basic.vue.code.txt?raw'
import ContextMenuItemExtras from '@demos/vue/context-menu-item-extras.vue'
import contextMenuItemExtrasRaw from '@demos/vue/context-menu-item-extras.vue.code.txt?raw'
import ContextMenuSubmenu from '@demos/vue/context-menu-submenu.vue'
import contextMenuSubmenuRaw from '@demos/vue/context-menu-submenu.vue.code.txt?raw'
</script>

## 基础用法

默认插槽为触发区域，右键唤出菜单；type 渲染分组标题与分隔线，icon 前置图标，color 项语义色。

<DemoBlock title="分组 · 图标 · 语义色" description="items / type / icon / color / size" :code="contextMenuBasicRaw">
  <ContextMenuBasic />
</DemoBlock>

## 说明与快捷键

description 说明文字、shortcut 快捷键显示在项尾部。

<DemoBlock title="说明与快捷键" description="description 说明文字 / shortcut 快捷键" :code="contextMenuItemExtrasRaw">
  <ContextMenuItemExtras />
</DemoBlock>

## 子菜单、字段映射与 ui 插槽

children 定义子菜单，悬停展开；type: 'checkbox' 渲染勾选项，checked 受控选中态；labelKey / descriptionKey 映射任意字段；target: '_blank' 的项在标签后显示 externalIcon；ui 按主题插槽覆盖类名。

<DemoBlock title="子菜单 · checkbox · 字段映射 · ui" description="children / checkbox / labelKey / descriptionKey / externalIcon / ui" :code="contextMenuSubmenuRaw">
  <ContextMenuSubmenu />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-context-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | ContextMenuItemData[] · ContextMenuItemData[][] | [] | 菜单项数组，二维数组时按行分组 |
| size | xs · sm · md · lg · xl | md | 尺寸，控制项内边距与图标大小 |
| open | boolean | - | 是否打开（为 true 时在触发区域派发 contextmenu 事件打开） |
| modal | boolean | true | 模态：打开时锁定页面滚动与指针交互 |
| labelKey | string | label | 菜单项标签字段 |
| valueKey | string | key | 菜单项值字段 |
| descriptionKey | string | description | 菜单项说明字段 |
| checkedIcon | string · Component | check | checkbox 选中态图标 |
| loadingIcon | string · Component | loader-circle | 加载图标 |
| externalIcon | boolean · string · Component | true | 外链图标，false 时隐藏 |
| content | { align?, side?, alignOffset?, sideOffset? } | - | 浮层定位配置 |
| portal | boolean · string · HTMLElement | true | 浮层是否渲染到 body，可为选择器或指定容器元素 |
| disabled | boolean | false | 是否禁用触发区域 |
| ui | ContextMenuUi | - | 主题插槽类名 |
| class | any | - | 触发区域类名 |

**事件**：update:open 打开状态变化回调 · select 选中菜单项回调

**插槽**：default 触发区域内容 · item 自定义菜单项 ({ item, index, active }) · item-leading / item-label / item-description / item-trailing 自定义项局部 · content-top 浮层顶部内容 ({ sub }) · content-bottom 浮层底部内容 ({ sub })

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

```ts
const [ContextMenu, menuApi] = useXContextMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 项：hover 背景过渡

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | bg-default | #ffffff / #171717 |
| item（高亮 / 子菜单打开） | before:bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| item（active=true） | before:bg-elevated | #f5f5f5 / #262626 |
| item（active=false + color） | before:bg-color/10（高亮时） | 如 primary 为 #22c55e，10% 透明 |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| item（active=false） | text-default | #404040 / #e5e5e5 |
| item（高亮 / active=true） | text-highlighted | #171717 / #ffffff |
| item（color 项） | text-color，如 text-error | #ef4444 |
| itemLeadingIcon | text-dimmed，高亮时 text-default | #a3a3a3 / #404040 |
| itemDescription | text-muted | #737373 / #a3a3a3 |
| label（分组标题） | text-highlighted | #171717 / #ffffff |
| itemLabelExternalIcon | text-dimmed | #a3a3a3 / #a3a3a3 |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | ring ring-default | #e5e5e5 / #262626 |
| separator | bg-border | 同 border-default |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| content · item 高亮层 | rounded-md | 6px（--radius-md） |
| content | shadow-lg | Tailwind 默认 shadow-lg |

**变体**

| 变体 | token 组合 |
| --- | --- |
| color（primary 等七色 + neutral） | active=false：text-color + 高亮 before:bg-color/10；active=true：text-color + before:bg-color/10 |
| active=true | text-highlighted + before:bg-elevated |
| loading | itemLeadingIcon 切换为 animate-spin |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 右键（contextmenu 事件）打开菜单；reka ContextMenu 语义：ArrowDown / ArrowUp 在项间移动焦点，ArrowRight 打开子菜单，ArrowLeft 关闭子菜单，Esc 关闭菜单，Home / End 跳转首尾，字母键高亮匹配项 |
| ARIA | Content 为 role=menu；Item 为 role=menuitem；CheckboxItem 为 role=menuitemcheckbox + aria-checked；SubTrigger 为 aria-haspopup=menu + aria-expanded；Label / Separator 为结构性项 |
| 动效 | content 进出场 scale-in / scale-out 100ms；item（active=false）为 transition-colors；loading 项前置图标 animate-spin |
