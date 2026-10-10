import { XAvatar, XAvatarGroup } from "@/components/kit";

export default function AvatarGroupBasic() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatarGroup>
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" />
        <XAvatar text="D" />
      </XAvatarGroup>
      <XAvatarGroup size="xl">
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" />
      </XAvatarGroup>
      <XAvatarGroup size="xs">
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" />
      </XAvatarGroup>
    </div>
  );
}
