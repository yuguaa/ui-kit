import * as React from "react"
import { FileText, Trash, UploadCloud } from "lucide-react"
import { XProgress } from "@/components/kit/x-progress"
import { cn } from "@/lib/utils"

export interface XFileUploadFile {
  name: string
  size: number
  /** 上传状态 */
  status?: "uploading" | "done" | "error"
  /** 上传进度（0-100），status 为 uploading 时展示 */
  progress?: number
}

export interface XFileUploadProps {
  /** 接受的文件类型（如 image/*, .pdf） */
  accept?: string
  /** 是否多选 */
  multiple?: boolean
  /** 最大体积（MB） */
  maxSize?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 上传回调 */
  upload?: (files: XFileUploadFile[]) => void
  /** 文件项自定义渲染 */
  file?: (file: XFileUploadFile, index: number) => React.ReactNode
  /** 受控文件列表，未传入时组件内部维护 */
  files?: XFileUploadFile[]
  /** 文件列表变化回调 */
  onFilesChange?: (files: XFileUploadFile[]) => void
  /** 移除文件回调 */
  onRemove?: (file: XFileUploadFile, index: number) => void
  className?: string
}

export function XFileUpload({
  accept,
  multiple = false,
  maxSize,
  disabled = false,
  upload,
  file,
  files,
  onFilesChange,
  onRemove,
  className,
  children,
}: XFileUploadProps & { children?: React.ReactNode }) {
  const [innerFiles, setInnerFiles] = React.useState<XFileUploadFile[]>([])
  const [dragOver, setDragOver] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  /* 传入 files 时以 props 为准，否则使用内部状态 */
  const list = files ?? innerFiles

  const changeFiles = (next: XFileUploadFile[]) => {
    if (files === undefined) setInnerFiles(next)
    onFilesChange?.(next)
  }

  const handleFiles = (rawList: FileList | null) => {
    if (!rawList || disabled) return
    const next: XFileUploadFile[] = []
    for (const item of Array.from(rawList)) {
      if (maxSize != null && item.size > maxSize * 1024 * 1024) continue
      next.push({ name: item.name, size: item.size })
    }
    if (next.length === 0) return
    changeFiles(multiple ? [...list, ...next] : next)
    upload?.(next)
  }

  const removeFile = (item: XFileUploadFile, index: number) => {
    changeFiles(list.filter((_, i) => i !== index))
    onRemove?.(item, index)
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(event) => {
          event.preventDefault()
          setDragOver(false)
          handleFiles(event.dataTransfer.files)
        }}
        className={cn(
          "flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input px-4 py-6 text-sm text-muted-foreground transition-colors outline-none cursor-pointer",
          "hover:border-primary-5 hover:bg-primary-1/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          dragOver && "border-primary-5 bg-primary-1/40",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        <UploadCloud className="size-8" />
        {children ?? <span>拖拽文件到此处，或点击上传</span>}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="sr-only"
          onChange={(event) => {
            handleFiles(event.target.files)
            event.target.value = ""
          }}
        />
      </button>
      {list.length > 0 && (
        <ul className="flex flex-col gap-1">
          {list.map((item, index) =>
            file ? (
              <React.Fragment key={`${item.name}-${index}`}>{file(item, index)}</React.Fragment>
            ) : (
              <li
                key={`${item.name}-${index}`}
                className={cn(
                  "flex flex-col gap-1.5 rounded-md border px-3 py-1.5 text-sm",
                  item.status === "error" ? "border-error-3" : "border-border",
                )}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2">
                    <FileText
                      className={cn(
                        "size-4 shrink-0",
                        item.status === "error" ? "text-error-6" : "text-muted-foreground",
                      )}
                    />
                    <span className={cn("truncate", item.status === "error" && "text-error-6")}>
                      {item.name}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {(item.size / 1024).toFixed(1)} KB
                    </span>
                  </span>
                  <button
                    type="button"
                    aria-label="移除文件"
                    onClick={() => removeFile(item, index)}
                    className="shrink-0 rounded p-1 text-muted-foreground outline-none hover:bg-muted hover:text-foreground"
                  >
                    <Trash className="size-3.5" />
                  </button>
                </span>
                {item.status === "uploading" && (
                  <XProgress percent={item.progress} status="active" className="[&>span]:text-xs" />
                )}
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  )
}
