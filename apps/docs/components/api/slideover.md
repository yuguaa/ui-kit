## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title? | string | - |  |
| description? | string | - |  |
| content? | Omit&lt;DialogContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Partial&lt;E | - | The content of the slideover. |
| overlay? | boolean | true | Render an overlay behind the slideover. |
| transition? | boolean | true | Animate the slideover when opening or closing. |
| side? | Slideover['variants']['side'] | 'right' | The side of the slideover. |
| inset? | boolean | false | Whether to inset the slideover from the edges. |
| portal? | boolean \| string \| HTMLElement | true | Render the slideover in a portal. |
| close? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| closeIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed in the close button. |
| dismissible? | boolean | true | When `false`, the slideover will not close when clicking out |
| class? | any | - |  |
| ui? | Slideover['slots'] | - |  |
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
