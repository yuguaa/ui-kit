import { parseTime } from "@internationalized/date";
import { XInputTime } from "@/components/kit/x-input-time";

const timeValue = parseTime("14:30");

export default function InputTimeColors() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputTime value={timeValue} size="sm" className="w-36" />
        <XInputTime value={timeValue} size="md" className="w-36" />
        <XInputTime value={timeValue} size="lg" className="w-36" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInputTime value={timeValue} color="success" variant="soft" className="w-36" />
        <XInputTime value={timeValue} color="warning" variant="subtle" className="w-36" />
        <XInputTime value={timeValue} color="error" highlight className="w-36" />
      </div>
    </div>
  );
}
