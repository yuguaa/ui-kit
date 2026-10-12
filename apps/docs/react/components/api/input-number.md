## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | number | - | 绑定值 |
| defaultValue? | number | - | 默认值 |
| min? | number | - | 最小值 |
| max? | number | - | 最大值 |
| step? | number | - | 步长 |
| orientation? | XInputNumberOrientation | - | 步进按钮方向：horizontal 两侧 / vertical 右侧堆叠 |
| size? | XInputNumberSize | - | 控件尺寸 |
| placeholder? | string | - | 占位提示文字 |
| increment? | boolean \| React.ReactNode | - | 是否显示加号按钮，或加号按钮的自定义内容 |
| decrement? | boolean \| React.ReactNode | - | 是否显示减号按钮，或减号按钮的自定义内容 |
| incrementDisabled? | boolean | - | 禁用加号按钮 |
| decrementDisabled? | boolean | - | 禁用减号按钮 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XInputNumberUi | - | 主题插槽类名 |
| onChange? | (value: number) =&gt; void | - | 值变化回调 |
