import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XDrawer } from "@/components/kit/x-drawer";

export default function DrawerUiCustom() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setOpen(true)}>打开定制抽屉</XButton>
      <XDrawer
        open={open}
        onOpenChange={setOpen}
        title="主题定制"
        description="ui 属性按主题插槽键覆盖类名。"
        ui={{
          overlay: "bg-primary-900/40",
          content: "rounded-2xl border border-primary-200",
          handle: "!bg-primary-400",
          container: "gap-2",
          header: "bg-primary/10 rounded-md px-3 py-2",
          title: "text-primary",
          description: "text-primary/75",
          body: "text-sm leading-6",
        }}
        body={<p>content / handle / container / header / title / description / body 等键都可单独覆盖。</p>}
        footer={<XButton onClick={() => setOpen(false)}>知道了</XButton>}
      />
    </div>
  );
}
