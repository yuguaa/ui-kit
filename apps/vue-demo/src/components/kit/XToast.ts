/**
 * XToast 消息通知 API：操作后的轻量级全局消息通知。
 * 用法：应用根部挂载 XToaster 组件，任意位置调用 useToast().show / .dismiss。
 */
import { toast as sonnerToast } from 'vue-sonner'

export type ToastColor = 'primary' | 'success' | 'warning' | 'error'

export interface ToastOptions {
  /** 通知标题 */
  title?: string
  /** 说明文字 */
  description?: string
  /** 语义色 */
  color?: ToastColor
  /** 展示时长（ms） */
  duration?: number
}

const sonnerCall = {
  primary: (title: string, data: { description?: string; duration?: number }) => sonnerToast(title, data),
  success: sonnerToast.success,
  warning: sonnerToast.warning,
  error: sonnerToast.error,
}

/** 显示通知，返回 toast id */
function show(options: ToastOptions): string | number {
  const { title = '', description, color = 'primary', duration = 3000 } = options
  return sonnerCall[color](title, { description, duration })
}

/** 关闭通知 */
function dismiss(id?: string | number) {
  sonnerToast.dismiss(id)
}

/** 全局通知 API */
export function useToast() {
  return { show, dismiss }
}
