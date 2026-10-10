import { useState } from "react";
import { XProgress } from "@/components/kit/x-progress";

export default function ProgressSteps() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex w-full flex-col gap-5">
      <XProgress value={step} max={["提交订单", "支付", "发货", "收货"]} />
      <XProgress value={2} max={["提交订单", "支付", "发货", "收货"]} color="success" />
      <button className="w-fit" type="button" onClick={() => setStep((s) => (s + 1) % 4)}>
        下一步
      </button>
    </div>
  );
}
