---
title: CommandPalette 命令面板
description: 全局命令搜索与快捷操作面板，支持字段映射、子层导航、关闭按钮与 ui 主题插槽
---

# CommandPalette 命令面板

全局命令搜索与快捷操作面板。`groups` 组织命令分组，`labelKey` / `valueKey` / `descriptionKey` 支持任意字段映射；项带 `children` 时选中进入子层导航，输入框左侧出现返回按钮；`close` 显示关闭按钮；`footer` 插槽展示底部内容。

## 基础用法

groups 组织分组，kbds 快捷键、icon 图标、description 说明；close 显示关闭按钮（点击发射 update:open false）。

<DemoPreview file="demos/vue/command-palette-basic.vue" title="分组 · 字段映射 · 关闭按钮" description="groups / labelKey / descriptionKey / close" />

## 子层导航与 footer

项带 children 时选中进入子层，返回按钮回到上一层；分组的 placeholder 覆盖子层输入框占位文字；footer 插槽展示底部内容。

<DemoPreview file="demos/vue/command-palette-nested.vue" title="子层导航 · placeholder · footer" description="children / back / placeholder / footer" />

## ui 插槽

input 对象可配置输入框属性；ui 按主题插槽覆盖类名。

<DemoPreview file="demos/vue/command-palette-ui.vue" title="ui 插槽与输入框配置" description="ui / input / closeIcon" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-command-palette
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | - | 是否打开（支持 v-model:open） |
| groups | CommandGroupData[] | [] | 命令分组数组 |
| size | xs · sm · md · lg · xl | md | 尺寸，控制项内边距与图标大小 |
| searchable | boolean | true | 是否可搜索（等价于 input !== false） |
| input | boolean · { placeholder? } | true | 是否显示输入框，对象可配置占位文字 |
| placeholder | string | 搜索命令… | 输入框占位文字 |
| autofocus | boolean | true | 挂载后自动聚焦输入框 |
| icon | string · Component · false | search | 输入框前置图标，false 时隐藏 |
| trailingIcon | string · Component | - | 输入框尾部图标 |
| loading | boolean | false | 输入框加载态 |
| loadingIcon | string · Component | loader-circle | 加载图标 |
| childrenIcon | string · Component | chevron-right | 子命令项尾部的进入图标 |
| selectedIcon | string · Component | check | 选中项图标 |
| back | boolean · { size?, color?, variant? } | true | 显示返回按钮（子命令层级） |
| backIcon | string · Component | arrow-left | 返回按钮图标 |
| as | string · Component | - | 渲染为指定元素或组件（面板根） |
| close | boolean · { size?, color?, variant? } | false | 显示关闭按钮，对象可透传 XButton 属性 |
| closeIcon | string · Component | x | 关闭按钮图标 |
| labelKey | string | label | 命令标题字段 |
| valueKey | string | key | 命令值字段 |
| descriptionKey | string | description | 命令说明字段 |
| closeOnSelect | boolean | true | 选择后关闭面板 |
| ui | CommandPaletteUi | - | 主题插槽类名 |
| class | any | - | 面板类名 |

**事件**：update:open 打开状态变化回调 · select 命令执行回调

**插槽**：empty 空状态内容 · footer 底部内容 · back 自定义返回按钮 ({ ui }) · close 自定义关闭按钮 ({ ui }) · item 完全自定义命令项 ({ item, index, active }) · item-leading / item-label / item-description / item-trailing 自定义项局部 · group-label 自定义分组标题 ({ group, label })

**暴露方法**：open() · close() · toggle()

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

```ts
const [CommandPalette, paletteApi] = useXCommandPalette({ groups: [...] })
paletteApi.open()   // open / close / toggle
```

## 动效

- 遮罩：淡入淡出（200ms）
- 面板：缩放进出场（scale 0.95，200ms）

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root | 透明（无背景 token，面板由外层容器提供） | — |
| item（高亮） | before:bg-elevated/50 | #f5f5f5 / #262626，50% 透明 |
| item（active=true） | before:bg-elevated | #f5f5f5 / #262626 |
| itemLabelBase（mark 高亮命中） | bg-primary/15 | #22c55e，15% 透明 |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| item | text-default | #404040 / #e5e5e5 |
| item（高亮 / active=true） | text-highlighted | #171717 / #ffffff |
| itemLeadingIcon | text-dimmed，高亮时 text-default | #a3a3a3 / #404040 |
| itemLabel | text-dimmed | #a3a3a3 / #a3a3a3 |
| itemLabelBase | text-highlighted | #171717 / #ffffff |
| itemLabelBase / itemLabelSuffix（mark 高亮命中） | text-primary | #22c55e |
| itemLabelPrefix | text-default | #404040 / #e5e5e5 |
| itemDescription · empty | text-muted | #737373 / #a3a3a3 |
| itemTrailingHighlightedIcon | text-dimmed | #a3a3a3 / #a3a3a3 |
| label（分组标题） | text-highlighted | #171717 / #ffffff |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root | divide-y divide-default | #e5e5e5 / #262626 |
| viewport（virtualize=false） | divide-y divide-default | #e5e5e5 / #262626 |

**圆角与阴影**

| 位置 | 类 | 值 |
| --- | --- | --- |
| item 高亮层 | rounded-md | 6px（--radius-md） |

**变体**

| 变体 | token 组合 |
| --- | --- |
| active=true | text-highlighted + before:bg-elevated，图标 text-default |
| loading | itemLeadingIcon 切换为 animate-spin |
| virtualize=true | viewport 为 p-1 isolate；false 时 divide-y divide-default |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | reka Listbox 语义：ArrowDown / ArrowUp 在选项间移动，Enter 选择（带 children 的项进入子层），Backspace 返回上一层（源码监听 @keydown.backspace），字母键高亮匹配项；input 开启时输入过滤，Esc 由外层关闭面板 |
| ARIA | 选项 role=option + aria-selected；data-highlighted 表示当前高亮项；搜索输入框承接 ListboxFilter 过滤；分组标题为结构性项 |
| 动效 | 组件本身无动画 token；面板与遮罩动效由外层 modal 承担（遮罩淡入淡出 200ms、面板缩放 200ms）；loading 项图标 animate-spin |
