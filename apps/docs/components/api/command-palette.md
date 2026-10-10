## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| size? | CommandPalette['variants']['size'] | 'md' |  |
| icon? | IconProps['name'] \| false | appConfig.ui.icons.search | The icon displayed in the input. Set to `false` to hide the  |
| trailingIcon? | IconProps['name'] | appConfig.ui.icons.search | The icon displayed on the right side of the input. |
| selectedIcon? | IconProps['name'] | appConfig.ui.icons.check | The icon displayed when an item is selected. |
| childrenIcon? | IconProps['name'] | appConfig.ui.icons.chevronRight | The icon displayed when an item has children. |
| placeholder? | InputProps['placeholder'] | t('commandPalette.placeholder') | The placeholder text for the input. |
| autofocus? | boolean | true | Automatically focus the input when component is mounted. |
| close? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| closeIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed in the close button. |
| back? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| backIcon? | IconProps['name'] | appConfig.ui.icons.arrowLeft | The icon displayed in the back button. |
| input? | boolean \| Omit&lt;InputProps, 'modelValue' \| 'defaultValue'&gt; | true | Configure the input or hide it with `false`. |
| groups? | G[] | - |  |
| fuse? | UseFuseOptions&lt;T&gt; | - |  |
| virtualize? | boolean \| { | - |  |
| overscan? | number | 12 | Number of items rendered outside the visible area |
| valueKey? | GetItemKeys&lt;T&gt; | undefined | When `items` is an array of objects, select the field to use |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| descriptionKey? | GetItemKeys&lt;T&gt; | 'description' | The key used to get the description from the item. |
| preserveGroupOrder? | boolean | false | Whether to preserve the order of groups as defined in the `g |
| searchDelay? | number | 0 | Delay (in milliseconds) before the search term is passed to  |
| class? | any | - |  |
| ui? | CommandPalette['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:open | [value: boolean] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| item? | SlotProps&lt;T&gt; | - |  |
| item-leading? | SlotProps&lt;T&gt; | - |  |
| item-label? | SlotProps&lt;T&gt; | - |  |
| item-description? | SlotProps&lt;T&gt; | - |  |
| item-trailing? | SlotProps&lt;T&gt; | - |  |
