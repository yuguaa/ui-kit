import { XInputDate } from "@/components/kit/x-input-date";

export default function InputDateColors() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputDate value="2025-06-15" size="sm" className="w-48" />
        <XInputDate value="2025-06-15" size="md" className="w-48" />
        <XInputDate value="2025-06-15" size="lg" className="w-48" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInputDate value="2025-06-15" color="success" variant="soft" className="w-48" />
        <XInputDate value="2025-06-15" color="warning" variant="subtle" className="w-48" />
        <XInputDate value="2025-06-15" color="error" highlight className="w-48" />
      </div>
    </div>
  );
}
