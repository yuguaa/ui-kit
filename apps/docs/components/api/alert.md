## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| title? | string | - |  |
| description? | string | - |  |
| icon? | IconProps['name'] | - |  |
| avatar? | AvatarProps | - |  |
| color? | Alert['variants']['color'] | 'primary' |  |
| variant? | Alert['variants']['variant'] | 'solid' |  |
| orientation? | Alert['variants']['orientation'] | 'vertical' | The orientation between the content and the actions. |
| actions? | ButtonProps[] | - |  |
| close? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| closeIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed in the close button. |
| class? | any | - |  |
| ui? | Alert['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:open | [value: boolean] | - |  |
