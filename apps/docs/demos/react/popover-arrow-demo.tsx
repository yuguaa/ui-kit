import { XButton, XPopover } from "@/components/kit";

export default function PopoverArrowDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XPopover arrow trigger="hover" side="top" title="带箭头气泡" content="悬停显示，箭头指向触发元素。">
        <XButton variant="outline" color="neutral">悬停带箭头</XButton>
      </XPopover>
      <XPopover arrow trigger="click" side="bottom" title="点击气泡" content="点击显示，箭头跟随 side 定位。">
        <XButton variant="outline" color="neutral">点击带箭头</XButton>
      </XPopover>
      <XPopover arrow trigger="click" side="right" content="右侧气泡，无标题。">
        <XButton variant="outline" color="neutral">右侧带箭头</XButton>
      </XPopover>
    </div>
  );
}
