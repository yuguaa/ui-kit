## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | XNavigationMenuItem[] \| XNavigationMenuItem[][] | - | 菜单项数组，二维数组时渲染多列表并以分隔线隔开 |
| selectedKeys? | string[] | - | 当前选中的 key（或 valueKey 字段值），用于高亮当前项 |
| value? | string \| string[] | - | 受控值：水平方向为打开的面板项值，垂直方向为展开的手风琴项值 |
| defaultValue? | string \| string[] | - | 非受控初始值 |
| type? | XNavigationMenuType | - | 垂直方向手风琴展开模式：single 单开，multiple 多开 |
| collapsible? | boolean | - | 垂直方向手风琴是否可关闭已展开项 |
| disabled? | boolean | - | 根级禁用（垂直方向手风琴） |
| mode? | XNavigationMenuMode | - | 菜单模式（kit 既有属性，inline 等同垂直手风琴） |
| orientation? | XNavigationMenuOrientation | - | 排列方向 |
| color? | XMenuColor | - | 语义色：选中项文字颜色 |
| variant? | XNavigationMenuVariant | - | 预设样式 |
| collapsed? | boolean | - | 垂直方向折叠为仅图标，子菜单用 popover / 标签用 tooltip 展示 |
| tooltip? | boolean \| XNavigationMenuTooltipOptions | - | 折叠时显示标签提示 |
| popover? | boolean \| XNavigationMenuPopoverOptions | - | 折叠时子菜单用 popover 展示 |
| highlight? | boolean | - | 选中项显示指示线 |
| highlightColor? | XMenuColor | - | 指示线颜色 |
| trailingIcon? | XMenuIcon | - | 子菜单展开图标 |
| externalIcon? | boolean \| XMenuIcon | - | 外链图标，false 时隐藏 |
| arrow? | boolean | - | 水平方向显示指示箭头 |
| content? | { align?: "start" \| "center" \| "end"; alignOffset?: number } | - | 水平方向内容面板配置 |
| contentOrientation? | XNavigationMenuContentOrientation | - | 内容面板排列方向（仅水平模式） |
| labelKey? | string | - | 菜单项标题字段 |
| valueKey? | string | - | 菜单项值字段 |
| theme? | "light" \| "dark" | - | 菜单主题（kit 既有属性，dark 为深色底） |
| ui? | XNavigationMenuUi | - | 主题插槽类名 |
| render? | React.ReactElement | - | 渲染为指定元素（根容器） |
| onClick? | (item: XNavigationMenuItem) =&gt; void | - | 点击菜单项的回调 |
| onSelect? | (item: XNavigationMenuItem) =&gt; void | - | 选中菜单项的回调 |
| onValueChange? | (value: string \| string[] \| undefined) =&gt; void | - | 展开值变化回调 |
| listLeadingSlot? | () =&gt; React.ReactNode | - | 列表前内容 |
| listTrailingSlot? | () =&gt; React.ReactNode | - | 列表后内容 |
| itemSlot? | (props: { item: XNavigationMenuItem; index: number; active: boolean }) =&gt; Rea | - | 完全自定义菜单项 |
| itemLeadingSlot? | (props: { item: XNavigationMenuItem; index: number; active: boolean }) =&gt; Rea | - | 自定义项前置区域 |
| itemLabelSlot? | (props: { item: XNavigationMenuItem; index: number; active: boolean }) =&gt; Rea | - | 自定义项标题 |
| itemTrailingSlot? | (props: { item: XNavigationMenuItem; index: number; active: boolean }) =&gt; Rea | - | 自定义项尾部区域 |
| className? | string | - |  |
