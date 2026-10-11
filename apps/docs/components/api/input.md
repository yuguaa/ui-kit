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
| tabindex? | any | - |  |
| form? | any | - |  |
| minlength? | any | - |  |
| maxlength? | any | - |  |
| avatar? | any | - |  |
| pattern? | any | - |  |
| step? | any | - |  |
| min? | any | - |  |
| max? | any | - |  |
| multiple? | any | - |  |
| checked? | any | - |  |
| size? | any | - |  |
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
| name? | string | - |  |
| type? | InputHTMLAttributes['type'] | - |  |
| placeholder? | string | - | The placeholder text when the input is empty. |
| color? | Input['variants']['color'] | 'primary' |  |
| variant? | Input['variants']['variant'] | 'outline' |  |
| required? | boolean | 'md' |  |
| autocomplete? | InputHTMLAttributes['autocomplete'] | - |  |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| disabled? | boolean | - |  |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| fixed? | boolean | - | Keep the mobile text size on all breakpoints. |
| modelValue? | ApplyModifiers&lt;T, Mod&gt; | - |  |
| defaultValue? | ApplyModifiers&lt;T, Mod&gt; | - |  |
| modelModifiers? | Mod | - |  |
| ui? | Input['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:modelValue | [value: ApplyModifiers&lt;T, Mod&gt;] | - |  |
| blur | [event: FocusEvent] | - |  |
| change | [event: Event] | - |  |
