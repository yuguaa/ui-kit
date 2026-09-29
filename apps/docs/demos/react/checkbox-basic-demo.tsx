import { useState } from "react";
import { XCheckbox } from "@/components/kit/x-checkbox";

export default function CheckboxBasicDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex flex-wrap items-center gap-6">
      <XCheckbox checked={checked} label="多选框 Checkbox" onCheckedChange={setChecked} />
      <XCheckbox indeterminate label="半选状态" />
      <XCheckbox disabled label="禁用状态" />
      <XCheckbox disabled checked label="禁用选中" />
    </div>
  );
}
