## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open? | boolean | - | 是否展开 |
| disabled? | boolean | - | 是否禁用 |
| defaultOpen? | boolean | - | 默认展开 |
| unmountOnHide? | boolean | - | 隐藏时是否卸载内容 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XCollapsibleUi | - | 主题插槽类名 |
| trigger? | React.ReactNode | - | 触发器内容；传元素时合并为触发器本身（等价 Vue 侧 as-child） |
| children? | React.ReactNode | - | 折叠内容 |
| onOpenChange? | (open: boolean) =&gt; void | - | 展开状态变化回调 |
| className? | string | - |  |
