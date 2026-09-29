import { useState } from "react";
import { XSwitch } from "@/components/kit/x-switch";

export default function SwitchBasicDemo() {
  const [enabled, setEnabled] = useState(true);
  const [checkedText, setCheckedText] = useState(false);
  const [small, setSmall] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-6">
        <XSwitch checked={enabled} label="开启通知" onCheckedChange={setEnabled} />
        <XSwitch checked={checkedText} label="显示文字" checkedChildren="开" unCheckedChildren="关" onCheckedChange={setCheckedText} />
        <XSwitch disabled label="禁用状态" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XSwitch checked={small} size="sm" label="小尺寸" onCheckedChange={setSmall} />
      </div>
    </div>
  );
}
