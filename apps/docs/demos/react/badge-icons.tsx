import { XBadge } from "@/components/kit/x-badge";

export default function BadgeIcons() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XBadge color="info" label="带图标" icon="bell" />
      <XBadge color="success" label="两端图标" leadingIcon="check" trailingIcon="chevron-right" />
      <XBadge color="warning" label="头像" avatar={{ text: "A", color: "warning" }} />
      <XBadge color="primary" label="自定义头像" avatar={{ text: "Z" }} />
    </div>
  );
}
