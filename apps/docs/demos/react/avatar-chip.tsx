import { XAvatar, XIcon } from "@/components/kit";

export default function AvatarChip() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatar text="A" chip />
      <XAvatar text="B" chip={{ color: "success" }} />
      <XAvatar text="C" chip={{ text: 5, color: "error", position: "bottom-right" }} />
      <XAvatar icon={<XIcon name="user" />} chip={{ text: "NEW", color: "info", size: "sm", position: "top-left" }} />
    </div>
  );
}
