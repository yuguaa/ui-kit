## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title? | string | - |  |
| description? | string | - |  |
| content? | Omit&lt;DialogContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Partial&lt;E | - | The content of the modal. |
| overlay? | boolean | true | Render an overlay behind the modal. |
| scrollable? | boolean | false | When `true`, enables scrollable overlay mode where content s |
| transition? | boolean | true | Animate the modal when opening or closing. |
| fullscreen? | boolean | false | When `true`, the modal will take up the full screen. |
| portal? | boolean \| string \| HTMLElement | true | Render the modal in a portal. |
| close? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| closeIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed in the close button. |
| dismissible? | boolean | true | When `false`, the modal will not close when clicking outside |
| class? | any | - |  |
| ui? | Modal['slots'] | - |  |
| open? | any | - | reka Dialog Root 透传成员（类型补齐，运行时经 useForwardProps 转发） |
| defaultOpen? | any | - |  |
| modal? | any | - |  |
| unmountOnHide? | any | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| leave | [] | - |  |
| after:leave | [] | - |  |
| enter | [] | - |  |
| after:enter | [] | - |  |
| close:prevent | [] | - |  |
