import { useState } from "react";
import { XSwitch } from "@/components/kit/x-switch";

export default function SwitchBasicDemo() {
  const [enabled, setEnabled] = useState(true);
  const [checkedText, setCheckedText] = useState(false);
  const [small, setSmall] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-6">
        <XSwitch checked={enabled} onCheckedChange={setEnabled} label="开启通知" />
        <XSwitch checked={checkedText} onCheckedChange={setCheckedText} label="显示文字" checkedChildren="开" unCheckedChildren="关" />
        <XSwitch disabled label="禁用状态" />
        <XSwitch color="success" label="success" />
        <XSwitch color="error" label="error" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XSwitch checked={small} onCheckedChange={setSmall} size="small" label="小尺寸" />
      </div>
    </div>
  );
}
