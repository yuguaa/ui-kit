import { Star } from "lucide-react";
import { XCheckbox } from "@/components/kit/x-checkbox";

export default function CheckboxVariantDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">variant:list 与 card,card 时整个卡片可点击</span>
        <div className="flex flex-wrap items-center gap-4">
          <XCheckbox checked label="列表样式" />
          <XCheckbox variant="card" checked label="卡片样式" description="点击卡片任意位置切换" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">indicator:start / end / hidden</span>
        <div className="flex flex-wrap items-center gap-4">
          <XCheckbox checked label="指示块在左侧" />
          <XCheckbox checked indicator="end" label="指示块在右侧" />
          <XCheckbox checked indicator="hidden" icon={Star} label="指示块隐藏" description="图标显示在 label 上方" />
        </div>
      </div>
    </div>
  );
}
