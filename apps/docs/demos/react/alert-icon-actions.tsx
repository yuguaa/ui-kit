import { XAlert, XButton, XIcon } from "@/components/kit";

export default function AlertIconActions() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert
        type="warning"
        message="自定义图标"
        description="icon 属性覆盖默认的类型图标。"
        showIcon
        icon={<XIcon name="bell" size="sm" />}
      />
      <XAlert
        type="error"
        message="自定义图标优先"
        description="传入 icon 后无需 showIcon 也会显示。"
        icon={<XIcon name="trash" size="sm" />}
      />
      <XAlert
        type="info"
        message="操作区"
        description="actions 属性位于标题与描述下方。"
        actions={
          <>
            <XButton size="sm" variant="soft" color="info">查看详情</XButton>
            <XButton size="sm" variant="ghost" color="neutral">忽略</XButton>
          </>
        }
      />
    </div>
  );
}
