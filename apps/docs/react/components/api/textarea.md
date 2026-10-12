## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size? | XTextareaSize | - | 控件尺寸 |
| color? | XTextareaColor | - | 组件颜色（聚焦描边与高亮） |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed? | boolean | - | 保持移动端字号在所有断点一致 |
| rows? | number | - | 行数 |
| autoresize? | boolean | - | 自动调整高度 |
| autoresizeDelay? | number | - | 自动调整高度的延迟（毫秒） |
| maxrows? | number | - | 自动调整高度的行数上限，超出后内容在控件内部滚动 |
| autosize? | boolean | - | 自动调整高度（等价 autoresize） |
| maxRows? | number | - | 自动调整高度的行数上限（等价 maxrows） |
| status? | XTextareaStatus | - | 校验状态 |
| showCount? | boolean | - | 右下角显示字数统计，设置 maxLength 时显示「当前长度 / 最大长度」 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XTextareaUi | - | 主题插槽类名 |
| autofocus? | boolean | - | 挂载后自动聚焦原生输入元素 |
| autofocusDelay? | number | - | 自动聚焦的延迟（毫秒） |
| variant? | XInputVariant | - | 预设样式（与 Nuxt 版 variant prop 对齐） |
| avatar? | React.ReactNode | - | 左侧头像内容 |
