## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| type? | K | 'multiple' | Determines whether a "single" or "multiple" items can be sel |
| modelValue? | NavigationMenuModelValue&lt;K, O&gt; | - |  |
| defaultValue? | NavigationMenuModelValue&lt;K, O&gt; | - |  |
| trailingIcon? | IconProps['name'] | appConfig.ui.icons.chevronDown | The icon displayed to open the menu. |
| externalIcon? | boolean \| IconProps['name'] | appConfig.ui.icons.external | The icon displayed when the item is an external link. |
| items? | T | - |  |
| color? | NavigationMenu['variants']['color'] | 'primary' |  |
| variant? | NavigationMenu['variants']['variant'] | 'pill' |  |
| orientation? | O | 'horizontal' | The orientation of the menu. |
| collapsed? | boolean | false | Collapse the navigation menu to only show icons. |
| tooltip? | boolean \| TooltipProps | - |  |
| popover? | boolean \| PopoverProps | - |  |
| highlight? | boolean | - | Display a line next to the active item. |
| highlightColor? | NavigationMenu['variants']['highlightColor'] | 'primary' |  |
| content? | Omit&lt;NavigationMenuContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Part | - | The content of the menu. |
| contentOrientation? | NavigationMenu['variants']['contentOrientation'] | 'horizontal' | The orientation of the content. |
| arrow? | boolean | false | Display an arrow alongside the menu. |
| valueKey? | GetItemKeys&lt;T&gt; | 'value' | The key used to get the value from the item. |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| class? | any | - |  |
| ui? | NavigationMenu['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:modelValue | [value: NavigationMenuModelValue&lt;K, O&gt; \| undefined] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| item? | SlotProps&lt;T&gt; | - |  |
| item-leading? | SlotProps&lt;T&gt; | - |  |
| item-label? | (props: { item: T, index: number, active: boolean }) =&gt; VNode[] | - |  |
| item-trailing? | SlotProps&lt;T&gt; | - |  |
| item-content? | (props: { item: T, index: number, active: boolean, ui: NavigationMenu['ui'], clo | - |  |
| list-leading? | (props?: {}) =&gt; VNode[] | - |  |
| list-trailing? | (props?: {}) =&gt; VNode[] | - |  |
