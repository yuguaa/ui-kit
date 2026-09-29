/**
 * XToast 消息通知：操作后的轻量级全局消息通知。
 * XToaster 挂载到应用根部，toast.show / toast.dismiss 在任意位置调用。
 */
import { toast as sonnerToast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

export type XToastColor = "primary" | "success" | "warning" | "error"

export interface XToastOptions {
  /** 通知标题 */
  title?: string
  /** 说明文字 */
  description?: string
  /** 语义色 */
  color?: XToastColor
  /** 展示时长（ms） */
  duration?: number
}

const sonnerTypeMap: Record<XToastColor, "default" | "success" | "warning" | "error"> = {
  primary: "default",
  success: "success",
  warning: "warning",
  error: "error",
}

const sonnerCall = {
  default: sonnerToast,
  success: sonnerToast.success,
  warning: sonnerToast.warning,
  error: sonnerToast.error,
}

/** 挂载通知容器（放在应用根部） */
export function XToaster() {
  return <Toaster position="top-right" />
}

/** 全局通知 API */
export const toast = {
  /** 显示通知，返回 toast id */
  show(options: XToastOptions): string | number {
    const { title, description, color = "primary", duration = 3000 } = options
    const type = sonnerTypeMap[color]
    return sonnerCall[type](title, {
      description,
      duration,
    })
  },
  /** 关闭通知 */
  dismiss(id?: string | number) {
    sonnerToast.dismiss(id)
  },
}
