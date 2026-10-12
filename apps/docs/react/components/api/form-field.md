## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name? | string | - | 字段名（关联表单校验结果） |
| errorPattern? | RegExp | - | 正则匹配表单错误名，用于数组字段（如 tags.0） |
| label? | React.ReactNode | - | 标签内容 |
| description? | React.ReactNode | - | 辅助说明 |
| help? | React.ReactNode | - | 无错误时显示的帮助文案 |
| error? | boolean \| React.ReactNode | - | 错误信息：true 强制错误态，false 关闭错误显示 |
| hint? | React.ReactNode | - | 标签右侧的提示文案（说明填写要求） |
| size? | XFormFieldSize | - | 尺寸（控制根节点字号） |
| required? | boolean | - | 是否必填 |
| eagerValidation? | boolean | - | 输入时立即校验，不等待 blur |
| validateOnInputDelay? | number | - | 输入校验的防抖延迟（毫秒） |
| orientation? | XFormFieldOrientation | - | 排列方向 |
| id? | string | - | 控件 id（label 关联用） |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XFormFieldUi | - | 主题插槽类名 |
| children? | React.ReactNode | - |  |
