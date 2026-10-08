import { XAvatar } from "@/components/kit/x-avatar";
import { XIcon } from "@/components/kit/x-icon";

export default function AvatarColors() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatar text="P" />
      <XAvatar text="A" color="primary" />
      <XAvatar text="S" color="success" />
      <XAvatar text="W" color="warning" />
      <XAvatar text="I" color="info" />
      <XAvatar text="E" color="error" />
      <XAvatar color="error" icon={<XIcon name="user" size="lg" />} />
    </div>
  );
}
