import { XInputNumber } from "@/components/kit/x-input-number";

export default function InputNumberUi() {
  return (
    <div className="flex w-full flex-wrap items-center gap-8">
      <XInputNumber
        placeholder="自定义 base"
        ui={{ base: "bg-primary-1 ring-primary-3 text-primary-7" }}
      />
      <XInputNumber
        render={<div className="w-48 justify-center" />}
        placeholder="render 渲染为 div"
      />
    </div>
  );
}
