## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked? | T | - | 是否选中;与 trueValue / falseValue 配合可映射任意选中值 |
| defaultChecked? | T | - | 初始选中状态(非受控) |
| trueValue? | T | - | 选中时对外比较与上报的值,默认 true |
| falseValue? | T | - | 未选中时对外比较与上报的值,默认 false |
| indeterminate? | boolean | - | 半选状态 |
| disabled? | boolean | - | 是否禁用 |
| required? | boolean | - | 必选项,label 后显示 * |
| value? | string \| number | - | 选项的值 |
| name? | string | - | 表单字段名 |
| id? | string | - | 控件 id,label 通过 htmlFor 关联 |
| label? | React.ReactNode | - | 选项文字 |
| description? | React.ReactNode | - | 选项文字下方的辅助说明 |
| color? | XCheckboxColor | - | 选中与半选时指示块的颜色 |
| variant? | XCheckboxVariant | - | 展示形式,card 时整个卡片可点击 |
| size? | XCheckboxSize | - | 控件尺寸 |
| indicator? | XCheckboxIndicator | - | 指示块位置,hidden 时图标显示在 label 上方 |
| highlight? | boolean | - | 常显高亮聚焦环 |
| icon? | React.ElementType | - | 选中时显示的图标 |
| indeterminateIcon? | React.ElementType | - | 半选时显示的图标 |
| onCheckedChange? | (value: T) =&gt; void | - | 选中状态变化回调,值为 trueValue / falseValue |
| render? | React.ReactElement&lt;React.LabelHTMLAttributes&lt;HTMLLabelElement&gt;&gt; | - | 渲染为指定元素 |
| ui? | XCheckboxUi | - | 主题插槽类名,键名与 Nuxt UI 主题保持一致 |
| className? | string | - |  |
