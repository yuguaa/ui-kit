import { XAvatar, XAvatarGroup } from "@/components/kit";

export default function AvatarGroupMax() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatarGroup max={3}>
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" />
        <XAvatar text="D" />
        <XAvatar text="E" />
      </XAvatarGroup>
      <XAvatarGroup max={2} color="primary" plus={<XAvatar text="更多" />}>
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" />
      </XAvatarGroup>
    </div>
  );
}
