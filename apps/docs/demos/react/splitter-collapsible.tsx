import { XSplitter } from "@/components/kit/x-splitter";

export default function SplitterCollapsible() {
  return (
    <div className="h-72 w-full">
      <XSplitter
        collapsible
        defaultSize={35}
        className="h-full"
        first={
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
            <span className="font-medium">左侧面板</span>
            <span className="text-sm text-muted-foreground">拖到最左侧即可折叠</span>
          </div>
        }
        second={
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
            <span className="font-medium">右侧面板</span>
            <span className="text-sm text-muted-foreground">拖到最右侧即可折叠</span>
          </div>
        }
      />
    </div>
  );
}
