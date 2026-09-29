import { XCheckbox } from "@/components/kit/x-checkbox";
import { XIcon } from "@/components/kit/x-icon";
import { XInput } from "@/components/kit/x-input";
import { XRadioGroup } from "@/components/kit/x-radio-group";
import { XSwitch } from "@/components/kit/x-switch";
import { XTextarea } from "@/components/kit/x-textarea";

export default function InputBasic() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInput placeholder="Input（md）" className="w-56" />
        <XInput size="sm" placeholder="Input（sm）" className="w-40" />
        <XInput placeholder="带前缀图标（搜索）" prefix={<XIcon name="search" size="sm" />} className="w-56" />
        <XInput status="error" placeholder="错误状态（error）" className="w-56" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInput addonBefore="https://" addonAfter=".com" className="w-64" />
        <XTextarea placeholder="请输入多行文本…" className="w-full" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XCheckbox defaultChecked label="多选框 Checkbox" />
        <XCheckbox indeterminate label="半选状态" />
        <XRadioGroup
          options={[
            { value: "a", label: "选项 A" },
            { value: "b", label: "选项 B" },
            { value: "c", label: "选项 C" },
          ]}
        />
        <XSwitch label="开启通知" />
      </div>
    </div>
  );
}
