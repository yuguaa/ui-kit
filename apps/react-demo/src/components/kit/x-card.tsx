import * as React from "react"
import { motion } from "motion/react"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { kitMotion } from "@/lib/kit/motion"
import { cn } from "@/lib/utils"

export type XCardSize = "default" | "small"

const cardSizeClasses: Record<XCardSize, string> = {
  default: "gap-4 p-5",
  small: "gap-3 p-3",
}

export interface XCardProps extends Omit<React.ComponentProps<typeof motion.div>, "onClick" | "onMouseEnter" | "children" | "title"> {
  /** 卡片标题 */
  title?: React.ReactNode
  /** 标题下方的辅助描述 */
  description?: React.ReactNode
  /** 右上角操作区域 */
  extra?: React.ReactNode
  /** 是否显示边框 */
  bordered?: boolean
  /** 悬浮时提升效果 */
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
    <motion.div
      data-slot="card"
      whileHover={hoverable ? { y: -2 } : undefined}
      transition={kitMotion.tokens.fast}
      onClick={onClick}
      onMouseEnter={onHover}
      className={cn(
        "overflow-hidden rounded-lg border bg-card text-card-foreground",
        hoverable && "cursor-pointer hover:shadow-md",
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
    </motion.div>
  )
}
