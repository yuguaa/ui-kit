import { useState } from "react";
import { XButton, XLink, XSlideover } from "@/components/kit";

export default function SlideoverBasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setOpen(true)}>打开侧滑面板</XButton>
      <XSlideover open={open} onOpenChange={setOpen} title="侧滑面板">
        <div className="flex flex-col gap-2">
          <XLink to="/">首页</XLink>
          <XLink to="/about">关于</XLink>
          <XLink to="/contact">联系</XLink>
        </div>
      </XSlideover>
    </div>
  );
}
