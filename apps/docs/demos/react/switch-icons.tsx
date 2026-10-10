import { useState } from "react";
import { Check, X } from "lucide-react";
import { XSwitch } from "@/components/kit/x-switch";

export default function SwitchIconsDemo() {
  const [on, setOn] = useState(true);

  return (
    <div className="flex flex-wrap items-center gap-6">
      <XSwitch checked={on} onCheckedChange={setOn} checkedIcon={Check} uncheckedIcon={X} label="滑块内图标" />
      <XSwitch highlight label="常显聚焦环" />
      <XSwitch checked={on} onCheckedChange={setOn} color="info" highlight checkedIcon={Check} label="info 聚焦环" />
      <XSwitch color="warning" label="warning 语义色" />
    </div>
  );
}
