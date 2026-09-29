import * as React from "react"

/**
 * 订阅 CSS 媒体查询结果。
 * 用于组件级别的响应式逻辑（如浮层在窄视口切换为 Drawer）。
 */
export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    setValue(result.matches)

    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}
