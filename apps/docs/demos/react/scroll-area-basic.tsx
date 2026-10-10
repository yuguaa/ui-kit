import { XScrollArea } from "@/components/kit/x-scroll-area";

const items = Array.from({ length: 12 }, (_, index) => ({ id: index, text: `滚动内容第 ${index + 1} 行` }));

export default function ScrollAreaBasic() {
  return (
    <XScrollArea items={items} height={160} className="w-full rounded-lg border border-border p-3">
      {({ item }) => <div className="py-1 text-sm">{String(item.text)}</div>}
    </XScrollArea>
  );
}
