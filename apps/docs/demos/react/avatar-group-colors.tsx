import { XAvatar } from "@/components/kit/x-avatar";
import { XAvatarGroup } from "@/components/kit/x-avatar-group";

export default function AvatarGroupColors() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatarGroup color="primary" max={4}>
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" color="error" />
        <XAvatar text="D" />
        <XAvatar text="E" />
      </XAvatarGroup>
      <XAvatarGroup color="success" max={3}>
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" />
        <XAvatar text="D" />
      </XAvatarGroup>
    </div>
  );
}
