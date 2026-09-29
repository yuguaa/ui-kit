/**
 * XSlider 滑块：shadcn slider 原子的二次封装，透传 value / min / max / step。
 */
import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export interface XSliderProps extends React.ComponentProps<typeof Slider> {
  /** 绑定值 */
  value?: number[]
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
}

export const XSlider = React.forwardRef<HTMLDivElement, XSliderProps>(function XSlider(
  { className, ...props },
  ref,
) {
  return <Slider ref={ref} className={cn("w-full", className)} {...props} />
})
