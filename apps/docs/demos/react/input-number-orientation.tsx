import { useState } from "react";
import { XInputNumber } from "@/components/kit/x-input-number";

export default function InputNumberOrientation() {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);

  return (
    <div className="flex w-full flex-wrap items-center gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">horizontal（两侧步进）</span>
        <XInputNumber value={horizontal} onChange={setHorizontal} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">vertical（右侧堆叠步进）</span>
        <XInputNumber value={vertical} onChange={setVertical} orientation="vertical" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">尺寸</span>
        <div className="flex items-center gap-2">
          <XInputNumber size="xs" />
          <XInputNumber size="sm" />
          <XInputNumber size="md" />
          <XInputNumber size="lg" />
        </div>
      </div>
    </div>
  );
}
