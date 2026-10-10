import { useState } from "react";
import { Trash } from "lucide-react";
import { XButton } from "@/components/kit/x-button";
import { XModal } from "@/components/kit/x-modal";

export default function ModalVariants() {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [scrollableOpen, setScrollableOpen] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setFullscreenOpen(true)}>全屏对话框</XButton>
      <XButton variant="soft" onClick={() => setScrollableOpen(true)}>滚动遮罩</XButton>
      <XButton variant="soft" onClick={() => setLockedOpen(true)}>禁止外部关闭</XButton>

      <XModal
        open={fullscreenOpen}
        onOpenChange={setFullscreenOpen}
        title="全屏对话框"
        description="fullscreen 让内容占满整个屏幕。"
        fullscreen
        body={<p>全屏模式适合承载复杂表单或详情页。</p>}
      />

      <XModal
        open={scrollableOpen}
        onOpenChange={setScrollableOpen}
        title="滚动遮罩模式"
        description="scrollable 让内容随遮罩滚动并居中显示。"
        scrollable
        body={
          <>
            {Array.from({ length: 12 }, (_, index) => (
              <p key={index} className="text-sm text-muted-foreground">
                这是第 {index + 1} 行说明文字，用于演示滚动遮罩。
              </p>
            ))}
          </>
        }
      />

      <XModal
        open={lockedOpen}
        onOpenChange={setLockedOpen}
        title="锁定对话框"
        description="dismissible 为 false 时，点击外部或按 Esc 不会关闭，改为回调 onClosePrevent。"
        dismissible={false}
        close={{ color: "error" }}
        closeIcon={<Trash className="size-4" />}
        body={<p>只能通过右上角关闭按钮关闭。</p>}
      />
    </div>
  );
}
