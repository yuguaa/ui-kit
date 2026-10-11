## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| variant? | XButtonVariant | - | 预设样式 |
| size? | XButtonSize | - | 尺寸 |
| color? | XButtonColor | - | 组件颜色 |
| loading? | boolean | - | 加载态 |
| block? | boolean | - | 撑满父容器宽度 |
| square? | boolean | - | 方形按钮，图标场景等边距 |
| label? | string | - | 文本内容（等价于子元素） |
| active? | boolean | - | 激活态：配合 activeColor / activeVariant 使用 |
| activeColor? | XButtonColor | - | 激活态颜色 |
| activeVariant? | XButtonVariant | - | 激活态样式 |
| loadingAuto? | boolean | - | 点击回调返回 Promise 时自动进入加载态 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XButtonUi | - | 主题插槽类名，键名与 Nuxt UI 主题保持一致 |
| leading? | React.ReactNode | - | 前置图标 |
| trailing? | React.ReactNode | - | 后置图标 |
| icon? | XIconName | - | 图标名（渲染为前置图标，与 Nuxt 版 icon prop 对齐） |
| loadingIcon? | XIconName | - | 加载图标 |
| avatar? | React.ReactNode | - | 左侧头像配置 |
| to? | string | - | 链接地址：存在时渲染为 &lt;a&gt;（与 Nuxt 版 to prop 对齐） |
| inactiveClass? | string | - | 非激活态附加类名 |
| activeClass? | string | - | 激活态附加类名 |
| children? | React.ReactNode | - |  |
