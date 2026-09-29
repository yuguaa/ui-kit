/**
 * XCommandPalette 命令面板：全局命令搜索与快捷操作面板。
 * 基于 shadcn command（cmdk）+ dialog，快捷键以 Kbd 形式展示。
 */
import * as React from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { XKbd } from "@/components/kit/x-kbd"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XCommandItem {
  /** 命令标题 */
  label: string
  /** 快捷键文案（如 ⌘ N） */
  shortcut?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 执行回调 */
  onSelect?: () => void
}

export interface XCommandGroup {
  /** 分组标题 */
  label: string
  /** 命令数组 */
  commands: XCommandItem[]
}

export interface XCommandPaletteProps {
  /** 是否打开 */
  open?: boolean
  /** 命令分组数组 */
  groups?: XCommandGroup[]
  /** 是否可搜索 */
  searchable?: boolean
  /** 选择后关闭 */
  closeOnSelect?: boolean
  /** 空状态内容 */
  empty?: React.ReactNode
  /** 底部内容 */
  footer?: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  className?: string
}

export interface XCommandPaletteApi {
  open: () => void
  close: () => void
  toggle: () => void
}

/** 创建与 api 绑定的命令面板：调用即得 [CommandPalette, commandPaletteApi] */
export function useXCommandPalette({ defaultOpen = false, ...componentProps }: Partial<XCommandPaletteProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XCommandPaletteApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
    }),
    [],
  )

  const CommandPalette = React.useMemo(() => {
    return function BoundCommandPalette(props: Partial<XCommandPaletteProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XCommandPalette
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next) => store.set({ open: next })}
        />
      )
    }
  }, [])

  return [CommandPalette, api] as const
}

export const XCommandPalette = React.forwardRef<XCommandPaletteApi, XCommandPaletteProps>(
  function XCommandPalette(
    { open: openProp, groups = [], searchable = true, closeOnSelect = true, empty, footer, onOpenChange, className },
    ref,
  ) {
    const [innerOpen, setInnerOpen] = React.useState(false)
    const open = openProp ?? innerOpen

    const setOpen = (next: boolean) => {
      if (openProp == null) setInnerOpen(next)
      onOpenChange?.(next)
    }

    React.useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen(!open),
    }))

    return (
      <CommandDialog open={open} onOpenChange={setOpen} className={className}>
        <Command>
          {searchable ? (
            <CommandInput placeholder="搜索命令…" />
          ) : (
            <div className="sr-only">
              <CommandInput />
            </div>
          )}
          <CommandList>
            <CommandEmpty>{empty ?? "无匹配命令"}</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.commands.map((command) => (
                  <CommandItem
                    key={command.label}
                    disabled={command.disabled}
                    onSelect={() => {
                      command.onSelect?.()
                      if (closeOnSelect) setOpen(false)
                    }}
                  >
                    <span className="flex-1">{command.label}</span>
                    {command.shortcut != null && <XKbd size="sm" value={command.shortcut} />}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          {footer != null && <div className="border-t border-border p-2">{footer}</div>}
        </Command>
      </CommandDialog>
    )
  },
)
