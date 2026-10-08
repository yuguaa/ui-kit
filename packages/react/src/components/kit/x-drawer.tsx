/**
 * XDrawer 抽屉：从屏幕边缘滑出的面板，承载额外内容或操作。
 */
import * as React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { XButton } from "@/components/kit/x-button"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XDrawerProps {
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
  /** 底部操作区 */
  footer?: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
}

export function XDrawer({
  open,
  side = "right",
  dismissible = true,
  loading = false,
  title,
  children,
  header,
  footer,
  onOpenChange,
}: XDrawerProps) {
  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        /* 锁定期间不允许关闭 */
        if (loading) return
        onOpenChange?.(next)
      }}
      swipeDirection={side}
      disablePointerDismissal={!dismissible || loading}
    >
      <DrawerContent className="h-full w-80 rounded-none">
        <DrawerHeader className="flex items-center justify-between border-b border-border px-4 py-3">
          {header ?? <DrawerTitle>{title}</DrawerTitle>}
          <DrawerClose
            render={
              <XButton variant="ghost" color="neutral" size="sm" aria-label="关闭" disabled={loading}>
                ✕
              </XButton>
            }
          />
        </DrawerHeader>
        <div className="flex-1 overflow-auto px-4 py-3 text-sm">{children}</div>
        {footer != null && <DrawerFooter className="border-t border-border px-4 py-3">{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XDrawerApi {
  /** 打开抽屉 */
  open: () => void
  /** 关闭抽屉 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、方向、加载态等） */
  setState: (patch: Partial<XDrawerProps>) => void
  /** 写入共享数据，供抽屉内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
  /** 进入锁定（加载）状态：阻止手动关闭 */
  lock: () => void
  /** 解除锁定 */
  unlock: () => void
}

/** 创建与 api 绑定的抽屉：调用即得 [Drawer, drawerApi] */
export function useXDrawer({ defaultOpen = false, ...componentProps }: Partial<XDrawerProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      side: componentProps.side,
      loading: componentProps.loading,
    }),
  )[0]

  /** 与抽屉共享的数据载荷 */
  const payload = React.useRef<Record<string, unknown>>({})

  const api = React.useMemo<XDrawerApi>(
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

  const Drawer = React.useMemo(() => {
    return function BoundDrawer(props: Partial<XDrawerProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XDrawer
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

  return [Drawer, api] as const
}
