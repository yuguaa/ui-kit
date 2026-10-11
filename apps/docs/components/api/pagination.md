## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| firstIcon? | IconProps['name'] | appConfig.ui.icons.chevronDoubleLeft | The icon to use for the first page control. |
| prevIcon? | IconProps['name'] | appConfig.ui.icons.chevronLeft | The icon to use for the previous page control. |
| nextIcon? | IconProps['name'] | appConfig.ui.icons.chevronRight | The icon to use for the next page control. |
| lastIcon? | IconProps['name'] | appConfig.ui.icons.chevronDoubleRight | The icon to use for the last page control. |
| ellipsisIcon? | IconProps['name'] | appConfig.ui.icons.ellipsis | The icon to use for the ellipsis control. |
| color? | ButtonProps['color'] | 'neutral' | The color of the pagination controls. |
| variant? | ButtonProps['variant'] | 'outline' | The variant of the pagination controls. |
| activeColor? | ButtonProps['color'] | 'primary' | The color of the active pagination control. |
| activeVariant? | ButtonProps['variant'] | 'solid' | The variant of the active pagination control. |
| showControls? | boolean | true | Whether to show the first, previous, next, and last controls |
| size? | ButtonProps['size'] | - |  |
| to? | any | - | A function to render page controls as links. |
| class? | any | - |  |
| ui? | Pagination['slots'] | - |  |
| defaultPage? | any | - | 类型修补：reka 透传 props（仅类型层，运行时经 useForwardProps 传递） |
| disabled? | any | - |  |
| itemsPerPage? | any | - |  |
| page? | any | - |  |
| showEdges? | any | - |  |
| siblingCount? | any | - |  |
| total? | any | - |  |

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
