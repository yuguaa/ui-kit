import { XPinInput } from "@/components/kit";

export default function PinInputSeparator() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">separator=3 每隔 3 位插入分隔符</span>
        <XPinInput length={6} separator={3} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">separator=[2, 4] 在第 2、4 位之后插入</span>
        <XPinInput length={6} separator={[2, 4]} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">separatorSlot 自定义分隔内容</span>
        <XPinInput
          length={6}
          separator={3}
          separatorSlot={({ index }) => (
            <span className="mx-1 text-xs text-primary-6">{index + 1}</span>
          )}
        />
      </div>
    </div>
  );
}
