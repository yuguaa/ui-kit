import { XScrollArea } from "@/components/kit/x-scroll-area";

const items = Array.from({ length: 1000 }, (_, index) => ({ id: index, text: `第 ${index + 1} 行` }));

export default function ScrollAreaVirtual() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XScrollArea
        items={items}
        height={200}
        virtualize={{ estimateSize: 24, overscan: 8 }}
        shadow
        className="w-full rounded-lg border border-border"
      >
        {({ item }) => <div className="flex h-6 items-center px-3 text-sm">{String(item.text)}</div>}
      </XScrollArea>
      <span className="text-muted-foreground text-sm">
        virtualize 只渲染可视窗口附近的项；shadow 在滚动边缘显示渐隐阴影，可传 size 配置阴影宽度
      </span>
    </div>
  );
}
