## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation? | "horizontal" \| "vertical" | - | 方向 |
| items? | XSplitterItem[] | - | 面板数组；未提供时使用 first / second 双面板形态 |
| disabled? | boolean | - | 锁定全部拖拽 |
| id? | string | - | 分组 id |
| render? | React.ReactElement&lt;Record&lt;string, unknown&gt;&gt; | - | 渲染为指定元素 |
| ui? | XSplitterUi | - | 主题插槽类名 |
| minSize? | number | - | 双面板形态：最小尺寸（百分比） |
| defaultSize? | number | - | 双面板形态：默认尺寸（百分比） |
| size? | number | - | 双面板形态：受控尺寸（百分比） |
| collapsible? | boolean | - | 双面板形态：拖拽越过边界时折叠对应面板 |
| first? | React.ReactNode | - | 左侧（上方）面板 |
| second? | React.ReactNode | - | 右侧（下方）面板 |
| onLayout? | (sizes: number[]) =&gt; void | - | 布局变化回调 |
| onCollapse? | (index: number) =&gt; void | - | 面板折叠回调 |
| onExpand? | (index: number) =&gt; void | - | 面板展开回调 |
| onResize? | (index: number, size: number, prevSize?: number) =&gt; void | - | 面板尺寸变化回调 |
| onDragging? | (index: number, dragging: boolean) =&gt; void | - | 拖拽状态变化回调 |
| className? | string | - |  |
