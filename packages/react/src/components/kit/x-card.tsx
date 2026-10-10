/**
 * XCard 卡片：在 shadcn 卡片原子上注入 Nuxt UI 变体语义（variant）。
 * 变体：outline | solid | soft
 * 结构：cover → header（title / description / extra）→ body → footer
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type XCardSize = "default" | "small"
export type XCardVariant = "outline" | "solid" | "soft"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XCardUi {
  root?: string
  header?: string
  title?: string
  description?: string
  body?: string
  footer?: string
}

/** 变体样式：背景与分割线 */
const cardVariantStyles: Record<XCardVariant, string> = {
  outline: "divide-y divide-border",
  solid: "bg-foreground text-background divide-y divide-border/50",
  soft: "bg-muted/50 divide-y divide-border",
}

/** solid 反色底上的描述文字使用半透明白 */
const cardVariantDescriptionStyles: Record<XCardVariant, string> = {
  outline: "",
  solid: "text-background/70",
  soft: "",
}

const cardSizeClasses: Record<XCardSize, string> = {
  default: "gap-4 p-5",
  small: "gap-3 p-3",
}

export interface XCardProps
  extends Omit<React.ComponentProps<"div">, "children" | "title"> {
  /** 卡片标题 */
  title?: React.ReactNode
  /** 标题下方的辅助描述 */
  description?: React.ReactNode
  /** 右上角操作区域 */
  extra?: React.ReactNode
  /** 是否显示边框 */
  bordered?: boolean
  /** 悬浮时阴影加深并高亮边框色 */
  hoverable?: boolean
  /** 卡片尺寸 */
  size?: XCardSize
  /** 预设样式 */
  variant?: XCardVariant
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XCardUi
  /** 封面 */
  cover?: React.ReactNode
  /** 头部区整体内容（覆盖默认 title / description / extra） */
  header?: React.ReactNode
  /** 底部区内容（优先于 actions） */
  footer?: React.ReactNode
  /** 底部操作按钮 */
  actions?: React.ReactNode
  children?: React.ReactNode
  /** 悬浮卡片时触发 */
  onHover?: React.MouseEventHandler<HTMLDivElement>
}

export const XCard = React.forwardRef<HTMLDivElement, XCardProps>(function XCard(
  {
    title,
    description,
    extra,
    bordered = true,
    hoverable = false,
    size = "default",
    variant = "outline",
    render,
    ui,
    cover,
    header,
    footer,
    actions,
    onHover,
    onClick,
    className,
    children,
    ...rest
  },
  ref,
) {
  const headerVisible =
    header != null || title != null || description != null || extra != null
  const footerVisible = footer != null || actions != null

  return useRender({
    render,
    ref,
    props: {
      onClick,
      onMouseEnter: onHover,
      "data-slot": "card",
      className: cn(
        "overflow-hidden rounded-lg bg-card text-card-foreground",
        cardVariantStyles[variant],
        bordered && "ring-1 ring-inset ring-border",
        hoverable && "cursor-pointer transition-shadow duration-200 hover:shadow-md hover:ring-primary/25",
        ui?.root,
        className,
      ),
      children: (
        <>
          {cover}
          {headerVisible && (
            <CardHeader className={cn(ui?.header)}>
              {header ?? (
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col gap-0.5">
                    {title != null && (
                      <CardTitle className={cn(ui?.title)}>{title}</CardTitle>
                    )}
                    {description != null && (
                      <CardDescription
                        className={cn(
                          cardVariantDescriptionStyles[variant],
                          ui?.description,
                        )}
                      >
                        {description}
                      </CardDescription>
                    )}
                  </div>
                  {extra != null && <div className="shrink-0">{extra}</div>}
                </div>
              )}
            </CardHeader>
          )}
          {children != null && (
            <CardContent className={cn(cardSizeClasses[size], ui?.body)}>
              {children}
            </CardContent>
          )}
          {footerVisible && (
            <CardFooter className={cn(ui?.footer)}>
              {footer ?? actions}
            </CardFooter>
          )}
        </>
      ),
      ...rest,
    },
  })
})
