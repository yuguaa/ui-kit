import { XButton, XButtonGroup } from "@/components/kit"

export default function ButtonGroupBasic() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">水平拼接（默认）</span>
        <XButtonGroup>
          <XButton variant="outline" color="neutral">上一页</XButton>
          <XButton variant="outline" color="neutral">1</XButton>
          <XButton variant="outline" color="neutral">2</XButton>
          <XButton variant="outline" color="neutral">下一页</XButton>
        </XButtonGroup>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">垂直拼接</span>
        <XButtonGroup orientation="vertical" className="w-32">
          <XButton variant="outline" color="neutral" block>编辑</XButton>
          <XButton variant="outline" color="neutral" block>复制</XButton>
          <XButton variant="outline" color="error" block>删除</XButton>
        </XButtonGroup>
      </div>
    </div>
  )
}
