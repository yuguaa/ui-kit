## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| id? | string | - | The id of the rating. |
| readonly? | boolean | false | Make the rating readonly (non-interactive). |
| icon? | IconProps['name'] | appConfig.ui.icons.star | The icon displayed for each rating value. |
| emptyIcon? | IconProps['name'] | - | The icon displayed for empty rating values. Defaults to `ico |
| color? | InputRating['variants']['color'] | 'primary' |  |
| size? | InputRating['variants']['size'] | 'md' |  |
| orientation? | InputRating['variants']['orientation'] | 'horizontal' | The orientation of the rating. |
| length? | any | - | 表单与 reka 透传成员（length/modelValue/defaultValue/disabled 等，运行时经 |
| step? | any | - |  |
| hoverable? | boolean | - |  |
| clearable? | boolean | - |  |
| required? | boolean | - |  |
| modelValue? | number | - |  |
| defaultValue? | number | - |  |
| disabled? | boolean | - |  |
| class? | any | - |  |
| ui? | InputRating['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |
