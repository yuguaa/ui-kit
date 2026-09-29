import { XChip } from "@/components/kit/x-chip";
import { XIcon } from "@/components/kit/x-icon";

export default function ChipBasic() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XChip color="primary">Primary</XChip>
      <XChip color="success">Success</XChip>
      <XChip color="warning">Warning</XChip>
      <XChip color="error" closable>Error</XChip>
      <XChip color="info" icon={<XIcon name="info" size="sm" />}>Info</XChip>
      <XChip color="neutral" size="sm">small</XChip>
    </div>
  );
}
