## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text? | string | - | 提示文本 |
| kbds? | XTooltipKbd[] | - | 快捷键组合 |
| open? | boolean | - | 是否打开（受控） |
| defaultOpen? | boolean | - | 初始是否打开 |
| delayDuration? | number | - | 打开延迟（毫秒） |
| disableHoverableContent? | boolean | - | 内容可悬停保持 |
| disabled? | boolean | - | 禁用提示 |
| arrow? | boolean | - | 是否显示箭头 |
| portal? | boolean | - | 渲染到 body |
| className? | string | - |  |
| ui? | XTooltipUi | - | 主题插槽类名 |
| children? | React.ReactNode | - | 触发元素（对应 default 插槽） |
| content? | React.ReactNode | - | 内容（对应 content 插槽，替换 text / kbds 默认内容） |
| onOpenChange? | (open: boolean, details: TooltipPrimitive.Root.ChangeEventDetails) =&gt; void | - | 打开状态变化回调 |
