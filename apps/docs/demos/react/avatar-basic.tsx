import { XAvatar } from "@/components/kit/x-avatar";
import { XAvatarGroup } from "@/components/kit/x-avatar-group";
import { XIcon } from "@/components/kit/x-icon";

export default function AvatarBasic() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatar>U</XAvatar>
      <XAvatar shape="square" size="lg">A</XAvatar>
      <XAvatar size="xs">B</XAvatar>
      <XAvatar size="xl" icon={<XIcon name="user" size="lg" />} />
      <XAvatarGroup max={4}>
        <XAvatar>A</XAvatar>
        <XAvatar>B</XAvatar>
        <XAvatar>C</XAvatar>
        <XAvatar>D</XAvatar>
        <XAvatar>E</XAvatar>
      </XAvatarGroup>
    </div>
  );
}
