import { XBadge, type XBadgeColor, type XBadgeSize } from "@/components/kit/x-badge";

const colors: XBadgeColor[] = ["primary", "secondary", "neutral", "success", "info", "warning", "error"];
const sizes: XBadgeSize[] = ["xs", "sm", "md", "lg", "xl"];

export default function BadgeColor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-8">
        {colors.map((color) => (
          <XBadge key={color} color={color} count={5}>消息</XBadge>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-8">
        {sizes.map((size) => (
          <XBadge key={size} size={size} count={5}>消息</XBadge>
        ))}
      </div>
    </div>
  );
}
