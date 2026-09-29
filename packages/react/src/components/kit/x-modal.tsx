/**
 * XModal 对话框：模态对话框，用于承载需要用户确认的信息或操作。
 * 底部操作区默认提供取消与确定按钮，可通过 footer 插槽自定义。
 * 动效（Nuxt UI 模式）：遮罩淡入淡出，内容缩放进出场（dialog 原子 CSS 动画）。
 */
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
                  <XButton variant="outline" color="neutral" onClick={onCancel}>
                    {cancelText}
                  </XButton>
                }
              />
              <DialogClose
                render={
                  <XButton variant="solid" color="primary" onClick={onOk}>
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
  /** 更新内部状态（标题、说明等） */
  setState: (patch: Pick<Partial<XModalProps>, "title" | "description">) => void
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
    }),
  )[0]

  const api = React.useMemo<XModalApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
      setState: (patch) => store.set(patch),
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
          title={state.title}
          description={state.description}
          onOpenChange={(next) => store.set({ open: next })}
        />
      )
    }
  }, [])

  return [Modal, api] as const
}
