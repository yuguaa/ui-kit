import { useState } from "react";
import { XAvatar } from "@/components/kit/x-avatar";
import { XButton } from "@/components/kit/x-button";
import { XChip } from "@/components/kit/x-chip";

export default function ChipBasic() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      {/* 角标形态：挂在头像上的小圆点（Nuxt 4.11 语义） */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative inline-flex">
          <XAvatar src="https://github.com/nuxt-ui.png" alt="avatar" />
          <XChip />
        </div>
        <div className="relative inline-flex">
          <XAvatar src="https://github.com/nuxt-ui.png" alt="avatar" />
          <XChip color="success" position="bottom-right" />
        </div>
      </div>

      {/* 标签形态：standalone + 大尺寸 */}
      <div className="flex flex-wrap items-center gap-3">
        <XChip standalone size="3xl" text="primary" />
        <XChip standalone color="success" size="3xl" text="success" />
        <XChip standalone color="warning" size="3xl" text="warning" />
        <XChip standalone color="error" size="3xl" text="error" />
        <XChip standalone color="neutral" size="3xl" text="neutral" />
      </div>

      {/* show 显隐控制 */}
      <div className="flex items-center gap-3">
        <XButton size="sm" variant="soft" color="neutral" onClick={() => setShow((value) => !value)}>
          {show ? "隐藏" : "显示"}角标
        </XButton>
        <XChip show={show} onShowChange={setShow} standalone color="primary" size="3xl" text="5" />
      </div>
    </div>
  );
}
