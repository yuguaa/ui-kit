/**
 * 基于 embla 内部引擎实现的连续滚动插件，对齐 Nuxt UI 的 autoScroll 行为。
 * 依赖 embla 的 internalEngine / scrollTo / rootNode / 事件接口。
 */

/** autoScroll 配置：speed 越大滚动越快，direction 控制方向 */
export interface XCarouselAutoScrollOptions {
  speed?: number
  direction?: 'forward' | 'backward'
  stopOnInteraction?: boolean
  stopOnMouseEnter?: boolean
  stopOnFocusIn?: boolean
}

/** embla api 的最小接口（与 embla-carousel 的 EmblaCarouselType 兼容） */
export interface XCarouselEmblaApi {
  internalEngine: () => {
    scrollBody: { location: { get: () => number } }
  }
  rootNode: () => HTMLElement
  scrollTo: (target: number) => void
  on: (event: string, callback: () => void) => void
  off: (event: string, callback: () => void) => void
}

/**
 * 创建 autoScroll 插件：每帧按流逝时间推进滚动位置。
 * 插件协议对齐 embla 8.x：返回 { name, options, init, destroy } 对象。
 */
export function createAutoScrollPlugin(options: XCarouselAutoScrollOptions = {}) {
  const {
    speed = 1,
    direction = 'forward',
    stopOnInteraction = true,
    stopOnMouseEnter = false,
    stopOnFocusIn = true,
  } = options

  const factor = 0.05 * speed
  const directionFactor = direction === 'backward' ? -1 : 1

  let rafId = 0
  let running = true
  let lastTime = performance.now()
  let root: HTMLElement
  let emblaApi: XCarouselEmblaApi

  const stop = () => {
    running = false
  }

  const play = () => {
    running = true
    lastTime = performance.now()
  }

  const move = () => {
    const now = performance.now()
    const elapsed = now - lastTime
    lastTime = now
    if (running) {
      const current = emblaApi.internalEngine().scrollBody.location.get()
      emblaApi.scrollTo(current + directionFactor * elapsed * factor)
    }
    rafId = requestAnimationFrame(move)
  }

  function init(api: XCarouselEmblaApi) {
    emblaApi = api
    root = api.rootNode()
    rafId = requestAnimationFrame(move)

    if (stopOnInteraction) emblaApi.on('pointerDown', stop)
    if (stopOnMouseEnter) {
      root.addEventListener('mouseenter', stop)
      root.addEventListener('mouseleave', play)
    }
    if (stopOnFocusIn) {
      root.addEventListener('focusin', stop)
      root.addEventListener('focusout', play)
    }
  }

  function destroy() {
    cancelAnimationFrame(rafId)
    if (stopOnInteraction) emblaApi.off('pointerDown', stop)
    root.removeEventListener('mouseenter', stop)
    root.removeEventListener('mouseleave', play)
    root.removeEventListener('focusin', stop)
    root.removeEventListener('focusout', play)
  }

  return {
    name: 'autoScroll',
    options,
    init,
    destroy,
    stop,
    play,
  }
}
