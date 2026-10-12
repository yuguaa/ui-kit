---
title: InputMenu 输入菜单
description: 输入框与下拉菜单组合，支持 combobox / listbox 双模式、菜单内搜索与字段映射
---

# InputMenu 输入菜单

输入框与下拉菜单组合。`mode` 区分 combobox（输入框即搜索）与 listbox（输入框只读、菜单内搜索）；listbox 模式可开启 `searchInput` 在菜单顶部渲染搜索输入框，并可用 `search-input` 插槽自定义。

<script setup>
import InputMenuBasic from '@demos/vue/input-menu-basic.vue'
import inputMenuBasicRaw from '@demos/vue/input-menu-basic.vue.code.txt?raw'
import InputMenuListbox from '@demos/vue/input-menu-listbox.vue'
import inputMenuListboxRaw from '@demos/vue/input-menu-listbox.vue.code.txt?raw'
import InputMenuUi from '@demos/vue/input-menu-ui.vue'
import inputMenuUiRaw from '@demos/vue/input-menu-ui.vue.code.txt?raw'
</script>

## 基础用法

combobox 模式输入即搜索；`clearable` 清空已选项；`createItem` 关键字不存在时回车创建新选项。

<DemoBlock title="combobox · 清空 · 创建" description="searchable · clearable · createItem · disabled" :code="inputMenuBasicRaw">
  <InputMenuBasic />
</DemoBlock>

## listbox 模式与菜单内搜索

`mode="listbox"` 时输入框只读，点击展开菜单；`searchInput` 在菜单顶部渲染搜索输入框（可传 `{ placeholder }`），`search-input` 插槽完全自定义。

<DemoBlock title="listbox · searchInput · search-input 插槽" description="mode / searchInput / search-input 插槽" :code="inputMenuListboxRaw">
  <InputMenuListbox />
</DemoBlock>

## 字段映射、图标与 ui 插槽

`labelKey` / `valueKey` / `descriptionKey` 映射任意字段；`selectedIcon` / `clearIcon` 自定义图标；`filterFields` 指定过滤字段；`ui` 按主题插槽覆盖类名；`leading` / `item` 插槽自定义。

<DemoBlock title="字段映射 · 图标 · filterFields · ui" description="labelKey / valueKey / descriptionKey / selectedIcon / clearIcon / filterFields / ui" :code="inputMenuUiRaw">
  <InputMenuUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-menu
```

## API

### XInputMenu

<!--@include: ./api/input-menu.md-->

**事件**：update:modelValue 值变化 · update:open 打开状态变化 · change 值变化 · focus / blur 打开与关闭 · create 创建新选项 · clear 清空 · remove-tag 删除标签 · highlight 高亮项变化

**插槽**：leading 前置内容 · trailing 后置内容 · search-input 菜单内搜索框 · tags-item-text / tags-item-delete 标签片段 · item 自定义菜单项 ({ item, index }) · item-leading / item-label / item-description / item-trailing 选项片段 · empty 空数据提示 · content-top / content-bottom 浮层顶部与底部 · create-item-label 创建项文案

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

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | bg-default | #ffffff / #171717 |
| item（高亮） | before:bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| base（outline 变体） | bg-default | #ffffff / #171717 |
| base（soft 变体） | bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| base（subtle 变体） | bg-elevated | #f5f5f5 / #262626 |
| base（ghost / none 变体） · tagsInput | bg-transparent | 透明 |
| tagsItem | bg-elevated | #f5f5f5 / #262626 |
| tagsItemDelete（hover） | hover:bg-accented/75 | #e5e5e5 / #404040，75% 透明 |
| arrow | fill-bg | 同 bg-default |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| base | text-highlighted | #171717 / #ffffff |
| base / tagsInput（placeholder） | placeholder:text-dimmed | #a3a3a3 / #a3a3a3 |
| item | text-default | #404040 / #e5e5e5 |
| item（高亮） | text-highlighted | #171717 / #ffffff |
| itemLeadingIcon | text-dimmed，高亮时 text-default | #a3a3a3 / #404040 |
| itemDescription · empty | text-muted | #737373 / #a3a3a3 |
| label（分组标题） | text-highlighted | #171717 / #ffffff |
| tagsItem | text-default | #404040 / #e5e5e5 |
| tagsItemDelete | text-dimmed，hover 时 text-default | #a3a3a3 / #404040 |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| content | ring ring-default | #e5e5e5 / #262626 |
| input（菜单内搜索框） | border-b border-default | #e5e5e5 / #262626 |
| base（outline / subtle 变体） | ring-inset ring-accented | #d4d4d4 / #404040 |
| base（focus-visible） | outline-primary/25 · focus-visible:ring-primary | #22c55e |
| base（multiple + outline / subtle，focus-visible） | has-focus-visible:outline-3 · has-focus-visible:ring-primary | #22c55e |
| tagsItem | ring-inset ring-accented | #d4d4d4 / #404040 |
| separator | bg-border | 同 border-default |
| arrow | stroke-default | 同 border-default |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| base · content · item 高亮层 | rounded-md | 6px（--radius-md） |
| tagsItem | rounded-sm | 4px（--radius-sm） |
| tagsItemDelete | rounded-xs | 2px（--radius-xs） |
| content | shadow-lg | Tailwind 默认 shadow-lg |

**变体**（输入框 base，color 仅影响 focus-visible / has-focus-visible 描边颜色）

| 变体 | token 组合 |
| --- | --- |
| outline（默认） | text-highlighted + bg-default + ring-accented，hover:bg-elevated |
| soft | text-highlighted + bg-elevated/50，hover / focus 时 bg-elevated |
| subtle | text-highlighted + bg-elevated + ring-accented |
| ghost | text-highlighted + bg-transparent，hover / focus 时 bg-elevated |
| none | text-highlighted + bg-transparent |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 输入即过滤并打开菜单；reka Combobox 语义：ArrowDown / ArrowUp 在选项间移动，Enter 选择，Esc 关闭；multiple 模式（reka TagsInput 语义）：输入框为空时 Backspace 删除最后一个标签，Delete 删除聚焦标签，Enter 先提交标签输入 |
| ARIA | 输入框 role=combobox + aria-expanded + aria-controls；选项 role=option + aria-selected；data-highlighted 表示当前高亮项；标签删除按钮为可聚焦按钮 |
| 动效 | content 进出场 scale-in / scale-out 100ms；base · item · tagsItemDelete 均为 transition-colors；loading 时尾部图标 animate-spin |
