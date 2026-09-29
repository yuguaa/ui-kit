import { XBadge } from "@/components/kit/x-badge";

export default function BadgeDot() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XBadge count={5}>消息</XBadge>
      <XBadge color="error" count={120}>订单</XBadge>
      <XBadge color="error" count={120} overflowCount={99}>订单</XBadge>
      <XBadge color="warning" dot>通知</XBadge>
      <XBadge count={0}>消息</XBadge>
    </div>
  );
}
