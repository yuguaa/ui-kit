import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { XInputTime } from "@/components/kit/x-input-time";

export default function InputTimeRange() {
  const [timeRange, setTimeRange] = useState<string | string[]>(["09:00", "18:00"]);
  return (
    <div className="flex w-full flex-col gap-4">
      <XInputTime value={timeRange} onChange={setTimeRange} range className="w-56" />
      <XInputTime value={timeRange} onChange={setTimeRange} range separatorIcon={ArrowRight} className="w-56" />
    </div>
  );
}
