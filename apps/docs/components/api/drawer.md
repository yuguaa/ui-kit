## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| title? | string | - |  |
| description? | string | - |  |
| inset? | boolean | false | Whether to inset the drawer from the edges. |
| content? | Omit&lt;DialogContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Partial&lt;E | - | The content of the drawer. |
| overlay? | boolean | true | Render an overlay behind the drawer. |
| handle? | boolean | true | Render a handle on the drawer. |
| portal? | boolean \| string \| HTMLElement | true | Render the drawer in a portal. |
| nested? | boolean | false | Whether the drawer is nested in another drawer. |
| close? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| closeIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed in the close button. |
| class? | any | - |  |
| ui? | Drawer['slots'] | - |  |
| activeSnapPoint? | any | - | vaul Drawer Root 透传成员（类型补齐，运行时经 useForwardProps 转发） |
| closeThreshold? | any | - |  |
| shouldScaleBackground? | any | - |  |
| setBackgroundColorOnScale? | any | - |  |
| scrollLockTimeout? | any | - |  |
| fixed? | any | - |  |
| dismissible? | any | - |  |
| modal? | any | - |  |
| open? | any | - |  |
| defaultOpen? | any | - |  |
| direction? | any | - |  |
| noBodyStyles? | any | - |  |
| handleOnly? | any | - |  |
| preventScrollRestoration? | any | - |  |
| snapPoints? | any | - |  |
