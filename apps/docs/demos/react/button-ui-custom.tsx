import { useState } from "react";
import { XButton } from "@/components/kit";

export default function ButtonUiCustom() {
  const [active, setActive] = useState<"day" | "week">("day");

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">label 属性与 ui 插槽自定义类名</span>
        <div className="flex flex-wrap items-center gap-3">
          <XButton label="保存" />
          <XButton label="自定义外观" ui={{ base: "rounded-full px-5 shadow-md", label: "tracking-wide" }} />
          <XButton variant="soft" color="info" ui={{ base: "ring-2 ring-info-3", label: "italic" }}>
            带描边与斜体
          </XButton>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">active 配合 activeColor / activeVariant 表示选中态</span>
        <div className="flex flex-wrap items-center gap-2">
          {(["day", "week"] as const).map((item) => (
            <XButton
              key={item}
              active={active === item}
              activeVariant="soft"
              activeColor="primary"
              variant="outline"
              color="neutral"
              onClick={() => setActive(item)}
            >
              {item === "day" ? "按天" : "按周"}
            </XButton>
          ))}
        </div>
      </div>
    </div>
  );
}
