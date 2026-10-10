## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement | - | 渲染为指定元素 |
| items? | XStepperItem[] | - | 步骤项数组 |
| size? | XStepperSize | - | 步骤尺寸 |
| color? | XStepperColor | - | 组件颜色 |
| orientation? | XStepperOrientation | - | 步骤排列方向 |
| valueKey? | string | - | 从步骤项取 value 的字段，支持点路径 |
| defaultValue? | string \| number | - | 初始激活步骤的 value |
| value? | string \| number | - | 当前激活步骤的 value(受控) |
| disabled? | boolean | - | 是否禁用全部步骤 |
| linear? | boolean | - | 是否必须按顺序完成 |
| onValueChange? | (value: string \| number) =&gt; void | - | 激活步骤变化回调 |
| onNext? | (item: XStepperItem) =&gt; void | - | 进入下一步回调 |
| onPrev? | (item: XStepperItem) =&gt; void | - | 回到上一步回调 |
| ui? | XStepperUi | - | 主题插槽类名 |
| className? | string | - |  |
| indicator? | (props: { item: XStepperItem; ui?: XStepperUi }) =&gt; React.ReactNode | - | 指示器渲染函数(等价于 indicator 插槽) |
| wrapper? | (item: XStepperItem) =&gt; React.ReactNode | - | 标题与描述包装渲染函数(等价于 wrapper 插槽) |
| title? | (item: XStepperItem) =&gt; React.ReactNode | - | 标题渲染函数(等价于 title 插槽) |
| description? | (item: XStepperItem) =&gt; React.ReactNode | - | 描述渲染函数(等价于 description 插槽) |
| content? | (item: XStepperItem) =&gt; React.ReactNode | - | 步骤内容渲染函数(等价于 content 插槽) |
