import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XContainerSize = "xs" | "sm" | "md" | "lg" | "xl"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XContainerUi {
  base?: string
}

/** 最大宽度：640 / 768 / 1024 / 1280 / 1536 */
const containerSizeClasses: Record<XContainerSize, string> = {
  xs: "max-w-160",
  sm: "max-w-192",
  md: "max-w-256",
  lg: "max-w-320",
  xl: "max-w-384",
}

export interface XContainerProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  /** 最大宽度 */
  size?: XContainerSize
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XContainerUi
  children?: React.ReactNode
}

export const XContainer = React.forwardRef<HTMLDivElement, XContainerProps>(
  function XContainer(
    { size = "lg", render, ui, className, children, ...rest },
    ref,
  ) {
    return useRender({
      render,
      ref,
      props: {
        "data-slot": "container",
        className: cn(
          "mx-auto w-full px-4",
          containerSizeClasses[size],
          ui?.base,
          className,
        ),
        children,
        ...rest,
      },
    })
  },
)
