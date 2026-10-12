## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | XRadioOption[] | - | 选项数据源,字段名可通过 valueKey / labelKey / descriptionKey 映射 |
| value? | XRadioGroupValue | - | 受控选中值 |
| defaultValue? | XRadioGroupValue | - | 初始选中值(非受控) |
| onValueChange? | (value: XRadioGroupValue \| null) =&gt; void | - | 选中值变化回调 |
| legend? | React.ReactNode | - | 组标题 |
| orientation? | XRadioGroupOrientation | - | 排列方向 |
| valueKey? | string | - | 取值字段名 |
| labelKey? | string | - | 文字字段名 |
| descriptionKey? | string | - | 辅助说明字段名 |
| color? | XRadioGroupColor | - | 选中圆点的语义色 |
| size? | XRadioGroupSize | - | 尺寸 |
| indicator? | XRadioGroupIndicator | - | 指示圆点位置,hidden 时图标显示在 label 上方 |
| highlight? | boolean | - | 常显高亮聚焦环 |
| required? | boolean | - | 必选项,legend 后显示 * |
| disabled? | boolean | - | 整体禁用 |
| variant? | XRadioGroupVariant | - | 展示形式 |
| buttonStyle? | "outline" \| "solid" | - | 按钮样式(仅 variant 为 button 时生效) |
| id? | string | - | 组 id,label 通过 htmlFor 关联单项 |
| name? | string | - | 表单字段名,提交表单时随选中值提交 |
| label? | (option: XRadioOption, value: XRadioGroupValue \| undefined) =&gt; React.ReactNo | - | 自定义单项 label 渲染 |
| description? | (option: XRadioOption, value: XRadioGroupValue \| undefined) =&gt; React.ReactNo | - | 自定义单项 description 渲染 |
| render? | React.ReactElement&lt;React.HTMLAttributes&lt;HTMLElement&gt;&gt; | - | 渲染为指定元素 |
| ui? | XRadioGroupUi | - | 主题插槽类名,键名与 Nuxt UI 主题保持一致 |
| className? | string | - |  |
