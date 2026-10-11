## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | XListboxItem[] \| XListboxItem[][] | - | 列表项数组，二维数组时按行分组 |
| value? | unknown | - | 选中值（受控） |
| defaultValue? | unknown | - | 非受控初始值 |
| multiple? | boolean | - | 是否多选 |
| color? | XListboxColor | - | 组件颜色 |
| size? | XListboxSize | - | 尺寸 |
| valueKey? | string | - | 选项值字段 |
| labelKey? | string | - | 选项标签字段 |
| descriptionKey? | string | - | 选项说明字段 |
| loading? | boolean | - | 加载态 |
| loadingIcon? | XListboxIcon | - | 加载图标 |
| filter? | boolean \| XListboxFilterOptions | - | 顶部过滤搜索框：true 或 { placeholder, disabled } |
| filterFields? | string[] | - | 过滤字段，默认 [labelKey] |
| ignoreFilter? | boolean | - | 忽略内置过滤（适合自定义过滤场景） |
| virtualize? | boolean \| XListboxVirtualizeOptions | - | 虚拟滚动：true 或配置对象，适合大数据量列表 |
| selectedIcon? | XListboxIcon | - | 选中态图标 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| autofocus? | boolean | - | 是否自动聚焦 |
| autofocusDelay? | number | - | 自动聚焦延时（毫秒） |
| disabled? | boolean | - | 是否禁用 |
| required? | boolean | - | 是否必填 |
| name? | string | - | 表单字段名 |
| id? | string | - | 组件 id |
| orientation? | "horizontal" \| "vertical" | - | 列表朝向 |
| highlightOnHover? | boolean | - | 指针悬停时高亮选项 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XListboxUi | - | 主题插槽类名 |
| className? | string | - |  |
| onValueChange? | (value: unknown) =&gt; void | - | 值变化回调 |
| onChange? | (event: Event) =&gt; void | - | 值变化回调（事件形式） |
| onEntryFocus? | (event: Event) =&gt; void | - | 焦点进入回调 |
| onHighlight? | (payload: { ref: HTMLElement; value: unknown } \| undefined) =&gt; void | - | 高亮项变化回调 |
| onLeave? | (event: Event) =&gt; void | - | 焦点离开回调 |
| loadingSlot? | React.ReactNode | - | 自定义加载内容 |
| empty? | (props: { searchTerm: string }) =&gt; React.ReactNode | - | 自定义空数据内容 |
| item? | (props: { item: XListboxItem; index: number }) =&gt; React.ReactNode | - | 自定义选项内容 |
| itemLeading? | (props: { item: XListboxItem; index: number }) =&gt; React.ReactNode | - | 自定义选项前置区域 |
| itemLabel? | (props: { item: XListboxItem; index: number }) =&gt; React.ReactNode | - | 自定义选项标签 |
| itemDescription? | (props: { item: XListboxItem; index: number }) =&gt; React.ReactNode | - | 自定义选项说明 |
| itemTrailing? | (props: { item: XListboxItem; index: number }) =&gt; React.ReactNode | - | 自定义选项尾部区域 |
