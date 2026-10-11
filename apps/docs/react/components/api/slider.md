## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | number \| number[] | - | 绑定值：单值或双值区间 |
| defaultValue? | number \| number[] | - | 默认值（非受控） |
| min? | number | - | 最小值 |
| max? | number | - | 最大值 |
| step? | number | - | 步长 |
| minStepsBetweenThumbs? | number | - | 双拇指最小间隔步数（对应 Vue 侧 minStepsBetweenThumbs，映射为 Base UI minStep |
| disabled? | boolean | - | 是否禁用 |
| tooltip? | boolean \| Partial&lt;Omit&lt;XTooltipProps, "text" \| "className"&gt;&gt; | - | 悬浮显示当前值提示，可为 XTooltip 属性对象 |
| orientation? | XSliderOrientation | - | 滑块方向 |
| color? | XSliderColor | - | 指示条与拇指颜色 |
| size? | XSliderSize | - | 尺寸 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XSliderUi | - | 主题插槽类名 |
| onValueChange? | (value: number \| number[]) =&gt; void | - |  |
| onChange? | (event: { target: { value: number \| number[] } }) =&gt; void | - | 值提交（拖动结束）回调，event.target.value 为提交值 |
| className? | string | - |  |
