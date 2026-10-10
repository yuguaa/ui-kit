import { parseTime } from "@internationalized/date";
import { useState } from "react";
import { XInputTime } from "@/components/kit/x-input-time";

export default function InputTimeBasic() {
  const [time, setTime] = useState(parseTime("14:30"));
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInputTime value={time} onChange={(next) => setTime(next as string)} className="w-40" />
      <span className="text-sm text-muted-foreground">当前时间：{time}</span>
    </div>
  );
}
