## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open? | boolean | - | 是否打开 |
| groups? | XCommandGroup[] | - | 命令分组数组 |
| size? | XMenuSize | - | 尺寸 |
| searchable? | boolean | - | 是否可搜索（kit 既有属性，等价于 input !== false） |
| input? | boolean \| { placeholder?: string } | - | 是否显示输入框，对象可配置占位文字 |
| placeholder? | string | - | 输入框占位文字 |
| autofocus? | boolean | - | 挂载后自动聚焦输入框 |
| icon? | XMenuIcon \| false | - | 输入框前置图标，false 时隐藏 |
| trailingIcon? | XMenuIcon | - | 输入框尾部图标 |
| loading? | boolean | - | 输入框加载态 |
| loadingIcon? | XMenuIcon | - | 加载图标 |
| childrenIcon? | XMenuIcon | - | 子命令项尾部的进入图标 |
| selectedIcon? | XMenuIcon | - | 选中项图标 |
| back? | boolean \| { size?: XButtonSize; color?: XButtonColor; variant?: XButtonVariant  | - | 显示返回按钮（子命令层级），对象可透传 XButton 属性 |
| backIcon? | XMenuIcon | - | 返回按钮图标 |
| close? | boolean \| { size?: XButtonSize; color?: XButtonColor; variant?: XButtonVariant  | - | 显示关闭按钮，对象可透传 XButton 属性 |
| closeIcon? | XMenuIcon | - | 关闭按钮图标 |
| labelKey? | string | - | 命令标题字段 |
| valueKey? | string | - | 命令值字段 |
| descriptionKey? | string | - | 命令说明字段 |
| closeOnSelect? | boolean | - | 选择后关闭面板 |
| render? | React.ReactElement | - | 渲染为指定元素（面板根容器） |
| empty? | React.ReactNode | - | 空状态内容 |
| footer? | React.ReactNode | - | 底部内容 |
| ui? | XCommandPaletteUi | - | 主题插槽类名 |
| onOpenChange? | (open: boolean) =&gt; void | - | 打开状态变化回调 |
| onSelect? | (item: XCommandItem) =&gt; void | - | 命令执行回调 |
| backSlot? | (props: { ui?: XCommandPaletteUi }) =&gt; React.ReactNode | - | 自定义返回按钮 |
| closeSlot? | (props: { ui?: XCommandPaletteUi }) =&gt; React.ReactNode | - | 自定义关闭按钮 |
| itemSlot? | (props: { item: XCommandItem; index: number; active: boolean }) =&gt; React.Reac | - | 完全自定义命令项 |
| itemLeadingSlot? | (props: { item: XCommandItem; index: number; active: boolean }) =&gt; React.Reac | - | 自定义项前置区域 |
| itemLabelSlot? | (props: { item: XCommandItem; index: number; active: boolean }) =&gt; React.Reac | - | 自定义项标签 |
| itemDescriptionSlot? | (props: { item: XCommandItem; index: number; active: boolean }) =&gt; React.Reac | - | 自定义项说明 |
| itemTrailingSlot? | (props: { item: XCommandItem; index: number; active: boolean }) =&gt; React.Reac | - | 自定义项尾部区域 |
| groupLabelSlot? | (props: { group: XCommandGroup; label: string }) =&gt; React.ReactNode | - | 自定义分组标题 |
| className? | string | - |  |
