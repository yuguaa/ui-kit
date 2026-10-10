import { useState } from "react";
import { Settings } from "lucide-react";
import { XButton } from "@/components/kit/x-button";
import { XDrawer } from "@/components/kit/x-drawer";

export default function DrawerSlots() {
  const [slotsOpen, setSlotsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setSlotsOpen(true)}>插槽组合</XButton>
      <XButton variant="soft" onClick={() => setContentOpen(true)}>content 插槽</XButton>

      <XDrawer
        open={slotsOpen}
        onOpenChange={setSlotsOpen}
        title="插槽组合"
        description="header / actions / body / footer / close 插槽自由组合。"
        close
        header={
          <div className="flex items-center gap-2">
            <Settings className="size-4 text-info-6" />
            <span className="font-semibold">自定义头部</span>
          </div>
        }
        actions={<XButton variant="ghost" color="neutral" size="sm">更多</XButton>}
        body={<p>正文内容由 body 插槽提供。</p>}
        footer={<XButton onClick={() => setSlotsOpen(false)}>确认</XButton>}
      />

      <XDrawer
        open={contentOpen}
        onOpenChange={setContentOpen}
        title="content 插槽"
        description="content 替换默认 container 结构。"
        content={
          <div className="p-4">
            <p>content 插槽接管面板内容，container / header / body / footer 默认结构不再渲染。</p>
          </div>
        }
      />
    </div>
  );
}
