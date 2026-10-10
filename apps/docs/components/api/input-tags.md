## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| class? | any | - |  |
| style? | any | - |  |
| id? | any | - |  |
| title? | any | - |  |
| role? | any | - |  |
| value? | any | - |  |
| readonly? | any | - |  |
| autocomplete? | any | - |  |
| tabindex? | any | - |  |
| form? | any | - |  |
| multiple? | any | - |  |
| checked? | any | - |  |
| rows? | any | - |  |
| cols? | any | - |  |
| wrap? | any | - |  |
| accept? | any | - |  |
| capture? | any | - |  |
| download? | any | - |  |
| href? | any | - |  |
| target? | any | - |  |
| rel? | any | - |  |
| loading? | any | - |  |
| accesskey? | any | - |  |
| contenteditable? | any | - |  |
| draggable? | any | - |  |
| hidden? | any | - |  |
| lang? | any | - |  |
| slot? | any | - |  |
| autocapitalize? | any | - |  |
| autocorrect? | any | - |  |
| spellcheck? | any | - |  |
| enterkeyhint? | any | - |  |
| inputmode? | any | - |  |
| aria-label? | any | - |  |
| aria-describedby? | any | - |  |
| aria-hidden? | any | - |  |
| aria-expanded? | any | - |  |
| aria-current? | any | - |  |
| aria-checked? | any | - |  |
| aria-controls? | any | - |  |
| aria-disabled? | any | - |  |
| aria-invalid? | any | - |  |
| aria-live? | any | - |  |
| aria-selected? | any | - |  |
| data-testid? | any | - |  |
| as? | any | 'div' | The element or component this component should render as. |
| placeholder? | string | - | The placeholder text when the input is empty. |
| maxLength? | number | - | The maximum number of character allowed. |
| color? | InputTags['variants']['color'] | 'primary' |  |
| variant? | InputTags['variants']['variant'] | 'outline' |  |
| size? | InputTags['variants']['size'] | 'md' |  |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| deleteIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed to delete a tag. |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| fixed? | boolean | - | Keep the mobile text size on all breakpoints. |
| class? | any | - |  |
| ui? | InputTags['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |
| blur | [event: FocusEvent] | - |  |
| focus | [event: FocusEvent] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| item-text? | SlotProps&lt;T&gt; | - |  |
| item-delete? | SlotProps&lt;T&gt; | - |  |
