import { CalendarCheck } from "lucide-react";
import { XInputDate } from "@/components/kit/x-input-date";

export default function InputDateSlots() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XInputDate
        value="2025-06-15"
        className="w-56"
        leading={<CalendarCheck className="size-5 text-success" />}
        trailing={<span className="text-xs text-muted-foreground">截止</span>}
      />
      <XInputDate
        value={["2025-06-01", "2025-06-15"]}
        range
        className="w-72"
        separator={<span className="px-1 text-xs text-muted-foreground">至</span>}
        ui={{ base: "rounded-xl ring-2 ring-inset ring-primary" }}
      />
    </div>
  );
}
