import { XBadge } from "@/components/kit/x-badge";

export default function BadgeUiCustom() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XBadge
        color="info"
        label="ui 插槽"
        ui={{ base: "rounded-full px-3 shadow-sm", label: "tracking-wide" }}
      />
      <XBadge
        render={<a href="/docs" />}
        color="primary"
        variant="outline"
        label="render 渲染为链接"
      />
    </div>
  );
}
