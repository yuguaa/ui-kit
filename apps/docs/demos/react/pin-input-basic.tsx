import { useState } from "react";
import { XPinInput } from "@/components/kit";

export default function PinInputBasic() {
  const [value, setValue] = useState("");

  return (
    <div className="flex w-full flex-col gap-4">
      <XPinInput value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        当前值：<code className="rounded bg-muted px-1.5 py-0.5">{value || "空"}</code>
      </p>
    </div>
  );
}
