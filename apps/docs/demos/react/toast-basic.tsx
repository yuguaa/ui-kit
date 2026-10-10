import { XButton } from "@/components/kit"
import { XToaster, toast } from "@/components/kit/x-toast"

export default function ToastBasic() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton
        variant="soft"
        color="success"
        onClick={() => toast.show({ title: "操作成功", description: "数据已保存。", color: "success", icon: "circle-check" })}
      >
        成功通知
      </XButton>
      <XButton
        variant="soft"
        color="warning"
        onClick={() => toast.show({ title: "请注意", description: "操作存在风险。", color: "warning", icon: "circle-alert" })}
      >
        警告通知
      </XButton>
      <XButton
        variant="soft"
        color="error"
        onClick={() => toast.show({ title: "操作失败", description: "请稍后重试。", color: "error", icon: "circle-alert" })}
      >
        失败通知
      </XButton>
      <XToaster />
    </div>
  )
}
