## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | T[] | - | 面包屑项数组，允许携带自定义字段 |
| labelKey? | string | - | 标题字段名，items 可用自定义字段承载标题 |
| color? | XBreadcrumbColor | - | 激活项文字颜色 |
| separatorIcon? | React.ReactNode | - | 图标分隔符，设置后替换默认 chevron-right 图标 |
| separator? | React.ReactNode | - | 分隔符插槽，设置后替换整个分隔符内容 |
| disabled? | boolean | - | 是否禁用 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XBreadcrumbUi | - | 主题插槽类名 |
| className? | string | - |  |
