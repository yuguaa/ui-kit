## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | string[] | - | 标签数组 |
| defaultValue? | string[] | - | 默认标签 |
| max? | number | - | 最大标签数 |
| placeholder? | string | - | 占位文字 |
| disabled? | boolean | - | 是否禁用 |
| maxLength? | number | - | 单个标签最大长度 |
| deleteIcon? | XInputTagsIcon | - | 删除标签图标 |
| size? | XInputTagsSize | - | 控件尺寸 |
| color? | XInputTagsColor | - | 组件颜色（聚焦描边与高亮） |
| variant? | XInputTagsVariant | - | 预设样式 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed? | boolean | - | 保持移动端字号在所有断点一致 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| autofocus? | boolean | - | 挂载后自动聚焦 |
| autofocusDelay? | number | - | 自动聚焦延迟（毫秒） |
| onAdd? | (tag: string) =&gt; void | - | 添加标签 |
| onRemove? | (index: number) =&gt; void | - | 删除标签 |
| leading? | React.ReactNode | - | 前置内容 |
| tag? | (state: { tag: string; index: number }) =&gt; React.ReactNode | - | 自定义标签项渲染（对应 Vue 侧 tag 插槽） |
| ui? | XInputTagsUi | - | 主题插槽类名 |
| className? | string | - |  |
