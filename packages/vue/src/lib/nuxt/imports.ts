import { ref } from 'vue'
import appConfig from '@/lib/nuxt/app-config'

/** useAppConfig 替身：返回固定 app.config */
export function useAppConfig() {
  return appConfig
}

/** useRoute 替身：按 location.pathname 提供最小路由信息 */
export function useRoute() {
  return {
    path: typeof window !== 'undefined' ? window.location.pathname : '/',
    query: {},
    params: {},
    hash: '',
    fullPath: typeof window !== 'undefined' ? window.location.href : '/',
    matched: [],
  }
}

/** useState 替身：内存版共享状态 */
const stateMap = new Map<string, ReturnType<typeof ref>>()
export function useState<T>(key: string, init?: () => T) {
  if (!stateMap.has(key)) {
    stateMap.set(key, ref(init?.()))
  }
  return stateMap.get(key) as ReturnType<typeof ref<T>>
}

/** useCookie 替身：localStorage 持久化 */
export function useCookie<T>(name: string) {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(name) : null
  const value = ref<T | null>(stored ? (JSON.parse(stored) as T) : null)
  const watch = (cb: () => void) => {
    cb()
    return () => {}
  }
  return Object.assign(value, { watch })
}

/** useColorMode 替身 */
export function useColorMode() {
  return { value: ref('light'), preference: 'system' }
}

/** noop 替身 */
export function useRuntimeHook() {}
export function useNuxtApp() {
  return { $config: {}, runWithContext: (fn: () => void) => fn() }
}
export function onNuxtReady(cb: () => void) {
  cb()
}
export function useHead() {}
export function clearError() {}
