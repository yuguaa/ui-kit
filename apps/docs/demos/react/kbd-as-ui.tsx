import { XKbd } from "@/components/kit"

const sizes = ["xs", "sm", "md", "lg", "xl"] as const
const colors = ["primary", "success", "warning", "error", "neutral"] as const

export default function KbdAsUi() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">五档尺寸</span>
        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((size) => (
            <XKbd key={size} size={size} value="K" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">render 渲染为指定元素</span>
        <div className="flex flex-wrap items-center gap-3">
          <XKbd render={<span />} value="span" />
          <XKbd render={<code />} value="code" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">ui 插槽类名</span>
        <div className="flex flex-wrap items-center gap-3">
          {colors.map((color) => (
            <XKbd key={color} color={color} value="K" ui={{ base: "bg-muted" }} />
          ))}
        </div>
      </div>
    </div>
  )
}
