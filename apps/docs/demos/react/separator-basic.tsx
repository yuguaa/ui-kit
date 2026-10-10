import { XSeparator } from "@/components/kit";

export default function SeparatorBasic() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">类型与粗细</span>
        <XSeparator />
        <XSeparator type="dashed" size="md" />
        <XSeparator type="dotted" size="xl" />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">语义色</span>
        <XSeparator color="primary" />
        <XSeparator color="success" size="sm" />
        <XSeparator color="error" type="dashed" />
      </div>

      <div className="flex h-10 items-center gap-3 text-sm">
        <span>垂直分割</span>
        <XSeparator orientation="vertical" />
        <span>内容 A</span>
        <XSeparator orientation="vertical" size="md" color="primary" />
        <span>内容 B</span>
      </div>
    </div>
  );
}
