## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| throttle? | number | - | 节流间隔（ms），拖拽过程中限制值更新频率 |
| disabled? | boolean | - | 是否禁用 |
| value? | string | - | 绑定颜色 |
| defaultValue? | string | - | 默认颜色 |
| format? | XColorPickerFormat | - | 输出格式 |
| size? | XColorPickerSize | - | 尺寸 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XColorPickerUi | - | 主题插槽类名，键名与 Nuxt UI 主题保持一致 |
| onChange? | (color: string) =&gt; void | - | 颜色变化回调 |
| className? | string | - |  |
