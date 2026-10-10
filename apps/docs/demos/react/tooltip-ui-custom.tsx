import { BadgeCheck } from "lucide-react";
import { XButton } from "@/components/kit/x-button";
import { XTooltip } from "@/components/kit/x-tooltip";

export default function TooltipUiCustom() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XTooltip
        content={
          <span className="flex items-center gap-1.5">
            <BadgeCheck className="size-4 text-success" />
            content 插槽替换默认内容
          </span>
        }
      >
        <XButton variant="outline" color="neutral">自定义内容</XButton>
      </XTooltip>

      <XTooltip
        text="主题定制"
        ui={{
          content: "h-7 rounded-md border border-primary/20 bg-primary/10 text-primary",
          text: "font-medium",
        }}
      >
        <XButton variant="outline" color="neutral">定制气泡</XButton>
      </XTooltip>
    </div>
  );
}
