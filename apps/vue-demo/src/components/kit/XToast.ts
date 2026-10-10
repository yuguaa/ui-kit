/**
 * XToast 消息通知 API：操作后的轻量级全局消息通知。
 * 用法：应用根部挂载 XToaster 组件，任意位置调用 useToast().show / .dismiss。
 * 选项与 Nuxt UI Toast 对齐：icon / avatar / actions / close / closeIcon /
 * orientation / progress / ui，title / description / actions / close 支持
 * 传入组件自定义渲染（等价同名插槽）。
 */
import { toast as sonnerToast } from 'vue-sonner'
import XToastItem from './XToast.vue'
import type { ToastProps } from './XToast.vue'

export type { ToastUi } from './XToast.vue'

/** 语义色 */
export type ToastColor = 'primary' | 'success' | 'warning' | 'error'

/** 显示通知的选项（不含内部回调） */
export type XToastOptions = Omit<ToastProps, 'onCloseToast' | 'isPaused'> & {
  /** 通知 id，相同 id 的调用会复用同一条通知 */
  id?: string | number
}

/** 显示通知，返回 toast id */
function show(options: XToastOptions): string | number {
  const { id, duration = 3000, ...rest } = options
  return sonnerToast.custom(XToastItem, {
    componentProps: { ...rest, duration },
    duration,
    id,
  })
}

/** 关闭通知 */
function dismiss(id?: string | number) {
  sonnerToast.dismiss(id)
}

/** 全局通知 API */
export function useToast() {
  return { show, dismiss }
}
