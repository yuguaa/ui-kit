## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | XInputMenuItem[] \| XInputMenuItem[][] | - | 建议项数据源，二维数组时按行分组 |
| value? | unknown | - | 选中值（受控；autocomplete 模式下为输入文本） |
| defaultValue? | unknown | - | 非受控初始值 |
| open? | boolean | - | 受控打开状态 |
| defaultOpen? | boolean | - | 初始打开状态 |
| mode? | "combobox" \| "autocomplete" \| "listbox" | - | 底层模式：combobox 输入框即搜索，autocomplete 自由文本，listbox 输入框只读、搜索框在菜单内 |
| searchInput? | boolean \| XInputMenuSearchInput | - | 菜单内搜索框：true 或 { placeholder, disabled }（listbox 模式） |
| color? | XInputMenuColor | - | 组件颜色 |
| variant? | XInputMenuVariant | - | 预设样式 |
| size? | XInputMenuSize | - | 尺寸 |
| type? | string | - | 原生输入框类型 |
| required? | boolean | - | 是否必填 |
| placeholder? | string | - | 占位提示文字 |
| trailingIcon? | XInputMenuIcon | - | 展开图标 |
| selectedIcon? | XInputMenuIcon | - | 选中态图标 |
| deleteIcon? | XInputMenuIcon | - | 删除标签图标（multiple 模式） |
| clear? | boolean | - | 有选中项时显示清空按钮 |
| clearIcon? | XInputMenuIcon | - | 清空按钮图标 |
| content? | XInputMenuContentOptions | - | 浮层定位配置 |
| arrow? | boolean | - | 是否显示指向触发器的箭头 |
| portal? | boolean | - | 浮层是否渲染到 body |
| virtualize? | boolean \| XInputMenuVirtualizeOptions | - |  |
| by? | string \| ((a: unknown, b: unknown) =&gt; boolean) | - |  |
| valueKey? | string | - | 选项值字段 |
| labelKey? | string | - | 选项标签字段 |
| descriptionKey? | string | - | 选项说明字段 |
| multiple? | boolean | - | 多选模式 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed? | boolean | - | 保持移动端字号在所有断点一致 |
| createItem? | boolean \| "always" \| { position?: "top" \| "bottom"; when?: "empty" \| "always | - | 允许创建新选项：true / 'always' / { position, when } |
| filterFields? | string[] | - | 过滤字段，默认 [labelKey] |
| ignoreFilter? | boolean | - | 忽略内置过滤（适合自定义过滤场景） |
| autofocus? | boolean | - | 是否自动聚焦 |
| autofocusDelay? | number | - | 自动聚焦延时（毫秒） |
| highlightOnHover? | boolean | - | 指针悬停时高亮选项 |
| disabled? | boolean | - | 是否禁用 |
| id? | string | - | 输入框 id |
| name? | string | - | 表单字段名 |
| icon? | XInputMenuIcon | - | 前置图标 |
| avatar? | Omit&lt;XAvatarProps, "ui"&gt; & { ui?: Record&lt;string, string&gt; } | - | 前置头像 |
| loading? | boolean | - | 加载态 |
| loadingIcon? | XInputMenuIcon | - | 加载图标 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XInputMenuUi | - | 主题插槽类名 |
| className? | string | - |  |
| onValueChange? | (value: unknown) =&gt; void | - | 值变化回调 |
| onChange? | (event: Event) =&gt; void | - | 值变化回调（事件形式） |
| onOpenChange? | (open: boolean) =&gt; void | - | 打开状态变化回调 |
| onBlur? | (event: FocusEvent) =&gt; void | - | 输入框失焦回调 |
| onFocus? | (event: FocusEvent) =&gt; void | - | 输入框聚焦回调 |
| onCreate? | (item: string) =&gt; void | - | 创建新选项时回调 |
| onClear? | () =&gt; void | - | 清空回调 |
| onRemoveTag? | (value: unknown) =&gt; void | - | 删除标签回调（multiple 模式） |
| onHighlight? | (payload: { ref: HTMLElement; value: unknown } \| undefined) =&gt; void | - | 高亮项变化回调 |
| leading? | React.ReactNode | - | 前置内容 |
| trailing? | React.ReactNode | - | 后置内容 |
| empty? | React.ReactNode \| ((props: { searchTerm: string }) =&gt; React.ReactNode) | - | 空数据内容 |
| item? | (props: { item: XInputMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项内容 |
| itemLeading? | (props: { item: XInputMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项前置区域 |
| itemLabel? | (props: { item: XInputMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项标签 |
| itemDescription? | (props: { item: XInputMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项说明 |
| itemTrailing? | (props: { item: XInputMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项尾部区域 |
| tagsItemText? | (props: { item: unknown; index: number }) =&gt; React.ReactNode | - | 自定义标签文本（multiple 模式） |
| tagsItemDelete? | (props: { item: unknown; index: number }) =&gt; React.ReactNode | - | 自定义标签删除按钮（multiple 模式） |
| contentTop? | React.ReactNode | - | 内容顶部区域 |
| contentBottom? | React.ReactNode | - | 内容底部区域 |
| createItemLabel? | (props: { item: string }) =&gt; React.ReactNode | - | 创建项文案 |
| searchInputSlot? | (props: { keyword: string; onInput: (value: string) =&gt; void }) =&gt; React.Re | - | 自定义菜单内搜索框（listbox 模式） |
