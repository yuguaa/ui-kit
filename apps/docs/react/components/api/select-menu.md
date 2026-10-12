## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | XSelectMenuItem[] \| XSelectMenuItem[][] | - | 选项数据源，二维数组时按行分组 |
| value? | unknown | - | 选中值（受控） |
| defaultValue? | unknown | - | 非受控初始值 |
| open? | boolean | - | 受控打开状态 |
| defaultOpen? | boolean | - | 初始打开状态 |
| searchTerm? | string | - | 受控搜索词 |
| mode? | "combobox" \| "listbox" | - | 底层模式：combobox 菜单内可搜索，listbox 纯列表 |
| searchInput? | boolean \| XSelectMenuSearchInput | - | 菜单内搜索框：true 或 { placeholder, disabled } |
| color? | XSelectMenuColor | - | 组件颜色 |
| variant? | XSelectMenuVariant | - | 预设样式 |
| size? | XSelectMenuSize | - | 尺寸 |
| required? | boolean | - | 是否必填 |
| placeholder? | string | - | 占位提示文字 |
| trailingIcon? | XSelectMenuIcon | - | 展开图标 |
| selectedIcon? | XSelectMenuIcon | - | 选中态图标 |
| clear? | boolean | - | 有选中项时显示清空按钮 |
| clearIcon? | XSelectMenuIcon | - | 清空按钮图标 |
| content? | XSelectMenuContentOptions | - | 浮层定位配置 |
| arrow? | boolean | - | 是否显示指向触发器的箭头 |
| portal? | boolean | - | 浮层是否渲染到 body |
| virtualize? | boolean \| XSelectMenuVirtualizeOptions | - |  |
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
| id? | string | - | 触发器 id |
| name? | string | - | 表单字段名 |
| icon? | XSelectMenuIcon | - | 前置图标 |
| avatar? | Omit&lt;XAvatarProps, "ui"&gt; & { ui?: Record&lt;string, string&gt; } | - | 前置头像 |
| loading? | boolean | - | 加载态 |
| loadingIcon? | XSelectMenuIcon | - | 加载图标 |
| render? | React.ReactElement | - | 渲染为指定元素（触发按钮） |
| ui? | XSelectMenuUi | - | 主题插槽类名 |
| className? | string | - |  |
| onValueChange? | (value: unknown) =&gt; void | - | 值变化回调 |
| onChange? | (event: Event) =&gt; void | - | 值变化回调（事件形式） |
| onOpenChange? | (open: boolean) =&gt; void | - | 打开状态变化回调 |
| onSearchTermChange? | (searchTerm: string) =&gt; void | - | 搜索词变化回调 |
| onBlur? | (event: FocusEvent) =&gt; void | - | 关闭菜单时回调 |
| onFocus? | (event: FocusEvent) =&gt; void | - | 打开菜单时回调 |
| onCreate? | (item: string) =&gt; void | - | 创建新选项时回调 |
| onClear? | () =&gt; void | - | 清空回调 |
| onHighlight? | (payload: { ref: HTMLElement; value: unknown } \| undefined) =&gt; void | - | 高亮项变化回调 |
| leading? | React.ReactNode | - | 前置内容 |
| trailing? | React.ReactNode | - | 后置内容 |
| children? | React.ReactNode | - | 触发器内容（默认渲染选中值 / 占位文字） |
| empty? | React.ReactNode \| ((props: { searchTerm: string }) =&gt; React.ReactNode) | - | 空数据内容 |
| item? | (props: { item: XSelectMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项内容 |
| itemLeading? | (props: { item: XSelectMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项前置区域 |
| itemLabel? | (props: { item: XSelectMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项标签 |
| itemDescription? | (props: { item: XSelectMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项说明 |
| itemTrailing? | (props: { item: XSelectMenuItem; index: number }) =&gt; React.ReactNode | - | 自定义选项尾部区域 |
| contentTop? | React.ReactNode | - | 内容顶部区域 |
| contentBottom? | React.ReactNode | - | 内容底部区域 |
| createItemLabel? | (props: { item: string }) =&gt; React.ReactNode | - | 创建项文案 |
