import { useState } from "react";
import { XFileUpload } from "@/components/kit";

export default function FileUploadButton() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex w-full flex-col gap-4">
      <XFileUpload value={file} onChange={setFile} variant="button">
        选择文件
      </XFileUpload>
      {file && (
        <p className="text-sm text-muted-foreground">
          已选择：<code className="rounded bg-muted px-1.5 py-0.5">{file.name}</code>
        </p>
      )}
    </div>
  );
}
