## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value? | number \| null | - | 当前值：null 表示不确定进度 |
| max? | number \| Array&lt;any&gt; | - | 最大进度值；传数组时渲染步骤条，值为每步文案 |
| status? | boolean | - | 显示当前进度百分比（status 插槽默认内容） |
| inverted? | boolean | - | 进度方向是否反转 |
| color? | XProgressColor | - | 指示条与步骤文字颜色 |
| orientation? | XProgressOrientation | - | 进度方向 |
| animation? | XProgressAnimation | - | 不确定进度的指示器动画 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XProgressUi | - | 主题插槽类名 |
| statusContent? | React.ReactNode \| ((props: { percent?: number }) =&gt; React.ReactNode) | - | status 插槽内容，函数式接收 percent |
| className? | string | - |  |
