import { XPinInput } from "@/components/kit";

export default function PinInputStates() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">mask 掩码显示</span>
        <XPinInput mask length={5} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">highlight 始终显示颜色描边</span>
        <XPinInput highlight color="success" length={5} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">fixed=false 桌面端缩小字号</span>
        <XPinInput fixed={false} length={5} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">disabled 禁用</span>
        <XPinInput disabled defaultValue="12345" length={5} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">otp 一次性验证码提示（autocomplete=one-time-code）</span>
        <XPinInput otp length={5} />
      </div>
    </div>
  );
}
