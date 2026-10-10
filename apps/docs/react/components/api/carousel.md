## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | XCarouselItem[] | - | 轮播项数组 |
| autoplay? | boolean | - | 自动播放 |
| interval? | number | - | 自动播放间隔（ms） |
| loop? | boolean | - | 循环播放 |
| disabled? | boolean | - | 是否禁用 |
| arrows? | boolean | - | 是否显示左右切换按钮 |
| dots? | boolean | - | 是否显示指示点 |
| orientation? | "horizontal" \| "vertical" | - | 轮播方向 |
| fade? | boolean | - | 淡入淡出切换：每次只显示当前项 |
| autoHeight? | boolean | - | 容器高度跟随当前项 |
| autoScroll? | boolean \| XCarouselAutoScrollOptions | - | 连续滚动 |
| classNames? | boolean \| XCarouselClassNamesOptions | - | 类名钩子：loop / draggable / dragging / snapped / inView |
| wheelGestures? | boolean \| { forceWheelAxis?: "x" \| "y" } | - | 滚轮手势切换 |
| prev? | XCarouselButtonConfig | - | 上一页按钮配置（XButton 属性） |
| prevIcon? | XCarouselIcon | - | 上一页按钮图标（XIcon 图标名或组件） |
| next? | XCarouselButtonConfig | - | 下一页按钮配置（XButton 属性） |
| nextIcon? | XCarouselIcon | - | 下一页按钮图标（XIcon 图标名或组件） |
| render? | React.ReactElement&lt;Record&lt;string, unknown&gt;&gt; | - | 渲染为指定元素 |
| ui? | XCarouselUi | - | 主题插槽类名 |
| children? | React.ReactNode \| ((props: { item: XCarouselItem; index: number }) =&gt; React. | - | 轮播项内容（default 插槽）：函数形式拿到 { item, index } |
| onSelect? | (index: number) =&gt; void | - | 选中项变化回调 |
| className? | string | - |  |
