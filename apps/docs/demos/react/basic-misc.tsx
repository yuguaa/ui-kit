import { XIcon } from "@/components/kit/x-icon";
import { XKbd } from "@/components/kit/x-kbd";
import { XSeparator } from "@/components/kit/x-separator";
import { XSkeleton } from "@/components/kit/x-skeleton";

export default function BasicMisc() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-6">
        <XIcon name="dashboard" size="lg" />
        <XIcon name="settings" size="md" />
        <XIcon name="star" color="#faad14" />
        <XIcon name="bell" size="sm" />
        <XKbd value="⌘" />
        <XKbd value="K" />
        <XKbd size="lg" value="Ctrl" />
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          左侧
          <XSeparator orientation="vertical" className="h-5" />
          右侧
        </span>
      </div>
      <XSeparator />
      <div className="flex flex-col gap-3">
        <XSkeleton variant="text" className="w-1/2" />
        <XSkeleton variant="rect" className="h-16 w-full" />
        <XSkeleton variant="circle" />
      </div>
    </div>
  );
}
