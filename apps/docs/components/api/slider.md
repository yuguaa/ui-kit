## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| size? | Slider['variants']['size'] | 'md' |  |
| color? | Slider['variants']['color'] | 'primary' |  |
| orientation? | Slider['variants']['orientation'] | 'horizontal' | The orientation of the slider. |
| tooltip? | boolean \| TooltipProps | - |  |
| defaultValue? | number \| number[] | - | The value of the slider when initially rendered. Use when yo |
| min? | any | - | 表单与 reka 透传成员（min/max/step/inverted 等，运行时经 useForwardProps 转 |
| max? | any | - |  |
| step? | any | - |  |
| minStepsBetweenThumbs? | any | - |  |
| inverted? | any | - |  |
| class? | any | - |  |
| ui? | Slider['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |
