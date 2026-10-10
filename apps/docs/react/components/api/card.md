## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title? | React.ReactNode | - | 卡片标题 |
| description? | React.ReactNode | - | 标题下方的辅助描述 |
| extra? | React.ReactNode | - | 右上角操作区域 |
| bordered? | boolean | - | 是否显示边框 |
| hoverable? | boolean | - | 悬浮时阴影加深并高亮边框色 |
| size? | XCardSize | - | 卡片尺寸 |
| variant? | XCardVariant | - | 预设样式 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XCardUi | - | 主题插槽类名 |
| cover? | React.ReactNode | - | 封面 |
| header? | React.ReactNode | - | 头部区整体内容（覆盖默认 title / description / extra） |
| footer? | React.ReactNode | - | 底部区内容（优先于 actions） |
| actions? | React.ReactNode | - | 底部操作按钮 |
| children? | React.ReactNode | - |  |
| onHover? | React.MouseEventHandler&lt;HTMLDivElement&gt; | - | 悬浮卡片时触发 |
