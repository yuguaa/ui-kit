import { XBadge, type XBadgeVariant } from "@/components/kit";

const variants: XBadgeVariant[] = ["solid", "outline", "soft", "subtle"];

export default function BadgeVariants() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-8">
        {variants.map((variant) => (
          <XBadge key={variant} variant={variant} count={5} color="primary">
            消息
          </XBadge>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <XBadge variant="solid" color="success" count={8}>订单</XBadge>
        <XBadge variant="outline" color="warning" count={8}>订单</XBadge>
        <XBadge variant="subtle" color="error" count={8}>订单</XBadge>
      </div>
    </div>
  );
}
