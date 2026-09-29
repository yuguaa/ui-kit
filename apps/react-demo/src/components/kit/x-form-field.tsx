import * as React from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useXFormContext } from "@/components/kit/x-form"

export interface XFormFieldProps {
  /** 字段名（关联表单校验结果） */
  name?: string
  /** 标签文字 */
  label?: React.ReactNode
  /** 辅助说明 */
  description?: React.ReactNode
  /** 错误信息 */
  error?: React.ReactNode
  /** 是否必填 */
  required?: boolean
  /** 控件 id（label 关联用） */
  id?: string
  className?: string
  children?: React.ReactNode
}

export function XFormField({
  name,
  label,
  description,
  error,
  required = false,
  id,
  className,
  children,
}: XFormFieldProps) {
  const form = useXFormContext()
  const fieldError = (name != null ? form.errors[name] : undefined) ?? error

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label != null && (
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
          {required && <span className="ml-0.5 text-error-6">*</span>}
        </Label>
      )}
      {children}
      {fieldError != null ? (
        <p role="alert" className="text-sm text-error-6">
          {fieldError}
        </p>
      ) : description != null ? (
        <p className="text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
