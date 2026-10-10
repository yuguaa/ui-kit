import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XDrawer } from "@/components/kit/x-drawer";

const directions = [
  { key: "top", label: "顶部抽屉" },
  { key: "right", label: "右侧内嵌抽屉" },
  { key: "bottom", label: "底部抽屉" },
  { key: "left", label: "左侧内嵌抽屉" },
] as const;

export default function DrawerVariants() {
  const [open, setOpen] = useState<Record<(typeof directions)[number]["key"], boolean>>({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });
  const [insetOpen, setInsetOpen] = useState(false);
  const [plainOpen, setPlainOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {directions.map((item) => (
        <XButton
          key={item.key}
          variant="soft"
          onClick={() => setOpen((prev) => ({ ...prev, [item.key]: true }))}
        >
          {item.label}
        </XButton>
      ))}
      <XButton variant="outline" onClick={() => setInsetOpen(true)}>内嵌 + 关闭按钮</XButton>
      <XButton variant="outline" onClick={() => setPlainOpen(true)}>无把手</XButton>

      {directions.map((item) => (
        <XDrawer
          key={item.key}
          open={open[item.key]}
          onOpenChange={(next) => setOpen((prev) => ({ ...prev, [item.key]: next }))}
          title={item.label}
          direction={item.key}
          inset={item.key === "right" || item.key === "left"}
          body={
            <p className="text-sm text-muted-foreground">
              {item.label}：direction 控制滑出方向，inset 与屏幕边缘保留间距。
            </p>
          }
        />
      ))}

      <XDrawer
        open={insetOpen}
        onOpenChange={setInsetOpen}
        title="内嵌抽屉"
        description="inset 让面板与边缘保留间距，close 显示右上角关闭按钮。"
        direction="right"
        inset
        close
        body={<p className="text-sm text-muted-foreground">content 内文案。</p>}
      />

      <XDrawer
        open={plainOpen}
        onOpenChange={setPlainOpen}
        title="无把手抽屉"
        handle={false}
        body={<p className="text-sm text-muted-foreground">handle 为 false 时隐藏拖拽把手。</p>}
      />
    </div>
  );
}
