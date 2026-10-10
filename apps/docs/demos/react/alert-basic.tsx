import * as React from "react";
import { XAlert } from "@/components/kit/x-alert";
import { XAvatar } from "@/components/kit/x-avatar";

export default function AlertBasic() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert color="success" icon="circle-check" title="部署完成" description="生产环境已更新到最新版本。" />
      {open && (
        <XAlert
          open={open}
          onOpenChange={setOpen}
          color="warning"
          close
          title="磁盘空间不足"
          description="点击右侧关闭按钮隐藏，close 受 open 模型控制。"
          leading={<XAvatar text="W" color="warning" />}
        />
      )}
    </div>
  );
}
