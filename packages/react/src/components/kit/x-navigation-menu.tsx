/**
 * XNavigationMenu 导航菜单：为页面提供功能导航。
 * 支持垂直、水平与内嵌模式，子菜单使用 DropdownMenu 展开。
 */
import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export interface XNavigationMenuItem {
  /** 菜单项 key */
  key: string
  /** 菜单项标题 */
  label: React.ReactNode
  /** 图标 */
  icon?: React.ReactNode
  /** 子菜单项 */
  children?: XNavigationMenuItem[]
  /** 是否禁用 */
  disabled?: boolean
}

export interface XNavigationMenuProps {
  /** 菜单项数组 */
  items: XNavigationMenuItem[]
  /** 当前选中的 key */
  selectedKeys?: string[]
  /** 菜单模式 */
  mode?: "vertical" | "horizontal" | "inline"
  /** 菜单主题 */
  theme?: "light" | "dark"
  /** 点击菜单项的回调 */
  onClick?: (item: XNavigationMenuItem) => void
  /** 选中菜单项的回调 */
  onSelect?: (item: XNavigationMenuItem) => void
  className?: string
}

export function XNavigationMenu({
  items,
  selectedKeys = [],
  mode = "vertical",
  theme = "light",
  onClick,
  onSelect,
  className,
}: XNavigationMenuProps) {
  const [openKey, setOpenKey] = React.useState<string | null>(null)
  const isInline = mode === "inline"

  const renderLeaf = (item: XNavigationMenuItem, depth: number) => (
    <button
      key={item.key}
      type="button"
      disabled={item.disabled}
      onClick={() => {
        onClick?.(item)
        onSelect?.(item)
      }}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm outline-none transition-colors",
        "hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-50",
        depth > 0 && "pl-8",
        selectedKeys.includes(item.key) &&
          (theme === "light" ? "bg-primary-1 text-primary-7" : "bg-white/10 text-white"),
      )}
    >
      {item.icon}
      <span className="flex-1 truncate">{item.label}</span>
    </button>
  )

  const renderItem = (item: XNavigationMenuItem, depth: number) => {
    if (!item.children?.length) return renderLeaf(item, depth)
    if (isInline) {
      return (
        <div key={item.key} className="flex flex-col gap-0.5">
          <button
            type="button"
            onClick={() => setOpenKey(openKey === item.key ? null : item.key)}
            className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm outline-none hover:bg-muted"
          >
            {item.icon}
            <span className="flex-1 truncate">{item.label}</span>
            <ChevronDown className={cn("size-4 transition-transform", openKey === item.key && "rotate-180")} />
          </button>
          {openKey === item.key && (
            <div className="flex flex-col gap-0.5">{item.children.map((child) => renderItem(child, depth + 1))}</div>
          )}
        </div>
      )
    }
    return (
      <DropdownMenu key={item.key} onOpenChange={(open) => setOpenKey(open ? item.key : null)}>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm outline-none",
                "hover:bg-muted focus-visible:bg-muted",
                selectedKeys.includes(item.key) &&
                  (theme === "light" ? "bg-primary-1 text-primary-7" : "bg-white/10 text-white"),
              )}
            >
              {item.icon}
              <span className="flex-1 truncate">{item.label}</span>
              <ChevronDown className={cn("size-4 transition-transform", openKey === item.key && "rotate-180")} />
            </button>
          }
        />
        <DropdownMenuContent align="start">
          {item.children.map((child) => (
            <DropdownMenuItem
              key={child.key}
              disabled={child.disabled}
              onSelect={() => {
                onClick?.(child)
                onSelect?.(child)
              }}
              className={cn(selectedKeys.includes(child.key) && "bg-primary-1 text-primary-7")}
            >
              {child.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <nav
      className={cn(
        "flex gap-1",
        mode === "vertical" ? "w-52 flex-col" : mode === "inline" ? "w-52 flex-col" : "flex-row items-center",
        theme === "dark" && "bg-neutral-9 p-2 text-white",
        className,
      )}
    >
      {items.map((item) => renderItem(item, 0))}
    </nav>
  )
}
