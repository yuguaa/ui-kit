import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XModal } from "@/components/kit/x-modal";

export default function ModalBasicDemo() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setOpen(true)}>打开对话框</XButton>
      {result && <span className="text-sm text-muted-foreground">{result}</span>}
      <XModal
        open={open}
        onOpenChange={setOpen}
        title="对话框标题"
        description="这是对话框的辅助说明文字。"
        body={
          <p>这是对话框的正文内容，用于说明本次操作的含义，用户可以阅读后在底部确认或取消。</p>
        }
        footer={
          <>
            <XButton color="neutral" variant="ghost" onClick={() => setOpen(false)}>取消</XButton>
            <XButton
              onClick={() => {
                setResult("已确认");
                setOpen(false);
              }}
            >
              确认
            </XButton>
          </>
        }
      />
    </div>
  );
}
