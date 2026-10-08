/**
 * XSlideover 侧滑：从侧边滑入的浮层，常用于移动端导航。
 */
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
  /** 加载态：锁定交互并阻止手动关闭 */
  loading?: boolean
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
  loading = false,
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
        /* 锁定期间不允许关闭 */
        if (loading) return
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
              <XButton variant="ghost" color="neutral" size="sm" aria-label="关闭" disabled={loading}>
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
  /** 更新内部状态（标题、方向、加载态等） */
  setState: (patch: Partial<XSlideoverProps>) => void
  /** 写入共享数据，供面板内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
  /** 进入锁定（加载）状态：阻止手动关闭 */
  lock: () => void
  /** 解除锁定 */
  unlock: () => void
}

/** 创建与 api 绑定的侧滑面板：调用即得 [Slideover, slideoverApi] */
export function useXSlideover({ defaultOpen = false, ...componentProps }: Partial<XSlideoverProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      side: componentProps.side,
      loading: componentProps.loading,
    }),
  )[0]

  /** 与面板共享的数据载荷 */
  const payload = React.useRef<Record<string, unknown>>({})

  const api = React.useMemo<XSlideoverApi>(
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

  const Slideover = React.useMemo(() => {
    return function BoundSlideover(props: Partial<XSlideoverProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XSlideover
          {...componentProps}
          {...props}
          open={state.open}
          title={state.title ?? props.title}
          side={state.side ?? props.side}
          loading={state.loading ?? props.loading}
          onOpenChange={(next) => {
            store.set({ open: next })
            props.onOpenChange?.(next)
          }}
        />
      )
    }
  }, [])

  return [Slideover, api] as const
}
