import { getLocalTimeZone, today } from "@internationalized/date";
import { parseStringToDateValue } from "reka-ui/date";
import { useState } from "react";
import { XInputDate } from "@/components/kit/x-input-date";

export default function InputDateBasic() {
  const [date, setDate] = useState(parseStringToDateValue("2025-06-15", today(getLocalTimeZone())));
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInputDate value={date} onChange={(next) => setDate(next as never)} className="w-56" />
      <span className="text-sm text-muted-foreground">当前日期：{date}</span>
    </div>
  );
}
