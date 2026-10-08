import { useState } from "react";
import { XInputTime } from "@/components/kit/x-input-time";

export default function InputTimeRange() {
  const [timeRange, setTimeRange] = useState<string | string[]>([
    "09:00",
    "18:00",
  ]);
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInputTime
        range
        value={timeRange}
        onChange={setTimeRange}
        className="w-40"
      />
    </div>
  );
}
