import { useState } from "react";
import { XButton, XDrawer } from "@/components/kit";

export default function DrawerBasicDemo() {
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setRightOpen(true)}>右侧抽屉</XButton>
      <XButton variant="soft" onClick={() => setLeftOpen(true)}>左侧抽屉</XButton>
      <XDrawer open={rightOpen} onOpenChange={setRightOpen} title="右侧抽屉">
        抽屉内容区域，用于展示详情或表单。
      </XDrawer>
      <XDrawer open={leftOpen} onOpenChange={setLeftOpen} title="左侧抽屉" side="left">
        左侧抽屉内容。
      </XDrawer>
    </div>
  );
}
