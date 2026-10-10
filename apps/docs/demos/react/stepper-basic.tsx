import { useRef, useState } from "react";
import { XButton } from "@/components/kit";
import { XStepper, type XStepperApi } from "@/components/kit";

const items = [
  {
    value: "basic",
    title: "基础信息",
    description: "填写姓名与联系方式",
    content: "这里是基础信息表单。",
  },
  {
    value: "payment",
    title: "支付方式",
    description: "选择支付渠道",
    content: "这里是支付方式选择。",
  },
  {
    value: "confirm",
    title: "确认提交",
    description: "核对并提交订单",
    content: "这里是订单确认面板。",
  },
];

export default function StepperBasic() {
  const [stepKey, setStepKey] = useState<string | number>("basic");
  const stepperRef = useRef<XStepperApi>(null);

  return (
    <div className="flex w-full flex-col gap-4">
      <XStepper ref={stepperRef} value={stepKey} onValueChange={setStepKey} items={items} color="success" size="md" />
      <div className="flex items-center gap-2">
        <XButton size="xs" variant="outline" color="neutral" onClick={() => stepperRef.current?.prev()}>
          上一步
        </XButton>
        <XButton size="xs" onClick={() => stepperRef.current?.next()}>
          下一步
        </XButton>
      </div>
    </div>
  );
}
