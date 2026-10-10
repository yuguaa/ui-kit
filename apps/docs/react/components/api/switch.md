## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked? | boolean | - | 是否选中 |
| defaultChecked? | boolean | - | 初始选中状态(非受控) |
| onCheckedChange? | (checked: boolean) =&gt; void | - | 选中状态变化回调 |
| color? | XSwitchColor | - | 选中时滑块轨道的语义色 |
| size? | XSwitchSize | - | 控件尺寸 |
| highlight? | boolean | - | 常显高亮聚焦环 |
| required? | boolean | - | 必选项,label 后显示 * |
| loading? | boolean | - |  |
| loadingIcon? | React.ElementType | - | 加载图标 |
| checkedIcon? | React.ElementType | - | 选中时滑块内图标 |
| uncheckedIcon? | React.ElementType | - | 未选中时滑块内图标 |
| disabled? | boolean | - | 是否禁用 |
| name? | string | - | 表单字段名 |
| id? | string | - | 控件 id,label 通过 htmlFor 关联 |
| label? | React.ReactNode | - | 关联文字 |
| description? | React.ReactNode | - | 关联文字下方的辅助说明 |
| checkedChildren? | React.ReactNode | - | 选中时显示内容 |
| unCheckedChildren? | React.ReactNode | - | 未选中时显示内容 |
| render? | React.ReactElement&lt;React.HTMLAttributes&lt;HTMLElement&gt;&gt; | - | 渲染为指定元素 |
| ui? | XSwitchUi | - | 主题插槽类名,键名与 Nuxt UI 主题保持一致 |
| className? | string | - |  |
