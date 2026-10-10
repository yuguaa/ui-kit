## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| mode? | M | 'click' | The display mode of the popover. |
| content? | Omit&lt;PopoverContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Partial&lt; | - |  |
| arrow? | boolean \| Omit&lt;PopoverArrowProps, 'as' \| 'asChild'&gt; | - |  |
| portal? | boolean \| string \| HTMLElement | true | Render the popover in a portal. |
| reference? | HoverCardTriggerProps['reference'] | - | The reference (or anchor) element that is being referred to  |
| dismissible? | boolean | true | When `false`, the popover will not close when clicking outsi |
| class? | any | - |  |
| ui? | Popover['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| close:prevent | [] | - |  |
