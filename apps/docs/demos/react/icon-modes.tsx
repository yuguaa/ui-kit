import { XIcon } from "@/components/kit"

export default function IconModes() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">svg 模式（默认）与 css 模式</span>
        <div className="flex flex-wrap items-center gap-4">
          <XIcon name="star" size="lg" />
          <XIcon name="star" size="lg" mode="css" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">customize 修改图标元素（加粗描边）</span>
        <div className="flex flex-wrap items-center gap-4">
          <XIcon name="check" size="lg" />
          <XIcon name="check" size="lg" customize={(svg) => svg.setAttribute("stroke-width", "3.5")} />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">ui 插槽类名</span>
        <div className="flex flex-wrap items-center gap-4">
          <XIcon name="star" size="lg" ui={{ root: "text-warning-7" }} />
        </div>
      </div>
    </div>
  )
}
