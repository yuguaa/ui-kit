import { useState } from "react";
import { XFileUpload } from "@/components/kit";

export default function FileUploadBasic() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex w-full flex-col gap-4">
      <XFileUpload
        value={file}
        onChange={setFile}
        label="拖拽文件到此处，或点击上传"
        description="支持任意格式，单文件"
      />
      {file && (
        <p className="text-sm text-muted-foreground">
          已选择：<code className="rounded bg-muted px-1.5 py-0.5">{file.name}</code>
          （{(file.size / 1024).toFixed(1)} KB）
        </p>
      )}
    </div>
  );
}
