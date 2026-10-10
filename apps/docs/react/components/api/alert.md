## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement | - | 渲染为指定元素 |
| className? | string | - | 根元素类名 |
| type? | XAlertType | - | 提示类型，作为 color 的回退（kit 既有属性） |
| color? | XAlertColor | - | 语义色 |
| variant? | XAlertVariant | - | 预设样式 |
| orientation? | XAlertOrientation | - | 内容与操作区的排列方向 |
| title? | React.ReactNode | - | 提示标题（与 message 并存，优先于 message） |
| message? | React.ReactNode | - | 提示标题（kit 既有属性） |
| description? | React.ReactNode | - | 辅助说明文字 |
| icon? | XIconName \| React.ReactNode | - | 图标名或自定义图标 |
| showIcon? | boolean | - | 显示类型默认图标（kit 既有属性） |
| avatar? | XAvatarProps | - | 头像配置 |
| leading? | React.ReactNode | - | 前置内容 |
| actions? | React.ReactNode \| XAlertButtonProps[] | - | 操作按钮列表，纵向时位于内容下方，横向时位于内容右侧；也可直接传入自定义内容 |
| close? | boolean \| XAlertButtonProps | - | 显示关闭按钮，点击后 open 置为 false |
| closeSlot? | React.ReactNode | - | 自定义关闭按钮（对应 close 插槽） |
| closable? | boolean | - | 显示关闭按钮（kit 既有属性） |
| closeIcon? | XIconName | - | 关闭按钮图标 |
| open? | boolean | - | 受控关闭模型 |
| onOpenChange? | (open: boolean) =&gt; void | - | 打开状态变化回调 |
| onClose? | (event: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; void | - | 点击关闭按钮时的回调（kit 既有事件） |
| ui? | XAlertUi | - | 主题插槽类名 |
