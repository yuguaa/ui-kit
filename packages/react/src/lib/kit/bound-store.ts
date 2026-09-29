/**
 * 可订阅状态容器：vben 风格 hook 的内部实现基础。
 * hook 创建 store，返回的组件通过 useBoundStore 订阅，
 * api 直接读写 store，组件引用全程稳定。
 */
import * as React from "react"

export interface BoundStore<T extends object> {
  get: () => T
  set: (patch: Partial<T>) => void
  subscribe: (listener: () => void) => () => void
}

export function createBoundStore<T extends object>(initial: T): BoundStore<T> {
  const state = { current: initial }
  const listeners = new Set<() => void>()
  return {
    get: () => state.current,
    set: (patch) => {
      state.current = { ...state.current, ...patch }
      listeners.forEach((listener) => listener())
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
  }
}

/** 在绑定组件内部订阅 store 状态 */
export function useBoundStore<T extends object>(store: BoundStore<T>): T {
  return React.useSyncExternalStore(store.subscribe, store.get)
}
