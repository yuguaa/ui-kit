import { XAvatar, XIcon } from "@/components/kit";

export default function AvatarIconText() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatar src="https://i.pravatar.cc/64" alt="菠萝吹雪" />
      <XAvatar text="张三" />
      <XAvatar alt="李 四 五" />
      {/* icon 传图标名 */}
      <XAvatar icon="user" />
      {/* icon 传自定义图标元素 */}
      <XAvatar icon={<XIcon name="settings" />} />
    </div>
  );
}
