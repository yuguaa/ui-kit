import { useState } from "react";
import { XInputNumber } from "@/components/kit/x-input-number";

export default function InputNumberBasic() {
  const [count, setCount] = useState(5);

  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInputNumber value={count} onChange={setCount} min={1} max={10} placeholder="数量" />
      <XInputNumber step={5} placeholder="步长 5" />
      <XInputNumber disabled placeholder="禁用状态" />
    </div>
  );
}
