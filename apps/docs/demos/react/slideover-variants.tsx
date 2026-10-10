import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XSlideover } from "@/components/kit/x-slideover";

const sides = [
  { key: "top", label: "顶部滑入" },
  { key: "right", label: "右侧滑入" },
  { key: "bottom", label: "底部滑入" },
  { key: "left", label: "左侧滑入" },
] as const;

export default function SlideoverVariants() {
  const [open, setOpen] = useState<Record<(typeof sides)[number]["key"], boolean>>({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });
  const [insetOpen, setInsetOpen] = useState(false);
  const [plainOpen, setPlainOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {sides.map((item) => (
        <XButton
          key={item.key}
          variant="soft"
          onClick={() => setOpen((prev) => ({ ...prev, [item.key]: true }))}
        >
          {item.label}
        </XButton>
      ))}
      <XButton variant="outline" onClick={() => setInsetOpen(true)}>内嵌面板</XButton>
      <XButton variant="outline" onClick={() => setPlainOpen(true)}>无遮罩</XButton>

      {sides.map((item) => (
        <XSlideover
          key={item.key}
          open={open[item.key]}
          onOpenChange={(next) => setOpen((prev) => ({ ...prev, [item.key]: next }))}
          title={item.label}
          side={item.key}
          body={<p className="text-sm text-muted-foreground">side 控制滑入方向。</p>}
        />
      ))}

      <XSlideover
        open={insetOpen}
        onOpenChange={setInsetOpen}
        title="内嵌面板"
        description="inset 让面板与屏幕边缘保留间距。"
        side="right"
        inset
        body={<p className="text-sm text-muted-foreground">面板四角圆角并保留边距。</p>}
      />

      <XSlideover
        open={plainOpen}
        onOpenChange={setPlainOpen}
        title="无遮罩面板"
        overlay={false}
        close={false}
        body={<p className="text-sm text-muted-foreground">overlay 为 false 时隐藏遮罩，close 为 false 时隐藏关闭按钮。</p>}
      />
    </div>
  );
}
