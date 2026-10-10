import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { FileText, Upload, X } from "lucide-react"
import { XButton } from "@/components/kit/x-button"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XFileUploadColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XFileUploadVariant = "area" | "button"
export type XFileUploadSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XFileUploadLayout = "list" | "grid"
export type XFileUploadPosition = "inside" | "outside"

export type XFileUploadFiles = File | File[] | null

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XFileUploadUi {
  root?: string
  base?: string
  wrapper?: string
  icon?: string
  avatar?: string
  label?: string
  description?: string
  actions?: string
  files?: string
  file?: string
  fileLeadingAvatar?: string
  fileWrapper?: string
  fileName?: string
  fileSize?: string
  fileTrailingButton?: string
}

/** 文件删除按钮配置（布尔表示启用默认样式） */
export interface XFileUploadFileDelete {
  variant?: "solid" | "outline" | "soft" | "ghost" | "subtle" | "link"
  size?: XFileUploadSize
  color?: XFileUploadColor
  label?: string
  ui?: { base?: string; label?: string; leadingIcon?: string; trailingIcon?: string }
  className?: string
}

/** 默认插槽参数 */
export interface XFileUploadSlotProps {
  open: () => void
  removeFile: (index?: number) => void
  ui: XFileUploadUi
}

/** 文件插槽参数 */
export interface XFileUploadFileSlotProps {
  file: File
  index: number
  removeFile: (index?: number) => void
}

export interface XFileUploadProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "defaultValue" | "onChange" | "size" | "color" | "children" | "className" | "multiple" | "disabled" | "required" | "name" | "id" | "accept"
  > {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 表单字段 id */
  id?: string
  /** 表单提交时的字段名 */
  name?: string
  /** 上传区域图标（XIcon 名称），false 隐藏 */
  icon?: string | false
  /** 上传区域文案（字符串或节点） */
  label?: React.ReactNode
  /** 上传区域描述（字符串或节点） */
  description?: React.ReactNode
  /** 组件颜色（聚焦描边与高亮） */
  color?: XFileUploadColor
  /** 预设样式，button 仅在 multiple 为 false 时可用 */
  variant?: XFileUploadVariant
  /** 控件尺寸 */
  size?: XFileUploadSize
  /** 文件展示布局，仅在 variant 为 area 时生效 */
  layout?: XFileUploadLayout
  /** 文件列表位置，仅在 variant 为 area 且 layout 为 list 时生效 */
  position?: XFileUploadPosition
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 接受的文件类型（逗号分隔的 MIME 类型或扩展名） */
  accept?: string
  /** 是否多选 */
  multiple?: boolean
  /** 打开文件对话框前重置 input，保证重复选择同一文件也会触发 change */
  reset?: boolean
  /** 是否允许拖拽文件到上传区域 */
  dropzone?: boolean
  /** 点击上传区域是否打开文件对话框 */
  interactive?: boolean
  /** 是否必填 */
  required?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 文件缩略图图标（XIcon 名称） */
  fileIcon?: string
  /** 是否渲染图片预览，false 时仅显示 fileIcon */
  fileImage?: boolean
  /** 文件删除按钮：布尔或按钮配置 */
  fileDelete?: boolean | XFileUploadFileDelete
  /** 删除按钮图标（XIcon 名称） */
  fileDeleteIcon?: string
  /** 上传后是否展示文件列表 */
  preview?: boolean
  /** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
  ui?: XFileUploadUi
  /** 绑定文件 */
  value?: XFileUploadFiles
  /** 文件变化回调 */
  onChange?: (files: XFileUploadFiles) => void
  /** 上传区域内容（函数形式可拿到 open / removeFile / ui） */
  children?: React.ReactNode | ((props: XFileUploadSlotProps) => React.ReactNode)
  /** 上传区域前置内容 */
  leading?: React.ReactNode | ((props: { ui: XFileUploadUi }) => React.ReactNode)
  /** 上传区域操作按钮 */
  actions?: (props: { files: XFileUploadFiles | undefined; open: () => void; removeFile: (index?: number) => void }) => React.ReactNode
  /** 文件列表内容 */
  files?: (props: { files: XFileUploadFiles | undefined; removeFile: (index?: number) => void }) => React.ReactNode
  /** 文件列表顶部内容 */
  filesTop?: (props: { files: XFileUploadFiles | undefined; open: () => void; removeFile: (index?: number) => void }) => React.ReactNode
  /** 文件列表底部内容 */
  filesBottom?: (props: { files: XFileUploadFiles | undefined; open: () => void; removeFile: (index?: number) => void }) => React.ReactNode
  /** 文件项自定义渲染 */
  file?: (props: XFileUploadFileSlotProps) => React.ReactNode
  /** 文件前置内容 */
  fileLeading?: (props: XFileUploadFileSlotProps & { ui: XFileUploadUi }) => React.ReactNode
  /** 文件名称 */
  fileName?: (props: { file: File; index: number }) => React.ReactNode
  /** 文件体积 */
  fileSize?: (props: { file: File; index: number }) => React.ReactNode
  /** 文件尾部内容 */
  fileTrailing?: (props: XFileUploadFileSlotProps & { ui: XFileUploadUi }) => React.ReactNode
  className?: string
}

/** 插槽渲染：函数形式按参数调用，节点形式直接渲染 */
function renderSlot<P>(slot: React.ReactNode | ((props: P) => React.ReactNode) | undefined, props: P, fallback?: React.ReactNode) {
  if (slot == null) return fallback
  return typeof slot === "function" ? (slot as (props: P) => React.ReactNode)(props) : slot
}

/* ---- 样式映射（Nuxt UI 主题语义 → 本地 token） ---- */

const colorClasses: Record<XFileUploadColor, string> = {
  primary: "outline-primary-6/25 focus-visible:outline-3 focus-visible:border-primary-6",
  secondary: "outline-secondary/25 focus-visible:outline-3 focus-visible:border-secondary",
  neutral: "outline-neutral-6/25 focus-visible:outline-3 focus-visible:border-neutral-6",
  success: "outline-success-6/25 focus-visible:outline-3 focus-visible:border-success-6",
  info: "outline-info-6/25 focus-visible:outline-3 focus-visible:border-info-6",
  warning: "outline-warning-6/25 focus-visible:outline-3 focus-visible:border-warning-6",
  error: "outline-error-6/25 focus-visible:outline-3 focus-visible:border-error-6",
}

const highlightClasses: Record<XFileUploadColor, string> = {
  primary: "border-primary-6",
  secondary: "border-secondary",
  neutral: "border-neutral-6",
  success: "border-success-6",
  info: "border-info-6",
  warning: "border-warning-6",
  error: "border-error-6",
}

/** 尺寸 → 文字、图标与文件项 */
const fileUploadSizeClasses: Record<XFileUploadSize, {
  base: string
  icon: string
  avatar: string
  fileText: string
  fileGap: string
  filePadding: string
  fileSize?: string
}> = {
  xs: { base: "text-xs", icon: "size-4", avatar: "size-5", fileText: "text-xs", fileGap: "gap-1", filePadding: "px-2 py-1" },
  sm: { base: "text-xs", icon: "size-4", avatar: "size-6", fileText: "text-xs", fileGap: "gap-1.5", filePadding: "px-2.5 py-1.5" },
  md: { base: "text-sm", icon: "size-5", avatar: "size-8", fileText: "text-xs", fileGap: "gap-1.5", filePadding: "px-2.5 py-1.5" },
  lg: { base: "text-sm", icon: "size-5", avatar: "size-10", fileText: "text-sm", fileGap: "gap-2", filePadding: "px-3 py-2", fileSize: "text-xs" },
  xl: { base: "text-base", icon: "size-6", avatar: "size-12", fileText: "text-sm", fileGap: "gap-2", filePadding: "px-3 py-2" },
}

/** xs / sm 时文件名与体积同行排列 */
const fileWrapperRowSizes: Partial<Record<XFileUploadSize, string>> = {
  xs: "flex-row gap-1",
  sm: "flex-row gap-1",
}

/** button 形态的内边距 */
const buttonPaddings: Record<XFileUploadSize, string> = {
  xs: "p-1",
  sm: "p-1.5",
  md: "p-1.5",
  lg: "p-2",
  xl: "p-2",
}

/** list 布局删除按钮的负外边距（贴齐文件项边缘） */
const trailingButtonMargins: Record<XFileUploadSize, string> = {
  xs: "-me-1",
  sm: "-me-1.5",
  md: "-me-1.5",
  lg: "-me-2",
  xl: "-me-2",
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0B"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const value = bytes / Math.pow(k, i)
  const formattedSize = i === 0 ? value.toString() : value.toFixed(0)
  return `${formattedSize}${sizes[i]}`
}

export const XFileUpload = React.forwardRef<HTMLDivElement, XFileUploadProps>(function XFileUpload(
  {
    render,
    id,
    name,
    icon,
    label,
    description,
    color = "primary",
    variant = "area",
    size = "md",
    layout = "grid",
    position = "outside",
    highlight = false,
    accept = "*",
    multiple = false,
    reset = false,
    dropzone = true,
    interactive = true,
    required = false,
    disabled = false,
    fileIcon,
    fileImage = true,
    fileDelete = true,
    fileDeleteIcon,
    preview = true,
    ui,
    value,
    onChange,
    children,
    leading,
    actions,
    files,
    filesTop,
    filesBottom,
    file,
    fileLeading,
    fileName,
    fileSize,
    fileTrailing,
    className,
    ...rest
  },
  ref,
) {
  const [innerValue, setInnerValue] = React.useState<XFileUploadFiles>(null)
  const current = value !== undefined ? value : innerValue

  const [isDragging, setIsDragging] = React.useState(false)
  const [imageErrors, setImageErrors] = React.useState<Set<string>>(() => new Set())

  const inputRef = React.useRef<HTMLInputElement>(null)
  const dropzoneRef = React.useRef<HTMLDivElement>(null)

  /* multiple 为 true 时强制 area 形态，与 Nuxt UI 行为一致 */
  const resolvedVariant = multiple ? "area" : variant
  /* button 形态无文件列表，布局固定为 grid */
  const resolvedLayout = variant === "button" && !multiple ? "grid" : layout
  const resolvedPosition: XFileUploadPosition = (() => {
    if (resolvedLayout === "grid" && multiple) return "inside"
    if (resolvedVariant === "button") return "outside"
    return position
  })()

  /** 打开文件对话框 */
  const open = () => {
    if (reset && inputRef.current) inputRef.current.value = ""
    inputRef.current?.click()
  }

  /** 写入模型并派发 change 回调 */
  function updateValue(files: File[], resetModel = false) {
    if (disabled) return
    let next: XFileUploadFiles
    if (multiple) {
      if (resetModel) {
        next = files
      } else {
        const existing = (current as File[]) || []
        next = [...existing, ...files]
      }
    } else {
      next = files[0] ?? null
    }
    if (value === undefined) setInnerValue(next)
    onChange?.(next)
  }

  function onDrop(files: FileList | File[] | null, fromDropZone = false) {
    if (!files || files.length === 0) return
    let list = files instanceof FileList ? Array.from(files) : files
    if (list.length > 1 && !multiple) list = [list[0]!]

    /* 拖拽文件同步到 file input，保证原生表单校验 */
    if (fromDropZone && inputRef.current) {
      const dt = new DataTransfer()
      list.forEach((file) => dt.items.add(file))
      inputRef.current.files = dt.files
    }

    updateValue(list)
  }

  /** 移除文件：不传 index 时清空（单选场景） */
  function removeFile(index?: number) {
    if (!current) return

    if (!multiple || index === undefined) {
      updateValue([], true)
      dropzoneRef.current?.focus()
      return
    }

    const list = [...(current as File[])]
    list.splice(index, 1)
    updateValue(list, true)
    dropzoneRef.current?.focus()
  }

  /* 模型清空时同步重置 file input，保证再次选择同一文件触发 change */
  React.useEffect(() => {
    const hasModelReset = multiple ? !(current as File[])?.length : !current
    if (hasModelReset && inputRef.current) {
      inputRef.current.value = ""
    }
  }, [current, multiple])

  function createObjectUrl(file: File): string | undefined {
    if (!fileImage) return undefined
    return URL.createObjectURL(file)
  }

  function imageKey(file: File, index: number) {
    return `${index}:${file.name}`
  }

  /* 删除按钮默认配置：grid 为悬浮方块，list 为行内链接 */
  const fileDeleteDefaults =
    resolvedLayout === "grid"
      ? { color: "neutral" as const, variant: "solid" as const, size: "xs" as const }
      : { color: "neutral" as const, variant: "link" as const, size }
  const fileDeleteConfig = {
    ...fileDeleteDefaults,
    ...(typeof fileDelete === "object" ? fileDelete : undefined),
  }

  const slotUi = ui ?? {}

  const fileList = (() => {
    const show = preview && current && (Array.isArray(current) ? current.length : true)
    if (!show) return null
    const list = Array.isArray(current) ? current : [current]

    return (
      <React.Fragment>
        {renderSlot(filesTop, { files: current, open, removeFile })}
        <div
          data-slot="files"
          className={cn(
            resolvedLayout === "list"
              ? "flex w-full flex-col gap-2"
              : multiple && "grid w-full grid-cols-2 gap-4 md:grid-cols-3",
            ui?.files,
          )}
        >
          {renderSlot(files, { files: current, removeFile }, list.map((item, index) => (
            <div
              key={item.name}
              data-slot="file"
              className={cn(
                "relative",
                resolvedLayout === "list"
                  ? cn(
                    "flex w-full min-w-0 items-center rounded-md border border-border",
                    fileUploadSizeClasses[size].fileText,
                    fileUploadSizeClasses[size].fileGap,
                    fileUploadSizeClasses[size].filePadding,
                  )
                  : cn(
                    fileUploadSizeClasses[size].fileText,
                    fileUploadSizeClasses[size].fileGap,
                    multiple ? "aspect-square p-0" : "absolute inset-0 p-0",
                  ),
                ui?.file,
              )}
            >
              {renderSlot(file, { file: item, index, removeFile }, (
                <React.Fragment>
                  {renderSlot(fileLeading, { file: item, index, ui: slotUi, removeFile }, (
                    <span
                      data-slot="fileLeadingAvatar"
                      className={cn(
                        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted",
                        fileUploadSizeClasses[size].avatar,
                        resolvedLayout === "grid" && "size-full rounded-lg",
                        ui?.fileLeadingAvatar,
                      )}
                    >
                      {createObjectUrl(item) && !imageErrors.has(imageKey(item, index)) ? (
                        <img
                          src={createObjectUrl(item)}
                          alt={item.name}
                          className="h-full w-full rounded-[inherit] object-cover"
                          onError={() => {
                            setImageErrors((prev) => {
                              const next = new Set(prev)
                              next.add(imageKey(item, index))
                              return next
                            })
                          }}
                        />
                      ) : (
                        fileIcon ? (
                          <XIcon
                            name={fileIcon as XIconName}
                            className={cn(fileUploadSizeClasses[size].icon, "text-muted-foreground")}
                          />
                        ) : (
                          <FileText className={cn(fileUploadSizeClasses[size].icon, "text-muted-foreground")} />
                        )
                      )}
                    </span>
                  ))}

                  <div
                    data-slot="fileWrapper"
                    className={cn(
                      "flex min-w-0 flex-col",
                      resolvedLayout === "list" && fileWrapperRowSizes[size],
                      resolvedLayout === "grid" && "hidden",
                      ui?.fileWrapper,
                    )}
                  >
                    <span data-slot="fileName" className={cn("truncate text-foreground", ui?.fileName)}>
                      {renderSlot(fileName, { file: item, index }, item.name)}
                    </span>
                    <span
                      data-slot="fileSize"
                      className={cn(
                        "truncate text-muted-foreground",
                        fileUploadSizeClasses[size].fileSize,
                        ui?.fileSize,
                      )}
                    >
                      {renderSlot(fileSize, { file: item, index }, formatFileSize(item.size))}
                    </span>
                  </div>

                  {renderSlot(fileTrailing, { file: item, index, ui: slotUi, removeFile }, (
                    fileDelete && (
                      <XButton
                        {...fileDeleteConfig}
                        square={resolvedLayout === "grid"}
                        aria-label={`移除文件 ${item.name}`}
                        data-slot="fileTrailingButton"
                        className={cn(
                          resolvedLayout === "list"
                            ? cn("ms-auto", trailingButtonMargins[size])
                            : "absolute -top-1.5 -end-1.5 rounded-full border-2 border-background p-0",
                          ui?.fileTrailingButton,
                        )}
                        onClick={(event) => {
                          event.stopPropagation()
                          event.preventDefault()
                          removeFile(index)
                        }}
                        trailing={
                          fileDeleteIcon ? (
                            <XIcon name={fileDeleteIcon as XIconName} />
                          ) : (
                            <X className="size-4" />
                          )
                        }
                      />
                    )
                  ))}
                </React.Fragment>
              ))}
            </div>
          )))}
        </div>
        {renderSlot(filesBottom, { files: current, open, removeFile })}
      </React.Fragment>
    )
  })()

  const root = useRender<Record<string, unknown>, HTMLDivElement>({
    render,
    defaultTagName: "div",
    props: {
      ref,
      "data-slot": "root",
      className: cn(
        "relative flex flex-col",
        resolvedLayout === "list" && "items-start gap-2",
        ui?.root,
        className,
      ),
      children: (
        <React.Fragment>
          {renderSlot(children, { open, removeFile, ui: slotUi }, (
            <React.Fragment>
              {resolvedVariant === "button" ? (
                <button
                  ref={dropzoneRef as React.Ref<HTMLButtonElement>}
                  type="button"
                  disabled={disabled}
                  data-dragging={isDragging}
                  data-slot="base"
                  tabIndex={interactive && !disabled ? 0 : -1}
                  onClick={() => interactive && !disabled && open()}
                  onKeyUp={(event) => {
                    if (interactive && !disabled && (event.key === "Enter" || event.key === " ")) open()
                  }}
                  className={cn(
                    "flex w-full flex-1 flex-col items-stretch justify-center gap-2 rounded-lg border border-border bg-background transition-[background] ease-out focus-visible:outline-3",
                    buttonPaddings[size],
                    dropzone && "border-dashed data-[dragging=true]:bg-muted/25",
                    disabled && "cursor-not-allowed opacity-75",
                    interactive && !disabled && "hover:bg-muted/25",
                    fileUploadSizeClasses[size].base,
                    colorClasses[color],
                    highlight && highlightClasses[color],
                    ui?.base,
                  )}
                >
                  {resolvedPosition === "inside" && fileList}
                  <div
                    data-slot="wrapper"
                    className={cn(
                      "flex flex-col items-center justify-center text-center",
                      ui?.wrapper,
                    )}
                  >
                    {renderSlot(leading, { ui: slotUi }, icon !== false && (
                      icon ? (
                        <XIcon
                          name={icon as XIconName}
                          data-slot="icon"
                          className={cn("shrink-0", fileUploadSizeClasses[size].icon, ui?.icon)}
                        />
                      ) : (
                        <Upload
                          data-slot="icon"
                          className={cn("shrink-0", fileUploadSizeClasses[size].icon, ui?.icon)}
                        />
                      )
                    ))}
                  </div>
                </button>
              ) : (
                <div
                  ref={dropzoneRef}
                  role="button"
                  aria-disabled={disabled || undefined}
                  data-dragging={isDragging}
                  data-slot="base"
                  tabIndex={interactive && !disabled ? 0 : -1}
                  onClick={() => interactive && !disabled && open()}
                  onKeyUp={(event) => {
                    if (interactive && !disabled && (event.key === "Enter" || event.key === " ")) open()
                  }}
                  onDragOver={(event) => {
                    if (!dropzone || disabled) return
                    event.preventDefault()
                    setIsDragging(true)
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(event) => {
                    if (!dropzone || disabled) return
                    event.preventDefault()
                    setIsDragging(false)
                    onDrop(event.dataTransfer.files, true)
                  }}
                  className={cn(
                    "flex w-full flex-1 flex-col items-stretch justify-center gap-2 rounded-lg border border-border bg-background transition-[background] ease-out focus-visible:outline-3",
                    "p-4",
                    dropzone && "border-dashed data-[dragging=true]:bg-muted/25",
                    disabled && "cursor-not-allowed opacity-75",
                    interactive && !disabled && "hover:bg-muted/25",
                    fileUploadSizeClasses[size].base,
                    colorClasses[color],
                    highlight && highlightClasses[color],
                    ui?.base,
                  )}
                >
                  {resolvedPosition === "inside" && fileList}
                  {(resolvedPosition !== "inside" || !preview || (multiple ? !(current as File[])?.length : !current)) && (
                    <div
                      data-slot="wrapper"
                      className={cn(
                        "flex flex-col items-center justify-center text-center",
                        resolvedVariant === "area" && "px-4 py-3",
                        ui?.wrapper,
                      )}
                    >
                      {renderSlot(leading, { ui: slotUi }, icon !== false && (
                        icon ? (
                          <span
                            data-slot="avatar"
                            className={cn(
                              "inline-flex shrink-0 items-center justify-center rounded-full bg-muted",
                              fileUploadSizeClasses[size].avatar,
                              ui?.avatar,
                            )}
                          >
                            <XIcon name={icon as XIconName} />
                          </span>
                        ) : (
                          <span
                            data-slot="avatar"
                            className={cn(
                              "inline-flex shrink-0 items-center justify-center rounded-full bg-muted",
                              fileUploadSizeClasses[size].avatar,
                              ui?.avatar,
                            )}
                          >
                            <Upload className={fileUploadSizeClasses[size].icon} />
                          </span>
                        )
                      ))}
                      {label && (
                        <div data-slot="label" className={cn("mt-2 font-medium text-foreground", ui?.label)}>
                          {label}
                        </div>
                      )}
                      {description && (
                        <div data-slot="description" className={cn("mt-1 text-muted-foreground", ui?.description)}>
                          {description}
                        </div>
                      )}
                      {actions && (
                        <div data-slot="actions" className={cn("mt-4 flex shrink-0 flex-wrap gap-1.5", ui?.actions)}>
                          {actions({ files: current, open, removeFile })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              {resolvedPosition === "outside" && fileList}
            </React.Fragment>
          ))}
          <input
            ref={inputRef}
            id={id}
            type="file"
            className="sr-only"
            name={name}
            accept={accept}
            multiple={multiple}
            required={required}
            disabled={disabled}
            onChange={(event) => onDrop(event.target.files)}
            {...rest}
          />
        </React.Fragment>
      ),
    },
  })

  return root
})
