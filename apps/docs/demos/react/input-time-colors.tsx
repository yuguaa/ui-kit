import { XInputTime } from "@/components/kit/x-input-time";

export default function InputTimeColors() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputTime value="14:30" size="sm" className="w-36" />
        <XInputTime value="14:30" size="md" className="w-36" />
        <XInputTime value="14:30" size="lg" className="w-36" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInputTime value="14:30" color="success" variant="soft" className="w-36" />
        <XInputTime value="14:30" color="warning" variant="subtle" className="w-36" />
        <XInputTime value="14:30" color="error" highlight className="w-36" />
      </div>
    </div>
  );
}
