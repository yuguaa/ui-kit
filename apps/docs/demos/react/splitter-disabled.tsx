import { XSplitter } from "@/components/kit/x-splitter";

const items = [
  { id: "a", defaultSize: 35, content: <div className="flex h-full items-center justify-center p-4 text-sm">面板 A（disabled 锁定拖拽）</div> },
  { id: "b", content: <div className="flex h-full items-center justify-center p-4 text-sm">面板 B（ui 插槽自定义外观）</div> },
];

export default function SplitterDisabled() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="h-56">
        <XSplitter items={items} disabled ui={{ panel: "bg-muted", handle: "bg-primary-5" }} className="h-full" />
      </div>
      <span className="text-muted-foreground text-sm">
        disabled 锁定全部拖拽条；ui 按 root / panel / handle 注入类名
      </span>
    </div>
  );
}
