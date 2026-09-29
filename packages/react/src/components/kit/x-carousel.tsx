/**
 * XCarousel 轮播：多张内容横向轮播展示。
 * 基于 shadcn carousel（embla），支持自动播放、循环与前后控制。
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
  className?: string
}

export interface XCarouselApi {
  next: () => void
  prev: () => void
}

export const XCarousel = React.forwardRef<XCarouselApi, XCarouselProps>(function XCarousel(
  { items = [], autoplay = false, interval = 3000, loop = true, disabled = false, className },
  ref,
) {
  const [api, setApi] = React.useState<CarouselApi>()
  const plugin = React.useMemo(
    () => (autoplay ? Autoplay({ delay: interval, stopOnInteraction: true }) : undefined),
    [autoplay, interval],
  )

  React.useImperativeHandle(ref, () => ({
    next: () => api?.scrollNext(),
    prev: () => api?.scrollPrev(),
  }))

  return (
    <div className={cn("relative w-full", disabled && "pointer-events-none opacity-50", className)}>
      <Carousel opts={{ loop, align: "start" }} plugins={plugin ? [plugin] : undefined} setApi={setApi}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.key} className="basis-full">
              {item.content}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-1">
          <XButton
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="上一张"
            className="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="size-4" />
          </XButton>
          <XButton
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="下一张"
            className="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="size-4" />
          </XButton>
        </div>
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
