import { XFileUpload } from "@/components/kit";

export default function FileUploadUiCustom() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm text-muted-foreground">拖拽区圆角与背景自定义</span>
        <XFileUpload
          label="拖拽文件到此处"
          ui={{ base: "rounded-2xl bg-primary/10", wrapper: "py-6", label: "text-primary" }}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm text-muted-foreground">highlight 常驻描边 + 颜色强调</span>
        <XFileUpload label="拖拽文件到此处" highlight color="success" />
      </div>
    </div>
  );
}
