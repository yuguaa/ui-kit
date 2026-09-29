/**
 * XDropdownMenu 下拉菜单：点击按钮展开的操作菜单。
 */
import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { XButton } from "@/components/kit/x-button"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XDropdownMenuItem {
  /** 菜单项 key */
  key: string
  /** 菜单项标题 */
  label?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 是否分隔线 */
  separator?: boolean
  /** 图标 */
  icon?: React.ReactNode
  /** 选中回调 */
  onSelect?: (item: XDropdownMenuItem) => void
}

export interface XDropdownMenuProps {
  /** 菜单项数组 */
  items?: XDropdownMenuItem[]
  /** 是否打开 */
  open?: boolean
  /** 选择后关闭 */
  closeOnSelect?: boolean
  /** 触发按钮文字 */
  triggerLabel?: React.ReactNode
  /** 触发按钮 */
  trigger?: React.ReactElement
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  className?: string
}

export function XDropdownMenu({
  items = [],
  open: openProp,
  closeOnSelect = true,
  triggerLabel = "操作",
  trigger,
  onOpenChange,
  className,
}: XDropdownMenuProps) {
  const [innerOpen, setInnerOpen] = React.useState(false)
  const open = openProp ?? innerOpen

  return (
    <DropdownMenu
      open={open}
      onOpenChange={(next) => {
        if (openProp == null) setInnerOpen(next)
        onOpenChange?.(next)
      }}
    >
      <DropdownMenuTrigger
        render={
          trigger ?? (
            <XButton variant="outline" color="neutral">
              {triggerLabel}
              <ChevronDown className="size-4" />
            </XButton>
          )
        }
      />
      <DropdownMenuContent align="start" className={cn("w-44 p-1", className)}>
        {items.map((item) =>
          item.separator ? (
            <DropdownMenuSeparator key={item.key} />
          ) : (
            <DropdownMenuItem
              key={item.key}
              disabled={item.disabled}
              className="gap-2"
              onSelect={(event) => {
                if (!closeOnSelect) event.preventDefault()
                item.onSelect?.(item)
              }}
            >
              {item.icon}
              {item.label}
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XDropdownMenuApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

/** 创建与 api 绑定的下拉菜单：调用即得 [DropdownMenu, dropdownMenuApi] */
export function useXDropdownMenu({ defaultOpen = false, ...componentProps }: Partial<XDropdownMenuProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XDropdownMenuApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
    }),
    [],
  )

  const DropdownMenu = React.useMemo(() => {
    return function BoundDropdownMenu(props: Partial<XDropdownMenuProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XDropdownMenu
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next) => store.set({ open: next })}
        />
      )
    }
  }, [])

  return [DropdownMenu, api] as const
}
