## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size? | DropdownMenu['variants']['size'] | 'md' |  |
| items? | T | - |  |
| checkedIcon? | IconProps['name'] | appConfig.ui.icons.check | The icon displayed when an item is checked. |
| loadingIcon? | IconProps['name'] | appConfig.ui.icons.loading | The icon displayed when an item is loading. |
| externalIcon? | boolean \| IconProps['name'] | appConfig.ui.icons.external | The icon displayed when the item is an external link. |
| content? | Omit&lt;DropdownMenuContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Partia | - |  |
| arrow? | boolean \| Omit&lt;DropdownMenuArrowProps, 'as' \| 'asChild'&gt; | - |  |
| portal? | boolean \| string \| HTMLElement | true | Render the menu in a portal. |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| descriptionKey? | GetItemKeys&lt;T&gt; | 'description' | The key used to get the description from the item. |
| filter? | boolean \| Omit&lt;InputProps, 'modelValue' \| 'defaultValue'&gt; | - |  |
| filterFields? | string[] | [labelKey] | The fields to filter by. |
| ignoreFilter? | boolean | false | When `true`, items will not be filtered which is useful for  |
| disabled? | boolean | - |  |
| class? | any | - |  |
| ui? | DropdownMenu['slots'] | - |  |

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

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| item? | SlotProps&lt;T&gt; | - |  |
| item-leading? | SlotProps&lt;T&gt; | - |  |
| item-label? | (props: { item: T, active: boolean, index: number }) =&gt; VNode[] | - |  |
| item-description? | (props: { item: T, active: boolean, index: number }) =&gt; VNode[] | - |  |
| content-top? | (props: { sub: boolean }) =&gt; VNode[] | - |  |
| content-bottom? | (props: { sub: boolean }) =&gt; VNode[] | - |  |
