## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement&lt;Record&lt;string, unknown&gt;&gt; | - | 渲染为指定元素 |
| orientation? | "vertical" \| "horizontal" \| "both" | - | 滚动方向 |
| items? | any[] | - | 项数组 |
| virtualize? | boolean \| XScrollAreaVirtualizeOptions | - | 启用虚拟滚动 |
| shadow? | boolean \| { size?: number } | - | 滚动边缘阴影，对象形态可配置阴影尺寸 |
| height? | number \| string | - | 区域高度 |
| ui? | XScrollAreaUi | - | 主题插槽类名 |
| children? | React.ReactNode \| ((props: { item: any; index: number }) =&gt; React.ReactNode) | - | 滚动内容（无 items 时的默认内容） |
| onScrollChange? | (isScrolling: boolean) =&gt; void | - | 滚动状态变化回调 |
| className? | string | - |  |
