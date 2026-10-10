import { XButton } from "@/components/kit/x-button";
import { XPopover } from "@/components/kit/x-popover";

export default function PopoverAnchor() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">锚点：</span>
        <XPopover
          anchor={<span className="rounded-md bg-primary/10 px-2 py-1 text-sm text-primary">定位锚点</span>}
          content={
            <div className="p-4 text-sm">
              <p>anchor 插槽指定定位参考元素，浮层相对它而不是触发器定位。</p>
            </div>
          }
        >
          <XButton variant="outline" color="neutral">打开</XButton>
        </XPopover>
      </div>
    </div>
  );
}
