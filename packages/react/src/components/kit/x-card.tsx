/**
 * XCard 卡片：通用容器，承载标题、操作区、封面与底部操作。
 * hoverable 时阴影加深并高亮 ring 边框色（CSS 过渡，无位移动画）。
 */
import * as React from "react"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type XCardSize = "default" | "small"

const cardSizeClasses: Record<XCardSize, string> = {
  default: "gap-4 p-5",
  small: "gap-3 p-3",
}

export interface XCardProps extends Omit<React.ComponentProps<"div">, "onClick" | "onMouseEnter" | "children" | "title"> {
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
  /** 封面 */
  cover?: React.ReactNode
  /** 底部操作按钮 */
  actions?: React.ReactNode
  children?: React.ReactNode
  /** 点击卡片时触发 */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /** 悬浮卡片时触发 */
  onHover?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export function XCard({
  title,
  description,
  extra,
  bordered = true,
  hoverable = false,
  size = "default",
  cover,
  actions,
  onClick,
  onHover,
  className,
  children,
  ...props
}: XCardProps) {
  return (
    <div
      data-slot="card"
      onClick={onClick}
      onMouseEnter={onHover}
      className={cn(
        "overflow-hidden rounded-lg bg-card text-card-foreground",
        bordered && "ring-1 ring-inset ring-border",
        hoverable && "cursor-pointer transition-shadow duration-200 hover:shadow-md hover:ring-primary-3",
        className,
      )}
      {...props}
    >
      {cover}
      {(title != null || extra != null || description != null) && (
        <CardHeader className={cn(!bordered && "border-0")}>
          <div className="flex items-start justify-between gap-2">
            <div className="flex min-w-0 flex-col gap-0.5">
              {title != null && <CardTitle>{title}</CardTitle>}
              {description != null && <CardDescription>{description}</CardDescription>}
            </div>
            {extra != null && <div className="shrink-0">{extra}</div>}
          </div>
        </CardHeader>
      )}
      {children != null && <CardContent className={cn(cardSizeClasses[size], !bordered && "border-0")}>{children}</CardContent>}
      {actions != null && <CardFooter className={cn(!bordered && "border-0")}>{actions}</CardFooter>}
    </div>
  )
}
