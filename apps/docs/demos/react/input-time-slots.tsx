import { parseTime } from "@internationalized/date";
import { AlarmClock } from "lucide-react";
import { XInputTime } from "@/components/kit/x-input-time";

const timeValue = parseTime("14:30");

export default function InputTimeSlots() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XInputTime
        value={timeValue}
        className="w-44"
        leading={<AlarmClock className="size-5 text-success" />}
        trailing={<span className="text-xs text-muted-foreground">下午</span>}
      />
      <XInputTime
        value={["09:00", "18:00"]}
        range
        className="w-56"
        ui={{ base: "rounded-xl ring-2 ring-inset ring-primary", separatorIcon: "text-error" }}
      />
    </div>
  );
}
