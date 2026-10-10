## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| mode? | "click" \| "hover" | - | 触发模式：click 点击 / hover 悬停 |
| open? | boolean | - | 是否打开（受控） |
| defaultOpen? | boolean | - | 初始是否打开 |
| modal? | boolean | - | 模态：聚焦锁定与遮罩拦截（仅 click 模式） |
| openDelay? | number | - | 悬停打开延迟（毫秒，仅 hover 模式） |
| closeDelay? | number | - | 悬停关闭延迟（毫秒，仅 hover 模式） |
| arrow? | boolean | - | 是否显示指向触发元素的箭头 |
| portal? | boolean | - | 渲染到 body |
| dismissible? | boolean | - | 允许点击外部或按 Esc 关闭 |
| className? | string | - |  |
| ui? | XPopoverUi | - | 主题插槽类名 |
| children? | React.ReactNode | - | 触发元素（对应 default 插槽） |
| content? | React.ReactNode \| ((close: () =&gt; void) =&gt; React.ReactNode) | - | 内容（对应 content 插槽，可传函数接收 close 关闭方法） |
| anchor? | React.ReactNode | - | 锚点（对应 anchor 插槽，作为定位参考元素） |
| onOpenChange? | (open: boolean, details: PopoverPrimitive.Root.ChangeEventDetails) =&gt; void | - | 打开状态变化回调 |
| onClosePrevent? | () =&gt; void | - | 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） |
