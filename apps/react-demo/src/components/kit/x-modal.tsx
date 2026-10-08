import * as React from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { XButton } from "@/components/kit/x-button"
import { cn } from "@/lib/utils"

export interface XModalProps {
  /** 是否显示对话框 */
  open: boolean
  /** 标题 */
  title?: React.ReactNode
  /** 辅助说明 */
  description?: React.ReactNode
  /** 对话框宽度 */
  width?: number
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
  /** 是否垂直居中显示 */
  centered?: boolean
  /** 确定按钮加载态：锁定交互并阻止手动关闭 */
  loading?: boolean
  /** 确定按钮文字 */
  okText?: string
  /** 取消按钮文字 */
  cancelText?: string
  /** 正文内容 */
  children?: React.ReactNode
  /** 底部操作区 */
  footer?: React.ReactNode
  /** 点击确定按钮的回调 */
  onOk?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** 点击取消按钮的回调 */
  onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
}

export function XModal({
  open,
  title,
  description,
  width = 520,
  maskClosable = true,
  centered = false,
  loading = false,
  okText = "确 定",
  cancelText = "取 消",
  children,
  footer,
  onOk,
  onCancel,
  onOpenChange,
}: XModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        /* 锁定期间不允许通过遮罩、关闭按钮或 Esc 关闭 */
        if (loading) return
        if (!next && !maskClosable) return
        onOpenChange?.(next)
      }}
    >
      <DialogContent
        className={cn("gap-0 p-0", centered && "translate-y-0", !centered && "top-24")}
        style={{ width }}
      >
        <DialogHeader className="px-5 py-4">
          {title != null && <DialogTitle>{title}</DialogTitle>}
          {description != null && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="px-5 py-4 text-sm">{children}</div>
        <DialogFooter className="px-5 py-4">
          {footer ?? (
            <>
              <DialogClose
                render={
                  <XButton variant="outline" color="neutral" disabled={loading} onClick={onCancel}>
                    {cancelText}
                  </XButton>
                }
              />
              <DialogClose
                render={
                  <XButton variant="solid" color="primary" loading={loading} onClick={onOk}>
                    {okText}
                  </XButton>
                }
              />
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* ============================ vben 风格 hook ============================ */

import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XModalApi {
  /** 打开对话框 */
  open: () => void
  /** 关闭对话框 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、说明、宽度、加载态等） */
  setState: (patch: Partial<XModalProps>) => void
  /** 写入共享数据，供对话框内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
  /** 进入锁定（加载）状态：确定按钮 loading，阻止手动关闭 */
  lock: () => void
  /** 解除锁定 */
  unlock: () => void
}

/**
 * 创建与 api 绑定的对话框：调用即得 [Modal, modalApi]。
 * 组件引用稳定，状态通过 api 控制，props 用法仍然成立。
 */
export function useXModal({ defaultOpen = false, ...componentProps }: Partial<XModalProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      description: componentProps.description,
      width: componentProps.width,
      centered: componentProps.centered,
      loading: componentProps.loading,
    }),
  )[0]

  /** 与对话框共享的数据载荷 */
  const payload = React.useRef<Record<string, unknown>>({})

  const api = React.useMemo<XModalApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
      setState: (patch) => store.set(patch),
      setData: (data: object) => {
        payload.current = data as Record<string, unknown>
      },
      getData: <T extends object = Record<string, unknown>>() => payload.current as T,
      lock: () => store.set({ loading: true }),
      unlock: () => store.set({ loading: false }),
    }),
    [],
  )

  const Modal = React.useMemo(() => {
    return function BoundModal(props: Partial<XModalProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XModal
          {...componentProps}
          {...props}
          open={state.open}
          title={state.title ?? props.title}
          description={state.description ?? props.description}
          width={state.width ?? props.width}
          centered={state.centered ?? props.centered}
          loading={state.loading ?? props.loading}
          onOpenChange={(next) => {
            store.set({ open: next })
            props.onOpenChange?.(next)
          }}
        />
      )
    }
  }, [])

  return [Modal, api] as const
}
