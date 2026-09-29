import { toast, XButton, XToaster } from "@/components/kit";

export default function ToastBasicDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" color="success" onClick={() => toast.show({ title: "操作成功", description: "数据已保存。", color: "success" })}>
        成功通知
      </XButton>
      <XButton variant="soft" color="warning" onClick={() => toast.show({ title: "请注意", description: "操作存在风险。", color: "warning" })}>
        警告通知
      </XButton>
      <XButton variant="soft" color="error" onClick={() => toast.show({ title: "操作失败", description: "请稍后重试。", color: "error" })}>
        失败通知
      </XButton>
      <XToaster />
    </div>
  );
}
