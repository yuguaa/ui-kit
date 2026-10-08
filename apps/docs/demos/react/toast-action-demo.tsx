import { toast, XButton, XToaster } from "@/components/kit";

export default function ToastActionDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton
        variant="soft"
        color="error"
        onClick={() =>
          toast.show({
            title: "确认删除",
            description: "该操作将永久删除此项目。",
            color: "error",
            action: { label: "删除", onClick: () => toast.show({ title: "项目已删除", color: "success" }) },
            cancel: { label: "取消", onClick: () => toast.show({ title: "已取消删除" }) },
          })
        }
      >
        带操作按钮的通知
      </XButton>
      <XToaster />
    </div>
  );
}
