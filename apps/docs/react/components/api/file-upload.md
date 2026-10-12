## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render? | React.ReactElement | - | 渲染为指定元素 |
| id? | string | - | 表单字段 id |
| name? | string | - | 表单提交时的字段名 |
| icon? | string \| false | - | 上传区域图标（XIcon 名称），false 隐藏 |
| label? | React.ReactNode | - | 上传区域文案（字符串或节点） |
| description? | React.ReactNode | - | 上传区域描述（字符串或节点） |
| color? | XFileUploadColor | - | 组件颜色（聚焦描边与高亮） |
| variant? | XFileUploadVariant | - | 预设样式，button 仅在 multiple 为 false 时可用 |
| size? | XFileUploadSize | - | 控件尺寸 |
| layout? | XFileUploadLayout | - | 文件展示布局，仅在 variant 为 area 时生效 |
| position? | XFileUploadPosition | - | 文件列表位置，仅在 variant 为 area 且 layout 为 list 时生效 |
| highlight? | boolean | - | 高亮：始终显示颜色描边，类似聚焦态 |
| accept? | string | - | 接受的文件类型（逗号分隔的 MIME 类型或扩展名） |
| multiple? | boolean | - | 是否多选 |
| reset? | boolean | - | 打开文件对话框前重置 input，保证重复选择同一文件也会触发 change |
| dropzone? | boolean | - | 是否允许拖拽文件到上传区域 |
| interactive? | boolean | - | 点击上传区域是否打开文件对话框 |
| required? | boolean | - | 是否必填 |
| disabled? | boolean | - | 是否禁用 |
| fileIcon? | string | - | 文件缩略图图标（XIcon 名称） |
| fileImage? | boolean | - | 是否渲染图片预览，false 时仅显示 fileIcon |
| fileDelete? | boolean \| XFileUploadFileDelete | - | 文件删除按钮：布尔或按钮配置 |
| fileDeleteIcon? | string | - | 删除按钮图标（XIcon 名称） |
| preview? | boolean | - | 上传后是否展示文件列表 |
| ui? | XFileUploadUi | - | 主题插槽类名，键名与 Nuxt UI 主题保持一致 |
| value? | XFileUploadFiles | - | 绑定文件 |
| onChange? | (files: XFileUploadFiles) =&gt; void | - | 文件变化回调 |
| children? | React.ReactNode \| ((props: XFileUploadSlotProps) =&gt; React.ReactNode) | - | 上传区域内容（函数形式可拿到 open / removeFile / ui） |
| leading? | React.ReactNode \| ((props: { ui: XFileUploadUi }) =&gt; React.ReactNode) | - | 上传区域前置内容 |
| actions? | (props: { files: XFileUploadFiles \| undefined; open: () =&gt; void; removeFile: | - | 上传区域操作按钮 |
| files? | (props: { files: XFileUploadFiles \| undefined; removeFile: (index?: number) =&g | - | 文件列表内容 |
| filesTop? | (props: { files: XFileUploadFiles \| undefined; open: () =&gt; void; removeFile: | - | 文件列表顶部内容 |
| filesBottom? | (props: { files: XFileUploadFiles \| undefined; open: () =&gt; void; removeFile: | - | 文件列表底部内容 |
| file? | (props: XFileUploadFileSlotProps) =&gt; React.ReactNode | - | 文件项自定义渲染 |
| fileLeading? | (props: XFileUploadFileSlotProps & { ui: XFileUploadUi }) =&gt; React.ReactNode | - | 文件前置内容 |
| fileName? | (props: { file: File; index: number }) =&gt; React.ReactNode | - | 文件名称 |
| fileSize? | (props: { file: File; index: number }) =&gt; React.ReactNode | - | 文件体积 |
| fileTrailing? | (props: XFileUploadFileSlotProps & { ui: XFileUploadUi }) =&gt; React.ReactNode | - | 文件尾部内容 |
| className? | string | - |  |
