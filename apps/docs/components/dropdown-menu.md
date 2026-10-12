---
title: DropdownMenu 下拉菜单
description: 点击按钮展开的操作菜单，支持子菜单、字段映射、过滤搜索与 ui 主题插槽
---

# DropdownMenu 下拉菜单

点击按钮展开的操作菜单。`items` 支持子菜单（`children`）、分组标题（`type: 'label'`）与分隔线（`type: 'separator'`）；`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；`filter` 开启顶部搜索框；`size` 提供五档尺寸。

<script setup>
import DropdownMenuBasic from '@demos/vue/dropdown-menu-basic.vue'
import dropdownMenuBasicRaw from '@demos/vue/dropdown-menu-basic.vue.code.txt?raw'
import DropdownMenuItemExtras from '@demos/vue/dropdown-menu-item-extras.vue'
import dropdownMenuItemExtrasRaw from '@demos/vue/dropdown-menu-item-extras.vue.code.txt?raw'
import DropdownMenuSubmenu from '@demos/vue/dropdown-menu-submenu.vue'
import dropdownMenuSubmenuRaw from '@demos/vue/dropdown-menu-submenu.vue.code.txt?raw'
import DropdownMenuFilter from '@demos/vue/dropdown-menu-filter.vue'
import dropdownMenuFilterRaw from '@demos/vue/dropdown-menu-filter.vue.code.txt?raw'
</script>

## 基础用法

type 渲染分组标题与分隔线，icon 前置图标，color 项语义色，size 控制项内边距与图标大小。

<DemoBlock title="分组 · 图标 · 语义色" description="items / type / icon / color / size" :code="dropdownMenuBasicRaw">
  <DropdownMenuBasic />
</DemoBlock>

## 说明与快捷键

description 说明文字、shortcut 快捷键显示在项尾部。

<DemoBlock title="说明与快捷键" description="description 说明文字 / shortcut 快捷键" :code="dropdownMenuItemExtrasRaw">
  <DropdownMenuItemExtras />
</DemoBlock>

## 子菜单与 checkbox

children 定义子菜单，悬停展开；type: 'checkbox' 渲染勾选项，checked 受控选中态，选中显示 checkedIcon；loading 时前置图标显示旋转的 loadingIcon。

<DemoBlock title="子菜单 · checkbox · 加载态" description="children / checkbox / checkedIcon / loadingIcon" :code="dropdownMenuSubmenuRaw">
  <DropdownMenuSubmenu />
</DemoBlock>

## 过滤与字段映射

filter 开启顶部搜索框，filterFields 指定匹配字段（默认 [labelKey]）；labelKey / descriptionKey 映射任意字段；arrow 显示指向触发器的箭头；target: '_blank' 的项在标签后显示 externalIcon；ui 按主题插槽覆盖类名。

<DemoBlock title="过滤 · 字段映射 · 外链 · ui" description="filter / filterFields / labelKey / descriptionKey / arrow / externalIcon / ui" :code="dropdownMenuFilterRaw">
  <DropdownMenuFilter />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-dropdown-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | DropdownMenuItemData[] · DropdownMenuItemData[][] | [] | 菜单项数组，二维数组时按行分组 |
| size | xs · sm · md · lg · xl | md | 尺寸，控制项内边距与图标大小 |
| open | boolean | - | 是否打开（支持 v-model:open） |
| defaultOpen | boolean | false | 默认打开状态（非受控） |
| modal | boolean | true | 模态：打开时锁定页面滚动与指针交互 |
| closeOnSelect | boolean | true | 选择后关闭菜单 |
| triggerLabel | string | 操作 | 触发按钮文字 |
| labelKey | string | label | 菜单项标签字段 |
| valueKey | string | key | 菜单项值字段 |
| descriptionKey | string | description | 菜单项说明字段 |
| checkedIcon | string · Component | check | checkbox 选中态图标 |
| loadingIcon | string · Component | loader-circle | 加载图标 |
| externalIcon | boolean · string · Component | true | 外链图标，false 时隐藏 |
| filter | boolean · { placeholder? } | false | 顶部过滤搜索框，对象可配置占位文字 |
| filterFields | string[] | [labelKey] | 过滤时匹配的字段 |
| ignoreFilter | boolean | false | 忽略过滤（适合自定义过滤场景） |
| content | { align?, side?, alignOffset?, sideOffset? } | - | 浮层定位配置 |
| portal | boolean · string · HTMLElement | true | 浮层是否渲染到 body，可为选择器或指定容器元素 |
| arrow | boolean | false | 是否显示指向触发器的箭头 |
| disabled | boolean | false | 是否禁用触发按钮 |
| ui | DropdownMenuUi | - | 主题插槽类名 |
| class | any | - | 触发按钮类名 |

**事件**：update:open 打开状态变化回调 · select 选中菜单项回调

**插槽**：trigger 触发按钮 · item 自定义菜单项 ({ item, index, active }) · item-leading / item-label / item-description / item-trailing 自定义项局部 · empty 过滤无结果内容 ({ searchTerm }) · content-top 浮层顶部内容 ({ sub }) · content-bottom 浮层底部内容 ({ sub })

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

```ts
const [DropdownMenu, menuApi] = useXDropdownMenu({ items: [...] })
menuApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 项：hover 背景过渡
- 加载：图标旋转

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | bg-default | #ffffff / #171717 |
| item（高亮 / 子菜单打开） | before:bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| item（active=true） | before:bg-elevated | #f5f5f5 / #262626 |
| item（active=false + color） | before:bg-color/10（高亮时） | 如 primary 为 #22c55e，10% 透明 |
| arrow | fill-bg | 同 bg-default |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| item（active=false） | text-default | #404040 / #e5e5e5 |
| item（高亮 / active=true） | text-highlighted | #171717 / #ffffff |
| item（color 项） | text-color，如 text-error | #ef4444 |
| itemLeadingIcon | text-dimmed，高亮时 text-default | #a3a3a3 / #404040 |
| itemDescription · empty | text-muted | #737373 / #a3a3a3 |
| label（分组标题） | text-highlighted | #171717 / #ffffff |
| itemLabelExternalIcon | text-dimmed | #a3a3a3 / #a3a3a3 |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | ring ring-default | #e5e5e5 / #262626 |
| input（过滤输入框） | border-b border-default | #e5e5e5 / #262626 |
| separator | bg-border | 同 border-default |
| arrow | stroke-default | 同 border-default |

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
| 键盘 | reka DropdownMenu 语义：ArrowDown / ArrowUp 在项间移动焦点，ArrowRight 打开子菜单，ArrowLeft 关闭子菜单，Esc 关闭菜单，Home / End 跳转首尾，字母键高亮匹配项；filter 开启时输入过滤 |
| ARIA | Content 为 role=menu；Item 为 role=menuitem；CheckboxItem 为 role=menuitemcheckbox + aria-checked；SubTrigger 为 aria-haspopup=menu + aria-expanded；Label / Separator 为结构性项 |
| 动效 | content 进出场 scale-in / scale-out 100ms；item（active=false）为 transition-colors；loading 项前置图标 animate-spin |
