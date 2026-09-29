/**
 * XContextMenu 右键菜单：在指定区域右键唤出的上下文菜单。
 */
import * as React from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XContextMenuItem {
  /** 菜单项 key */
  key: string
  /** 菜单项标题 */
  label: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 是否分隔线 */
  separator?: boolean
  /** 图标 */
  icon?: React.ReactNode
  /** 选中回调 */
  onSelect?: (item: XContextMenuItem) => void
}

export interface XContextMenuProps {
  /** 菜单项数组 */
  items?: XContextMenuItem[]
  /** 是否打开 */
  open?: boolean
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 触发区域内容 */
  children?: React.ReactNode
  className?: string
}

export function XContextMenu({ items = [], open: openProp, onOpenChange, children, className }: XContextMenuProps) {
  const [innerOpen, setInnerOpen] = React.useState(false)
  const open = openProp ?? innerOpen

  return (
    <ContextMenu
      open={open}
      onOpenChange={(next) => {
        if (openProp == null) setInnerOpen(next)
        onOpenChange?.(next)
      }}
    >
      <ContextMenuTrigger
        render={<span className={cn("block", className)}>{children}</span>}
      />
      <ContextMenuContent className="w-44 p-1">
        {items.map((item) =>
          item.separator ? (
            <ContextMenuSeparator key={item.key} />
          ) : (
            <ContextMenuItem
              key={item.key}
              disabled={item.disabled}
              onSelect={() => item.onSelect?.(item)}
              className="gap-2"
            >
              {item.icon}
              {item.label}
            </ContextMenuItem>
          ),
        )}
      </ContextMenuContent>
    </ContextMenu>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XContextMenuApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

/** 创建与 api 绑定的右键菜单：调用即得 [ContextMenu, contextMenuApi] */
export function useXContextMenu({ defaultOpen = false, ...componentProps }: Partial<XContextMenuProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XContextMenuApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
    }),
    [],
  )

  const ContextMenu = React.useMemo(() => {
    return function BoundContextMenu(props: Partial<XContextMenuProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XContextMenu
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next) => store.set({ open: next })}
        >
          {props.children ?? (componentProps.children as React.ReactNode)}
        </XContextMenu>
      )
    }
  }, [])

  return [ContextMenu, api] as const
}
