## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| position? | Toaster['variants']['position'] | 'bottom-right' | The position on the screen to display the toasts. |
| expand? | boolean | true | Expand the toasts to show multiple toasts at once. |
| progress? | boolean | true | Whether to show the progress bar on all toasts. |
| portal? | boolean \| string \| HTMLElement | true | Render the toaster in a portal. |
| max? | number | 5 | Maximum number of toasts to display at once. |
| class? | any | - |  |
| ui? | Toaster['slots'] | - |  |
| duration? | any | - | reka ToastProvider Root 透传成员（类型补齐，运行时经 useForwardProps 转发） |
| label? | any | - |  |
| swipeThreshold? | any | - |  |
| disableSwipe? | any | - |  |
