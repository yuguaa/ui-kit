import { XScrollArea } from "@/components/kit/x-scroll-area";

const items = Array.from({ length: 8 }, (_, index) => ({ id: index, text: `内容第 ${index + 1} 行` }));

export default function ScrollAreaUi() {
  return (
    <XScrollArea
      items={items}
      height={140}
      className="w-full"
      ui={{
        root: "rounded-lg border border-dashed border-border bg-muted p-3",
        viewport: "gap-1",
        item: "rounded-md bg-background px-3 py-1 text-sm shadow-sm",
      }}
    >
      {({ item }) => <>{String(item.text)}</>}
    </XScrollArea>
  );
}
