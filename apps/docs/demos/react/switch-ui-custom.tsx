import { useState } from "react";
import { XSwitch } from "@/components/kit/x-switch";

export default function SwitchUiCustomDemo() {
  const [on, setOn] = useState(true);

  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-muted-foreground text-sm">ui 按主题插槽覆盖类名</span>
      <div className="flex flex-wrap items-center gap-6">
        <XSwitch
          checked={on}
          onCheckedChange={setOn}
          label="自定义外观"
          description="说明文字"
          ui={{
            base: "data-checked:bg-warning",
            thumb: "bg-warning/10",
            label: "italic text-error",
            description: "text-xs",
          }}
        />
        <XSwitch
          checked={on}
          onCheckedChange={setOn}
          label="圆角轨道"
          ui={{ base: "ring-2 ring-info/20", thumb: "bg-info/10" }}
        />
      </div>
    </div>
  );
}
