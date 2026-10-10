import { XAvatar } from "@/components/kit/x-avatar";
import { XChip } from "@/components/kit/x-chip";

export default function ChipPosition() {
  return (
    <div className="flex flex-wrap items-center gap-10">
      <div className="relative inline-flex">
        <XAvatar text="A" color="primary" />
        <XChip color="error" text="3" />
      </div>
      <div className="relative inline-flex">
        <XAvatar text="B" color="success" size="lg" />
        <XChip color="success" position="bottom-right" text="5" />
      </div>
      <div className="relative inline-flex">
        <XAvatar text="C" color="warning" size="lg" />
        <XChip color="primary" position="bottom-left" text="99+" inset />
      </div>
      <div className="relative inline-flex">
        <XAvatar text="D" color="neutral" size="xl" />
        <XChip color="info" position="top-left" size="sm" text="8" />
      </div>
    </div>
  );
}
