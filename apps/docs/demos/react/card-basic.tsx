import { XButton } from "@/components/kit/x-button";
import { XCard } from "@/components/kit/x-card";

export default function CardBasic() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <XCard title="卡片标题" description="卡片内容区域，用于承载标题、操作区以及主体信息。" extra={<XButton size="sm" variant="ghost">更多</XButton>}>
        这是卡片的主体内容。
      </XCard>
      <XCard bordered={false} hoverable size="small" title="无边框卡片" cover={<div className="h-20 bg-gradient-to-r from-primary-1 to-primary-3" />}>
        悬浮试试。
      </XCard>
    </div>
  );
}
