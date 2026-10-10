## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked? | boolean | - | 是否选中 |
| defaultChecked? | boolean | - | 初始选中状态(非受控) |
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
| onCheckedChange? | (checked: boolean) =&gt; void | - | 选中状态变化回调 |
| render? | React.ReactElement&lt;React.LabelHTMLAttributes&lt;HTMLLabelElement&gt;&gt; | - | 渲染为指定元素 |
| ui? | XCheckboxUi | - | 主题插槽类名,键名与 Nuxt UI 主题保持一致 |
| className? | string | - |  |
