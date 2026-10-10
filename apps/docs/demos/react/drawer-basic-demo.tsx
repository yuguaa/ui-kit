import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XDrawer } from "@/components/kit/x-drawer";

export default function DrawerBasicDemo() {
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setRightOpen(true)}>右侧抽屉</XButton>
      <XButton variant="soft" onClick={() => setLeftOpen(true)}>左侧抽屉</XButton>
      <XDrawer
        open={rightOpen}
        onOpenChange={setRightOpen}
        title="右侧抽屉"
        description="direction 为 right 时从右侧滑出。"
        body={<p>抽屉内容区域，用于展示详情或表单。</p>}
        footer={<XButton onClick={() => setRightOpen(false)}>关闭</XButton>}
      />
      <XDrawer
        open={leftOpen}
        onOpenChange={setLeftOpen}
        title="左侧抽屉"
        description="direction 为 left 时从左侧滑出。"
        direction="left"
        body={<p>左侧抽屉内容。</p>}
        footer={<XButton onClick={() => setLeftOpen(false)}>关闭</XButton>}
      />
    </div>
  );
}
