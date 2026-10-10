/**
 * 基于 embla 事件实现的类名插件，对齐 embla-carousel-class-names 的行为。
 * 五个类名钩子：loop 与 draggable 加在根节点，dragging 在拖拽期间加在根节点，
 * snapped 加在当前吸附的滑动项，inView 加在进入视口的滑动项。
 */

/** classNames 配置：每个钩子接收一个或多个类名 */
export interface XCarouselClassNamesOptions {
  /** 开启时给循环轮播的根节点加类名 */
  loop?: string | string[]
  /** 开启时给可拖拽轮播的根节点加类名 */
  draggable?: string | string[]
  /** 拖拽期间给根节点加类名 */
  dragging?: string | string[]
  /** 当前吸附的滑动项 */
  snapped?: string | string[]
  /** 进入视口的滑动项 */
  inView?: string | string[]
}

/** embla api 的最小接口（与 embla-carousel 的 EmblaCarouselType 兼容） */
export interface XCarouselClassNamesApi {
  rootNode: () => HTMLElement
  slideNodes: () => HTMLElement[]
  slidesInView: () => number[]
  selectedScrollSnap: () => number
  internalEngine: () => {
    options: { loop: boolean; watchDrag: boolean | ((...args: unknown[]) => boolean) }
    slideRegistry: number[][]
  }
  on: (event: string, callback: (...args: unknown[]) => void) => void
  off: (event: string, callback: (...args: unknown[]) => void) => void
}

/** 统一成类名数组 */
function toList(value: string | string[]): string[] {
  return (Array.isArray(value) ? value : [value]).filter((item) => item.length > 0)
}

const defaultClassNames = {
  loop: 'is-loop',
  draggable: 'is-draggable',
  dragging: 'is-dragging',
  snapped: 'is-snapped',
  inView: 'is-in-view',
}

/** 创建 classNames 插件 */
export function createClassNamesPlugin(options: XCarouselClassNamesOptions = {}) {
  const resolved = { ...defaultClassNames, ...options }
  const classes = {
    loop: toList(resolved.loop),
    draggable: toList(resolved.draggable),
    dragging: toList(resolved.dragging),
    snapped: toList(resolved.snapped),
    inView: toList(resolved.inView),
  }

  let api: XCarouselClassNamesApi | undefined
  let root: HTMLElement | undefined
  let slides: HTMLElement[] = []
  /* 已标记的滑动项索引，用于增量更新 */
  let snappedIndexes: number[] = []
  let inViewIndexes: number[] = []

  function add(names: string[], elements: (HTMLElement | undefined)[]) {
    elements.forEach((el) => el?.classList.add(...names))
  }

  function remove(names: string[], elements: (HTMLElement | undefined)[]) {
    elements.forEach((el) => el?.classList.remove(...names))
  }

  /** 按新的索引集合更新一组类名：移除不再命中的元素，添加新命中的元素 */
  function toggle(names: string[], previous: number[], next: number[]) {
    remove(names, previous.filter((index) => !next.includes(index)).map((index) => slides[index]))
    add(names, next.filter((index) => !previous.includes(index)).map((index) => slides[index]))
  }

  /** 当前吸附的滑动项：同一吸附位置可能对应多个滑动项（循环与重复项） */
  function updateSnapped() {
    const indexes = api?.internalEngine().slideRegistry[api.selectedScrollSnap()] ?? []
    toggle(classes.snapped, snappedIndexes, indexes)
    snappedIndexes = indexes
  }

  function updateInView() {
    const indexes = api?.slidesInView() ?? []
    toggle(classes.inView, inViewIndexes, indexes)
    inViewIndexes = indexes
  }

  function onPointerDown() {
    add(classes.dragging, [root])
  }

  function onPointerUp() {
    remove(classes.dragging, [root])
  }

  function init(instance: XCarouselClassNamesApi) {
    api = instance
    root = instance.rootNode()
    slides = instance.slideNodes()

    const { loop, watchDrag } = instance.internalEngine().options
    if (loop) add(classes.loop, [root])
    if (watchDrag !== false) add(classes.draggable, [root])

    if (classes.snapped.length > 0) {
      api.on('select', updateSnapped)
      updateSnapped()
    }
    if (classes.inView.length > 0) {
      api.on('slidesInView', updateInView)
      updateInView()
    }
    if (classes.dragging.length > 0) {
      api.on('pointerDown', onPointerDown)
      api.on('pointerUp', onPointerUp)
    }
  }

  function destroy() {
    if (!api) return
    api.off('select', updateSnapped)
    api.off('slidesInView', updateInView)
    api.off('pointerDown', onPointerDown)
    api.off('pointerUp', onPointerUp)
    remove(classes.loop, [root])
    remove(classes.draggable, [root])
    remove(classes.dragging, [root])
    toggle(classes.snapped, snappedIndexes, [])
    toggle(classes.inView, inViewIndexes, [])
    snappedIndexes = []
    inViewIndexes = []
    api = undefined
  }

  return {
    name: 'classNames',
    options: resolved,
    init,
    destroy,
  }
}
