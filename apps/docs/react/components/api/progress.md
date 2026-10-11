## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | number \| null | - | 当前值：null 表示不确定进度 |
| max? | number \| Array&lt;any&gt; | - | 最大进度值；传数组时渲染步骤条，值为每步文案 |
| status? | boolean | - | 显示当前进度百分比（status 插槽默认内容） |
| inverted? | boolean | - | 进度方向是否反转 |
| size? | XProgressSize | - | 指示条粗细与文字尺寸 |
| color? | XProgressColor \| (string & {}) | - | 指示条与步骤文字颜色：主题色或任意 CSS 颜色值 |
| orientation? | XProgressOrientation | - | 进度方向 |
| animation? | XProgressAnimation | - | 不确定进度的指示器动画 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XProgressUi | - | 主题插槽类名 |
| statusContent? | React.ReactNode \| ((props: { percent?: number }) =&gt; React.ReactNode) | - | status 插槽内容，函数式接收 percent |
| stepContent? | React.ReactNode \| ((props: XProgressStepSlotProps) =&gt; React.ReactNode) | - | 步骤插槽内容，函数式接收 step 与 index（对应 Vue 侧 step-${index} 插槽） |
| getValueLabel? | (value: number \| null, max?: number) =&gt; string \| undefined | - | 无障碍标签生成（对应 Vue 侧 getValueLabel，映射为根元素 aria-label） |
| getValueText? | (value: number \| null, max?: number) =&gt; string \| undefined | - | 无障碍数值文本生成（对应 Vue 侧 getValueText，映射为 Base UI getAriaValueText |
| className? | string | - |  |
