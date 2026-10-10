import { XSplitter } from "@/components/kit/x-splitter";

const items = [
  { id: "left", defaultSize: 30, minSize: 15, content: <div className="flex h-full items-center justify-center p-4 text-sm">左侧面板（left）</div> },
  { id: "center", defaultSize: 40, minSize: 20, content: <div className="flex h-full items-center justify-center p-4 text-sm">中间面板（center）</div> },
  { id: "right", minSize: 20, content: <div className="flex h-full items-center justify-center p-4 text-sm">右侧面板（right）</div> },
];

export default function SplitterBasic() {
  return (
    <div className="h-72 w-full">
      <XSplitter items={items} className="h-full" />
    </div>
  );
}
