import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XButtonGroupUi {
  root?: string
}

export interface XButtonGroupProps extends Omit<React.ComponentProps<"div">, "children"> {
  /** 排列方向 */
  orientation?: "horizontal" | "vertical"
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XButtonGroupUi
  children?: React.ReactNode
}

export const XButtonGroup = React.forwardRef<HTMLDivElement, XButtonGroupProps>(function XButtonGroup(
  { orientation = "horizontal", render, ui, className, children, ...rest },
  ref,
) {
  return useRender({
    render,
    ref,
    props: {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn(
        "inline-flex",
        orientation === "horizontal"
          ? "flex-row items-center [&>*+*]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none"
          : "flex-col items-stretch [&>*+*]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
        ui?.root,
        className,
      ),
      children,
      ...rest,
    },
  })
})
