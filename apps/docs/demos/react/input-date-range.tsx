import { useState } from "react";
import { XInputDate } from "@/components/kit/x-input-date";

export default function InputDateRange() {
  const [dateRange, setDateRange] = useState<string | string[]>([
    "2025-06-01",
    "2025-06-15",
  ]);
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInputDate
        range
        value={dateRange}
        onChange={setDateRange}
        className="w-64"
      />
    </div>
  );
}
