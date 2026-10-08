/**
 * XCarousel 轮播：多张内容轮播展示。
 * 基于 shadcn carousel（embla），支持自动播放、循环、前后控制、指示点与纵向轮播。
 */
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { XButton } from "@/components/kit/x-button"
import { cn } from "@/lib/utils"

export interface XCarouselItem {
  /** 轮播项 key */
  key: string
  /** 轮播项内容 */
  content?: React.ReactNode
}

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
  className?: string
}

export interface XCarouselApi {
  next: () => void
  prev: () => void
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
    className,
  },
  ref,
) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const plugin = React.useMemo(
    () => (autoplay ? Autoplay({ delay: interval, stopOnInteraction: true }) : undefined),
    [autoplay, interval],
  )

  React.useImperativeHandle(ref, () => ({
    next: () => api?.scrollNext(),
    prev: () => api?.scrollPrev(),
  }))

  /* 监听选中项变化，同步指示点高亮 */
  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className={cn("relative w-full", disabled && "pointer-events-none opacity-50", className)}>
      <Carousel
        opts={{ loop, align: "start" }}
        orientation={orientation}
        plugins={plugin ? [plugin] : undefined}
        setApi={setApi}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.key} className="basis-full">
              {item.content}
            </CarouselItem>
          ))}
        </CarouselContent>
        {arrows && (
          <div
            className={cn(
              "absolute flex",
              orientation === "vertical"
                ? "inset-y-0 left-1/2 -translate-x-1/2 flex-col justify-between py-1"
                : "inset-x-0 top-1/2 -translate-y-1/2 justify-between px-1",
            )}
          >
            <XButton
              variant="soft"
              color="neutral"
              size="sm"
              aria-label="上一张"
              className="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft className={cn("size-4", orientation === "vertical" && "rotate-90")} />
            </XButton>
            <XButton
              variant="soft"
              color="neutral"
              size="sm"
              aria-label="下一张"
              className="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight className={cn("size-4", orientation === "vertical" && "rotate-90")} />
            </XButton>
          </div>
        )}
        {dots && (
          <div
            className={cn(
              "absolute flex gap-1.5",
              orientation === "vertical"
                ? "right-3 top-1/2 -translate-y-1/2 flex-col"
                : "bottom-3 left-1/2 -translate-x-1/2",
            )}
          >
            {items.map((item, index) => (
              <button
                key={item.key}
                type="button"
                aria-label={`跳转到第 ${index + 1} 张`}
                aria-current={index === selectedIndex}
                className={cn(
                  "size-2 rounded-full transition-colors",
                  index === selectedIndex ? "bg-primary-6" : "bg-neutral-4 hover:bg-neutral-5",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  )
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
