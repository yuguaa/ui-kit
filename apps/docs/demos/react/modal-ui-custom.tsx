import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XModal } from "@/components/kit/x-modal";

export default function ModalUiCustom() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => setOpen(true)}>打开定制对话框</XButton>
      <XModal
        open={open}
        onOpenChange={setOpen}
        title="主题定制"
        description="ui 属性按主题插槽键覆盖类名。"
        ui={{
          overlay: "bg-primary-900/40",
          content: "rounded-2xl border border-primary/20 shadow-primary/20",
          header: "bg-primary/10 border-b border-primary/20",
          title: "text-primary",
          description: "text-primary/75",
          body: "text-sm leading-6",
        }}
        body={<p>content / header / title / description / body / overlay 等键都可单独覆盖。</p>}
        footer={<XButton onClick={() => setOpen(false)}>知道了</XButton>}
      />
    </div>
  );
}
