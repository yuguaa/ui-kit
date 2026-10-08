import { useState } from "react";
import { XButton, XSkeleton } from "@/components/kit";

export default function SkeletonBasic() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">形状：text / circle / rect</span>
        <XSkeleton variant="text" width="60%" />
        <XSkeleton variant="text" width="40%" />
        <div className="flex items-center gap-3">
          <XSkeleton variant="circle" />
          <XSkeleton variant="rect" width="12rem" height="2.5rem" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">loading 切换：为 false 时渲染子元素中的真实内容</span>
        <XSkeleton loading={loading} variant="rect" height="2.5rem">
          <div className="flex h-10 items-center rounded-md bg-primary-1 px-3 text-sm text-primary-7">
            内容已就绪
          </div>
        </XSkeleton>
      </div>

      <XButton size="sm" variant="soft" onClick={() => setLoading((prev) => !prev)}>
        切换 loading（当前：{String(loading)}）
      </XButton>
    </div>
  );
}
