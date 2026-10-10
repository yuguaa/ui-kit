## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| shape? | XAvatarShape | - | 头像形状 |
| size? | XAvatarSize | - | 头像尺寸 |
| src? | string | - | 图片地址 |
| alt? | string | - | 图片替代文本，同时用于生成首字母回退 |
| text? | string | - | 无图片时显示的文字（如姓名首字） |
| icon? | XIconName \| React.ReactNode | - | 图标名或图标元素 |
| color? | XAvatarColor | - | 语义色：文字/图标头像的背景与文字色 |
| chip? | boolean \| XAvatarChip | - | 头像上的徽标 |
| onError? | (event: React.SyntheticEvent&lt;HTMLImageElement&gt;) =&gt; void | - | 图片加载失败回调 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XAvatarUi | - | 主题插槽类名 |
| children? | React.ReactNode | - |  |
