import { XButton } from "@/components/kit/x-button";
import { XCollapsible } from "@/components/kit/x-collapsible";

export default function CollapsibleBasic() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XCollapsible>
        点击「展开详情」展开的内容区域，再次点击收起。关闭后内容默认卸载。
      </XCollapsible>

      <XCollapsible
        defaultOpen
        trigger={<XButton size="sm" variant="soft" color="neutral">自定义触发器（默认展开）</XButton>}
      >
        defaultOpen 让初始状态为展开。
      </XCollapsible>

      <XCollapsible disabled>disabled 时触发器不可交互。</XCollapsible>
    </div>
  );
}
