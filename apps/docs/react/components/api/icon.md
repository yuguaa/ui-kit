## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | XIconName | - | 图标名 |
| size? | XIconSize | - | 尺寸 |
| color? | string | - | 颜色 |
| mode? | XIconMode | - | 渲染模式：svg 渲染 lucide 图标，css 输出 Iconify CSS 类名 |
| customize? | ((svg: SVGSVGElement) =&gt; void) \| null | - | svg 渲染后修改图标元素的回调 |
| ui? | XIconUi | - | 主题插槽类名 |
