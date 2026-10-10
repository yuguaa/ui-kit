## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement | - | 渲染为指定元素 |
| items? | XTabsItem[] | - | 标签项数组 |
| color? | XTabsColor | - | 组件颜色 |
| variant? | XTabsVariant | - | 预设样式 |
| size? | XTabsSize | - | 标签尺寸 |
| orientation? | XTabsOrientation | - | 标签排列方向 |
| content? | boolean | - | 是否渲染内容区 |
| valueKey? | string | - | 从标签项取 value 的字段，支持点路径 |
| labelKey? | string | - | 从标签项取 label 的字段，支持点路径 |
| defaultValue? | string \| number | - | 初始激活的标签 value |
| value? | string \| number | - | 当前激活的标签 value(受控) |
| unmountOnHide? | boolean | - | 隐藏面板时是否卸载内容 |
| onValueChange? | (value: string \| number) =&gt; void | - | 激活标签变化回调 |
| ui? | XTabsUi | - | 主题插槽类名 |
| className? | string | - |  |
| leading? | (props: { item: XTabsItem; index: number; ui?: XTabsUi }) =&gt; React.ReactNode | - | 前置内容(图标 / 头像) |
| trailing? | (props: { item: XTabsItem; index: number; ui?: XTabsUi }) =&gt; React.ReactNode | - | 后置内容(徽标) |
| children? | (props: { item: XTabsItem; index: number }) =&gt; React.ReactNode | - | 标签文字渲染函数 |
| contentSlot? | (props: { item: XTabsItem; index: number; ui?: XTabsUi }) =&gt; React.ReactNode | - | 内容面板渲染函数(等价于 content 插槽) |
| listLeading? | React.ReactNode | - | 列表前内容 |
| listTrailing? | React.ReactNode | - | 列表后内容 |
