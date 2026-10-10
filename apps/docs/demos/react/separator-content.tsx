import { XSeparator } from "@/components/kit";

export default function SeparatorContent() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">标签与位置</span>
        <XSeparator label="居中对齐" />
        <XSeparator label="左对齐" position="start" />
        <XSeparator label="右对齐" position="end" />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">图标与头像</span>
        <XSeparator icon="star" />
        <XSeparator icon="bell" position="start" />
        <XSeparator avatar={{ text: "A" }} />
        <XSeparator avatar={{ text: "P", color: "primary" }} position="end" />
      </div>
    </div>
  );
}
