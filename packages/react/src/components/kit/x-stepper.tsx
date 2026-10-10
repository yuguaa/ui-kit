/**
 * XStepper 步骤条：按 Nuxt UI stepper 结构二次封装。
 * items 字段(title / description / icon / content / slot / value)驱动，
 * 受控 value 与非受控 defaultValue 两种用法，next / prev 可通过 ref 调用。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { XIcon, type XIconName, type XIconSize } from "@/components/kit/x-icon"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export type XStepperColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XStepperSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XStepperOrientation = "horizontal" | "vertical"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XStepperUi {
  root?: string
  header?: string
  item?: string
  container?: string
  trigger?: string
  indicator?: string
  icon?: string
  separator?: string
  wrapper?: string
  title?: string
  description?: string
  content?: string
}

/** 步骤项字段映射，与 Nuxt UI StepperItem 保持一致 */
export interface XStepperItem {
  slot?: string
  value?: string | number
  title?: string
  description?: string
  icon?: XIconName
  content?: string
  disabled?: boolean
  className?: string
  ui?: Partial<Pick<XStepperUi, "item" | "container" | "trigger" | "indicator" | "icon" | "separator" | "wrapper" | "title" | "description">>
  [key: string]: any
}

export interface XStepperProps {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 步骤项数组 */
  items?: XStepperItem[]
  /** 步骤尺寸 */
  size?: XStepperSize
  /** 组件颜色 */
  color?: XStepperColor
  /** 步骤排列方向 */
  orientation?: XStepperOrientation
  /** 从步骤项取 value 的字段，支持点路径 */
  valueKey?: string
  /** 初始激活步骤的 value */
  defaultValue?: string | number
  /** 当前激活步骤的 value(受控) */
  value?: string | number
  /** 是否禁用全部步骤 */
  disabled?: boolean
  /** 是否必须按顺序完成 */
  linear?: boolean
  /** 激活步骤变化回调 */
  onValueChange?: (value: string | number) => void
  /** 进入下一步回调 */
  onNext?: (item: XStepperItem) => void
  /** 回到上一步回调 */
  onPrev?: (item: XStepperItem) => void
  /** 主题插槽类名 */
  ui?: XStepperUi
  className?: string
  /** 指示器渲染函数(等价于 indicator 插槽) */
  indicator?: (props: { item: XStepperItem; ui?: XStepperUi }) => React.ReactNode
  /** 标题与描述包装渲染函数(等价于 wrapper 插槽) */
  wrapper?: (item: XStepperItem) => React.ReactNode
  /** 标题渲染函数(等价于 title 插槽) */
  title?: (item: XStepperItem) => React.ReactNode
  /** 描述渲染函数(等价于 description 插槽) */
  description?: (item: XStepperItem) => React.ReactNode
  /** 步骤内容渲染函数(等价于 content 插槽) */
  content?: (item: XStepperItem) => React.ReactNode
}

/** ref 暴露的步骤控制接口 */
export interface XStepperApi {
  next: () => void
  prev: () => void
  hasNext: boolean
  hasPrev: boolean
}

/** 尺寸:触发器、图标、标题、描述与包装的类名 */
const stepperSizeClasses: Record<XStepperSize, { trigger: string; icon: XIconSize; title: string; description: string; wrapper: string }> = {
  xs: { trigger: "size-6 text-xs", icon: "xs", title: "text-xs", description: "text-xs", wrapper: "mt-1.5" },
  sm: { trigger: "size-8 text-sm", icon: "sm", title: "text-xs", description: "text-xs", wrapper: "mt-2" },
  md: { trigger: "size-10 text-base", icon: "md", title: "text-sm", description: "text-sm", wrapper: "mt-2.5" },
  lg: { trigger: "size-12 text-lg", icon: "lg", title: "text-base", description: "text-base", wrapper: "mt-3" },
  xl: { trigger: "size-14 text-xl", icon: "xl", title: "text-lg", description: "text-lg", wrapper: "mt-3.5" },
}

/** 语义色:完成 / 激活态的触发器背景与分隔线 */
const stepperColorClasses: Record<XStepperColor, { trigger: string; separator: string }> = {
  primary: {
    trigger: "group-data-[state=completed]:bg-primary-6 group-data-[state=active]:bg-primary-6 outline-primary-6/25",
    separator: "group-data-[state=completed]:bg-primary-6",
  },
  secondary: {
    trigger: "group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary outline-secondary/25",
    separator: "group-data-[state=completed]:bg-secondary",
  },
  neutral: {
    trigger: "group-data-[state=completed]:bg-foreground group-data-[state=active]:bg-foreground outline-foreground/25",
    separator: "group-data-[state=completed]:bg-foreground",
  },
  success: {
    trigger: "group-data-[state=completed]:bg-success-6 group-data-[state=active]:bg-success-6 outline-success-6/25",
    separator: "group-data-[state=completed]:bg-success-6",
  },
  info: {
    trigger: "group-data-[state=completed]:bg-info-6 group-data-[state=active]:bg-info-6 outline-info-6/25",
    separator: "group-data-[state=completed]:bg-info-6",
  },
  warning: {
    trigger: "group-data-[state=completed]:bg-warning-6 group-data-[state=active]:bg-warning-6 outline-warning-6/25",
    separator: "group-data-[state=completed]:bg-warning-6",
  },
  error: {
    trigger: "group-data-[state=completed]:bg-error-6 group-data-[state=active]:bg-error-6 outline-error-6/25",
    separator: "group-data-[state=completed]:bg-error-6",
  },
}

/** 方向:根、头部、条目与分隔线的布局 */
const stepperOrientationClasses: Record<XStepperOrientation, { root: string; header: string; item: string; container: string; separator: string; wrapper: string }> = {
  horizontal: {
    root: "flex-col",
    header: "",
    item: "",
    container: "flex justify-center",
    separator: "top-[calc(50%-2px)] h-0.5",
    wrapper: "mt-1",
  },
  vertical: {
    root: "",
    header: "flex-col gap-4",
    item: "flex text-start",
    container: "",
    separator: "start-[calc(50%-1px)] -bottom-[10px] w-0.5",
    wrapper: "",
  },
}

/** 方向 × 尺寸组合:分隔线定位与垂直布局的条目间距 */
const stepperCompoundClasses: Record<XStepperSize, Record<XStepperOrientation, { separator: string; item: string }>> = {
  xs: {
    horizontal: { separator: "start-[calc(50%+16px)] end-[calc(-50%+16px)]", item: "" },
    vertical: { separator: "top-[30px]", item: "gap-1.5" },
  },
  sm: {
    horizontal: { separator: "start-[calc(50%+20px)] end-[calc(-50%+20px)]", item: "" },
    vertical: { separator: "top-[38px]", item: "gap-2" },
  },
  md: {
    horizontal: { separator: "start-[calc(50%+28px)] end-[calc(-50%+28px)]", item: "" },
    vertical: { separator: "top-[46px]", item: "gap-2.5" },
  },
  lg: {
    horizontal: { separator: "start-[calc(50%+32px)] end-[calc(-50%+32px)]", item: "" },
    vertical: { separator: "top-[54px]", item: "gap-3" },
  },
  xl: {
    horizontal: { separator: "start-[calc(50%+36px)] end-[calc(-50%+36px)]", item: "" },
    vertical: { separator: "top-[62px]", item: "gap-3.5" },
  },
}

/** 取对象字段,支持点路径 */
function get(item: XStepperItem, key: string): string | number | undefined {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc == null || typeof acc !== "object") return undefined
    return (acc as Record<string, unknown>)[part]
  }, item) as string | number | undefined
}

export const XStepper = React.forwardRef<XStepperApi, XStepperProps>(function XStepper(
  {
    render,
    items = [],
    size = "md",
    color = "primary",
    orientation = "horizontal",
    valueKey = "value",
    defaultValue,
    value,
    disabled = false,
    linear = true,
    onValueChange,
    onNext,
    onPrev,
    ui,
    className,
    indicator,
    wrapper,
    title,
    description,
    content,
  },
  ref,
) {
  const [innerValue, setInnerValue] = React.useState<string | number | undefined>(defaultValue)
  const modelValue = value ?? innerValue

  /* 受控值优先:字符串按 valueKey 查找,数字按索引 */
  const currentIndex = typeof modelValue === "string"
    ? items.findIndex((item) => get(item, valueKey) === modelValue)
    : (modelValue ?? 0)
  const currentItem = items[currentIndex]

  function setIndex(next: number) {
    const item = items[next]
    const nextValue = item != null ? get(item, valueKey) ?? next : next
    if (value == null) setInnerValue(nextValue)
    onValueChange?.(nextValue)
  }

  /* 按顺序模式下只允许回到已完成的步骤或前进一步 */
  function onTriggerClick(index: number) {
    if (linear && index > currentIndex + 1) return
    setIndex(index)
  }

  React.useImperativeHandle(ref, () => ({
    next: () => {
      if (currentIndex >= items.length - 1) return
      const nextIndex = currentIndex + 1
      setIndex(nextIndex)
      onNext?.(items[nextIndex]!)
    },
    prev: () => {
      if (currentIndex <= 0) return
      const prevIndex = currentIndex - 1
      setIndex(prevIndex)
      onPrev?.(items[prevIndex]!)
    },
    get hasNext() {
      return currentIndex < items.length - 1
    },
    get hasPrev() {
      return currentIndex > 0
    },
  }))

  const sizeClasses = stepperSizeClasses[size]
  const colorClasses = stepperColorClasses[color]
  const orientationClasses = stepperOrientationClasses[orientation]
  const compoundClasses = stepperCompoundClasses[size][orientation]

  const root = useRender({
    defaultTagName: "div",
    props: {
      "data-slot": "root",
      className: cn("flex gap-4", orientationClasses.root, ui?.root, className),
      children: (
        <>
          <div data-slot="header" className={cn("flex", orientationClasses.header, ui?.header)}>
        {items.map((item, count) => {
          const state = count < currentIndex ? "completed" : count === currentIndex ? "active" : "inactive"
          return (
            <div
              key={count}
              data-state={state}
              data-disabled={item.disabled || disabled || undefined}
              data-slot="item"
              className={cn(
                "group relative w-full text-center",
                orientationClasses.item,
                compoundClasses.item,
                ui?.item,
                item.ui?.item,
                item.className,
              )}
            >
              <div data-slot="container" className={cn("relative", orientationClasses.container, ui?.container, item.ui?.container)}>
                <button
                  type="button"
                  data-slot="trigger"
                  disabled={item.disabled || disabled}
                  onClick={() => onTriggerClick(count)}
                  className={cn(
                    "flex items-center justify-center rounded-full bg-muted align-middle font-semibold text-muted-foreground",
                    "group-data-[state=completed]:text-white group-data-[state=active]:text-white",
                    "focus-visible:outline-3",
                    sizeClasses.trigger,
                    colorClasses.trigger,
                    ui?.trigger,
                    item.ui?.trigger,
                  )}
                >
                  <span data-slot="indicator" className={cn("flex size-full items-center justify-center", ui?.indicator, item.ui?.indicator)}>
                    {indicator != null ? (
                      indicator({ item, ui })
                    ) : item.icon != null ? (
                      <XIcon
                        name={item.icon}
                        size={sizeClasses.icon}
                        data-slot="icon"
                        className={cn("shrink-0", ui?.icon, item.ui?.icon)}
                      />
                    ) : (
                      count + 1
                    )}
                  </span>
                </button>

                {count < items.length - 1 && (
                  <span
                    aria-hidden="true"
                    data-slot="separator"
                    className={cn(
                      "absolute rounded-full bg-border group-data-[disabled]:opacity-75",
                      orientationClasses.separator,
                      compoundClasses.separator,
                      colorClasses.separator,
                      ui?.separator,
                      item.ui?.separator,
                    )}
                  />
                )}
              </div>

              <div
                data-slot="wrapper"
                className={cn(orientationClasses.wrapper, sizeClasses.wrapper, ui?.wrapper, item.ui?.wrapper)}
              >
                {wrapper != null ? (
                  wrapper(item)
                ) : (
                  <>
                    {(item.title != null || title != null) && (
                      <div data-slot="title" className={cn("font-medium text-foreground", sizeClasses.title, ui?.title, item.ui?.title)}>
                        {title != null ? title(item) : item.title}
                      </div>
                    )}
                    {(item.description != null || description != null) && (
                      <div data-slot="description" className={cn("text-wrap text-muted-foreground", sizeClasses.description, ui?.description, item.ui?.description)}>
                        {description != null ? description(item) : item.description}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {(currentItem?.content != null || content != null) && (
        <div data-slot="content" className={cn("size-full", ui?.content)}>
          {content != null ? content(currentItem ?? items[0]!) : currentItem?.content}
        </div>
      )}
        </>
      ),
    },
    render,
  })

  return root
})

/* ============================ vben 风格 hook ============================ */

export interface XStepperInstanceApi {
  /** 当前步骤索引 */
  current: number
  /** 下一步 */
  next: () => void
  /** 上一步 */
  prev: () => void
  /** 重置到第一步 */
  reset: () => void
  /** 跳转到指定步骤 */
  go: (index: number) => void
}

/** 创建与 api 绑定的步骤条：调用即得 [Stepper, stepperApi] */
export function useXStepper(
  options: Partial<XStepperProps> & { defaultValue?: number } = {},
) {
  const { defaultValue = 0, ...componentProps } = options
  const store = React.useState(() => createBoundStore({ current: defaultValue }))[0]

  const items = componentProps.items ?? []
  const itemsCount = items.length
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
      const boundItems = props.items ?? items
      return (
        <XStepper
          {...componentProps}
          {...props}
          value={state.current}
          onValueChange={(next) => {
            const index = typeof next === "number"
              ? next
              : boundItems.findIndex((item) => (item.value ?? undefined) === next)
            store.set({ current: index < 0 ? state.current : index })
          }}
        />
      )
    }
  }, [])

  return [Stepper, api] as const
}
