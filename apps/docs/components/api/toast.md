## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'li' | The element or component this component should render as. |
| title? | StringOrVNode | - |  |
| description? | StringOrVNode | - |  |
| icon? | IconProps['name'] | - |  |
| avatar? | AvatarProps | - |  |
| color? | Toast['variants']['color'] | 'primary' |  |
| orientation? | Toast['variants']['orientation'] | 'vertical' | The orientation between the content and the actions. |
| close? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| closeIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed in the close button. |
| actions? | ButtonProps[] | - |  |
| duration? | number | 5000 | The time in milliseconds before the toast automatically clos |
| progress? | boolean \| Pick&lt;ProgressProps, 'color' \| 'ui'&gt; | - |  |
| class? | any | - |  |
| ui? | Toast['slots'] | - |  |
| defaultOpen? | any | - | reka Toast Root 透传成员（类型补齐，运行时经 useForwardProps 转发） |
| open? | any | - |  |
| type? | any | - |  |

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
