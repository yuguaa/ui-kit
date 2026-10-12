## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | string | - | 绑定值 |
| defaultValue? | string | - | 默认值 |
| length? | number | - | 位数 |
| mask? | boolean | - | 是否掩码（视觉隐藏已输入字符） |
| disabled? | boolean | - | 是否禁用 |
| size? | XPinInputSize | - | 控件尺寸 |
| color? | XPinInputColor | - | 组件颜色（聚焦描边与高亮） |
| variant? | XPinInputVariant | - | 预设样式 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| fixed? | boolean | - | 保持移动端字号在所有断点一致 |
| separator? | number \| number[] | - | 分组分隔：数字表示每隔 N 个输入槽插入分隔符，数组表示指定位置之后插入 |
| autofocus? | boolean | - | 自动聚焦第一个输入槽 |
| autofocusDelay? | number | - | 自动聚焦延迟（ms） |
| otp? | boolean | - | 以一次性验证码形式提示浏览器（autocomplete=one-time-code） |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XPinInputUi | - | 主题插槽类名，键名与 Nuxt UI 主题保持一致 |
| separatorSlot? | (props: { index: number }) =&gt; React.ReactNode | - | 分隔符内容自定义渲染（不传时显示 •） |
| onChange? | (value: string) =&gt; void | - | 值变化回调 |
| onComplete? | (value: string) =&gt; void | - | 输入完成回调 |
| className? | string | - |  |
