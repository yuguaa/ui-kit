## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | string \| string[] | - | 绑定日期（yyyy-MM-dd，range 时为 [开始, 结束]） |
| defaultValue? | string \| string[] | - | 默认日期 |
| range? | boolean | - | 日期区间选择 |
| min? | string | - | 最小日期 |
| max? | string | - | 最大日期 |
| disabled? | boolean | - | 是否禁用 |
| placeholder? | string | - | 占位文字 |
| size? | XInputDateSize | - | 控件尺寸 |
| color? | XInputDateColor | - | 组件颜色（聚焦描边与高亮） |
| variant? | XInputDateVariant | - | 预设样式 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed? | boolean | - | 保持移动端字号在所有断点一致 |
| separatorIcon? | XInputDateIcon | - | 区间分隔图标 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| autofocus? | boolean | - | 挂载后自动聚焦 |
| autofocusDelay? | number | - | 自动聚焦延迟（毫秒） |
| onChange? | (date: string \| string[]) =&gt; void | - | 日期变化回调 |
| leading? | React.ReactNode | - | 前置内容 |
| separator? | React.ReactNode | - | 区间分隔内容 |
| trailing? | React.ReactNode | - | 后置内容 |
| footer? | React.ReactNode | - | 底部自定义内容 |
| ui? | XInputDateUi | - | 主题插槽类名 |
| className? | string | - |  |
