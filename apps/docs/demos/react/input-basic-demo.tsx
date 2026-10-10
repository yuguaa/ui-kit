import { XIcon } from "@/components/kit/x-icon";
import { XInput } from "@/components/kit/x-input";

export default function InputBasicDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInput placeholder="Input（md）" className="w-56" />
        <XInput size="sm" placeholder="Input（sm）" className="w-40" />
        <XInput size="xs" placeholder="Input（xs）" className="w-32" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInput placeholder="搜索" leading={<XIcon name="search" size="sm" />} className="w-56" />
        <XInput placeholder="选择项" trailing={<XIcon name="chevron-down" size="sm" />} className="w-56" />
      </div>
    </div>
  );
}
