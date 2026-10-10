import { XButton, XButtonGroup } from "@/components/kit"

export default function ButtonGroupAsUi() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">render 渲染为指定元素</span>
        <XButtonGroup render={<nav />}>
          <XButton variant="soft" color="neutral">首页</XButton>
          <XButton variant="soft" color="neutral">文档</XButton>
          <XButton variant="soft" color="neutral">示例</XButton>
        </XButtonGroup>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">ui 插槽类名</span>
        <XButtonGroup ui={{ root: "gap-2" }}>
          <XButton variant="soft" color="primary">确定</XButton>
          <XButton variant="soft" color="neutral">取消</XButton>
        </XButtonGroup>
      </div>
    </div>
  )
}
