import { XInput } from "@/components/kit/x-input";

export default function InputAddon() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XInput placeholder="网址" addonBefore="https://" addonAfter=".com" className="w-72" />
      <XInput placeholder="搜索" addonAfter="搜索" className="w-72" />
    </div>
  );
}
