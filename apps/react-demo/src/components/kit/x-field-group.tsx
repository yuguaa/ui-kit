import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XFieldGroupSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XFieldGroupOrientation = "horizontal" | "vertical"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XFieldGroupUi {
  root?: string
}

export interface XFieldGroupProps
  extends Omit<React.ComponentProps<"div">, "children" | "color" | "size"> {
  /** 尺寸（控制字段间距） */
  size?: XFieldGroupSize
  /** 排列方向 */
  orientation?: XFieldGroupOrientation
  /** 旧属性：true 等价 orientation="horizontal"，false 等价 vertical */
  inline?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XFieldGroupUi
  children?: React.ReactNode
}

const fieldGroupGapClasses: Record<XFieldGroupSize, string> = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-5",
}

export function XFieldGroup({
  size = "md",
  orientation,
  inline = true,
  render,
  ui,
  className,
  children,
  ...props
}: XFieldGroupProps) {
  /** orientation 显式传入时优先，否则回退 inline 的旧语义 */
  const resolvedOrientation = orientation ?? (inline ? "horizontal" : "vertical")

  return useRender({
    render,
    defaultTagName: "div",
    props: {
      "data-slot": "root",
      "data-orientation": resolvedOrientation,
      className: cn(
        resolvedOrientation === "horizontal" ? "flex items-start" : "flex flex-col",
        fieldGroupGapClasses[size],
        ui?.root,
        className,
      ),
      children,
      ...props,
    },
  })
}
