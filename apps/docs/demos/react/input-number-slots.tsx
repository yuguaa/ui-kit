import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { XInputNumber } from "@/components/kit/x-input-number";

export default function InputNumberSlots() {
  const [value, setValue] = useState(5);

  return (
    <div className="flex w-full flex-wrap items-center gap-8">
      <XInputNumber
        value={value}
        onChange={setValue}
        placeholder="自定义按钮内容"
        increment={<Plus className="size-4" />}
        decrement={<Minus className="size-4" />}
      />
      <XInputNumber placeholder="加号禁用" incrementDisabled />
      <XInputNumber placeholder="减号禁用" decrementDisabled />
      <XInputNumber placeholder="仅加号" decrement={false} />
    </div>
  );
}
