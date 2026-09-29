/**
 * XStepper 步骤条：引导用户按步骤完成流程。
 * 受控（current 由外部维护）与非受控（next / prev / reset）两种用法。
 */
import * as React from "react"
import { Check } from "lucide-react"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XStepItem {
  /** 步骤标题 */
  title: React.ReactNode
  /** 步骤描述 */
  description?: React.ReactNode
}

export interface XStepperProps {
  /** 步骤项数组 */
  items?: XStepItem[]
  /** 当前步骤 */
  current?: number
  /** 初始步骤 */
  defaultCurrent?: number
  /** 方向 */
  orientation?: "horizontal" | "vertical"
  /** 是否禁用 */
  disabled?: boolean
  /** 步骤变化回调 */
  onChange?: (current: number) => void
  className?: string
}

export interface XStepperApi {
  next: () => void
  prev: () => void
  reset: () => void
}

export const XStepper = React.forwardRef<XStepperApi, XStepperProps>(function XStepper(
  { items = [], current: currentProp, defaultCurrent = 0, orientation = "horizontal", disabled = false, onChange, className },
  ref,
) {
  const [innerCurrent, setInnerCurrent] = React.useState(defaultCurrent)
  const current = currentProp ?? innerCurrent

  const go = (next: number) => {
    if (next < 0 || next >= items.length || disabled) return
    if (currentProp == null) setInnerCurrent(next)
    if (next !== current) onChange?.(next)
  }

  React.useImperativeHandle(ref, () => ({
    next: () => go(current + 1),
    prev: () => go(current - 1),
    reset: () => go(0),
  }))

  return (
    <ol
      className={cn(
        orientation === "horizontal" ? "flex items-start" : "flex flex-col",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {items.map((item, index) => {
        const state = index < current ? "done" : index === current ? "active" : "pending"
        return (
          <li key={index} className={cn("relative flex gap-3", orientation === "horizontal" ? "flex-1" : "pb-6 last:pb-0")}>
            <span className="flex flex-col items-center">
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors",
                  state === "done" && "border-primary-6 bg-primary-6 text-white",
                  state === "active" && "border-primary-6 bg-primary-1 text-primary-7",
                  state === "pending" && "border-border bg-muted text-muted-foreground",
                )}
              >
                {state === "done" ? <Check className="size-3.5" /> : index + 1}
              </span>
              {index < items.length - 1 && (
                <span
                  className={cn(
                    orientation === "horizontal" ? "absolute top-3.5 left-7 h-px w-[calc(100%-3.5rem)]" : "absolute top-7 left-3.5 h-[calc(100%-3.5rem)] w-px",
                    index < current ? "bg-primary-6" : "bg-border",
                  )}
                />
              )}
            </span>
            <span className="flex flex-col gap-0.5">
              <span className={cn("text-sm font-medium", state === "pending" && "text-muted-foreground")}>
                {item.title}
              </span>
              {item.description != null && (
                <span className="text-xs text-muted-foreground">{item.description}</span>
              )}
            </span>
          </li>
        )
      })}
    </ol>
  )
})

/* ============================ vben 风格 hook ============================ */

export interface XStepperInstanceApi {
  /** 当前步骤 */
  current: number
  /** 下一步 */
  next: () => void
  /** 上一步 */
  prev: () => void
  /** 重置 */
  reset: () => void
  /** 跳转到指定步骤 */
  go: (index: number) => void
}

/** 创建与 api 绑定的步骤条：调用即得 [Stepper, stepperApi] */
export function useXStepper(
  options: Partial<XStepperProps> & { defaultCurrent?: number } = {},
) {
  const { defaultCurrent = 0, ...componentProps } = options
  const store = React.useState(() => createBoundStore({ current: defaultCurrent }))[0]

  const itemsCount = componentProps.items?.length ?? 0
  const go = (index: number) => {
    if (index < 0 || index >= itemsCount) return
    store.set({ current: index })
  }

  const api = React.useMemo<XStepperInstanceApi>(
    () => ({
      get current() {
        return store.get().current
      },
      next: () => go(store.get().current + 1),
      prev: () => go(store.get().current - 1),
      reset: () => go(0),
      go,
    }),
    [],
  )

  const Stepper = React.useMemo(() => {
    return function BoundStepper(props: Partial<XStepperProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XStepper
          {...componentProps}
          {...props}
          current={state.current}
          onChange={(next) => store.set({ current: next })}
        />
      )
    }
  }, [])

  return [Stepper, api] as const
}
