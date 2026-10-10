## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size? | XInputSize | - | 控件尺寸 |
| color? | XInputColor | - | 组件颜色（聚焦描边与高亮） |
| variant? | XInputVariant | - | 预设样式 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed? | boolean | - | 保持移动端字号在所有断点一致 |
| status? | XInputStatus | - | 校验状态 |
| clearable? | boolean | - | 是否显示清空按钮 |
| avatar? | XAvatarProps | - | 左侧头像配置 |
| leading? | React.ReactNode | - | 前置内容（对应 Nuxt leading 插槽） |
| trailing? | React.ReactNode | - | 后置内容（对应 Nuxt trailing 插槽） |
| prefix? | React.ReactNode | - | 前置图标 |
| suffix? | React.ReactNode | - | 后置图标 |
| addonBefore? | React.ReactNode | - | 前置标签 |
| addonAfter? | React.ReactNode | - | 后置标签 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XInputUi | - | 主题插槽类名 |
| onClear? | () =&gt; void | - | 点击清空按钮时回调 |
