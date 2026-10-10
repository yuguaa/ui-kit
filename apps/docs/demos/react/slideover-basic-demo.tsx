import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XLink } from "@/components/kit/x-link";
import { XSlideover } from "@/components/kit/x-slideover";

export default function SlideoverBasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setOpen(true)}>打开侧滑面板</XButton>
      <XSlideover
        open={open}
        onOpenChange={setOpen}
        title="侧滑面板"
        description="side 为 right 时从右侧滑入。"
        body={
          <div className="flex flex-col gap-2">
            <XLink to="/">首页</XLink>
            <XLink to="/about">关于</XLink>
            <XLink to="/contact">联系</XLink>
          </div>
        }
        footer={<XButton onClick={() => setOpen(false)}>关闭</XButton>}
      />
    </div>
  );
}
