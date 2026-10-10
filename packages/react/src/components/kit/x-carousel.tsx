/**
 * XCarousel 轮播：多张内容轮播展示。
 * 基于 embla，结构对齐 Nuxt UI：root → viewport → container → item，附带 controls（arrows / dots）。
 * 支持自动播放、循环、前后控制、指示点、纵向轮播、fade、autoHeight、autoScroll、classNames 与 wheelGestures。
 */
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { XButton, type XButtonProps } from "@/components/kit/x-button"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { createAutoScrollPlugin, type XCarouselAutoScrollOptions } from "./auto-scroll-plugin"
import { createClassNamesPlugin, type XCarouselClassNamesOptions } from "./class-names-plugin"
import { cn } from "@/lib/utils"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XCarouselUi {
  root?: string
  viewport?: string
  container?: string
  item?: string
  controls?: string
  arrows?: string
  prev?: string
  next?: string
  dots?: string
  dot?: string
}

/** 轮播项：content 为该项内容，children 函数优先 */
export interface XCarouselItem {
  /** 轮播项 key */
  key?: string
  /** 轮播项内容 */
  content?: React.ReactNode
  className?: string
  ui?: { item?: string }
  [key: string]: any
}

/** 图标：XIcon 图标名或自定义组件 */
export type XCarouselIcon = XIconName | React.ComponentType<{ className?: string }>

/** 上一页 / 下一页按钮配置（XButton 属性） */
export type XCarouselButtonConfig = Partial<XButtonProps>

export interface XCarouselProps {
  /** 轮播项数组 */
  items?: XCarouselItem[]
  /** 自动播放 */
  autoplay?: boolean
  /** 自动播放间隔（ms） */
  interval?: number
  /** 循环播放 */
  loop?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示左右切换按钮 */
  arrows?: boolean
  /** 是否显示指示点 */
  dots?: boolean
  /** 轮播方向 */
  orientation?: "horizontal" | "vertical"
  /** 淡入淡出切换：每次只显示当前项 */
  fade?: boolean
  /** 容器高度跟随当前项 */
  autoHeight?: boolean
  /** 连续滚动 */
  autoScroll?: boolean | XCarouselAutoScrollOptions
  /** 类名钩子：loop / draggable / dragging / snapped / inView */
  classNames?: boolean | XCarouselClassNamesOptions
  /** 滚轮手势切换 */
  wheelGestures?: boolean | { forceWheelAxis?: "x" | "y" }
  /** 上一页按钮配置（XButton 属性） */
  prev?: XCarouselButtonConfig
  /** 上一页按钮图标（XIcon 图标名或组件） */
  prevIcon?: XCarouselIcon
  /** 下一页按钮配置（XButton 属性） */
  next?: XCarouselButtonConfig
  /** 下一页按钮图标（XIcon 图标名或组件） */
  nextIcon?: XCarouselIcon
  /** 渲染为指定元素 */
  render?: React.ReactElement<Record<string, unknown>>
  /** 主题插槽类名 */
  ui?: XCarouselUi
  /** 轮播项内容（default 插槽）：函数形式拿到 { item, index } */
  children?: React.ReactNode | ((props: { item: XCarouselItem; index: number }) => React.ReactNode)
  /** 选中项变化回调 */
  onSelect?: (index: number) => void
  className?: string
}

export interface XCarouselApi {
  next: () => void
  prev: () => void
}

/** 渲染图标：字符串走 XIcon，否则渲染组件 */
function renderIcon(icon: XCarouselIcon, className: string): React.ReactNode {
  if (typeof icon === "string") return <XIcon name={icon} className={className} />
  const Comp = icon
  return <Comp className={className} />
}

export const XCarousel = React.forwardRef<XCarouselApi, XCarouselProps>(function XCarousel(
  {
    items = [],
    autoplay = false,
    interval = 3000,
    loop = true,
    disabled = false,
    arrows = true,
    dots = false,
    orientation = "horizontal",
    fade = false,
    autoHeight = false,
    autoScroll = false,
    classNames = false,
    wheelGestures = false,
    prev,
    prevIcon,
    next,
    nextIcon,
    render,
    ui,
    children,
    onSelect,
    className,
  },
  ref,
) {
  const options = React.useMemo(
    () => ({
      ...(fade ? { align: "center" as const, containScroll: false as const } : { align: "start" as const }),
      loop,
      axis: orientation === "horizontal" ? ("x" as const) : ("y" as const),
    }),
    [fade, loop, orientation],
  )

  const plugins = React.useMemo(() => {
    const list: any[] = []
    if (autoplay) {
      list.push(Autoplay({ delay: interval, stopOnInteraction: true }))
    }
    if (autoScroll) {
      list.push(createAutoScrollPlugin(typeof autoScroll === "boolean" ? {} : autoScroll))
    }
    if (classNames) {
      list.push(createClassNamesPlugin(typeof classNames === "boolean" ? {} : classNames))
    }
    return list
  }, [autoplay, interval, autoScroll, classNames])

  const [emblaRef, api] = useEmblaCarousel(options, plugins)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const viewportElRef = React.useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])
  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  React.useImperativeHandle(ref, () => ({ next: scrollNext, prev: scrollPrev }), [scrollNext, scrollPrev])

  /* 选中状态同步与 autoHeight：容器高度跟随当前项 */
  const syncAutoHeight = React.useCallback(() => {
    if (!containerRef.current) return
    if (!autoHeight) {
      containerRef.current.style.height = ""
      return
    }
    if (!api) return
    const slide = api.slideNodes()[api.selectedScrollSnap()]
    if (slide) containerRef.current.style.height = `${slide.offsetHeight}px`
  }, [api, autoHeight])

  React.useEffect(() => {
    if (!api) return
    const handleSelect = () => {
      const index = api.selectedScrollSnap() || 0
      setCanScrollNext(api.canScrollNext() || false)
      setCanScrollPrev(api.canScrollPrev() || false)
      setSelectedIndex(index)
      syncAutoHeight()
      onSelect?.(index)
    }
    const onInit = () => {
      setScrollSnaps(api.scrollSnapList() || [])
      handleSelect()
    }
    api.on("init", onInit)
    api.on("reInit", onInit)
    api.on("select", handleSelect)
    /* embla 创建时同步发出的 init 事件无法在 useEffect 注册前收到，主动同步一次状态 */
    onInit()
    return () => {
      api.off("init", onInit)
      api.off("reInit", onInit)
      api.off("select", handleSelect)
    }
  }, [api, syncAutoHeight, onSelect])

  /* wheelGestures：原生监听以支持 preventDefault，250ms 节流对齐 embla wheel-gestures 插件 */
  React.useEffect(() => {
    const viewport = viewportElRef.current
    if (!wheelGestures || !viewport || !api) return
    let lastWheelTime = 0
    const forceWheelAxis = typeof wheelGestures === "object" ? wheelGestures.forceWheelAxis : undefined
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const now = performance.now()
      if (now - lastWheelTime < 250) return
      lastWheelTime = now
      let delta: number
      if (forceWheelAxis === "x") delta = event.deltaX
      else if (forceWheelAxis === "y") delta = event.deltaY
      else if (orientation === "horizontal") delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX
      else delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      if (delta === 0) return
      if (delta > 0) scrollNext()
      else scrollPrev()
    }
    viewport.addEventListener("wheel", onWheel, { passive: false })
    return () => {
      viewport.removeEventListener("wheel", onWheel)
    }
  }, [wheelGestures, orientation, api, scrollNext, scrollPrev])

  function handleKeyDown(event: React.KeyboardEvent) {
    if (disabled) return
    const prevKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp"
    const nextKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown"
    if (event.key === prevKey) {
      event.preventDefault()
      scrollPrev()
      return
    }
    if (event.key === nextKey) {
      event.preventDefault()
      scrollNext()
    }
  }

  /** 渲染轮播项内容：children 函数优先，其次 item.content */
  function renderItem(item: XCarouselItem, index: number): React.ReactNode {
    if (typeof children === "function") return children({ item, index })
    if (item.content != null) return item.content
    return children
  }

  const rootProps = {
    role: "region",
    "aria-roledescription": "carousel",
    "data-orientation": orientation,
    "data-slot": "root",
    tabIndex: 0,
    className: cn("relative focus:outline-none", ui?.root, className),
    onKeyDown: handleKeyDown,
  }

  const content = (
    <>
      <div
        ref={(node: HTMLDivElement | null) => {
          emblaRef(node)
          viewportElRef.current = node
        }}
        data-slot="viewport"
        className={cn("overflow-hidden", ui?.viewport)}
      >
        <div
          ref={containerRef}
          data-slot="container"
          className={cn(
            "flex items-start",
            orientation === "horizontal" ? "-ms-4 flex-row" : "-mt-4 flex-col",
            ui?.container,
          )}
        >
          {items.map((item, index) => {
            const selected = selectedIndex % Math.max(items.length, 1)
            return (
              <div
                key={item.key ?? index}
                role="group"
                aria-roledescription="slide"
                data-slot="item"
                className={cn(
                  "min-w-0 shrink-0 basis-full",
                  orientation === "horizontal" ? "ps-4" : "pt-4",
                  fade && "transition-opacity duration-300",
                  fade && (index === selected ? "opacity-100" : "opacity-0"),
                  ui?.item,
                  item.ui?.item,
                  item.className,
                )}
              >
                {renderItem(item, index)}
              </div>
            )
          })}
        </div>
      </div>

      {(arrows || dots) && (
        <div data-slot="controls" className={cn("", ui?.controls)}>
          {arrows && (
            <div data-slot="arrows" className={cn("", ui?.arrows)}>
              <XButton
                variant="outline"
                color="neutral"
                disabled={!canScrollPrev}
                aria-label="上一张"
                data-slot="prev"
                {...(typeof prev === "object" ? prev : {})}
                className={cn(
                  "absolute rounded-full",
                  orientation === "horizontal" ? "top-1/2 start-4 -translate-y-1/2 sm:-start-12" : "top-4 left-1/2 -translate-x-1/2 rotate-90 sm:-top-12",
                  ui?.prev,
                )}
                leading={renderIcon(prevIcon ?? ChevronLeft, "size-5")}
                onClick={scrollPrev}
              />
              <XButton
                variant="outline"
                color="neutral"
                disabled={!canScrollNext}
                aria-label="下一张"
                data-slot="next"
                {...(typeof next === "object" ? next : {})}
                className={cn(
                  "absolute rounded-full",
                  orientation === "horizontal" ? "top-1/2 end-4 -translate-y-1/2 sm:-end-12" : "bottom-4 left-1/2 -translate-x-1/2 rotate-90 sm:-bottom-12",
                  ui?.next,
                )}
                leading={renderIcon(nextIcon ?? ChevronRight, "size-5")}
                onClick={scrollNext}
              />
            </div>
          )}

          {dots && (
            <div
              role="tablist"
              aria-label="指示点"
              data-slot="dots"
              className={cn("absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3", ui?.dots)}
            >
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-label={`跳转到第 ${index + 1} 张`}
                  aria-selected={selectedIndex === index}
                  data-state={selectedIndex === index ? "active" : undefined}
                  data-slot="dot"
                  className={cn(
                    "size-3 cursor-pointer rounded-full bg-accent outline-foreground/25 focus-visible:outline-3 data-[state=active]:bg-foreground",
                    ui?.dot,
                  )}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )

  if (render) {
    return React.cloneElement(
      render,
      { ...rootProps, className: cn((render.props as { className?: string }).className, rootProps.className) },
      content,
    )
  }

  return <div {...rootProps}>{content}</div>
})

/* ============================ vben 风格 hook ============================ */

export interface XCarouselInstanceApi {
  /** 下一张 */
  next: () => void
  /** 上一张 */
  prev: () => void
}

/** 创建与 api 绑定的轮播：调用即得 [Carousel, carouselApi] */
export function useXCarousel(options: Partial<XCarouselProps> = {}) {
  const carouselRef = React.useRef<XCarouselApi>(null)
  const api = React.useMemo<XCarouselInstanceApi>(
    () => ({
      next: () => carouselRef.current?.next(),
      prev: () => carouselRef.current?.prev(),
    }),
    [],
  )

  const Carousel = React.useMemo(() => {
    return function BoundCarousel(props: Partial<XCarouselProps> = {}) {
      return <XCarousel ref={carouselRef} {...options} {...props} />
    }
  }, [])

  return [Carousel, api] as const
}
