## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | XContextMenuItem[] \| XContextMenuItem[][] | - | 菜单项数组，二维数组时按行分组 |
| size? | XMenuSize | - | 尺寸 |
| open? | boolean | - | 是否打开 |
| labelKey? | string | - | 菜单项标题字段 |
| valueKey? | string | - | 菜单项值字段 |
| descriptionKey? | string | - | 菜单项说明字段 |
| checkedIcon? | XMenuIcon | - | checkbox 选中态图标 |
| loadingIcon? | XMenuIcon | - | 加载图标 |
| externalIcon? | boolean \| XMenuIcon | - | 外链图标，false 时隐藏 |
| content? | XMenuContentOptions | - | 浮层定位配置 |
| portal? | boolean \| string \| HTMLElement | - | 浮层是否渲染到 body，可为选择器或指定容器元素 |
| disabled? | boolean | - | 是否禁用触发区域 |
| ui? | XContextMenuUi | - | 主题插槽类名 |
| onOpenChange? | (open: boolean) =&gt; void | - | 打开状态变化回调 |
| onSelect? | (item: XContextMenuItem) =&gt; void | - | 选中回调 |
| itemSlot? | (props: { item: XContextMenuItem; index: number; active: boolean }) =&gt; React. | - | 完全自定义菜单项 |
| itemLeadingSlot? | (props: { item: XContextMenuItem; index: number; active: boolean }) =&gt; React. | - | 自定义项前置区域 |
| itemLabelSlot? | (props: { item: XContextMenuItem; index: number; active: boolean }) =&gt; React. | - | 自定义项标题 |
| itemDescriptionSlot? | (props: { item: XContextMenuItem; index: number; active: boolean }) =&gt; React. | - | 自定义项说明 |
| itemTrailingSlot? | (props: { item: XContextMenuItem; index: number; active: boolean }) =&gt; React. | - | 自定义项尾部区域 |
| contentTopSlot? | (props: { sub: boolean }) =&gt; React.ReactNode | - | 浮层顶部内容 |
| contentBottomSlot? | (props: { sub: boolean }) =&gt; React.ReactNode | - | 浮层底部内容 |
| children? | React.ReactNode | - | 触发区域内容 |
| className? | string | - |  |
