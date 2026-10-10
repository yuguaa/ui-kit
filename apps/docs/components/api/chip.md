## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| text? | string \| number | - | Display some text inside the chip. |
| color? | Chip['variants']['color'] | 'primary' |  |
| size? | Chip['variants']['size'] | 'md' |  |
| position? | Chip['variants']['position'] | 'top-right' | The position of the chip. |
| inset? | boolean | - | When `true`, keep the chip inside the component for rounded  |
| standalone? | boolean | - | When `true`, render the chip relatively to the parent. |
| class? | any | - |  |
| ui? | Chip['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:show | [value: boolean] | - |  |
