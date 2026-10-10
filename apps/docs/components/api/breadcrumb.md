## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'nav' | The element or component this component should render as. |
| items? | T[] | - |  |
| separatorIcon? | IconProps['name'] | appConfig.ui.icons.chevronRight | The icon to use as a separator. |
| color? | Breadcrumb['variants']['color'] | 'primary' |  |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| class? | any | - |  |
| ui? | Breadcrumb['slots'] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| item? | SlotProps&lt;T&gt; | - |  |
| item-leading? | SlotProps&lt;T&gt; | - |  |
| item-label? | (props: { item: T, index: number, active: boolean }) =&gt; VNode[] | - |  |
| item-trailing? | (props: { item: T, index: number, active: boolean }) =&gt; VNode[] | - |  |
| separator? | (props: { ui: Breadcrumb['ui'] }) =&gt; VNode[] | - |  |
