## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement | - | 渲染为指定元素 |
| defaultPage? | number | - | 初始页码 |
| disabled? | boolean | - | 是否禁用 |
| itemsPerPage? | number | - | 每页条数 |
| page? | number | - | 当前页码(受控) |
| showEdges? | boolean | - | 始终显示第一页、最后一页与省略号 |
| siblingCount? | number | - | 当前页两侧的页码数量 |
| total? | number | - | 数据总数 |
| firstIcon? | XIconName | - | 首页按钮图标 |
| prevIcon? | XIconName | - | 上一页按钮图标 |
| nextIcon? | XIconName | - | 下一页按钮图标 |
| lastIcon? | XIconName | - | 末页按钮图标 |
| ellipsisIcon? | XIconName | - | 省略号图标 |
| color? | XButtonColor | - | 页码按钮颜色 |
| variant? | XButtonVariant | - | 页码按钮样式 |
| activeColor? | XButtonColor | - | 激活页码颜色 |
| activeVariant? | XButtonVariant | - | 激活页码样式 |
| showControls? | boolean | - | 是否显示首页、上一页、下一页与末页按钮 |
| size? | XButtonSize | - | 页码按钮尺寸 |
| to? | (page: number) =&gt; React.ReactElement \| undefined | - | 将页码控件渲染为链接(返回 XButton 的 render 元素) |
| onPageChange? | (page: number) =&gt; void | - | 页码变化回调 |
| ui? | XPaginationUi | - | 主题插槽类名 |
| className? | string | - |  |
| first? | React.ReactNode | - | 首页按钮内容(等价于 first 插槽) |
| prev? | React.ReactNode | - | 上一页按钮内容(等价于 prev 插槽) |
| next? | React.ReactNode | - | 下一页按钮内容(等价于 next 插槽) |
| last? | React.ReactNode | - | 末页按钮内容(等价于 last 插槽) |
| ellipsis? | React.ReactNode | - | 省略号内容(等价于 ellipsis 插槽) |
