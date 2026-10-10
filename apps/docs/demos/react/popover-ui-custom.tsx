import { XButton } from "@/components/kit/x-button";
import { XPopover } from "@/components/kit/x-popover";

export default function PopoverUiCustom() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XPopover
        dismissible={false}
        content={
          <div className="p-4 text-sm">
            <p>dismissible 为 false 时，点击外部或按 Esc 不会关闭，改为回调 onClosePrevent。</p>
          </div>
        }
      >
        <XButton variant="outline" color="neutral">禁止外部关闭</XButton>
      </XPopover>

      <XPopover
        ui={{
          content: "rounded-xl border border-primary-3 bg-primary-1",
          arrow: "fill-primary-2 stroke-primary-3",
        }}
        arrow
        content={
          <div className="p-4 text-sm">
            <p>ui 属性按主题插槽键（content / arrow）覆盖类名。</p>
          </div>
        }
      >
        <XButton variant="outline" color="neutral">定制气泡</XButton>
      </XPopover>
    </div>
  );
}
