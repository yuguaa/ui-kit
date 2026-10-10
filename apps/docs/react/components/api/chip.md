## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement | - | 渲染为指定元素 |
| text? | string \| number | - | 芯片文本 |
| color? | XChipColor | - | 标签颜色 |
| size? | XChipSize | - | 标签尺寸 |
| position? | XChipPosition | - | 角标位置 |
| inset? | boolean | - | 位于圆角元素内部时保持位置，不加外移 |
| standalone? | boolean | - | 相对父容器渲染，不做绝对定位 |
| show? | boolean | - | 控制本体显隐，与 Nuxt UI 的 show 属性对齐 |
| closable? | boolean | - | 是否可关闭（kit 既有属性） |
| icon? | React.ReactNode | - | 标签图标 |
| content? | React.ReactNode | - | 芯片内容，优先于 children 与 text |
| onClose? | (event: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; void | - | 关闭时回调 |
| ui? | XChipUi | - | 主题插槽类名 |
| children? | React.ReactNode | - |  |
