import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { XSwitch } from "@/components/kit/x-switch";

export default function SwitchLoadingDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex flex-wrap items-center gap-6">
      <XSwitch checked={checked} onCheckedChange={setChecked} loading label="同步设置" />
      <XSwitch loadingIcon={RefreshCw} loading label="自定义加载图标" />
      <XSwitch checked={checked} onCheckedChange={setChecked} label="开启通知" description="开启后接收邮件提醒" />
      <XSwitch required label="必选项" />
    </div>
  );
}
