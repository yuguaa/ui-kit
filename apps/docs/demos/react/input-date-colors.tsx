import { getLocalTimeZone, today } from "@internationalized/date";
import { parseStringToDateValue } from "reka-ui/date";
import { XInputDate } from "@/components/kit/x-input-date";

const dateValue = parseStringToDateValue("2025-06-15", today(getLocalTimeZone()));

export default function InputDateColors() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputDate value={dateValue} size="sm" className="w-48" />
        <XInputDate value={dateValue} size="md" className="w-48" />
        <XInputDate value={dateValue} size="lg" className="w-48" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInputDate value={dateValue} color="success" variant="soft" className="w-48" />
        <XInputDate value={dateValue} color="warning" variant="subtle" className="w-48" />
        <XInputDate value={dateValue} color="error" highlight className="w-48" />
      </div>
    </div>
  );
}
