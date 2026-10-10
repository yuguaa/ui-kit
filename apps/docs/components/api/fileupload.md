## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| id? | string | - |  |
| name? | string | - |  |
| icon? | IconProps['name'] \| false | appConfig.ui.icons.upload | The icon to display. Set to `false` to hide the icon. |
| label? | string | - |  |
| description? | string | - |  |
| color? | FileUpload['variants']['color'] | 'primary' |  |
| variant? | FileUpload['variants']['variant'] | 'area' | The `button` variant is only available when `multiple` is `f |
| size? | FileUpload['variants']['size'] | 'md' |  |
| layout? | FileUpload['variants']['layout'] | 'list' | The layout of how files are displayed. |
| position? | FileUpload['variants']['position'] | 'outside' | The position of the files. |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| accept? | string | - |  |
| multiple? | M & boolean | - |  |
| reset? | boolean | false | Reset the file input when the dialog is opened. |
| dropzone? | boolean | true | Create a zone that allows the user to drop files onto it. |
| interactive? | boolean | true | Make the dropzone interactive when the user is clicking on i |
| required? | boolean | - |  |
| disabled? | boolean | - |  |
| fileIcon? | IconProps['name'] | appConfig.ui.icons.file | The icon to display for the file. |
| fileImage? | boolean | true | Preview the file (currently only `&lt;img&gt;` is rendered) |
| fileDelete? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| fileDeleteIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed to delete a file. |
| preview? | boolean | true | Show the file preview/list after upload. |
| class? | any | - |  |
| ui? | FileUpload['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |
