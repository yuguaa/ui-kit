import { useState } from "react";
import { XFileUpload } from "@/components/kit";

export default function FileUploadLayouts() {
  const [files, setFiles] = useState<File[]>([]);
  const [single, setSingle] = useState<File | null>(null);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm text-muted-foreground">multiple + layout=grid（文件在拖拽区内展示）</span>
        <XFileUpload value={files} onChange={setFiles} multiple label="拖拽多个文件" />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm text-muted-foreground">单选 + layout=list（文件名与体积并列）</span>
        <XFileUpload value={single} onChange={setSingle} layout="list" label="拖拽单个文件" />
      </div>
    </div>
  );
}
