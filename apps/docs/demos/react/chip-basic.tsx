import * as React from "react";
import { XButton } from "@/components/kit/x-button";
import { XChip } from "@/components/kit/x-chip";
import { XIcon } from "@/components/kit/x-icon";

export default function ChipBasic() {
  const [show, setShow] = React.useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <XChip standalone text="primary" />
        <XChip standalone color="success" text="success" />
        <XChip standalone color="warning" text="warning" />
        <XChip standalone color="error" closable text="error" />
        <XChip standalone color="info" content={<><XIcon name="info" size="sm" /> info</>} />
        <XChip standalone color="neutral" size="sm" text="small" />
      </div>

      <div className="flex items-center gap-3">
        <XButton size="sm" variant="soft" color="neutral" onClick={() => setShow((value) => !value)}>
          {show ? "隐藏" : "显示"}角标
        </XButton>
        <XChip standalone show={show} color="primary" text="5" />
      </div>
    </div>
  );
}
