## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text? | string | - | The text content of the tooltip. |
| kbds? | KbdProps['value'][] \| KbdProps[] | - | The keyboard keys to display in the tooltip. |
| content? | Omit&lt;TooltipContentProps, 'as' \| 'asChild'&gt; & Partial&lt;EmitsToProps&lt; | - |  |
| arrow? | boolean \| Omit&lt;TooltipArrowProps, 'as' \| 'asChild'&gt; | - |  |
| portal? | boolean \| string \| HTMLElement | true | Render the tooltip in a portal. |
| reference? | TooltipTriggerProps['reference'] | - | The reference (or anchor) element that is being referred to  |
| class? | any | - |  |
| ui? | Tooltip['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:modelValue | [payload?: any] | - |  |
| update:open | [payload?: any] | - |  |
| change | [payload?: any] | - |  |
| close | [payload?: any] | - |  |
| select | [payload?: any] | - |  |
| highlight | [payload?: any] | - |  |
| entryFocus | [payload?: any] | - |  |
| leave | [payload?: any] | - |  |
| open | [payload?: any] | - |  |
| loading | [payload?: any] | - |  |
