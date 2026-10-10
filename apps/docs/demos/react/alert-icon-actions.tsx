import * as React from "react";
import { XAlert } from "@/components/kit/x-alert";
import { XAvatar } from "@/components/kit/x-avatar";
import { XButton } from "@/components/kit/x-button";
import { XIcon } from "@/components/kit/x-icon";

export default function AlertIconActions() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert color="info" icon="info" title="图标与头像" description="icon 指定图标名，avatar 传入头像配置。" />
      <XAlert color="primary" title="头像提示" leading={<XAvatar text="A" color="primary" />} />
      <XAlert
        color="warning"
        title="自定义操作区"
        description="actions 位于标题与描述下方。"
        leading={<XIcon name="bell" />}
        actions={
          <>
            <XButton size="sm" variant="soft" color="warning">立即处理</XButton>
            <XButton size="sm" variant="ghost" color="neutral">忽略</XButton>
          </>
        }
      />
      <XAlert
        color="info"
        title="actions 按钮列表"
        description="actions 数组渲染为缺省 xs 尺寸的按钮。"
        actions={[
          { label: "查看详情", variant: "soft", color: "info" },
          { label: "忽略", variant: "ghost", color: "neutral" },
        ]}
      />
    </div>
  );
}
