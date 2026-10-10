import { useState } from "react";
import { Info } from "lucide-react";
import { XButton } from "@/components/kit/x-button";
import { XModal } from "@/components/kit/x-modal";

export default function ModalSlots() {
  const [slotsOpen, setSlotsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [closeSlotOpen, setCloseSlotOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setSlotsOpen(true)}>插槽组合</XButton>
      <XButton variant="soft" onClick={() => setContentOpen(true)}>content 插槽</XButton>
      <XButton variant="soft" onClick={() => setCloseSlotOpen(true)}>自定义关闭按钮</XButton>

      <XModal
        open={slotsOpen}
        onOpenChange={setSlotsOpen}
        title="插槽组合"
        description="header / actions / body / footer 插槽自由组合。"
        header={
          <div className="flex items-center gap-2">
            <Info className="size-4 text-info-6" />
            <span className="font-semibold">自定义头部</span>
          </div>
        }
        actions={<XButton variant="ghost" color="neutral" size="sm">更多</XButton>}
        body={<p>正文内容由 body 插槽提供。</p>}
        footer={
          <>
            <XButton color="neutral" variant="ghost" onClick={() => setSlotsOpen(false)}>取消</XButton>
            <XButton onClick={() => setSlotsOpen(false)}>确认</XButton>
          </>
        }
      />

      <XModal
        open={contentOpen}
        onOpenChange={setContentOpen}
        title="content 插槽"
        description="content 替换默认结构，标题转为隐藏标题。"
        content={
          <div className="p-4 sm:p-6">
            <p>content 插槽接管整个面板内容，header / body / footer 默认结构不再渲染。</p>
          </div>
        }
      />

      <XModal
        open={closeSlotOpen}
        onOpenChange={setCloseSlotOpen}
        title="自定义关闭按钮"
        close={
          <XButton variant="soft" color="error" size="sm" onClick={() => setCloseSlotOpen(false)}>
            关闭
          </XButton>
        }
        body={<p>close 传元素时作为 close 插槽替换默认关闭按钮。</p>}
      />
    </div>
  );
}
