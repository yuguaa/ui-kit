import { XBadge } from "@/components/kit/x-badge";
import { XIcon } from "@/components/kit/x-icon";

export default function BadgeSquare() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <XBadge square color="primary" size="xs"><XIcon name="plus" /></XBadge>
        <XBadge square color="success" size="sm"><XIcon name="check" /></XBadge>
        <XBadge square color="warning" size="md"><XIcon name="bell" /></XBadge>
        <XBadge square color="error" size="lg"><XIcon name="star" /></XBadge>
        <XBadge square color="neutral" size="xl" label="5" />
      </div>

      <div className="flex flex-wrap items-center gap-8">
        <XBadge color="success" count={8} leading={<XIcon name="check" size="xs" />} />
        <XBadge color="info" count={12} trailing={<XIcon name="chevron-right" size="xs" />} />
      </div>
    </div>
  );
}
