import * as React from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { XButton } from "@/components/kit/x-button"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XSlideoverProps {
  /** 是否打开 */
  open: boolean
  /** 滑出方向 */
  side?: "left" | "right"
  /** 点击遮罩关闭 */
  dismissible?: boolean
  /** 标题 */
  title?: React.ReactNode
  /** 内容 */
  children?: React.ReactNode
  /** 头部 */
  header?: React.ReactNode
  /** 底部 */
  footer?: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
}

export function XSlideover({
  open,
  side = "right",
  dismissible = true,
  title,
  children,
  header,
  footer,
  onOpenChange,
}: XSlideoverProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        if (!next && !dismissible) return
        onOpenChange?.(next)
      }}
    >
      <SheetContent side={side} className="w-72 p-0 sm:max-w-72">
        <SheetHeader className="flex items-center justify-between border-b border-border px-4 py-3">
          {header ?? (
            <>
              <SheetTitle>{title}</SheetTitle>
              <SheetDescription className="sr-only">{title}</SheetDescription>
            </>
          )}
          <SheetClose
            render={
              <XButton variant="ghost" color="neutral" size="sm" aria-label="关闭">
                ✕
              </XButton>
            }
          />
        </SheetHeader>
        <div className="flex-1 overflow-auto px-4 py-3 text-sm">{children}</div>
        {footer != null && <SheetFooter className="border-t border-border px-4 py-3">{footer}</SheetFooter>}
      </SheetContent>
    </Sheet>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XSlideoverApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题等） */
  setState: (patch: Pick<Partial<XSlideoverProps>, "title">) => void
}

/** 创建与 api 绑定的侧滑面板：调用即得 [Slideover, slideoverApi] */
export function useXSlideover({ defaultOpen = false, ...componentProps }: Partial<XSlideoverProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen, title: componentProps.title }))[0]

  const api = React.useMemo<XSlideoverApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
      setState: (patch) => store.set(patch),
    }),
    [],
  )

  const Slideover = React.useMemo(() => {
    return function BoundSlideover(props: Partial<XSlideoverProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XSlideover
          {...componentProps}
          {...props}
          open={state.open}
          title={state.title}
          onOpenChange={(next) => store.set({ open: next })}
        />
      )
    }
  }, [])

  return [Slideover, api] as const
}
