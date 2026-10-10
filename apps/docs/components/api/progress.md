## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| max? | number \| Array&lt;any&gt; | - | The maximum progress value. |
| status? | boolean | - | Display the current progress value. |
| inverted? | boolean | - | Whether the progress is visually inverted. |
| size? | Progress['variants']['size'] | 'md' |  |
| color? | Progress['variants']['color'] \| (string & {}) | 'primary' | Any theme color, or any CSS color value for palettes outside |
| orientation? | Progress['variants']['orientation'] | 'horizontal' | The orientation of the progress bar. |
| animation? | Progress['variants']['animation'] | 'carousel' | The animation of the progress bar. |
| class? | any | - |  |
| ui? | Progress['slots'] | - |  |

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
