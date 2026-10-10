import { XButton } from "@/components/kit/x-button";
import { XTooltip } from "@/components/kit/x-tooltip";

export default function TooltipKbds() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XTooltip text="保存" kbds={["⌘", "S"]}>
        <XButton variant="outline" color="neutral">⌘S</XButton>
      </XTooltip>

      <XTooltip
        text="撤销"
        kbds={[{ value: "⌘", variant: "soft" }, { value: "Z", color: "primary" }]}
      >
        <XButton variant="outline" color="neutral">⌘Z</XButton>
      </XTooltip>
    </div>
  );
}
