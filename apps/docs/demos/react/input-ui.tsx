import { XIcon } from "@/components/kit/x-icon";
import { XInput } from "@/components/kit/x-input";

export default function InputUi() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XInput
        placeholder="自定义 root 与 base"
        className="w-56"
        ui={{ root: "rounded-lg", base: "bg-primary/10 ring-primary/20 text-primary" }}
      />
      <XInput
        placeholder="自定义 leading / trailing"
        className="w-56"
        ui={{ leading: "text-primary", trailing: "text-success" }}
        leading={<XIcon name="user" size="sm" />}
        trailing={<XIcon name="check" size="sm" />}
      />
      <XInput
        placeholder="左侧头像"
        className="w-56"
        avatar={{ text: "阿" }}
        ui={{ leadingAvatar: "ring-2 ring-primary/20", leadingAvatarSize: "sm" }}
      />
    </div>
  );
}
