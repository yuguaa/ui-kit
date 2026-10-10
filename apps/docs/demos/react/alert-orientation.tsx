import { XAlert } from "@/components/kit/x-alert";
import { XButton } from "@/components/kit/x-button";

export default function AlertOrientation() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert
        color="info"
        icon="info"
        orientation="vertical"
        title="vertical 排列"
        description="actions 位于标题与描述下方。"
        actions={<XButton size="sm" variant="soft" color="info">查看详情</XButton>}
      />
      <XAlert
        color="success"
        icon="circle-check"
        orientation="horizontal"
        title="horizontal 排列"
        description="actions 与关闭按钮位于内容右侧。"
        close
        actions={<XButton size="sm" variant="soft" color="success">重试</XButton>}
      />
    </div>
  );
}
