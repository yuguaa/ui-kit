import { XButton } from "@/components/kit/x-button";
import { XCard } from "@/components/kit/x-card";

export default function CardHoverable() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <XCard hoverable title="可悬浮卡片" description="悬浮时阴影加深，ring 边框高亮。" onClick={() => {}}>
        悬浮或点击试试。
      </XCard>
      <XCard
        hoverable
        size="small"
        title="带操作区"
        actions={
          <div className="flex gap-2">
            <XButton size="sm" variant="outline" color="neutral">取消</XButton>
            <XButton size="sm">确定</XButton>
          </div>
        }
      >
        底部操作区随卡片一起展示。
      </XCard>
    </div>
  );
}
