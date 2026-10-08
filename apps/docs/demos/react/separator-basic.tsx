import { XSeparator } from "@/components/kit";

export default function SeparatorBasic() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">基础分割线</span>
        <XSeparator />
        <XSeparator type="dashed" color="#94a3b8" />
        <XSeparator type="dotted" color="#94a3b8" />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">带标签（position：start / center / end）</span>
        <XSeparator label="居中对齐" />
        <XSeparator label="左对齐" position="start" />
        <XSeparator label="右对齐" position="end" />
        <XSeparator>
          <span className="text-primary-6">自定义子元素内容</span>
        </XSeparator>
      </div>

      <div className="flex h-10 items-center gap-3 text-sm">
        <span>垂直分割</span>
        <XSeparator orientation="vertical" />
        <span>内容 A</span>
        <XSeparator orientation="vertical" />
        <span>内容 B</span>
      </div>
    </div>
  );
}
