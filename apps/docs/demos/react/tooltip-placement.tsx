import { XButton } from "@/components/kit/x-button";
import { XTooltip } from "@/components/kit/x-tooltip";

const placements: { key: "top" | "bottom" | "left" | "right"; label: string }[] = [
  { key: "top", label: "上" },
  { key: "bottom", label: "下" },
  { key: "left", label: "左" },
  { key: "right", label: "右" },
];

export default function TooltipPlacement() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {placements.map((item) => (
        <XTooltip key={item.key} placement={item.key} title={`${item.label}侧提示`}>
          <XButton variant="outline" color="neutral">{item.label}</XButton>
        </XTooltip>
      ))}
    </div>
  );
}
