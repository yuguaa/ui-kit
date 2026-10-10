## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | XAccordionItem[] | - | 手风琴项数组 |
| multiple? | boolean | - | 是否可多开 |
| collapsible? | boolean | - | 展开项是否可全部收起 |
| disabled? | boolean | - | 是否禁用 |
| unmountOnHide? | boolean | - | 隐藏时是否卸载内容 |
| defaultValue? | string[] | - | 默认展开项 |
| labelKey? | string | - | 标签字段名 |
| valueKey? | string | - | 值字段名 |
| trailingIcon? | XAccordionIcon | - | 后置图标，单项 trailingIcon 优先 |
| value? | string[] | - | 受控展开项 |
| onChange? | (value: string[]) =&gt; void | - | 展开状态变化回调 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XAccordionUi | - | 主题插槽类名 |
| leading? | XAccordionSlot | - | 前置插槽 |
| trailing? | XAccordionSlot | - | 后置插槽 |
| content? | XAccordionSlot | - | 内容插槽：替换整个内容区 |
| body? | XAccordionSlot | - | body 插槽：内容容器内的内容 |
| children? | XAccordionSlot | - | 标题插槽（等价 default） |
| className? | string | - |  |
