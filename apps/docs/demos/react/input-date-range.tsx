import { getLocalTimeZone, today } from "@internationalized/date";
import { parseStringToDateValue } from "reka-ui/date";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { XInputDate } from "@/components/kit/x-input-date";

export default function InputDateRange() {
  const [dateRange, setDateRange] = useState([
    parseStringToDateValue("2025-06-01", today(getLocalTimeZone())),
    parseStringToDateValue("2025-06-15", today(getLocalTimeZone())),
  ]);
  return (
    <div className="flex w-full flex-col gap-4">
      <XInputDate value={dateRange} onChange={setDateRange} range className="w-72" />
      <XInputDate value={dateRange} onChange={setDateRange} range separatorIcon={ArrowRight} className="w-72" />
    </div>
  );
}
