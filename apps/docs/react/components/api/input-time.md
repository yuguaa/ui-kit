## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | string \| string[] | - |  |
| defaultValue? | string \| string[] | - | 默认时间 |
| range? | boolean | - | 时间区间选择 |
| hour12? | boolean | - | 12 小时制 |
| step? | number | - | 步长（分钟） |
| disabled? | boolean | - | 是否禁用 |
| size? | XInputTimeSize | - | 控件尺寸 |
| color? | XInputTimeColor | - | 组件颜色（聚焦描边与高亮） |
| variant? | XInputTimeVariant | - | 预设样式 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed? | boolean | - | 保持移动端字号在所有断点一致 |
| separatorIcon? | XInputTimeIcon | - | 区间分隔图标 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| autofocus? | boolean | - | 挂载后自动聚焦 |
| autofocusDelay? | number | - | 自动聚焦延迟（毫秒） |
| onChange? | (time: string \| string[]) =&gt; void | - | 时间变化回调 |
| leading? | React.ReactNode | - | 前置内容 |
| separator? | React.ReactNode | - | 区间分隔内容 |
| trailing? | React.ReactNode | - | 后置内容 |
| ui? | XInputTimeUi | - | 主题插槽类名 |
| className? | string | - |  |
