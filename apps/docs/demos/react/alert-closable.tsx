import * as React from "react";
import { XAlert } from "@/components/kit/x-alert";
import { XButton } from "@/components/kit/x-button";

export default function AlertClosable() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex w-full flex-col gap-3">
      {open && (
        <XAlert
          open={open}
          onOpenChange={setOpen}
          color="error"
          close
          title="发布失败"
          description="点击右侧关闭按钮隐藏，close 受 open 模型控制。"
        />
      )}
      <XAlert
        color="info"
        closeIcon="x"
        close={{ variant: "soft", color: "info", size: "sm", label: "知道了" }}
        title="可配置的关闭按钮"
        description="close 传对象整体透传给关闭按钮，closeIcon 更换图标。"
      />
      <XAlert
        close
        color="neutral"
        variant="outline"
        title="自定义关闭按钮"
        description="closeSlot 替换默认的关闭按钮。"
        closeSlot={<XButton size="xs" variant="ghost" color="neutral">知道了</XButton>}
      />
    </div>
  );
}
