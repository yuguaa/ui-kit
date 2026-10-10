## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title? | React.ReactNode | - | 标题 |
| description? | React.ReactNode | - | 辅助说明 |
| open? | boolean | - | 是否打开（受控） |
| defaultOpen? | boolean | - | 初始是否打开 |
| modal? | boolean | - | 模态：聚焦锁定与遮罩拦截 |
| unmountOnHide? | boolean | - | 关闭后卸载内容 |
| overlay? | boolean | - | 渲染遮罩 |
| scrollable? | boolean | - | 滚动遮罩模式：内容随遮罩滚动居中 |
| transition? | boolean | - | 开关动画 |
| fullscreen? | boolean | - | 全屏模式 |
| portal? | boolean | - | 渲染到 body |
| close? | XModalClose \| React.ReactNode | - | 显示关闭按钮（对象透传给按钮，元素作为 close 插槽渲染） |
| closeIcon? | React.ReactNode | - | 关闭按钮图标 |
| dismissible? | boolean | - | 允许点击外部或按 Esc 关闭 |
| className? | string | - |  |
| ui? | XModalUi | - | 主题插槽类名 |
| children? | React.ReactNode | - | 触发元素（对应 default 插槽） |
| content? | React.ReactNode | - | 内容（对应 content 插槽，替换默认 header / body / footer） |
| header? | React.ReactNode | - | 头部（对应 header 插槽） |
| actions? | React.ReactNode | - | 头部操作区（对应 actions 插槽） |
| body? | React.ReactNode | - | 正文（对应 body 插槽） |
| footer? | React.ReactNode | - | 底部（对应 footer 插槽） |
| onOpenChange? | (open: boolean, details: DialogPrimitive.Root.ChangeEventDetails) =&gt; void | - | 打开状态变化回调 |
| onClosePrevent? | () =&gt; void | - | 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） |
