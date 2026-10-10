import { useState } from "react";
import { XFileUpload } from "@/components/kit";

export default function FileUploadSlots() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="flex w-full flex-col gap-4">
      <XFileUpload
        value={files}
        onChange={setFiles}
        multiple
        label="拖拽文件到此处"
        description="文件项与操作区均可自定义"
        actions={({ open }) => (
          <button
            type="button"
            className="rounded-md bg-primary px-3 py-1.5 text-sm text-background hover:bg-primary/75"
            onClick={open}
          >
            浏览文件
          </button>
        )}
        file={({ file, index, removeFile }) => (
          <div className="flex w-full items-center gap-2 rounded-md border border-border px-3 py-2 text-sm">
            <span className="truncate">{file.name}</span>
            <button
              type="button"
              className="ml-auto shrink-0 text-xs text-muted-foreground underline-offset-4 hover:underline"
              onClick={() => removeFile(index)}
            >
              移除
            </button>
          </div>
        )}
      />
    </div>
  );
}
