## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | XDropdownMenuItem[] \| XDropdownMenuItem[][] | - | 菜单项数组，二维数组时按行分组 |
| size? | XMenuSize | - | 尺寸 |
| open? | boolean | - | 是否打开 |
| defaultOpen? | boolean | - | 默认打开状态（非受控） |
| modal? | boolean | - | 模态：打开时锁定页面滚动与指针交互 |
| closeOnSelect? | boolean | - | 选择后关闭菜单 |
| triggerLabel? | React.ReactNode | - | 触发按钮文字 |
| trigger? | React.ReactElement | - | 自定义触发按钮 |
| labelKey? | string | - | 菜单项标题字段 |
| valueKey? | string | - | 菜单项值字段 |
| descriptionKey? | string | - | 菜单项说明字段 |
| checkedIcon? | XMenuIcon | - | checkbox 选中态图标 |
| loadingIcon? | XMenuIcon | - | 加载图标 |
| externalIcon? | boolean \| XMenuIcon | - | 外链图标，false 时隐藏 |
| filter? | boolean \| XMenuFilterOptions | - | 顶部过滤搜索框，对象可配置占位文字 |
| filterFields? | string[] | - | 过滤时匹配的字段，默认 [labelKey] |
| ignoreFilter? | boolean | - | 忽略过滤（适合自定义过滤场景） |
| content? | XMenuContentOptions | - | 浮层定位配置 |
| portal? | boolean \| string \| HTMLElement | - | 浮层是否渲染到 body，可为选择器或指定容器元素 |
| arrow? | boolean | - | 是否显示指向触发器的箭头 |
| disabled? | boolean | - | 是否禁用触发按钮 |
| ui? | XDropdownMenuUi | - | 主题插槽类名 |
| onOpenChange? | (open: boolean) =&gt; void | - | 打开状态变化回调 |
| onSelect? | (item: XDropdownMenuItem) =&gt; void | - | 选中回调 |
| emptySlot? | (props: { searchTerm: string }) =&gt; React.ReactNode | - | 过滤无结果时的内容 |
| itemSlot? | (props: { item: XDropdownMenuItem; index: number; active: boolean }) =&gt; React | - | 完全自定义菜单项 |
| itemLeadingSlot? | (props: { item: XDropdownMenuItem; index: number; active: boolean }) =&gt; React | - | 自定义项前置区域 |
| itemLabelSlot? | (props: { item: XDropdownMenuItem; index: number; active: boolean }) =&gt; React | - | 自定义项标题 |
| itemDescriptionSlot? | (props: { item: XDropdownMenuItem; index: number; active: boolean }) =&gt; React | - | 自定义项说明 |
| itemTrailingSlot? | (props: { item: XDropdownMenuItem; index: number; active: boolean }) =&gt; React | - | 自定义项尾部区域 |
| contentTopSlot? | (props: { sub: boolean }) =&gt; React.ReactNode | - | 浮层顶部内容（搜索框之后） |
| contentBottomSlot? | (props: { sub: boolean }) =&gt; React.ReactNode | - | 浮层底部内容 |
| className? | string | - |  |
