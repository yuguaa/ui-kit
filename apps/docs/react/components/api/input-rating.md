## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | number | - | 评分值 |
| defaultValue? | number | - | 默认评分 |
| max? | number | - | 最大分值 |
| allowHalf? | boolean | - | 允许半星 |
| disabled? | boolean | - | 是否禁用 |
| readonly? | boolean | - | 只读展示，禁止点击与键盘操作 |
| size? | XInputRatingSize | - | 星星尺寸 |
| color? | XInputRatingColor | - | 组件颜色（填充星与聚焦描边） |
| orientation? | XInputRatingOrientation | - | 排列方向 |
| icon? | XInputRatingIcon | - | 高亮星图标，缺省使用空星图标 |
| emptyIcon? | XInputRatingIcon | - | 空星图标，缺省使用 icon |
| render? | React.ReactElement | - | 渲染为指定元素 |
| id? | string | - | 根元素 id |
| onChange? | (value: number) =&gt; void | - | 评分变化回调 |
| item? | (state: { index: number; filled: boolean; half: boolean }) =&gt; React.ReactNode | - | 自定义图标渲染 |
| ui? | XInputRatingUi | - | 主题插槽类名 |
| className? | string | - |  |
