import { useState } from "react";
import { XSwitch } from "@/components/kit/x-switch";

export default function SwitchLoadingDemo() {
  const [checked, setChecked] = useState(true);
  const [small, setSmall] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-6">
      <XSwitch checked={checked} loading label="同步设置" onCheckedChange={setChecked} />
      <XSwitch checked={small} size="sm" loading label="自动保存" description="数据同步中，暂时无法切换" onCheckedChange={setSmall} />
    </div>
  );
}
