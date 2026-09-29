import { XButton, XPopover } from "@/components/kit";

const sides = [
  { key: "top", label: "上" },
  { key: "bottom", label: "下" },
  { key: "left", label: "左" },
  { key: "right", label: "右" },
] as const;

export default function PopoverBasicDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {sides.map((item) => (
        <XPopover key={item.key} side={item.key} trigger="click" title={`${item.label}侧气泡`} content="这是一段气泡说明文字。">
          <XButton variant="outline" color="neutral">{item.label}</XButton>
        </XPopover>
      ))}
    </div>
  );
}
