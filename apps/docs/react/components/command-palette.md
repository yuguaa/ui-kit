---
title: CommandPalette 命令面板
description: 全局命令搜索与快捷操作面板，支持字段映射、子层导航、关闭按钮与 ui 主题插槽
---

# CommandPalette 命令面板

全局命令搜索与快捷操作面板。`groups` 组织命令分组，`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；项带 `children` 时选中进入子层导航，输入框左侧出现返回按钮；`close` 显示关闭按钮；`footer` 展示底部内容。

<script setup>
import CommandPaletteBasic from '@demos/react/command-palette-basic'
import commandPaletteBasicRaw from '@demos/react/command-palette-basic.tsx.code.txt?raw'
import CommandPaletteNested from '@demos/react/command-palette-nested'
import commandPaletteNestedRaw from '@demos/react/command-palette-nested.tsx.code.txt?raw'
import CommandPaletteUi from '@demos/react/command-palette-ui'
import commandPaletteUiRaw from '@demos/react/command-palette-ui.tsx.code.txt?raw'
</script>

## 基础用法

groups 组织分组，kbds 快捷键、icon 图标、description 说明；close 显示关闭按钮（点击后 onOpenChange 收到 false）。

<DemoBlock title="分组 · 字段映射 · 关闭按钮" description="groups / labelKey / descriptionKey / close" :code="commandPaletteBasicRaw">
  <ReactDemo :component="CommandPaletteBasic" />
</DemoBlock>

## 子层导航与 footer

项带 children 时选中进入子层，返回按钮回到上一层；分组的 placeholder 覆盖子层输入框占位文字；footer 展示底部内容。

<DemoBlock title="子层导航 · placeholder · footer" description="children / back / placeholder / footer" :code="commandPaletteNestedRaw">
  <ReactDemo :component="CommandPaletteNested" />
</DemoBlock>

## ui 插槽

input 对象可配置输入框属性；ui 按主题插槽覆盖类名。

<DemoBlock title="ui 插槽与输入框配置" description="ui / input / closeIcon" :code="commandPaletteUiRaw">
  <ReactDemo :component="CommandPaletteUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-command-palette
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | - | 是否打开 |
| groups | XCommandGroup[] | [] | 命令分组数组 |
| size | xs · sm · md · lg · xl | md | 尺寸，控制项内边距与图标大小 |
| searchable | boolean | true | 是否可搜索（等价于 input !== false） |
| input | boolean · { placeholder? } | true | 是否显示输入框，对象可配置占位文字 |
| placeholder | string | 搜索命令… | 输入框占位文字 |
| autofocus | boolean | true | 挂载后自动聚焦输入框 |
| icon | string · ComponentType · false | search | 输入框前置图标，false 时隐藏 |
| trailingIcon | string · ComponentType | - | 输入框尾部图标 |
| loading | boolean | false | 输入框加载态 |
| loadingIcon | string · ComponentType | loader-circle | 加载图标 |
| childrenIcon | string · ComponentType | chevron-right | 子命令项尾部的进入图标 |
| selectedIcon | string · ComponentType | check | 选中项图标 |
| back | boolean · { size?, color?, variant? } | true | 显示返回按钮（子命令层级） |
| backIcon | string · ComponentType | arrow-left | 返回按钮图标 |
| render | ReactElement | - | 渲染为指定元素（面板根容器） |
| close | boolean · { size?, color?, variant? } | false | 显示关闭按钮，对象可透传 XButton 属性 |
| closeIcon | string · ComponentType | x | 关闭按钮图标 |
| labelKey | string | label | 命令标题字段 |
| valueKey | string | key | 命令值字段 |
| descriptionKey | string | description | 命令说明字段 |
| closeOnSelect | boolean | true | 选择后关闭面板 |
| empty | ReactNode | - | 空状态内容 |
| footer | ReactNode | - | 底部内容 |
| ui | XCommandPaletteUi | - | 主题插槽类名 |
| className | string | - | 面板类名 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |
| onSelect | (item) => void | - | 命令执行回调 |
| backSlot | (props: { ui }) => ReactNode | - | 自定义返回按钮 |
| closeSlot | (props: { ui }) => ReactNode | - | 自定义关闭按钮 |
| itemSlot | (props: { item, index, active }) => ReactNode | - | 完全自定义命令项 |
| itemLeadingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项前置区域 |
| itemLabelSlot | (props: { item, index, active }) => ReactNode | - | 自定义项标签 |
| itemDescriptionSlot | (props: { item, index, active }) => ReactNode | - | 自定义项说明 |
| itemTrailingSlot | (props: { item, index, active }) => ReactNode | - | 自定义项尾部区域 |
| groupLabelSlot | (props: { group, label }) => ReactNode | - | 自定义分组标题 |

**ref 方法**：open() · close() · toggle()

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 面板根容器 |
| input | 搜索输入框 |
| close | 关闭按钮 |
| back | 返回按钮 |
| content | 列表容器 |
| footer | 底部容器 |
| viewport | 分组滚动区 |
| group | 分组容器 |
| empty | 空数据提示 |
| label | 分组标题 |
| item | 命令项 |
| itemLeadingIcon | 项前置图标 |
| itemLeadingAvatar | 项前置头像 |
| itemLeadingAvatarSize | 项前置头像尺寸 |
| itemLeadingChip | 项前置 chip |
| itemLeadingChipSize | 项前置 chip 尺寸 |
| itemTrailing | 项尾部容器 |
| itemTrailingIcon | 子层箭头图标 |
| itemTrailingHighlightedIcon | 项高亮时显示的尾部图标 |
| itemTrailingKbds | 快捷键容器 |
| itemTrailingKbdsSize | 快捷键尺寸 |
| itemWrapper | 项文本容器 |
| itemLabel | 项标签行 |
| itemLabelBase | 项标签主体 |
| itemLabelPrefix | 项标签前缀 |
| itemLabelSuffix | 项标签后缀 |
| itemDescription | 项说明 |

## hook

```tsx
const [CommandPalette, paletteApi] = useXCommandPalette({ groups: [...] })
paletteApi.open()   // open / close / toggle
```

## 动效

- 遮罩：淡入淡出（200ms）
- 面板：缩放进出场（scale 0.95，200ms）

## 设计规格

React 端基于 cmdk（components/ui/command），主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量 + kit-theme.css 色板。

### 主题 token

**背景**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| 面板（CommandDialog） | bg-popover | Vue 端面板由外层容器提供背景 |
| item（高亮） | data-selected:bg-muted | 对应 before:bg-elevated/50 |
| input 容器 | bg-input/30 | Vue 端无输入框背景 token |

**文字**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| item | text-foreground | 对应 text-default |
| item（高亮） | data-selected:text-foreground | 对应 text-highlighted |
| itemLeadingIcon · itemDescription · empty | text-muted-foreground | 对应 text-dimmed / text-muted |
| itemLabel（labelHtml 高亮命中） | mark 样式由 cmdk 渲染 | Vue 端为 text-primary + bg-primary/15，差异注明 |

**描边**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| input 容器 | border-input/30 | 对应无（Vue 端 root 为 divide-y divide-default） |
| footer | border-t border-border | Vue 端 root 为 divide-y divide-default |
| separator | bg-border | 与 Vue 端一致 |

**圆角与阴影**

| 位置 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| 面板 | rounded-xl! | Vue 端无面板圆角 token（由外层提供） |
| item | rounded-sm（面板内 rounded-lg!） | 对应 rounded-md，差异注明 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| active=true | 对应 cmdk data-selected：bg-muted + text-foreground（Vue 端为 text-highlighted + before:bg-elevated） |
| disabled | data-[disabled=true]:opacity-50 + pointer-events-none |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | cmdk 语义，与 Vue 端 reka Listbox 一致：ArrowDown / ArrowUp 在选项间移动，Enter 选择（带 children 的项进入子层），Backspace 返回上一层，输入过滤；CommandDialog 下 Esc 关闭面板 |
| ARIA | cmdk 语义：输入框 role=combobox，选项 role=option + aria-selected；data-selected 表示当前高亮项 |
| 动效 | CommandDialog 遮罩与面板动效由 ui/dialog 承担（对照 Vue 端外层 modal 的淡入淡出 200ms + 缩放 200ms）；loading 项图标 animate-spin |
