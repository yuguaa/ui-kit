import { XBadge, type XBadgeVariant } from "@/components/kit/x-badge";

const variants: XBadgeVariant[] = ["solid", "outline", "soft", "subtle"];

export default function BadgeVariants() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-8">
        {variants.map((variant) => (
          <XBadge key={variant} variant={variant} color="primary" label="primary" />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <XBadge variant="solid" color="success" label="成功" />
        <XBadge variant="outline" color="warning" label="警告" />
        <XBadge variant="subtle" color="error" label="错误" />
      </div>
    </div>
  );
}
