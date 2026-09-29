import { XInput } from "@/components/kit/x-input";

export default function InputStates() {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInput status="error" placeholder="错误状态（error）" className="w-56" />
      <XInput status="warning" placeholder="警告状态（warning）" className="w-56" />
      <XInput disabled placeholder="禁用状态" className="w-56" />
    </div>
  );
}
