import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XModal } from "@/components/kit/x-modal";

export default function ModalBasicDemo() {
  const [open, setOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setOpen(true)}>打开对话框</XButton>
      {confirmText && <span className="text-sm text-muted-foreground">{confirmText}</span>}
      <XModal
        open={open}
        onOpenChange={setOpen}
        title="对话框标题"
        description="这是对话框的辅助说明文字。"
        okText="确认"
        cancelText="取消"
        onOk={() => setConfirmText("已点击确认")}
        onCancel={() => setConfirmText("已点击取消")}
      >
        这是对话框的正文内容，用于说明本次操作的含义，用户可以阅读后在底部确认或取消。
      </XModal>
    </div>
  );
}
