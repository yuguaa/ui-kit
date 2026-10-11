## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked? | T | - | 是否选中;与 trueValue / falseValue 配合可映射任意选中值 |
| defaultChecked? | T | - | 初始选中状态(非受控) |
| trueValue? | T | - | 选中时对外比较与上报的值,默认 true |
| falseValue? | T | - | 未选中时对外比较与上报的值,默认 false |
| onCheckedChange? | (value: T) =&gt; void | - | 选中状态变化回调,值为 trueValue / falseValue |
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
