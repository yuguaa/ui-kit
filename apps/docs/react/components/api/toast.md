## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title? | React.ReactNode | - | 通知标题，支持节点自定义渲染（等价 title 插槽） |
| description? | React.ReactNode | - | 说明文字，支持节点自定义渲染（等价 description 插槽） |
| icon? | XIconName | - | 图标名 |
| avatar? | XAvatarProps | - | 头像配置 |
| color? | XToastColor | - | 语义色 |
| orientation? | XToastOrientation | - | 内容与操作区的排列方向 |
| close? | boolean \| XToastButtonProps \| React.ReactNode | - | 显示关闭按钮，支持布尔、按钮配置或节点（等价 close 插槽） |
| closeIcon? | XIconName | - | 关闭按钮图标 |
| actions? | XToastButtonProps[] \| React.ReactNode | - | 操作按钮列表或自定义节点（等价 actions 插槽） |
| action? | XToastActionProps | - | 操作按钮（kit 既有属性），点击后关闭通知 |
| cancel? | XToastActionProps | - | 取消按钮（kit 既有属性），点击后关闭通知 |
| leading? | React.ReactNode | - | 自定义图标/头像区域（等价 leading 插槽） |
| progress? | boolean \| XToastProgressConfig | - | 显示剩余时长进度条 |
| duration? | number | - | 展示时长（ms），同时驱动进度条动画 |
| ui? | XToastUi | - | 主题插槽类名 |
| className? | string | - |  |
| onCloseToast? | () =&gt; void | - | 关闭回调（内部：由通知 API 注入） |
| isPaused? | boolean | - | 暂停进度计时（内部：由通知 API 注入） |
