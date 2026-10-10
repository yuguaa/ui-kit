import { XButton } from "@/components/kit/x-button";
import { XCard } from "@/components/kit/x-card";

export default function CardSlots() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <XCard
        header={
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 flex-col gap-0.5">
              <div className="text-base font-medium leading-snug">header 整体替换</div>
              <p className="mt-1 text-sm text-muted-foreground">覆盖默认的标题与描述区域</p>
            </div>
            <XButton size="sm" variant="soft" color="neutral">更多</XButton>
          </div>
        }
        footer={
          <div className="flex w-full justify-end gap-2">
            <XButton size="sm" variant="outline" color="neutral">取消</XButton>
            <XButton size="sm">确定</XButton>
          </div>
        }
      >
        这是卡片的主体内容。
      </XCard>
      <XCard
        title={<span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-success-6" />自定义标题节点</span>}
        description="描述同样可以通过 ReactNode 覆盖。"
      >
        主体内容保持不变。
      </XCard>
    </div>
  );
}
